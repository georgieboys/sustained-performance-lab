import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// Content is symlinked into src/content/docs for Starlight, but the real files
// live in /docs. Point "Edit page" links at the real files on GitHub.
export const onRequest = defineRouteMiddleware((context) => {
	const route = context.locals.starlightRoute;
	if (route.editUrl) {
		route.editUrl = new URL(route.editUrl.href.replace('/src/content/docs/', '/docs/'));
	}
});
