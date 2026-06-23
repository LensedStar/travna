import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace SITE_URL placeholder with the real domain at launch (set by Webline).
const SITE_URL = 'https://example.com'; // [MOCK]

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        // Use the modern Sass API so the SCSS layer builds without the legacy-js-api deprecation.
        scss: { api: 'modern' },
      },
    },
  },
});
