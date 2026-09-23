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
  // Locale routing. EN is the default and is served unprefixed (`/contact`); RU is prefixed
  // (`/ru/contact`). The page routes live in src/pages/[...lang]/ and build one copy per locale
  // (see localeStaticPaths in src/i18n/index.ts). To add Slovenian: add 'sl' here, add src/i18n/sl.ts
  // to the registry, and drop translated entries into src/content/<collection>/sl/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
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
