// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// User site on GitHub Pages: https://shivanandham.github.io (base is '/').
export default defineConfig({
  site: 'https://shivanandham.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
  build: {
    format: 'directory',
  },
});
