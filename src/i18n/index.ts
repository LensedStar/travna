// i18n core — locale config + string-access helpers.
//
// Phase 1 ships ENGLISH ONLY. The architecture below is i18n-ready: adding Slovenian/Russian later
// requires only (1) a new dictionary file with the same key set, (2) registering it in `ui` + `locales`,
// and (3) enabling routing in `astro.config.mjs`. No component rewrites.
//
// Usage (works identically in .astro frontmatter and .jsx React islands):
//   import { useTranslations, defaultLocale } from '../i18n';
//   const t = useTranslations(defaultLocale);
//   t('nav.home');

import { en } from './en';
import type { UIKey } from './types';

// --- Locale registry -------------------------------------------------------
// To add a locale: import its dictionary, add it to `ui`, and add its code to `locales`.
export const defaultLocale = 'en' as const;

// Currently only 'en' resolves. Add 'sl' / 'ru' here when their dictionaries + content exist.
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

// Human-readable language labels for the (stubbed) switcher / future routing.
export const languages: Record<string, string> = {
  en: 'English',
  // sl: 'Slovenščina', // i18n-ready: enable with src/i18n/sl.ts
  // ru: 'Русский',     // i18n-ready: enable with src/i18n/ru.ts
};

// Dictionary map keyed by locale. Fallback to defaultLocale for any missing entry.
export const ui = {
  en,
  // sl, // i18n-ready
  // ru, // i18n-ready
} as const;

// --- Helpers ---------------------------------------------------------------

// Normalize an arbitrary locale string to a supported one (falls back to default).
export function resolveLocale(locale?: string): Locale {
  return (locales as readonly string[]).includes(locale ?? '')
    ? (locale as Locale)
    : defaultLocale;
}

// Extract the locale from a URL path. In Phase 1 always resolves to `en`,
// but is ready to read a `/sl/` or `/ru/` prefix once locales are enabled.
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return resolveLocale(maybeLocale);
}

// Returns a typed `t(key)` translator for the given locale, with fallback to the default dictionary.
export function useTranslations(locale: string = defaultLocale) {
  const lang = resolveLocale(locale);
  return function t(key: UIKey): string {
    const dict = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLocale] as Record<string, string>;
    return dict[key] ?? fallback[key] ?? key;
  };
}
