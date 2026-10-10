import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySlugs } from './data/learning';

const lessons = defineCollection({
	loader: glob({ base: './src/content/lessons', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(categorySlugs),
		order: z.number().default(0),
		draft: z.boolean().default(false),
	}),
});

export const collections = { lessons };
