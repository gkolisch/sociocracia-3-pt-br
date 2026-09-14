import { defineConfig } from 'astro/config';
import { rehypeLinkPatterns } from './src/plugins/rehype-link-patterns.mjs';
import { rehypeGlossaryTooltips } from './src/plugins/rehype-glossary-tooltips.mjs';

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base,
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: { theme: 'github-light' },
    rehypePlugins: [rehypeLinkPatterns, rehypeGlossaryTooltips],
  },
});
