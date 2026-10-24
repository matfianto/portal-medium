import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articlesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    mediumUrl: z.string().url(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles: articlesCollection,
};