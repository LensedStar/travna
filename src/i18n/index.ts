// i18n core — locale config + string-access helpers + locale-aware path helpers.
//
// Phase 1 shipped English only; Russian is now live. Adding Slovenian later requires only
// (1) a dictionary file with the same key set, (2) registering it in `ui` + `locales` here and in
// `astro.config.mjs`, and (3) translated content entries under src/content/<collection>/sl/.
// No component rewrites: pages resolve their locale from the URL via `Astro.currentLocale`.
//
// Usage (works identically in .astro frontmatter and .jsx React islands):
//   import { useTranslations } from '../i18n';
//   const t = useTranslations(Astro.currentLocale);
//   t('nav.home');

import { en } from './en';
import { ru } from './ru';
import type { UIKey } from './types';

// --- Locale registry -------------------------------------------------------
// To add a locale: import its dictionary, add it to `ui`, and add its code to `locales`
// (and to `locales` in astro.config.mjs, which drives routing).
export const defaultLocale = 'en' as const;

// The default locale is served unprefixed (`/contact`); every other locale is prefixed
// (`/ru/contact`) — mirrored by `prefixDefaultLocale: false` in astro.config.mjs.
export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

// Human-readable language labels for the switcher / future routing.
export const languages: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  // sl: 'Slovenščina', // i18n-ready: enable with src/i18n/sl.ts
};

// Dictionary map keyed by locale. Fallback to defaultLocale for any missing entry.
export const ui = {
  en,
  ru,
  // sl, // i18n-ready
} as const;

// --- Helpers ---------------------------------------------------------------

// Normalize an arbitrary locale string to a supported one (falls back to default).
export function resolveLocale(locale?: string): Locale {
  return (locales as readonly string[]).includes(locale ?? '')
    ? (locale as Locale)
    : defaultLocale;
}

// Extract the locale from a URL path: `/ru/contact` -> 'ru', `/contact` -> 'en'.
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

// --- Locale-aware paths ----------------------------------------------------
// Every internal href in the site goes through `localizePath` so a link never drops the visitor
// back into the default locale. Kept as a plain function (no astro:i18n import) so React islands
// can use it too.

// '/activities' + 'ru' -> '/ru/activities'; the default locale keeps the unprefixed path.
export function localizePath(path: string, locale?: string): string {
  const lang = resolveLocale(locale);
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

// Inverse of `localizePath`: '/ru/activities' -> '/activities' (used by the language switcher to
// build the same page's URL in another locale).
export function stripLocale(pathname: string): string {
  const [, maybe, ...rest] = pathname.split('/');
  if (!(locales as readonly string[]).includes(maybe) || maybe === defaultLocale) return pathname;
  return `/${rest.join('/')}`;
}

// getStaticPaths payload for the `[...lang]` page routes: one build per locale, with the default
// locale rendering at the bare path (`lang` undefined -> `/contact`, 'ru' -> `/ru/contact`).
export function localeStaticPaths() {
  return locales.map((locale) => ({
    params: { lang: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}
