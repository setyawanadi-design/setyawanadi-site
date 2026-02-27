import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Post', 'Note', 'Review']),
    image: z.string().optional(),
    description: z.string().optional()
  })
});

const logs = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date()
  })
});

export const collections = { writing, logs };
