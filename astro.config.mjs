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
  // Locale routing. EN is the default and is served unprefixed (`/contact`); SL and RU are prefixed
  // (`/sl/contact`, `/ru/contact`). The page routes live in src/pages/[...lang]/ and build one copy per locale
  // (see localeStaticPaths in src/i18n/index.ts). To add a locale: add its code here, add src/i18n/<locale>.ts
  // to the registry, and drop translated entries into src/content/<collection>/<locale>/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sl', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    mdx(),
    // Exclude the hidden advertising landing (/social, /sl/social, /ru/social) from the sitemap
    // (TASK-025). Matched as the last path segment, so a page that merely starts with "social" stays in.
    sitemap({
      filter: (page) => !/\/social\/?$/.test(page),
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
