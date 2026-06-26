// Content collections — structured, schema-typed data so items can be added/removed
// WITHOUT editing page layout (PRD §6). Phase 1 is EN-only; entries are [MOCK].
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
      title: z.string(), // [MOCK] — TODO: real title
      image: image(), // [MOCK] source under src/assets/images — optimized to WebP by Astro <Image>
      description: z.string(), // [MOCK] — TODO: 1–2 sentence description (no invented facts)
      order: z.number(), // display order
    }),
});

// PRD §6.2 — Home value-prop cards (one entry per card).
const valueProps = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(), // [MOCK] — line-style icon name (Lucide/Phosphor), TODO
    label: z.string(), // [MOCK] — TODO
    description: z.string().optional(), // [MOCK] — TODO
    order: z.number(), // display order
  }),
});

// PRD §6.5 — Accommodation slider images (one entry per image).
const gallery = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      src: image(), // [MOCK] source under src/assets/images — optimized to WebP via getImage()
      alt: z.string(), // [MOCK] — descriptive alt text, TODO
      order: z.number(), // slide order
    }),
});

// PRD §6.4 — Menu: single structured document (sections + scanned PDF reference).
const menu = defineCollection({
  type: 'data',
  schema: z.object({
    scanPdf: z.string(), // [MOCK] — path to scanned menu PDF under /public/menu, TODO
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string(), // [MOCK] — TODO
        items: z.array(
          z.object({
            name: z.string(), // [MOCK] — TODO
            description: z.string().optional(), // [MOCK] — TODO
            price: z.string().optional(), // [MOCK] — TODO (string to keep currency/format flexible)
          })
        ),
      })
    ),
  }),
});

export const collections = { activities, valueProps, gallery, menu };
