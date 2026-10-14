import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
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
		status: z.enum(['draft', 'published']).optional(),
		subcategory: z.string().optional(),
		type: z.enum(['concept', 'principle', 'pattern', 'architecture', 'exercise']).optional(),
		level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
		estimatedMinutes: z.number().optional(),
		languages: z.array(z.string()).default([]),
		prerequisites: z.array(z.string()).default([]),
		related: z.array(z.string()).default([]),
		tags: z.array(z.string()).default([]),
		learningObjectives: z.array(z.string()).default([]),
		sources: z.array(z.any()).default([]),
	}),
});

export const collections = { lessons };
