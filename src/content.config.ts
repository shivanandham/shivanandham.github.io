import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies: one MDX file per engagement or product.
// group: 'ai' = AI systems, 'product' = products I own, 'platform' = backend & platform.
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    group: z.enum(['ai', 'product', 'platform']),
    client: z.string().optional(),
    via: z.string().optional(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

// Smaller builds: open-source tools, proofs of concept, hardware.
const builds = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/builds' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, builds };
