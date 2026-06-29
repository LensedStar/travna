import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace SITE_URL placeholder with the real domain at launch (set by Webline).
const SITE_URL = 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // i18n-ready routing. Phase 1 resolves ONLY 'en' (default locale, no URL prefix).
  // To enable Slovenian/Russian later: add 'sl' / 'ru' to `locales` here, add their dictionaries
  // (src/i18n/sl.ts / ru.ts) + content entries, and activate the header switcher. No component rewrites.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    mdx(),
    // Exclude the hidden advertising landing (/lp) from the sitemap (TASK-025).
    sitemap({
      filter: (page) => !page.includes('/lp'),
    }),
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
