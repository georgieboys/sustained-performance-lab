import path from 'node:path';

const DOCS_DIR = path.resolve('src/content/docs');

/**
 * Rewrites relative links to other markdown files (e.g. `../gp2-dynamic-flow.md`)
 * into site URLs (e.g. `/canon/gateway-protocol/gp2-dynamic-flow/`), so the same
 * links work when browsing the repo on GitHub and on the website.
 */
export default function rehypeMdLinks() {
	return (tree, file) => {
		const from = file.path || file.history?.[0];
		if (!from) return;
		const visit = (node) => {
			if (node.type === 'element' && node.tagName === 'a' && typeof node.properties?.href === 'string') {
				const href = node.properties.href;
				const m = href.match(/^(?![a-z]+:|\/|#)([^#?]+\.md)([#?].*)?$/i);
				if (m) {
					const target = path.resolve(path.dirname(from), decodeURI(m[1]));
					let rel = path.relative(DOCS_DIR, target).split(path.sep).join('/');
					if (!rel.startsWith('..')) {
						rel = rel.replace(/\.md$/i, '').replace(/(^|\/)index$/i, '');
						node.properties.href = '/' + (rel ? rel + '/' : '') + (m[2] ?? '');
					}
				}
			}
			node.children?.forEach(visit);
		};
		visit(tree);
	};
}
