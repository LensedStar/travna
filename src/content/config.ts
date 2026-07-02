// Content collections — structured, schema-typed data so items can be added/removed
// WITHOUT editing page layout (PRD §6). Phase 1 is EN-only; entries are placeholders.
//
// i18n-ready: a `locale` field / per-locale entries can be introduced later without
// changing these schemas' shape — add the field + duplicate entries per locale.
//
// All collections are `type: 'data'` (JSON) because their content is structured fields,
// not long-form prose. The entry `id` (filename) acts as the stable item id from PRD §6.

import { defineCollection, z } from 'astro:content';

// PRD §6.3 — activities / surroundings blocks (one entry per block).
const activities = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(), // TODO: real title
      image: image(), // source under src/assets/images — optimized to WebP by Astro <Image>
      icon: z.string(), // line-style icon name (see Icon.astro) — shown on the card's round marker
      description: z.string(), // TODO: 1–2 sentence description (no invented facts)
      order: z.number(), // display order
    }),
});

// Activities page — nearby day-trip destinations (one entry per card).
// Photo + copy + pills (category, drive time). Images are [MOCK] placeholders under
// src/assets/images/dest-*.png — Webline swaps each for a real, rights-cleared photo.
// Distances are approximate figures supplied by the client — confirm before launch.
const destinations = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(), // destination name
      image: image(), // [MOCK] placeholder under src/assets/images — optimized to WebP by <Image>
      category: z.string(), // short type pill, e.g. "Karst cave" / "Castle"
      distance: z.string(), // approximate drive time, e.g. "≈ 55 min" — CONFIRM before launch
      description: z.string(), // 1–2 sentence description (no invented claims beyond client-supplied facts)
      // Day-trip section grouping on the activities page — one of 4 fixed themes (section titles/
      // icons live in activities.astro, not here, since they're page structure, not content).
      section: z.enum(['forests', 'caves', 'wildlife', 'history']),
      order: z.number(), // display order
    }),
});

// PRD §6.2 — Home value-prop cards (one entry per card).
const valueProps = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(), // line-style icon name (Lucide/Phosphor), TODO
    label: z.string(), // TODO
    description: z.string().optional(), // TODO
    order: z.number(), // display order
  }),
});

// PRD §6.5 — Accommodation slider images (one entry per image).
const gallery = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      src: image(), // source under src/assets/images — optimized to WebP via getImage()
      alt: z.string(), // descriptive alt text, TODO
      order: z.number(), // slide order
    }),
});

// PRD §6.4 — Menu: single structured document (sections + scanned PDF reference).
// Data below mirrors the client-supplied scanned menu 1:1 (dish names, prices, allergen codes) —
// not invented copy, so it's real content rather than a [MOCK] placeholder.
const menu = defineCollection({
  type: 'data',
  schema: z.object({
    scanPdf: z.string(), // path to scanned menu PDF under /public/menu
    // Allergen code legend (e.g. "GP" -> "Grains containing gluten"), shown once under the menu.
    allergenLegend: z.array(z.object({ code: z.string(), label: z.string() })),
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        badge: z.string().optional(), // e.g. "Best Seller" ribbon on the section heading
        items: z.array(
          z.object({
            name: z.string(),
            description: z.string().optional(),
            price: z.string().optional(), // string to keep currency/format flexible
            allergens: z.array(z.string()).optional(), // allergen codes, see allergenLegend
          })
        ),
      })
    ),
  }),
});

export const collections = { activities, destinations, valueProps, gallery, menu };
