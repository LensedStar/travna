// Exports every translatable string of one locale into a single flat JSON file — the file you hand
// to a translator (human or AI), and the file you diff to see what a translation is missing.
//
//   node scripts/export-translations.mjs        -> translations/en.json (the source locale)
//   node scripts/export-translations.mjs ru     -> translations/ru.json
//
// Sources: src/i18n/<locale>.ts (UI dictionary) + src/content/**/*.json (content collections,
// from the locale's subfolder — see src/i18n/content.ts for the folder convention).
//
// The key set is identical across locales, so a translated file drops straight back in:
//   - `ui` becomes src/i18n/<locale>.ts
//   - `content` becomes src/content/<collection>/<locale>/*.json
// Non-translatable fields (image paths, icon names, order, prices, allergen codes, section enums)
// are deliberately left out.

import fs from 'node:fs';
import path from 'node:path';

const NL = String.fromCharCode(10);
const DEFAULT_LOCALE = 'en';
const locale = process.argv[2] || DEFAULT_LOCALE;

// Which fields of each collection carry human-readable text.
const TRANSLATABLE = {
  activities: ['title', 'description'],
  destinations: ['name', 'category', 'distance', 'description'],
  valueProps: ['label', 'description'],
  gallery: ['alt'],
};

// --- UI dictionary ---------------------------------------------------------
// The dictionaries are flat `key: 'value'` object literals, so they evaluate as plain JS once the
// TS wrapper is stripped — no TypeScript toolchain needed to run this script.
const dictPath = path.join('src/i18n', `${locale}.ts`);
if (!fs.existsSync(dictPath)) throw new Error(`no dictionary for locale '${locale}': ${dictPath}`);
const tsSource = fs.readFileSync(dictPath, 'utf8');
const open = tsSource.indexOf('= {', tsSource.indexOf(`export const ${locale}`));
const close = tsSource.indexOf('} as const;');
const ui = new Function('return ' + tsSource.slice(open + 2, close + 1) + ';')();

// --- Content collections ---------------------------------------------------
// The default locale's entries sit at the collection root; other locales live in a subfolder.
const entryDir = (collection) =>
  locale === DEFAULT_LOCALE
    ? path.join('src/content', collection)
    : path.join('src/content', collection, locale);

const content = {};
for (const [collection, fields] of Object.entries(TRANSLATABLE)) {
  const dir = entryDir(collection);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
    const entry = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
    const id = path.basename(file, '.json');
    for (const field of fields) {
      if (typeof entry[field] === 'string') content[`${collection}.${id}.${field}`] = entry[field];
    }
  }
}

// The menu is one nested document rather than one file per item, so it is flattened by index.
const menu = JSON.parse(fs.readFileSync(path.join(entryDir('menu'), 'menu.json'), 'utf8'));
menu.allergenLegend.forEach((allergen, i) => {
  content[`menu.allergenLegend.${i}.label`] = allergen.label;
});
menu.sections.forEach((section, si) => {
  content[`menu.sections.${si}.title`] = section.title;
  if (section.badge) content[`menu.sections.${si}.badge`] = section.badge;
  section.items.forEach((item, ii) => {
    content[`menu.sections.${si}.items.${ii}.name`] = item.name;
    if (item.description) content[`menu.sections.${si}.items.${ii}.description`] = item.description;
  });
});

const payload = {
  _readme: {
    purpose: `Every translatable string on the Dom na Travni gori website, in one file. Locale: ${locale}.`,
    howToTranslate: [
      'Translate ONLY the values. Never change, translate, reorder or drop a key.',
      'Return the exact same JSON shape with the same key set — one file per target locale.',
      'Keep placeholders/markup inside values as-is (e.g. {count}, <strong>).',
      'Keep the brand name "Planinski dom na Travni gori" / "Dom na Travni gori" untranslated.',
      'Keep prices, allergen codes and the "≈ NN min" number format unchanged; the unit word may be localized.',
      'Slovenian dish names under menu.* are the original menu wording — keep them for sl, translate (or gloss) them for other locales.',
      'Some values are still placeholder copy ("Lorem ipsum", "MOCK") — translate them literally or flag them; do not invent replacements.',
      'A value that is an empty string is intentionally unused — keep it empty, keep the key.',
    ],
    sections: {
      ui: 'UI strings — becomes src/i18n/<locale>.ts (the key set must match exactly).',
      content:
        'Content-collection fields — becomes src/content/<collection>/<locale>/*.json. Key format: <collection>.<entry-id>.<field>, and menu.sections.<i>.items.<j>.<field> for the menu.',
    },
    generatedBy: 'node scripts/export-translations.mjs ' + locale,
    counts: { ui: Object.keys(ui).length, content: Object.keys(content).length },
  },
  ui,
  content,
};

const out = path.join('translations', `${locale}.json`);
fs.mkdirSync('translations', { recursive: true });
fs.writeFileSync(out, JSON.stringify(payload, null, 2) + NL, 'utf8');
console.log(`${out}  ui: ${payload._readme.counts.ui}  content: ${payload._readme.counts.content}`);
