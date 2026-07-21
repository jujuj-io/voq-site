import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.string().default('en'),
  }),
});

const platforms = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    metaDescription: z.string(),
    steps: z.array(z.string()),
    lang: z.string().default('en'),
  }),
});

export const collections = { blog, platforms };
