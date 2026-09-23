// Locale-aware content-collection access.
//
// Layout mirrors the URL scheme: the DEFAULT locale's entries live at the collection root
// (`src/content/activities/01-hiking.json` -> `/activities`), every other locale keeps its entries
// in a `<locale>/` subfolder (`src/content/activities/ru/01-hiking.json` -> `/ru/activities`).
// Astro derives an entry `id` from that path, so the folder is all the routing info we need.
//
// Adding a locale = dropping a translated `<locale>/` folder into each collection. Nothing here
// changes, and a collection that has no entries for a locale yet falls back to the default
// locale's entries rather than rendering an empty section.

import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import { defaultLocale, resolveLocale, type Locale } from './index';

// Entry ids are '01-hiking' (default locale) or 'ru/01-hiking' (prefixed locales).
function inLocale(id: string, locale: Locale): boolean {
  return locale === defaultLocale ? !id.includes('/') : id.startsWith(`${locale}/`);
}

// Drop-in replacement for `getCollection(name)` that returns only the current locale's entries.
export async function getLocalizedCollection<C extends CollectionKey>(
  collection: C,
  locale?: string
): Promise<CollectionEntry<C>[]> {
  const lang = resolveLocale(locale);
  const entries = await getCollection(collection);
  const localized = entries.filter((entry) => inLocale(entry.id, lang));
  return localized.length > 0
    ? localized
    : entries.filter((entry) => inLocale(entry.id, defaultLocale));
}

// Same, sorted by the `order` field every collection carries — the sort every caller was doing.
export async function getLocalizedCollectionSorted<C extends CollectionKey>(
  collection: C,
  locale?: string
): Promise<CollectionEntry<C>[]> {
  const entries = await getLocalizedCollection(collection, locale);
  return entries.sort(
    (a, b) => (a.data as { order: number }).order - (b.data as { order: number }).order
  );
}
