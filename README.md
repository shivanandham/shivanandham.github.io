# shivanandham.github.io

Portfolio of Shivanandham Sankaranarayanan. Astro, static output, no tracking, no external JS.

## Run

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run preview    # serve dist/ locally
```

Node 22.12 or newer. Astro is pinned to 7.3.8 (the last 7.x that runs on Node 22.14; newer patch releases need Node 22.23+).

## Where things live

- `src/content/work/*.mdx`: case studies. The frontmatter carries everything shown on load (outcome, result, roleShort, tags, built, hard, diagram, hero/thumb/screens/slots, links, evidenceNote); the MDX body is the long write-up, rendered collapsed under "Full write-up". Word budgets: card outcome ≤30 words, built bullets ≤20 each, hard ≤60, visible page ≤250.
- `src/content/builds/*.md`: smaller builds (summary ≤25 words; body collapsed on `/builds/`).
- `src/data/experience.ts`: the home-page timeline (≤40 words per row). `src/data/thumbs.ts`: the three-box mini diagrams used as card thumbnails.
- `src/components/diagrams/*.astro`: one inline-SVG architecture diagram per case study, drawn with `src/components/Flow.astro` (boxes and arrows on CSS variables, so they follow light and dark mode). `DiagramFor.astro` picks one by key.
- `public/img/`: `solo/` and `solo-lite/` are design renders with demo data; `bixops/` are screenshots of the landing (Astro) and Restaurant Royale (Next.js) sites; `luma/README.txt` and `templebilling/README.txt` describe the screenshot slots still to fill.
- `public/resume.pdf`: the current resume.
- `scripts/wordcount.mjs`: prints visible words per page from `dist/` (run after `npm run build`).

Pages: `/`, `/work/`, `/work/<slug>/`, `/builds/`, `/about/`, `/404`.

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` with `withastro/action` and publishes with `actions/deploy-pages`. In the repo settings, Pages → Source must be "GitHub Actions".

## Editing rules

Every claim, number and date traces to the resume or to the project repos. Anything unconfirmed is marked `TODO: confirm` in the source and must be resolved or removed before publishing.
