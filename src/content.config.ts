import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// The knowledge base lives in /docs at the repo root so contributors
// can edit plain markdown without touching any site code.
export const collections = {
	docs: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
		schema: docsSchema(),
	}),
};
