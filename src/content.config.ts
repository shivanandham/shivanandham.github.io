import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies: one MDX file per engagement or product.
// group: 'ai' = AI systems, 'product' = products I own, 'platform' = backend & platform.
// The MDX body is the long-form write-up, rendered collapsed under "Full write-up".
const image = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string(),
  width: z.number(),
  height: z.number(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** One-line description used for <meta description>. */
    summary: z.string(),
    /** Card text: the outcome in one or two lines (≤30 words). */
    outcome: z.string(),
    /** TL;DR tile: the outcome with its real numbers (short). */
    result: z.string(),
    group: z.enum(['ai', 'product', 'platform']),
    client: z.string().optional(),
    via: z.string().optional(),
    role: z.string(),
    /** Short role for the TL;DR tile and the card. */
    roleShort: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    /** 3–5 card tags. */
    tags: z.array(z.string()).min(3).max(5),
    /** "What I built": 3–5 bullets, ≤20 words each. */
    built: z.array(z.string()).min(3).max(5),
    /** "The hard part": ≤60 words. Omitted where the v1 write-up had none. */
    hard: z.string().optional(),
    /** Key of the inline-SVG diagram (src/components/diagrams). */
    diagram: z.enum(['agent-smith', 'teldat', 'bixops', 'luma', 'mainspring', 'personalize', 'gsa', 'bcube', 'undivided']),
    /** Hero image for pages with a UI to show; otherwise the diagram is the hero. */
    hero: image.optional(),
    /** Card thumbnail image; otherwise a mini diagram is drawn. */
    thumb: image.optional(),
    /** Screenshot gallery (design renders or screenshots, labelled in captions). */
    screens: z.array(image).default([]),
    /** Labelled empty slots for images still to come. */
    slots: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    /** Shown under "Evidence" when there is no public link. */
    evidenceNote: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Smaller builds: open-source tools, proofs of concept, hardware.
const builds = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/builds' }),
  schema: z.object({
    title: z.string(),
    /** Card text, ≤25 words. */
    summary: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, builds };
