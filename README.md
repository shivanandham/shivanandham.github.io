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

- `src/content/work/*.mdx`: case studies. Frontmatter: title, summary, group (`ai` | `product` | `platform`), client, via, role, period, stack, featured, order, links.
- `src/content/builds/*.md`: smaller builds listed on `/builds/`.
- `src/components/diagrams/*.astro`: one inline-SVG architecture diagram per case study, drawn with `src/components/Flow.astro` (boxes and arrows on CSS variables, so they follow light and dark mode).
- `public/img/solo-lite/`: Solo Lite design renders (mock data, labelled as design renders).
- `public/resume.pdf`: the current resume.

Pages: `/`, `/work/`, `/work/<slug>/`, `/builds/`, `/about/`, `/404`.

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` with `withastro/action` and publishes with `actions/deploy-pages`. In the repo settings, Pages → Source must be "GitHub Actions".

## Editing rules

Every claim, number and date traces to the resume or to the project repos. Anything unconfirmed is marked `TODO: confirm` in the source and must be resolved or removed before publishing.
