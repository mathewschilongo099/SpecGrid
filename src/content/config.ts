import { defineCollection, z } from 'astro:content';

const specSchema = z.object({
  title: z.string(),
  brand: z.string(),
  release_date: z.string(),
  processor: z.string(),
  ram: z.string(),
  storage: z.string(),
  screen_size: z.string(),
  battery: z.string(),
  draft: z.boolean().default(true),
  graphics: z.string().optional(),
});

export const collections = {
  smartphones: defineCollection({ type: 'content', schema: specSchema }),
  laptops: defineCollection({ type: 'content', schema: specSchema }),
};
