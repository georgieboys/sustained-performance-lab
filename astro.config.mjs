// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import rehypeMdLinks from './src/plugins/rehype-md-links.mjs';

const repo = 'https://github.com/georgieboys/sustained-performance-lab';

export default defineConfig({
	site: 'https://sustained-performance-lab.vercel.app',
	markdown: {
		// Lets docs link to each other with relative .md paths that work on GitHub and on the site.
		processor: unified({
			rehypePlugins: [rehypeMdLinks],
		}),
	},
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Sustained Performance Lab',
			description: 'An open source operating system for long-lived human performance.',
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			editLink: { baseUrl: `${repo}/edit/main/` },
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			routeMiddleware: './src/routeData.ts',
			sidebar: [
				{ label: 'Start here', link: '/' },
				{ label: 'The Canon', items: [{ autogenerate: { directory: 'canon' } }] },
				{ label: 'The Dojo', items: [{ autogenerate: { directory: 'dojo' } }] },
			],
		}),
	],
});
