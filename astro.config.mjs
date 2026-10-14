// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid({
      theme: 'forest',
      autoTheme: true,
    }),
  ],
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
  },
});