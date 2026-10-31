#!/usr/bin/env node
// Counts visible words per page in dist/. No dependencies.
//   body     = everything a reader sees on load (header, main, footer), excluding
//              SVG labels and the content of collapsed <details> (the summary counts).
//   main     = the same, limited to <main>.
//   svg      = words inside diagrams (labels), reported separately.
//   hidden   = words inside collapsed <details> bodies.
// Usage: node scripts/wordcount.mjs [dist]
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.argv[2] ?? 'dist';

function pages(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) pages(p, out);
    else if (name === 'index.html' || name === '404.html') out.push(p);
  }
  return out;
}

const words = (s) =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

function analyse(html) {
  let h = html.replace(/<head[\s\S]*?<\/head>/i, '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  let svg = 0;
  h = h.replace(/<svg[\s\S]*?<\/svg>/gi, (m) => {
    svg += words(m.replace(/<title[\s\S]*?<\/title>/gi, ' '));
    return ' ';
  });
  let hidden = 0;
  h = h.replace(/<details[\s\S]*?<\/details>/gi, (m) => {
    if (/<details[^>]*\sopen[\s>]/i.test(m)) return m;
    const summary = (m.match(/<summary[\s\S]*?<\/summary>/i) ?? [''])[0];
    hidden += words(m.replace(summary, ' '));
    return summary;
  });
  const main = (h.match(/<main[\s\S]*?<\/main>/i) ?? [''])[0];
  return { body: words(h), main: words(main), svg, hidden };
}

const rows = pages(root)
  .map((p) => ({ page: '/' + relative(root, p).replace(/index\.html$/, ''), ...analyse(readFileSync(p, 'utf8')) }))
  .sort((a, b) => a.page.localeCompare(b.page));

const pad = (s, n, right = false) => (right ? String(s).padStart(n) : String(s).padEnd(n));
console.log(pad('page', 34) + pad('body', 6, true) + pad('main', 6, true) + pad('svg', 6, true) + pad('hidden', 8, true));
for (const r of rows) console.log(pad(r.page, 34) + pad(r.body, 6, true) + pad(r.main, 6, true) + pad(r.svg, 6, true) + pad(r.hidden, 8, true));
