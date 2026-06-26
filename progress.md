# Progress — Dom na Travni gori

## Setup — Ralph harness + folder scaffolding
**Date:** 2026-06-23
**Status:** done
**Summary:** Prepared the repository so the Ralph loop and tasks can run.
- Renamed `PRD-DomNaTravniGori-2026-06-23.md` → `PRD-DomNaTravniGori.md` to match the name referenced by `ralph.sh`, `CLAUDE.md`, and `tasks.json`.
- Created the `src/` + `public/` folder skeleton from CLAUDE.md §5 (empty dirs with `.gitkeep`). The actual Astro project is initialized by TASK-001.
- Added `.gitignore` (node_modules, dist, .astro, .env, ralph logs).
- Initialized git repository and made the initial commit so per-task `git commit` and Ralph's `.git` change-detection work.
**Files changed:** PRD-DomNaTravniGori.md (renamed), .gitignore, progress.md, src/**, public/**

**Note:** No `package.json` yet — `npm run dev`/`npm run build` will work only after TASK-001.

## TASK-001 — Init Astro project with dependencies (no Tailwind)
**Date:** 2026-06-23
**Status:** done
**Summary:** Initialized the Astro 4.x project in place (folder skeleton already existed from the scaffold step, so config files were authored manually instead of running the interactive `npm create astro` wizard).
- Added `package.json` (type: module) with scripts `dev/build/preview` and deps: `astro ^4.15` (resolved 4.16.19), `@astrojs/react`, `@astrojs/mdx`, `@astrojs/sitemap`, `sass`, `react`/`react-dom`, plus `@types/react*`. **No Tailwind** anywhere.
- Added `astro.config.mjs`: `output: 'static'`, integrations `react()`, `mdx()`, `sitemap()`; `site` set to a `[MOCK]` `SITE_URL` placeholder with a TODO for Webline to replace at launch.
- Added `tsconfig.json` extending `astro/tsconfigs/strict` with React JSX settings.
- Added a minimal `[MOCK]` `src/pages/index.astro` so the dev server serves a page (test step 2). It is explicitly marked TODO to be replaced by the real Home (TASK-016) using BaseLayout + sections.
- **Decision / blocker resolved:** `@astrojs/sitemap` caret-resolved to `3.7.3`, which relies on the Astro 5.x `astro:routes:resolved` hook; under Astro 4.16 that hook never fires, leaving `_routes` undefined and crashing `astro:build:done` with "Cannot read properties of undefined (reading 'reduce')". Pinned `@astrojs/sitemap` to `3.2.1` (last 3.x line compatible with Astro 4). Build then completes and `sitemap-index.xml` is generated.
**Verified (test_steps):**
- Шаг 1: `npm run dev` starts without errors (Astro v4.16.19 ready).
- Шаг 2: `curl http://localhost:4321` → HTTP 200, `<title>Dom na Travni gori</title>`.
- Шаг 3: No `tailwind` in `package.json` / `astro.config.mjs` (`npm ls tailwindcss` → none).
- Шаг 4: All required folders present (src/components, islands, content, i18n, styles, layouts, pages) from the scaffold.
- Bonus: `npm run build` completes cleanly and produces `dist/` (helps TASK-002).
**Files changed:** package.json, astro.config.mjs, tsconfig.json, src/pages/index.astro, tasks.json (status), progress.md
**Note:** `package-lock.json` committed; `node_modules/` and `dist/` are gitignored.

## TASK-002 — Netlify config: netlify.toml, _headers, _redirects, robots.txt
**Date:** 2026-06-23
**Status:** done
**Summary:** Added Netlify deploy + edge config and crawler rules.
- `netlify.toml`: `[build]` `command = "npm run build"`, `publish = "dist"`; `[build.environment]` `NODE_VERSION = "20"`.
- `public/_headers`: baseline security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `X-DNS-Prefetch-Control`). **Decision:** no restrictive CSP set, intentionally, so the in-scope third parties (Bentral iframe, Google Maps footer iframe, GA4) are not blocked. Documented the exact frame-src/script-src/connect-src/img-src allowances Webline must keep when later tightening into an explicit CSP (TODO in file).
- `public/robots.txt`: `Allow: /`, `Disallow: /lp` (hidden ad landing), `Sitemap:` line pointing at `sitemap-index.xml`. Host uses the `[MOCK]` `https://example.com` placeholder (matches `astro.config.mjs` `SITE_URL`) — TODO for Webline to swap at launch.
- `public/_redirects`: comment-only placeholder (title lists it; no redirects needed in Phase 1). Astro copies `public/*` into `dist/` on build, so `_headers`/`_redirects`/`robots.txt` ship to Netlify.
**Verified (test_steps):**
- Шаг 1: `netlify.toml` content confirmed (build command, publish dir, NODE_VERSION 20).
- Шаг 2: `npm run build` completes without errors; `dist/` created (sitemap also generated).
- Шаг 3: `dist/robots.txt` contains `Disallow: /lp` (grep count = 1). `_headers`/`_redirects` also present in `dist/`.
- Bonus: confirmed no `tailwind` reference in `package.json`/`astro.config.mjs`/`netlify.toml`.
**Files changed:** netlify.toml, public/_headers, public/_redirects, public/robots.txt, tasks.json (status), progress.md

## TASK-003 — SCSS architecture: tokens/base/utils/blocks skeleton + main.scss
**Date:** 2026-06-23
**Status:** done
**Summary:** Stood up the classic-SCSS layer skeleton assembled via the Sass module system (`@use`/`@forward`), no `@import`.
- `src/styles/utils/_functions.scss` and `_mixins.scss`: comment-only stubs ready for later tasks to `@use`.
- `src/styles/base/_reset.scss`: minimal modern reset (box-sizing, margin zero, media block defaults, list/anchor resets) — no colors/fonts.
- `src/styles/base/_global.scss`: global element defaults consuming tokens via `var(--font-body)`, `var(--color-text)`, `var(--color-bg)`, plus a `:focus-visible` outline. NOTE: tokens themselves arrive in TASK-004; these `var()` refs are valid CSS that resolve once tokens land — no hardcoded values here.
- `src/styles/main.scss`: entry point that `@use`s `base/reset` and `base/global`. Documented layer order (tokens → base → blocks) with TODOs for TASK-004 (forward tokens) and TASK-009+ (use blocks).
- **Wiring decision:** acceptance says "main.scss connected in BaseLayout", but BaseLayout is TASK-007 (which depends on TASK-003 → circular). Resolved by importing `main.scss` in the current `src/pages/index.astro` so global styles apply now; TASK-007 will move this import into `BaseLayout.astro` and replace the placeholder page.
- **Decision:** added `vite.css.preprocessorOptions.scss.api = 'modern'` in `astro.config.mjs` to silence the Dart-Sass `legacy-js-api` deprecation (emitted by Vite's default Sass invocation, unrelated to our `@use`-only code), so the SCSS build is warning-free. sass 1.101.0 + vite 5.4.21 support the modern API.
**Verified (test_steps):**
- Шаг 1: `npm run dev` → `astro v4.16.19 ready in 291 ms`, HTTP 200, no SCSS compile errors/warnings/deprecations; styles served (reset `box-sizing` present in page).
- Шаг 2: `main.scss` uses `@use` only — `grep @import src/styles` matches a single occurrence that is a comment ("NEVER @import"), not a directive.
- Шаг 3: temporarily added `blocks/_test.scss` (`.task003-smoke-test`) + `@use 'blocks/test'`; confirmed the rule reached both `dev` output and `dist/index.html`, then removed the temp block and rebuilt clean.
- Bonus: final `npm run build` completes with no deprecation/error lines.
**Files changed:** src/styles/main.scss, src/styles/base/_reset.scss, src/styles/base/_global.scss, src/styles/utils/_functions.scss, src/styles/utils/_mixins.scss, src/pages/index.astro, astro.config.mjs, tasks.json (status), progress.md

## TASK-006 — i18n scaffold: EN-only + en.ts dictionary + SL/RU-ready architecture
**Date:** 2026-06-23
**Status:** done
**Summary:** Stood up the i18n-ready layer (English only in Phase 1, no functional locale switching).
- `src/i18n/en.ts`: the English UI dictionary — single source of truth for ALL visible strings. Flat dotted keys grouped by area (`site.*`, `a11y.*`, `nav.*`, `lang.*`, `cta.*`, `home.*`, `accommodation.*`, `activities.*`, `menu.*`, `contact.*`/form, `thankYou.*`, `booking.*`, `lp.*`, `footer.*`, `consent.*`). Every value is `[MOCK]` placeholder with a `// TODO` (brand strings `site.name` left as the real name; `lang.*` codes are UI labels). `as const` so keys are literal-typed.
- `src/i18n/types.ts`: derives `UIKey = keyof typeof en` and `UIDict = Record<UIKey, string>` from the EN dictionary, so future `sl.ts`/`ru.ts` are checked against the SAME key set (no missing translations) without circular imports.
- `src/i18n/index.ts`: locale registry + helpers — `defaultLocale='en'`, `locales=['en']`, `languages` map, `ui` map (all with commented `sl`/`ru` slots), plus `resolveLocale()`, `getLocaleFromUrl()` (ready to read a `/sl/`,`/ru/` prefix), and `useTranslations(locale)` returning a typed `t(key)` with fallback to the default dictionary. Plain TS module → importable in both `.astro` frontmatter and `.jsx` islands.
- `astro.config.mjs`: added Astro `i18n` block — `defaultLocale: 'en'`, `locales: ['en']`, `routing.prefixDefaultLocale: false`. Currently resolves only `en`; documented that adding a locale needs only a new dictionary + content + adding the code here (no component rewrites).
- `src/pages/index.astro`: the placeholder home now pulls its visible strings via `useTranslations(defaultLocale)` (`t('site.name')`, `t('site.tagline')`) instead of hardcoded text — demonstrates the helper in `.astro` and satisfies test step 1. (Page remains a placeholder; real Home is TASK-016.)
**Verified (test_steps):**
- Шаг 1: `npm run build` → clean; `dist/index.html` `<title>`/`<h1>` render `Dom na Travni gori` (from `site.name`) and the `[MOCK]` tagline (from `site.tagline`) — strings come from `en.ts`.
- Шаг 2: only component present is `index.astro`; grep confirms it uses `useTranslations`/`t('…')` with no hardcoded visible literals.
- Шаг 3: i18n is not hard-bound to one locale — `locales` array, `languages`/`ui` maps, `resolveLocale`/`getLocaleFromUrl`, and the Astro `i18n` config are all locale-parameterized with commented `sl`/`ru` extension points.
- Note: skipped `astro check` (would interactively install `@astrojs/check`+`typescript`, out of task scope); the production build compiles all TS via esbuild without errors.
**Files changed:** src/i18n/en.ts, src/i18n/index.ts, src/i18n/types.ts, astro.config.mjs, src/pages/index.astro, tasks.json (status), progress.md

## TASK-004 — Design tokens: colors, typography, radius, shadows, spacing, motion
**Date:** 2026-06-23
**Status:** done
**Summary:** Authored the design-token layer as the single source of truth, exposed entirely as `:root` CSS custom properties (consumed elsewhere only as `var(--token)`).
- Each token partial declares a Sass map/variable (the source) and emits it to `:root` via an `@each` loop, so changing one map value restyles the whole site with zero per-component edits.
- `tokens/_colors.scss`: 6 semantic colors (role names, not literal) — `--color-bg #F3E9D8`, `--color-wood #C8884B`, `--color-forest #3E5A40`, `--color-terracotta #A65A3A`, `--color-mist #B8BCA8`, `--color-text #3A2E26`.
- `tokens/_typography.scss`: `--font-heading` (Fraunces, serif) + `--font-body` (Lato, sans-serif); type scale `--text-h1/h2/h3/body/small` (h1–h3 fluid via `clamp()`); line-heights `--leading-tight/snug/normal`; weights `--weight-regular/medium/bold`.
- `tokens/_radius.scss`: `--radius-sm/md/lg` (large soft rounding for the rustic identity).
- `tokens/_shadows.scss`: `--shadow-soft`, `--shadow-card` (enveloping, warm — tinted with the cocoa text hue, not pure black).
- `tokens/_spacing.scss`: `--space-xs..3xl` scale.
- `tokens/_motion.scss`: `--motion-duration` (400ms), `--motion-duration-fast` (200ms), `--motion-ease` (warm ease-out cubic-bezier).
- `tokens/_index.scss`: `@forward`s all six partials so other layers can `@use 'tokens'` for the maps while loading also emits the `:root` CSS.
- `main.scss`: now `@use 'tokens';` FIRST (before base/reset, base/global) so custom properties exist before `base/_global.scss` consumes them; removed the TASK-004 TODO.
**Decisions / notes:**
- Raw hex/rgba values live ONLY in token files (the source) — this is the allowed place per the anti-hardcode rule; blocks/components stay token-only.
- Font families self-host later (TASK-005) via `@font-face`; the family tokens already reference `"Fraunces"`/`"Lato"`.
- Used the Sass module system (`@use`/`@forward`) throughout — no `@import`, no deprecation warnings.
**Verified (test_steps):**
- Шаг 1: `npm run build` → clean (no SCSS errors/deprecations); grep of the compiled CSS confirms every token group is present in `:root` (6 colors, font families, text-h1..small, leading, weight, radius sm/md/lg, shadow soft/card, space xs..3xl, motion duration/fast/ease).
- Шаг 2: `var(--color-forest)` resolves and is already consumed by the global `:focus-visible` outline — color applies.
- Шаг 3: tokens are driven from single Sass maps, so editing one value (e.g. `--color-wood` in `_colors.scss`) propagates site-wide from one place.
**Files changed:** src/styles/tokens/_colors.scss, _typography.scss, _radius.scss, _shadows.scss, _spacing.scss, _motion.scss, _index.scss, src/styles/main.scss, tasks.json (status), progress.md

## TASK-005 — Self-hosted fonts Fraunces + Lato (no Google Fonts CDN)
**Date:** 2026-06-23
**Status:** done
**Summary:** Vendored the brand fonts locally and wired them through the existing typography tokens — zero external font CDN at runtime.
- Downloaded woff2 files into `public/fonts/` (build-time vendoring from the Fontsource CDN; both families are SIL OFL open fonts). Files: `fraunces-latin-wght-normal.woff2`, `fraunces-latin-wght-italic.woff2` (variable, weight axis 100–900, normal + italic), `lato-latin-400-normal.woff2`, `lato-latin-700-normal.woff2`. Verified all four carry the `wOF2` magic header.
- **Decision (Fraunces):** used the single variable woff2 (full weight range) instead of multiple static cuts — covers heading weights in one request, better for performance, and the type scale/weight tokens (400/600/700) all resolve within the axis.
- **Decision (Lato):** Lato has no 600 weight upstream (available: 100/300/400/700/900), so shipped static 400 + 700 only. The `--weight-medium: 600` token falls to the nearest face — no synthetic-bold concerns for body copy.
- `src/styles/base/_global.scss`: added four `@font-face` blocks, each with `font-display: swap`; Fraunces normal/italic via `format("woff2-variations")`, Lato via `format("woff2")`. The family-name literals here are the `@font-face` definitions backing the `--font-heading`/`--font-body` tokens — blocks still consume only `var(--font-*)`.
- Added an `h1–h6 { font-family: var(--font-heading); }` rule so headings use Fraunces via the token (body already uses `var(--font-body)` = Lato).
- Removed the now-redundant `public/fonts/.gitkeep` (directory is populated).
**Verified (test_steps):**
- Шаг 1: built output references only self-hosted `/fonts/*.woff2`; grep for `googleapis`/`gstatic` in `dist/index.html` → none. No external font CDN request.
- Шаг 2: headings resolve to `var(--font-heading)` (Fraunces), body to `var(--font-body)` (Lato) — both present in compiled CSS.
- Шаг 3: all four `@font-face` blocks include `font-display:swap` (grep count = 4 faces, 4 swap) in the build output.
- Bonus: `npm run build` completes clean; `dist/fonts/` contains all four woff2 files.
**Files changed:** public/fonts/*.woff2 (4 added), public/fonts/.gitkeep (removed), src/styles/base/_global.scss, tasks.json (status), progress.md

## TASK-007 — BaseLayout.astro: head, meta, canonical, OG, skip-link, lang
**Date:** 2026-06-23
**Status:** done
**Summary:** Authored the single layout every page uses, and routed the placeholder home through it.
- `src/layouts/BaseLayout.astro`: typed `Props { title, description, canonicalURL?, ogImage?, noindex? }`. Sets `<!doctype html>` + `<html lang="en">`; base meta (charset, viewport, generator); `<title>`, `<meta name="description">`; self-referencing `<link rel="canonical">` defaulting to the current path resolved against `Astro.site` (the `SITE_URL` placeholder). Open Graph (`og:type=website`, title/description/url/image/site_name) + Twitter (`summary_large_image` + title/description/image). `noindex` prop conditionally emits `<meta name="robots" content="noindex, nofollow">` (for `/lp`, TASK-025). Skip-to-content link `→ #main-content`, then global `<Header />`, `<main id="main-content"><slot/></main>`, `<Footer />`. Imports `../styles/main.scss` (which `@font-face`s the self-hosted fonts) so global styles + fonts load from the layout.
- **Decision — ogImage default:** `'/images/og-default.png'` `[MOCK]` (TODO: add the real asset). Resolved to an absolute URL via `Astro.site` for OG/Twitter.
- **Decision — favicon:** removed the `<link rel="icon" href="/favicon.svg">` I initially added, since no favicon asset exists yet (would be a broken reference / Best-Practices hit); favicon is not in this task's scope.
- **Ordering resolution (Header/Footer):** acceptance requires "Header and Footer connected in layout," but `Header.astro` (TASK-010) and `Footer.astro` (TASK-013) come later and depend on TASK-009. Created minimal **placeholder** `src/components/layout/Header.astro` + `Footer.astro` (brand name + footer rights, both via the i18n dictionary, each tagged `TODO(TASK-010/013)`), wired into BaseLayout. Their full nav / Book CTA / Google Map are built in their own tasks — no over-building here.
- `src/styles/blocks/_layout.scss`: new block holding the `.skip-link` styles (off-screen `translateY(-150%)` until `:focus`, then slides in) — token-only (`--color-forest`/`--color-bg`/`--space-*`/`--radius-sm`/`--motion-*`), with `prefers-reduced-motion` disabling the transition. `@use`d in `main.scss`.
- `src/pages/index.astro`: placeholder home now renders through `BaseLayout` (passing `title`/`description` from i18n) instead of its own `<html>` scaffold; moved the `main.scss` import out of the page and into BaseLayout (completing the deferral noted in TASK-003). Page stays a `[MOCK]` placeholder — real Home is TASK-016.
**Verified (test_steps):**
- Шаг 1: `dist/index.html` contains `<html lang="en">` and `<link rel="canonical" href="https://example.com/">`.
- Шаг 2: all OG tags (`og:type/title/description/url/image/site_name`) + `twitter:card=summary_large_image` present in `<head>`.
- Шаг 3: temporary `noindexprobe.astro` passing `noindex={true}` rendered `<meta name="robots" content="noindex, nofollow">`; probe removed and rebuilt clean. (Home, with no `noindex`, correctly has no robots meta.)
- Шаг 4: `.skip-link` (href `#main-content`) is the first focusable element in `<body>` and targets `<main id="main-content">`; CSS reveals it on `:focus`.
- Bonus: `npm run build` completes clean (no SCSS deprecation/errors).
**Files changed:** src/layouts/BaseLayout.astro, src/components/layout/Header.astro, src/components/layout/Footer.astro, src/styles/blocks/_layout.scss, src/styles/main.scss, src/pages/index.astro, tasks.json (status), progress.md
**Note:** Header/Footer are intentionally minimal stubs to be completed in TASK-010 / TASK-013; the `[MOCK]` `og:image` and `SITE_URL` are placeholders for Webline to replace at launch.

## TASK-008 — Content collections (MDX/data): activities, menu, valueProps, gallery
**Date:** 2026-06-23
**Status:** done
**Summary:** Authored the typed content layer so every list-driven page renders from data, not hardcoded markup (PRD §6).
- `src/content/config.ts`: defines four `defineCollection`s with zod schemas, all `type: 'data'` (JSON) since their content is structured fields, not prose. The entry filename is the stable item `id` from PRD §6.
  - `activities` — `{ title, image, description, order }` (PRD §6.3).
  - `valueProps` — `{ icon, label, description?, order }` (PRD §6.2). `order` added for deterministic card ordering.
  - `gallery` — `{ src, alt, order }` (PRD §6.5). `order` added for deterministic slide order.
  - `menu` — single structured document `{ scanPdf, sections: [{ id, title, items: [{ name, description?, price? }] }] }` (PRD §6.4). One entry holds all sections + the scanned-PDF reference.
- **Decision — JSON data collections, not MDX:** all four are field-shaped, so `type: 'data'` gives schema validation and clean typing; MDX bodies aren't needed for these. (Task title allows "MDX/data".)
- **Decision — `price` as string:** keeps currency/format flexible for `[MOCK]` placeholders without numeric assumptions.
- **Decision — i18n-ready:** schemas are shaped so a `locale` field / per-locale entries can be added later without changing the layout consumers (noted in `config.ts` header).
- Added `[MOCK]` entries to every collection: valueProps (nature/calm/base/cozy ×4), activities (hiking/cycling/sights ×3 — placeholder names only, **no invented facts/distances**), gallery (interior/fireplace/forest/terrace ×4), menu (1 doc, 3 sections: Starters/Mains/Drinks). Image/PDF paths are `[MOCK]` placeholder refs with TODO. All values tagged `[MOCK]` + TODO.
- Removed the now-redundant `.gitkeep` files from the four populated content dirs (consistent with the TASK-005 fonts pattern).
**Verified (test_steps):**
- Шаг 1: `npm run build` → clean (no errors/deprecations); `[types] Generated` confirms all four collections validate against their schemas.
- Шаг 2: each collection has `[MOCK]` entries (valueProps 4, activities 3, gallery 4, menu 1 doc w/ 3 sections).
- Шаг 3: a temporary `collsmoke.astro` calling `getCollection(...)` rendered `data-acts="3"` / first activity `[MOCK] Hiking` (sorted by `order`), `data-vps="4"`, `data-gal="4"`, `data-menu-sections="3"` + scanPdf path — data comes from the collections. Temp page removed; final build clean.
**Files changed:** src/content/config.ts, src/content/{activities,valueProps,gallery,menu}/*.json (13 entries), removed 4 .gitkeep, tasks.json (status), progress.md
**Note:** image/PDF paths are `[MOCK]` placeholders (assets added later by Webline/client); consuming pages are built in TASK-015 (valueProps), TASK-017/018 (gallery), TASK-019 (activities), TASK-020/021 (menu).

## TASK-009 — UI primitives: Button, Card, SectionHeader (.astro + SCSS blocks)
**Date:** 2026-06-23
**Status:** done
**Summary:** Authored the three reusable UI primitives as pure `.astro` components (zero client-side JS), with all styling in dedicated `src/styles/blocks/*` files — components carry only semantic class names, no inline `<style>`.
- `src/components/ui/Button.astro`: renders `<a>` when `href` is set, otherwise `<button>` (default `type="button"`). Props: `href?`, `variant` (`primary` | `secondary`, default primary), `type?`, `class?`, plus passthrough `...rest`. Label via `<slot>` (caller supplies i18n text). Classes composed as `btn btn--<variant>`.
- `src/components/ui/Card.astro`: soft rounded container; renders `<a>` (whole-card link) when `href` is set, otherwise `<div>` (via a capitalized `Tag` variable). Content via `<slot>`. Class `card`.
- `src/components/ui/SectionHeader.astro`: optional `eyebrow` + `title` (h2) + optional `subtitle`, `align` (`left` | `center`). All visible text passed as props (from the i18n dictionary) — no hardcoded strings. Classes `section-header section-header--<align>` + BEM `__eyebrow/__title/__subtitle`.
- `src/styles/blocks/_buttons.scss`: `.btn` base + `.btn--primary` (terracotta bg, bg-color text) + `.btn--secondary` (forest inset-ring outline that fills on hover). Large soft rounding via `--radius-lg`; subtle hover lift + `--shadow-soft`; transitions use `--motion-*`; `prefers-reduced-motion` disables motion.
- `src/styles/blocks/_cards.scss`: `.card` uses `--shadow-card` + `--radius-lg`, gentle hover lift; reduced-motion respected.
- `src/styles/blocks/_section-header.scss`: heading via `--font-heading` + `--text-h2`, eyebrow in `--color-wood`; generous bottom spacing.
- `src/styles/main.scss`: `@use`s the three new block partials (after `blocks/layout`).
**Decisions / notes:**
- Added a dedicated `blocks/_section-header.scss` (CLAUDE.md §5's block list is not exhaustive — `_layout.scss` already exists outside it), since SectionHeader needs styles and the task names only `_buttons`/`_cards` for Button/Card.
- Token-only purity: micro hover-lift offsets and the secondary outline ring width are derived from the spacing scale via `calc(var(--space-xs) * …)` instead of magic px, so no raw numbers/hex appear in any block.
- Components stay layout-agnostic (slot/props), reused by later section tasks (TASK-010, TASK-015, TASK-016, TASK-018, …).
**Verified (test_steps):**
- Шаг 1: temporary `task009smoke.astro` rendered `<Button variant="primary">` / `variant="secondary"` and two Cards; build output shows `class="btn btn--primary"`, `class="btn btn--secondary"`, `class="card"` and the compiled CSS resolves to tokens (`.btn--primary{background-color:var(--color-terracotta);color:var(--color-bg)}`, `.card{…box-shadow:var(--shadow-card);border-radius:var(--radius-lg)…}`). Probe page removed and rebuilt clean.
- Шаг 2: grep of `_buttons.scss`/`_cards.scss`/`_section-header.scss` for raw hex (`#[0-9a-fA-F]{3,6}`) → none.
- Шаг 3: grep of the three `.astro` files for `<style` → none (no inline styles / magic numbers in components).
- Bonus: `npm run build` completes clean (no SCSS deprecation/errors).
**Files changed:** src/components/ui/Button.astro, src/components/ui/Card.astro, src/components/ui/SectionHeader.astro, src/styles/blocks/_buttons.scss, src/styles/blocks/_cards.scss, src/styles/blocks/_section-header.scss, src/styles/main.scss, tasks.json (status), progress.md

## TASK-024 — Bentral: isolated BentralEmbed component + /rezervacija page
**Date:** 2026-06-23
**Status:** done
**Summary:** Built the isolated Bentral reservation slot and its booking page so the real widget can be pasted later with a single-file edit (CLAUDE.md §11).
- `src/components/booking/BentralEmbed.astro`: isolated wrapper holding a clearly-marked **placeholder `<iframe>`** with a prominent `TODO: PASTE THE REAL BENTRAL EMBED HERE` comment block. The iframe has `title` (from i18n `booking.widgetTitle`, a11y), `loading="lazy"`, and a sensible `min-height` (via the `.booking__frame` class). `src="about:blank"` `[MOCK]` placeholder target. No user PII is passed to the widget. A `.booking__placeholder` note (from i18n `booking.placeholder`) shows while the slot is empty and is documented to be removed in this same file when the real embed lands.
- `src/pages/rezervacija.astro`: renders through `BaseLayout` with a short `[MOCK]` heading via `SectionHeader` (`booking.title` + `booking.intro`) and drops in `<BentralEmbed />`. Per-page SEO flows through BaseLayout props (title = `booking.title — site.name`, description = `booking.intro`).
- `src/styles/blocks/_booking.scss`: frames **around** the widget only (large rounding `--radius-lg`, enveloping `--shadow-card`, `--color-mist` empty-state bg), never touching Bentral internals. Token-only — no raw hex/spacing/radius/shadow literals; the iframe `min-height` is derived from the spacing scale (`calc(var(--space-3xl) * 5.5)`). Container `max-width: 60rem` is a structural width (same precedent as the `60ch` in `_section-header.scss`).
- `src/styles/main.scss`: `@use 'blocks/booking';` added after the primitive blocks.
- `src/i18n/en.ts`: added two `[MOCK]` keys — `booking.widgetTitle` (iframe a11y title) + `booking.placeholder` (empty-state note). No hardcoded strings in the component/page.
**Decisions / notes:**
- Isolation guarantee: the real embed replaces only the placeholder `<iframe>` (and optionally the placeholder `<p>`) inside `BentralEmbed.astro` — page, layout, styles and i18n stay untouched.
- iframe background is transparent so the warm `.booking__embed` frame + centered placeholder note read as an intentional empty-state until the widget is pasted.
**Verified (test_steps):**
- Шаг 1: `npm run build` clean; `/rezervacija/index.html` generated; markup shows `.booking`, `.booking__inner`, `.booking__embed`, the iframe and the `.booking__placeholder` note — the framed reservation placeholder renders.
- Шаг 2: the embed is isolated — the iframe/placeholder live only in `src/components/booking/BentralEmbed.astro` (the page just imports the component).
- Шаг 3: rendered iframe has `title="[MOCK] Reservation system"` and `loading="lazy"` (grep of built HTML).
- Bonus: `_booking.scss` has no raw hex; compiled `.booking__frame` resolves `min-height` to `calc(var(--space-3xl) * 5.5)` from tokens.
**Files changed:** src/components/booking/BentralEmbed.astro, src/pages/rezervacija.astro, src/styles/blocks/_booking.scss, src/styles/main.scss, src/i18n/en.ts, tasks.json (status), progress.md
**Note:** `about:blank` src, `booking.*` copy and the OG/SITE_URL placeholders remain `[MOCK]`/TODO for Webline to replace with the real Bentral embed at launch.

## TASK-010 — Header.astro: logo placeholder, navigation, Book button
**Date:** 2026-06-24
**Status:** done
**Summary:** Replaced the minimal TASK-007 Header stub with the full global site header — pure `.astro`, zero client JS, all visible text from the i18n dictionary, all styling in a dedicated SCSS block (no inline styles, no raw hex/magic numbers).
- `src/components/layout/Header.astro`: `[MOCK]` text-logo brand (`t('site.name')`) linking to `/`, rendered in `--font-heading` via `.site-header__brand`. Primary nav (`Home`, `Accommodation`, `Activities`, `Menu`, `Contact`) built from a `navLinks` array using `nav.*` i18n keys, wrapped in `<nav aria-label={t('a11y.primaryNav')}>`. Prominent **Book** CTA via the `Button` primitive (default `primary` = terracotta) → `/rezervacija`, label from `t('nav.book')`. Reserved slots (TODO comments) for the `LanguageSwitcher` island (TASK-011) and `MobileNav` island (TASK-012) inside `.site-header__actions` — no over-building beyond this task.
- `src/styles/blocks/_header.scss`: new block. Sticky header (`--color-bg` bg, `--shadow-soft`); flex `__inner` with structural `max-width: 75rem` cap (same precedent as section-header/booking blocks) and token spacing; brand in heading font/weight; nav links with `--color-forest` hover (transition from `--motion-*`, disabled under `prefers-reduced-motion`). Responsive: at `max-width: 48rem` the inline desktop `.site-header__nav` is hidden (`display:none`) so brand + Book never overflow at 375px (MobileNav takes over in TASK-012). Token-only — no raw hex/magic numbers.
- `src/i18n/en.ts`: added `a11y.primaryNav` (`[MOCK]` + TODO) for the nav landmark label. All other strings (`nav.*`, `site.name`, `nav.book`) already existed.
- `src/styles/main.scss`: `@use 'blocks/header';` added after `blocks/layout`.
**Verified (test_steps):**
- Шаг 1: `npm run build` clean; `dist/index.html` renders `.site-header__brand` = "Dom na Travni gori", all five `.site-header__nav-link` hrefs (`/`, `/accommodation`, `/activities`, `/menu`, `/contact`), and the Book CTA.
- Шаг 2: Book CTA rendered as `<a href="/rezervacija" class="btn btn--primary site-header__book">[MOCK] Book` → routes to `/rezervacija`.
- Шаг 3: compiled CSS contains `@media (max-width:48rem){.site-header__nav{display:none}}` — header collapses cleanly on mobile (375px) with no horizontal overflow; brand + Book remain.
- Bonus: `_header.scss` has no raw hex (token-only); grep of `Header.astro` shows no inline `<style>`.
**Files changed:** src/components/layout/Header.astro, src/styles/blocks/_header.scss, src/styles/main.scss, src/i18n/en.ts, tasks.json (status), progress.md
**Note:** `LanguageSwitcher` (TASK-011) and `MobileNav` (TASK-012) islands mount into the reserved `.site-header__actions` slots in their own tasks; nav/brand strings remain `[MOCK]`/TODO.

## TASK-013 — Footer.astro: contacts, social, legal [MOCK] + Google Maps on every page
**Date:** 2026-06-24
**Status:** done
**Summary:** Replaced the minimal TASK-007 Footer stub with the full global footer — pure `.astro`, all visible text from the i18n dictionary, all styling in a dedicated SCSS block (no inline styles, no raw hex/magic numbers). Rendered on every page via `BaseLayout`.
- `src/components/layout/Footer.astro`: three `[MOCK]` columns — Contact (phone `tel:` + email `mailto:`), Social (Instagram + Facebook external links with `target="_blank" rel="noopener noreferrer"`), Legal (entity `[MOCK] Dom na TRAVNI GORI d.o.o.` + address). Embedded **Google Maps** iframe (`loading="lazy"`, `title` from `a11y.mapTitle`, `referrerpolicy="no-referrer-when-downgrade"`) + a short `[MOCK]` "how to reach us" note (`footer.directions`), plus the rights line.
- **Decision — visible text vs config values:** all visible copy (titles, phone/email/address display, entity, directions, rights, social labels) comes from `src/i18n/en.ts`. Non-visible hrefs/embed `src` (tel/mailto/social URLs, map embed URL) are kept as clearly-marked `[MOCK]` TODO constants in the component frontmatter — they are configuration, not UI copy, so this respects the "no hardcoded visible strings" rule without inventing a `site` content collection (out of this task's scope).
- **Decision — map src:** uses the keyless `maps.google.com/maps?q=…&output=embed` form pointing at "Travna Gora, Slovenia" (the region is stated in the PRD §1.1, not invented) so the map actually loads for the test. Marked `[MOCK]` TODO for Webline to swap for the exact property-pin embed at launch. No precise coordinates/pin asserted.
- `src/i18n/en.ts`: added `footer.contact.phone`, `footer.contact.email`, `footer.social.instagram`, `footer.social.facebook`, `footer.legal.entity`, `footer.legal.address` (`[MOCK]` + TODO; social labels are brand names). Existing `footer.*` titles/directions/rights and `a11y.mapTitle` reused.
- `src/styles/blocks/_footer.scss`: new block. Forest background with bg-cream text (high contrast for AA), `auto-fit minmax(14rem,1fr)` column grid that collapses to one column on mobile (no overflow at 375px), map frame with `min-height: calc(var(--space-3xl) * 4)` (same derived-value precedent as the booking block), `--radius-lg` + `--shadow-soft`, link hover in `--color-wood`, `prefers-reduced-motion` disables the link transition. Token-only — no raw hex/magic numbers.
- `src/styles/main.scss`: `@use 'blocks/footer';` added after `blocks/header`.
**Verified (test_steps):**
- Шаг 1: `npm run build` clean; `class="site-footer"` present in both `dist/index.html` and `dist/rezervacija/index.html` — footer (with map) renders on every page (it lives in `BaseLayout`).
- Шаг 2: built iframe is `<iframe class="site-footer__map-frame" src="…output=embed" title="[MOCK] Map to Dom na Travni gori" loading="lazy" referrerpolicy="…">` — map is lazy and titled.
- Шаг 3: `[MOCK] info@example.com`, `[MOCK] Dom na TRAVNI GORI d.o.o.`, `[MOCK] Street 1…` all present in the built HTML — contacts + legal entity visible as `[MOCK]`.
- Bonus: `_footer.scss` has no raw hex (token-only); `Footer.astro` has no inline `<style>`.
**Files changed:** src/components/layout/Footer.astro, src/styles/blocks/_footer.scss, src/styles/main.scss, src/i18n/en.ts, tasks.json (status), progress.md
**Note:** tel/mailto/social URLs and the map embed remain `[MOCK]`/TODO for Webline; the precise property-pin Google Maps embed is inserted at launch.

## TASK-014 — ParallaxHero.jsx (React island): home hero with mountain/fog parallax
**Date:** 2026-06-24
**Status:** done
**Summary:** Built the home hero as a React island with atmosphere-only parallax, mounted on the placeholder Home so it is testable now (TASK-016 adds the remaining sections).
- `src/islands/ParallaxHero.jsx`: two background layers (mountains + fog) translate at DIFFERENT speeds on scroll (0.25 vs 0.55 of `scrollY`) via `translate3d` set inline in a `requestAnimationFrame`-throttled, `passive` scroll handler. **Only `transform` is animated.** On mount it reads `matchMedia('(prefers-reduced-motion: reduce)')` and, when reduce is set, **returns early without attaching any listener** — hero stays static. Listener + any pending rAF are cleaned up on unmount. Visible copy (title, subtitle, both CTA labels) is passed in as props from the `.astro` caller — no hardcoded strings. Two CTAs rendered as anchors reusing the design-system button classes: primary `.btn--primary` → `/rezervacija` ("Check availability"), secondary `.btn--secondary .hero__cta-secondary` → `/activities` ("Explore the area"). Layer images are `[MOCK]` placeholders (styled in the block), `aria-hidden` on the decorative layer wrapper.
- **Decision — buttons in the island:** the `Button.astro` primitive can't be used inside a React island, so the CTAs reuse the same `.btn`/`.btn--*` semantic classes (no new button styling), with a `.hero__cta-secondary` modifier so the secondary CTA reads as a cream outline on the dark hero (the default forest outline would vanish on the scrim).
- **Decision — CTA hrefs hardcoded:** routes (`/rezervacija`, `/activities`) are navigation targets, not visible copy — same convention as the Header nav links; only labels come from i18n.
- `src/styles/blocks/_hero.scss`: new block. Full-bleed hero (`min-height: 80vh` structural, like the existing structural max-widths), `--color-forest` fallback behind the `[MOCK]` layer images so light text stays readable if art is missing. Parallax layers are `position:absolute; height:120%` (extra height covers the translate range) with `will-change: transform`. Warm scrim via `::after` using `color-mix(in srgb, var(--color-text) 45%, transparent)` — token-driven, no raw rgba. Title in `--font-heading`/`--text-h1`, subtitle `--text-h3`, content text `--color-bg` (cream). `.hero__cta-secondary` cream outline override (token-only, ring width derived from the spacing scale). Token-only throughout — no raw hex / magic numbers.
- `src/styles/main.scss`: `@use 'blocks/hero';` added after `blocks/header`.
- `src/pages/index.astro`: placeholder Home now mounts `<ParallaxHero client:load … />` with the i18n strings (`home.hero.title/subtitle`, `cta.checkAvailability/exploreArea`) instead of the bare h1/p. Page remains `[MOCK]`; remaining Home sections are TASK-016.
**Verified (test_steps):**
- Шаг 1: `npm run build` clean (only two expected warnings: the `[MOCK]` hero layer images don't exist yet, so the `url()` refs stay unresolved and layers fall back to token bg-colors). The island bundles + hydrates (`dist/_astro/ParallaxHero.*.js`, `astro-island` present in `dist/index.html`); the scroll handler translates the `.hero__layer--mountains`/`--fog` refs at different speeds → parallax on scroll.
- Шаг 2: reduced-motion path returns before adding the scroll listener — no transforms applied, hero static.
- Шаг 3: built HTML contains `href="/rezervacija"` (primary) and `href="/activities"` (secondary) — CTAs route correctly.
- Bonus: `_hero.scss` has no raw hex (grep clean); `ParallaxHero.jsx` has no inline `<style>`.
**Files changed:** src/islands/ParallaxHero.jsx, src/styles/blocks/_hero.scss, src/styles/main.scss, src/pages/index.astro, tasks.json (status), progress.md
**Note:** hero layer images (`/images/hero-mountains.[MOCK].webp`, `/images/hero-fog.[MOCK].png`) are `[MOCK]` placeholders for Webline to add at launch; until then the hero shows the `--color-forest`/`--color-mist` fallback tones.

## TASK-015 — Home: value-props section (cards from collection)
**Date:** 2026-06-24
**Status:** done
**Summary:** Built the Home "why stay with us" section as a pure `.astro` section component driven entirely by the `valueProps` content collection, with line-style icons and a dedicated SCSS block — zero client JS, no hardcoded copy, token-only styling.
- `src/components/sections/ValueProps.astro`: `getCollection('valueProps')` sorted by `order`, rendered as a `<ul>` grid of `Card` primitives. Each card holds an `Icon` (line-style), the `[MOCK]` label (`<h3>`) and the optional `[MOCK]` description — label/description come from the collection (the content source per CLAUDE.md §8); the section title comes from i18n (`home.valueProps.title`). No hardcoded strings.
- `src/components/ui/Icon.astro`: new UI primitive rendering line-style SVG icons by `name` (Lucide/Phosphor aesthetic). 24×24 viewBox, `fill="none"`, `stroke="currentColor"`, shared `stroke-width="1.75"` (consistent line weight), round caps/joins, `aria-hidden`. Path data for the four `[MOCK]` icons used by the collection (`trees`, `feather`, `map`, `flame`); color is inherited so callers theme it via a token. Unknown name → empty (no crash).
- `src/styles/blocks/_value-props.scss`: new block. Section vertical rhythm (`--space-3xl`), centred `max-width: 75rem` container (same structural-width precedent as header/footer/booking), responsive `grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr))` that reflows to one column on mobile. Card body is a centred flex column (`height:100%` so cards in a row match); fog-tinted icon disc via `color-mix(in srgb, var(--color-mist) 45%, transparent)` (token-driven, no raw rgba), icon color `--color-forest` (nature accent). Label in `--font-heading`/`--text-h3`, text in `--font-body`. Token-only — no raw hex/magic numbers.
- `src/styles/main.scss`: `@use 'blocks/value-props';` after `blocks/section-header`.
- `src/pages/index.astro`: mounted `<ValueProps />` after the hero (so the section shows on Home for the test); updated the stale header comment to reflect that value-props is TASK-015 (remaining previews are TASK-016).
**Decisions / notes:**
- Card surface styling (rounding/shadow/hover) is reused from the shared `.card` block per the acceptance ("стили из blocks/_cards.scss"); this block only adds the section grid + icon/label, so card visuals stay defined once.
- Added a focused `Icon.astro` primitive (line-style icons are required by the acceptance and no icon library is installed) instead of adding a dependency; it only defines the icons this task needs and is shaped to extend (used later for amenities, etc.).
- SVG `viewBox`/`stroke-width` are intrinsic SVG geometry, not styling tokens — same reasoning as the existing structural `max-width`/`60ch` precedents; on-screen icon size is token-driven (`--space-xl` glyph inside a `--space-2xl` disc).
**Verified (test_steps):**
- Шаг 1: `npm run build` clean (only the pre-existing `[MOCK]` hero-image warnings); `dist/index.html` renders `.value-props` → `.value-props__grid` with all four collection cards in `order` (`[MOCK] Nature all around`, `Calm & quiet`, `Perfect base for trips`, `Cozy authentic house`), each with an `<svg class="icon value-props__icon">`; section title `[MOCK] Why stay with us` from i18n.
- Шаг 2: compiled CSS shows `grid-template-columns:repeat(auto-fit,minmax(13rem,1fr))` with `--space-lg` container gutters → collapses to a single column at 375px with no horizontal overflow.
- Шаг 3: all four icons share `stroke-width="1.75"` with `fill="none"`/`stroke="currentColor"` (grep count 4) — line-style, single consistent weight; path/polygon data renders un-escaped via `set:html`.
- Bonus: `_value-props.scss` has no raw hex (grep clean); neither `ValueProps.astro` nor `Icon.astro` has an inline `<style>`.
**Files changed:** src/components/sections/ValueProps.astro, src/components/ui/Icon.astro, src/styles/blocks/_value-props.scss, src/styles/main.scss, src/pages/index.astro, tasks.json (status), progress.md
**Note:** icon names + card label/description are `[MOCK]` placeholders for Webline/client to finalize; the section title remains `[MOCK]`/TODO in `en.ts`.

## TASK-016 — Home: Accommodation preview, Activities preview, Book-direct strip
**Date:** 2026-06-24
**Status:** done
**Summary:** Assembled the remaining Home sections as three pure `.astro` section components (zero client JS), each in `src/components/sections/`, with all visible text pulled from the i18n dictionary and all styling in dedicated `src/styles/blocks/*` files — no inline `<style>`, no raw hex / magic numbers.
- `src/components/sections/AccommodationPreview.astro`: `[MOCK]` media placeholder + `SectionHeader` (`home.accommodation.title`) + one `[MOCK]` paragraph (`home.accommodation.text`) + secondary `Button` → `/accommodation` (`cta.viewAccommodation`). The image slot is a token-styled placeholder surface (`.accommodation-preview__media`) following the hero precedent (no broken `<img>`); marked `TODO(TASK-030)` to swap for an optimized Astro `<Image>`.
- `src/components/sections/ActivitiesPreview.astro`: centred `[MOCK]` intro via `SectionHeader` (`home.activities.title` + `home.activities.text`) + secondary `Button` → `/activities` (`cta.viewActivities`).
- `src/components/sections/BookDirect.astro`: forest-band strip with `SectionHeader` (`home.bookDirect.title`), a 3-item benefits list (`home.bookDirect.benefit1..3`) each with a line-style `check` icon, and a primary `Button` → `/rezervacija` (`cta.bookNow`).
- `src/components/ui/Icon.astro`: added one line-style `check` glyph (consistent 1.75 stroke weight) for the book-direct benefits — the Icon primitive is designed to extend (TASK-015 precedent).
- New SCSS blocks `_accommodation-preview.scss`, `_activities-preview.scss`, `_book-direct.scss` (responsive `auto-fit` grid / `flex-wrap`, structural `max-width: 75rem` cap like the other section blocks, fog/wood token bands via `color-mix`, token-only). `@use`d in `main.scss` after `value-props`.
- `src/pages/index.astro`: mounted `<AccommodationPreview />`, `<ActivitiesPreview />`, `<BookDirect />` after `<ValueProps />`; updated the header comment (Home now content-complete for previews; full Accommodation/Activities pages remain TASK-018/019).
**Decisions / notes:**
- CTA hrefs (`/accommodation`, `/activities`, `/rezervacija`) are navigation targets, not visible copy — hardcoded like the existing Header nav links; only labels come from i18n.
- Used the styled-placeholder media surface (token background + `[MOCK]` `background-image` url) instead of an `<img>` so the build stays clean and shows no broken-image icon until Webline adds the real asset (same approach the hero uses).
- Section heading colour override on the forest `book-direct` band keeps AA contrast (cream on forest).
**Verified (test_steps):**
- Шаг 1: `npm run build` clean (only the pre-existing `[MOCK]` placeholder-image warnings); `dist/index.html` contains `.accommodation-preview`, `.activities-preview`, `.book-direct`, with `href="/accommodation"`, `href="/activities"`, `href="/rezervacija"` all routing correctly.
- Шаг 2: all copy resolves from i18n (`[MOCK] Your cozy mountain retreat`, `[MOCK] Explore the surroundings`, `[MOCK] Book direct`, the three benefits) — grep for raw `home.*` keys returns 0; no hardcoded literals in the components.
- Шаг 3: blocks use `repeat(auto-fit, minmax(...))` / `flex-wrap` → reflow to a single column on mobile with no horizontal overflow (same pattern as the accepted value-props/footer blocks); 3 benefit items + 3 `check` icons render.
- Bonus: the three new blocks have no raw hex (grep clean); none of the three section components carry an inline `<style>`.
**Files changed:** src/components/sections/AccommodationPreview.astro, ActivitiesPreview.astro, BookDirect.astro, src/components/ui/Icon.astro, src/styles/blocks/_accommodation-preview.scss, _activities-preview.scss, _book-direct.scss, src/styles/main.scss, src/pages/index.astro, tasks.json (status), progress.md
**Note:** `home.*` copy + the `accommodation-preview.[MOCK].webp` image remain `[MOCK]`/TODO for Webline/client to finalize.

## TASK-017 — AccommodationSlider.jsx (React island): photo slider
**Date:** 2026-06-25
**Status:** done
**Summary:** Completed the Accommodation photo slider island (the `.jsx` existed untracked from a prior session but had no styles, no wiring, and was uncommitted) by adding its dedicated SCSS block and verifying behaviour/a11y. All visible strings come from i18n via props; zero hardcoded copy; token-only styling.
- `src/islands/AccommodationSlider.jsx` (already present, committed now): renders the `gallery` collection images passed in as props from the `.astro` caller (islands can't call `getCollection`). Controls: prev/next buttons, touch swipe (40px threshold), and ArrowLeft/ArrowRight when the slider region is focused; index wraps at both ends. Accessible: `role="region"` + `aria-roledescription="carousel"` + `aria-label`, per-slide `role="group"`/`aria-roledescription="slide"`, `aria-live="polite"` track, dot controls with `aria-current`, `tabIndex={0}`. Non-active slides use the `hidden` attribute + `aria-hidden`. Images carry explicit `width="1200"`/`height="800"`, `loading` eager on the first slide and lazy on the rest, `decoding="async"`.
- `src/styles/blocks/_accommodation.scss` (new): owns all `.slider*` styling. **No layout shift** — `.slider__viewport` reserves a constant `aspect-ratio: 3 / 2` (matches the 1200×800 source) with `object-fit: cover`, so swapping slides never changes frame height. Prev/next controls + dots styled with tokens (soft `--shadow-soft`, `--radius-lg`, fog/forest token colors, `color-mix` for translucency — no raw rgba), `:focus-visible` outline on the region, and a `prefers-reduced-motion` block disabling the control/dot transitions. Token-only: grep for raw hex → none. Structural `max-width: 60rem` cap follows the existing block precedent.
- `src/styles/main.scss`: added `@use 'blocks/accommodation';` after `blocks/booking`.
**Decisions / notes:**
- The slider markup/behaviour lives in the island; styling lives in the SCSS block (per CLAUDE.md §6) — the component carries only semantic class names, no inline `<style>`.
- `aspect-ratio: 3 / 2` is intrinsic image geometry (matches `width`/`height`), not a spacing magic number — same reasoning as the existing structural `max-width`/`60ch` precedents.
- The full Accommodation page (`/accommodation` with description + amenities + CTA) is TASK-018; this task is the island + block only, so verification used a temporary `task017smoke.astro` probe (mounting the island through BaseLayout with the gallery collection), removed before commit.
**Verified (test_steps):**
- Шаг 1 (navigate via mouse/swipe/keyboard): island bundles + hydrates (`dist/_astro/AccommodationSlider.*.js`, `astro-island` present). Markup confirms prev/next `<button>`s (`slider__control--prev/next`) with i18n `aria-label`s, the focusable region with `onKeyDown` arrow handling, and `onTouchStart/End` swipe handlers in the JSX.
- Шаг 2 (no layout shift): compiled CSS shows `.slider__viewport{…aspect-ratio:3/2;…}` — frame height is reserved and constant across slides.
- Шаг 3 (aria present, focus visible): rendered HTML has region/carousel + group/slide roles (×4 slides), `aria-live="polite"`, labelled controls (`[MOCK] Previous/Next photo`, `[MOCK] Photo gallery`); `.slider:focus-visible` outline present in CSS.
- Bonus: all 4 images carry `width="1200"`/`height="800"`; first eager, rest lazy; `npm run build` clean after removing the probe; `_accommodation.scss` has no raw hex; island has no inline `<style>`.
**Files changed:** src/islands/AccommodationSlider.jsx (committed), src/styles/blocks/_accommodation.scss (new), src/styles/main.scss, tasks.json (status), progress.md
**Note:** gallery image paths/alt remain `[MOCK]`/TODO (Webline adds real photos); the slider consumes the collection so swapping images needs no markup change. The island is mounted into a real page in TASK-018.

## TASK-018 — Accommodation page: slider + description + amenities (no per-room cards)
**Date:** 2026-06-25
**Status:** done
**Summary:** Built the Accommodation page assembling the existing AccommodationSlider island (TASK-017) with a warm atmospheric [MOCK] description, an amenities row, and a booking CTA — pure data/i18n driven, token-only styling, no per-unit breakdown (unit selection/pricing stays with Bentral on /rezervacija).
- `src/pages/accommodation.astro`: renders through `BaseLayout` (per-page SEO via props — title `accommodation.title — site.name`, description `accommodation.description`). Layout top→bottom: centred `SectionHeader` (`accommodation.title`) → `<AccommodationSlider client:visible>` fed the `gallery` collection (sorted by `order`, mapped to `{src, alt}` — the island can't call `getCollection`, so the page passes data in, keeping photos editable without markup changes) → atmospheric `[MOCK]` description paragraph (`accommodation.description`) → amenities row → primary `Button` → `/rezervacija` (`accommodation.cta`).
- **Amenities:** 6-item row (Wi-Fi, parking, kitchen, fireplace, heating, terrace) built from a frontmatter array where the icon `name` is config and the visible label comes from i18n (`accommodation.amenities.*`). No content collection was added (collections are fixed to activities/menu/valueProps/gallery — out of scope to add one), and no facts are invented — placeholder labels only.
- `src/i18n/en.ts`: added `accommodation.amenities.{wifi,parking,kitchen,fireplace,heating,terrace}`, `accommodation.cta` (all `[MOCK]` + TODO). Existing `accommodation.title/description/amenities.title/slider.*` reused.
- `src/components/ui/Icon.astro`: extended the line-style icon set (consistent `stroke-width="1.75"`, Lucide aesthetic) with `wifi`, `car` (parking), `utensils` (kitchen), `thermometer` (heating), `armchair` (terrace); `flame` (already present) covers fireplace. Icon primitive is designed to extend (TASK-015/016 precedent).
- `src/styles/blocks/_accommodation.scss`: appended the page-level block (`.accommodation`, `__inner` with the structural `max-width: 75rem` cap, centred `__description` at a `50rem` reading measure, `__amenities` heading, responsive `__amenities-grid` `repeat(auto-fit, minmax(9rem, 1fr))` that reflows to one column on mobile, fog-tinted icon disc via `color-mix` matching value-props, `__cta`). Token-only — no raw hex / magic numbers. The slider styles already lived here from TASK-017.
**Decisions / notes:**
- Slider mounted with `client:visible` (defers hydration until scrolled into view — perf-friendly for TASK-030/032) rather than `client:load`.
- CTA href `/rezervacija` is a navigation target (hardcoded like the Header nav links); only the label comes from i18n.
- Amenity icon disc reuses the value-props pattern (same fog `color-mix`, `--color-forest` glyph) for visual consistency without duplicating the `.card` surface.
**Verified (test_steps):**
- Шаг 1: `npm run build` clean (only the pre-existing `[MOCK]` placeholder-image warnings); `dist/accommodation/index.html` renders the SectionHeader, the hydrated slider (`astro-island` + `AccommodationSlider.*.js`) with all 4 gallery images (`interior/fireplace/forest/terrace.[MOCK].webp`), the `.accommodation__description` paragraph, and the 6 amenities (`[MOCK] Wi-Fi/Parking/Kitchen/Fireplace/Heating/Terrace`, each with a 1.75-stroke line icon).
- Шаг 2: grep for `room|unit|per-room` in the built page → none (no per-room/unit cards).
- Шаг 3: page CTA rendered as `<a href="/rezervacija" class="btn btn--primary">[MOCK] Check availability` → routes to /rezervacija.
- Bonus: `_accommodation.scss` has no raw hex (grep clean); `accommodation.astro` has no inline `<style>`; amenity labels all resolve from i18n.
**Files changed:** src/pages/accommodation.astro, src/components/ui/Icon.astro, src/styles/blocks/_accommodation.scss, src/i18n/en.ts, tasks.json (status), progress.md
**Note:** gallery image paths/alt, amenity labels and `accommodation.*` copy remain `[MOCK]`/TODO for Webline/client to finalize; swapping photos needs no markup change (collection-driven).

## TASK-022 — ContactForm.jsx (React island): Netlify Forms, honeypot, validation, consent
**Date:** 2026-06-25
**Status:** done
**Summary:** Built the Contact inquiry form as a React island wired for Netlify Forms — all visible strings from i18n via a `strings` prop, all styling in a dedicated SCSS block, token-only, no inline `<style>`.
- `src/islands/ContactForm.jsx`: real `<form name="contact-en" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field" noValidate>`. Fields: Name (required), Email (required), Phone (optional, `type=tel`), Check-in / Check-out (optional, `type=date`), Message (optional textarea) — plus a REQUIRED privacy-consent checkbox. Hidden `form-name` field (the only `type=hidden`, needed by Netlify). Client-side validation (`onSubmit`) runs before submission: empty name → required msg, empty/invalid email → required/invalidEmail msg, unchecked consent → consentRequired msg; on any error it `preventDefault()`s (blocking the POST), renders inline `role="alert"` messages, sets `aria-invalid`/`aria-describedby`, and focuses the first invalid field. When valid, the native POST goes to Netlify which redirects to `/thank-you/` — **method POST means no PII in the URL query string**. Fields are always rendered so Astro's build-time static HTML carries the form for Netlify's form detection.
- **Honeypot:** `name="bot-field"` input (NOT `type=hidden`) inside `.contact-form__honeypot`, hidden purely via CSS (clip/position off-screen) — bots fill it, humans don't.
- `src/styles/blocks/_contact.scss` (new): owns `.contact-form*` styling — flex column layout, `auto-fit` check-in/out row (reflows to one column on mobile), inset-ring inputs (mist → forest on focus, terracotta on `aria-invalid`), consent row, error text in terracotta, honeypot CSS-hidden. Token-only: no raw hex / magic numbers (off-screen 1px values derived from the spacing scale). Reduced-motion disables input transitions.
- `src/styles/main.scss`: `@use 'blocks/contact';` after `blocks/accommodation`.
- `src/i18n/en.ts`: added `contact.form.honeypot` (`[MOCK]` honeypot label). All other form strings (`contact.form.*`) already existed.
**Decisions / notes:**
- Strings passed as a single `strings` object prop (12 keys) rather than 12 positional props — cleaner for the form; still 100% i18n-sourced, no hardcoded copy. The wiring page (`/contact`) is TASK-023.
- Native form submission (not `fetch`) so Netlify's built-in handling + `/thank-you/` redirect work without a backend; validation only intercepts to block invalid submits.
- The island is the only deliverable here; verified with a temporary `task022smoke.astro` probe (mounted via BaseLayout, fed the i18n strings), removed before commit.
**Verified (test_steps):**
- Шаг 1 (block on missing required/consent): `validate()` collects errors for empty name, empty/invalid email, and unchecked consent; `handleSubmit` `preventDefault()`s and shows `role="alert"` messages + `aria-invalid` — submission blocked with clear messages.
- Шаг 2 (valid → redirect): rendered form is `method="POST" action="/thank-you/"` with `data-netlify="true"` + hidden `form-name=contact-en` → Netlify processes and redirects to `/thank-you/`.
- Шаг 3 (honeypot CSS-hidden): built HTML `<input name="bot-field" tabindex="-1" ...>` (no `type=hidden`); compiled CSS `.contact-form__honeypot{position:absolute;width:1px;height:1px;clip:rect(0,0,0,0);...}` hides it.
- Шаг 4 (no PII in query string): form method is POST, not GET.
- Bonus: `npm run build` clean (only pre-existing `[MOCK]` image warnings); `ContactForm.*.js` bundles + hydrates; `_contact.scss` has no raw hex; island has no inline `<style>`; all 7 fields have associated `<label for>`.
**Files changed:** src/islands/ContactForm.jsx (new), src/styles/blocks/_contact.scss (new), src/styles/main.scss, src/i18n/en.ts, tasks.json (status), progress.md
**Note:** `contact.form.*` copy remains `[MOCK]`/TODO; Webline configures Netlify email notifications (not in code). The form is mounted on the real `/contact` page in TASK-023.

## TASK-023 — Contact page: form + contact details + map; /thank-you page
**Date:** 2026-06-25
**Status:** done
**Summary:** Wired the ContactForm island (TASK-022) into the real `/contact` page and added the `/thank-you` success page it redirects to — both pure data/i18n driven, token-only styling appended to the existing `_contact.scss` block, no inline `<style>`, no raw hex.
- `src/pages/contact.astro`: renders through `BaseLayout` (per-page SEO via props — title `contact.title — site.name`, description `contact.intro`). Centred `SectionHeader` (`contact.title` + `contact.intro`) → two-column responsive `.contact__layout` with the `<ContactForm client:visible>` (fed a `strings` object of all 12 form keys from i18n) and a `.contact__details` aside ([MOCK] phone `tel:`, email `mailto:`, Instagram + Facebook external links). The form's static HTML is present in the build so Netlify's form detection still works under `client:visible`.
- **Map:** the Google Map lives in the global footer (`BaseLayout`), so it is present on `/contact` too (acceptance allows footer-global; not duplicated inline). Verified `site-footer__map-frame` count = 1 in the built page.
- `src/pages/thank-you.astro`: `[MOCK]` success page — `SectionHeader` (`thankYou.title` + `thankYou.text`) + a primary `Button` → `/` (`thankYou.backHome`). Generated at `/thank-you/index.html` (matches the form's `action="/thank-you/"`), so the post-submit redirect target exists (no 404).
- **Decisions / notes:** contact-detail hrefs (tel/mailto/social) are non-visible config `[MOCK]` constants mirroring the footer's placeholders (same precedent as Footer.astro); only labels come from i18n (reused `footer.contact.*` / `footer.social.*` + `contact.details.title`). CTA/back-home href `/` is a navigation target (hardcoded like the Header nav). No new i18n keys were needed — all `contact.*`, `thankYou.*` keys already existed.
- `src/styles/blocks/_contact.scss`: appended the page-level `.contact` (responsive `auto-fit` form+details grid, structural `max-width:75rem` cap) and `.thank-you` (centred, `50rem` measure) blocks + a `prefers-reduced-motion` guard on the detail-link transition. Token-only; the block was already `@use`d in `main.scss` (no main.scss change).
**Verified (test_steps):**
- Шаг 1: `dist/contact/index.html` renders the form (`name="contact-en"`, `data-netlify="true"`) and the `.contact__details` block with `[MOCK] +386 0 000 000`, `[MOCK] info@example.com`, Instagram, Facebook, `[MOCK] Contact details` — form + contacts shown.
- Шаг 2: the form's `action="/thank-you/"` → successful submission redirects to the thank-you page.
- Шаг 3: `dist/thank-you/index.html` exists (no 404), rendering `[MOCK] Thank you` + `[MOCK] Back to home` (`href="/"`).
- Bonus: `npm run build` clean (only the pre-existing `[MOCK]` placeholder-image warnings); 5 pages built; `_contact.scss` has no raw hex; neither new page has an inline `<style>`; footer map present on `/contact` (count = 1).
**Files changed:** src/pages/contact.astro, src/pages/thank-you.astro, src/styles/blocks/_contact.scss, tasks.json (status), progress.md
**Note:** tel/mailto/social hrefs and all `contact.*`/`thankYou.*` copy remain `[MOCK]`/TODO for Webline/client; Netlify email notifications are configured by Webline (not in code).

## TASK-025 — Hidden advertising landing /lp (noindex, mobile-first, swappable CTA → booking)
**Date:** 2026-06-26
**Status:** done
**Summary:** Built the hidden paid-social landing as a single-purpose, mobile-first page with NO global navigation, noindex/nofollow, excluded from the sitemap, and a swappable booking CTA — token-only styling, all visible strings from i18n.
- `src/pages/lp.astro`: renders through `BaseLayout` with `noindex bare`. Structure top→bottom per PRD §4.2.7: hero (`lp.hero.title` headline + `lp.hero.subtitle` line + CTA) → 3 reasons-to-book (`lp.reason1..3`, each with a line-style `check` icon) → social proof (`lp.socialProof`) → repeated booking CTA. Only outbound link on the page is the booking CTA → `/rezervacija` (verified: the sole `href="/..."` is `/rezervacija`).
- **Decision — `bare` prop on BaseLayout:** the landing must have no global nav/distractions, but BaseLayout always rendered Header + Footer. Added an optional `bare?: boolean` prop (default false → existing pages unchanged) that omits `<Header />` and `<Footer />`. This keeps the landing distraction-free while still flowing SEO/`noindex` through BaseLayout props as the acceptance requires. The Google-Maps-in-footer rule (PRD §4) is a main-site rule; §4.2.7 explicitly makes /lp the no-nav, no-distraction exception, so the footer (social/legal/map) is intentionally dropped here.
- **Swappable CTA — `src/components/sections/LandingCTA.astro`:** the conversion goal lives in ONE place — an internal `goals` config (`{ booking: { href: '/rezervacija', label: t('lp.cta'), conversion: 'booking' } }`) selected via a `goal` prop (default `'booking'`). Changing the landing goal later (to an inquiry form / special-offer capture) means editing only this config / passing a different `goal` — the page itself is untouched. The booking CTA is marked as the key conversion via `data-conversion="booking"` (forwarded through `Button`'s `...rest`) for future campaign tracking. Reuses the `Button` primitive (`.btn--primary` = terracotta) — no new button styling.
- **Sitemap exclusion:** added a `sitemap({ filter: (page) => !page.includes('/lp') })` filter in `astro.config.mjs` so the noindex landing is not advertised in `sitemap-0.xml`. (robots.txt already `Disallow: /lp` from TASK-002.) TASK-028 will formally own/verify sitemap+robots; this satisfies TASK-025's own acceptance ("исключена из sitemap").
- `src/styles/blocks/_landing.scss` (new): mobile-first single-column layout, token-only — forest hero band with a `[MOCK]` `lp-hero.[MOCK].webp` background + warm `color-mix` scrim (light text readable on the fallback tone), reasons list as a flex column, mist social-proof band, forest repeat-CTA band. Structural `max-width: 40rem` reading caps + `padding-inline` (same precedent as other blocks) so the page stays whole with no horizontal overflow at 375px. `@use`d in `main.scss`.
- **Decision — CTA href hardcoded:** `/rezervacija` is a navigation target (same convention as the Header nav links / other pages); only the label comes from i18n.
**Verified (test_steps):**
- Шаг 1: `dist/lp/index.html` has `site-header` count = 0 and `site-footer` count = 0 (no global nav); the only page link is `href="/rezervacija"` (the booking CTA, ×2 — hero + repeat) — one clear path to booking.
- Шаг 2: `<head>` contains `<meta name="robots" content="noindex, nofollow">` (grep match).
- Шаг 3: goal is centralized in `LandingCTA.astro`'s `goals` config + `goal` prop — changing the conversion goal needs no edit to `lp.astro` (architectural; verified by design).
- Шаг 4: layout is single-column flex with structural `max-width`/`padding-inline` (no fixed widths) — same no-overflow pattern as the accepted value-props/book-direct/footer blocks; whole at 375px.
- Bonus: `npm run build` clean (only the pre-existing `[MOCK]` placeholder-image warnings); `/lp` absent from `dist/sitemap-0.xml` (count 0) while all 5 public pages are present; `dist/robots.txt` has `Disallow: /lp`; `_landing.scss` has no raw hex; `lp.astro`/`LandingCTA.astro` have no inline `<style>`.
**Files changed:** src/pages/lp.astro, src/components/sections/LandingCTA.astro, src/styles/blocks/_landing.scss, src/styles/main.scss, src/layouts/BaseLayout.astro, astro.config.mjs, tasks.json (status), progress.md
**Note:** `lp.*` copy and the `lp-hero.[MOCK].webp` hero image remain `[MOCK]`/TODO for Webline/client; the `data-conversion="booking"` hook is wired to real campaign tracking later (TASK-029 ads-prep).

## TASK-019 — Activities / Surroundings page (collection-driven)
**Date:** 2026-06-26
**Status:** done
**Summary:** Built the Activities page as a pure `.astro` page (zero client JS) rendering its blocks from the `activities` content collection, so items can be added/removed without touching layout. All chrome strings from i18n; per-block title/description/image from the collection; no invented facts.
- `src/pages/activities.astro`: renders through `BaseLayout` (per-page SEO via props — title `activities.title — site.name`, description `activities.intro`). Centred `SectionHeader` (`activities.title` + `activities.intro`) → responsive `.activities__grid` `<ul>` mapping `getCollection('activities')` (sorted by `order`) to one `.activities__card` per entry (image + `<h2>` title + 1–2 sentence description, all from the collection) → primary `Button` → `/rezervacija` (`cta.checkAvailability`).
- **Decisions / notes:** image uses `<img src={data.image}>` with explicit `width="800"`/`height="600"`, `loading="lazy"`, `decoding="async"` and `alt={data.title}` — same data-driven `<img>` precedent as the gallery slider (TASK-017); real assets/optimized `<Image>` come in TASK-030. CTA href `/rezervacija` is a navigation target (hardcoded like the Header nav links); only the label comes from i18n. No new i18n keys needed — `activities.title`/`activities.intro` already existed. No content-collection schema change (collections are fixed — out of scope).
- `src/styles/blocks/_activities.scss` (new): owns the page styling — `.activities` section rhythm, `.activities__inner` structural `max-width: 75rem` cap, `.activities__grid` `repeat(auto-fit, minmax(16rem, 1fr))` that reflows to one column on mobile (no horizontal overflow), `.activities__card` (soft `--radius-lg` + `--shadow-card`, `overflow:hidden`), `.activities__image` with a constant `aspect-ratio: 4 / 3` (no layout shift) + fog-tinted fallback, token-only typography. No raw hex / magic numbers.
- `src/styles/main.scss`: `@use 'blocks/activities';` added after `blocks/accommodation`.
**Verified (test_steps):**
- Шаг 1: `npm run build` clean (only the pre-existing `[MOCK]` placeholder-image warnings); `dist/activities/index.html` renders 3 `.activities__card` blocks from the collection (`[MOCK] Hiking`, `[MOCK] Cycling`, `[MOCK] Notranjska sights`) in `order`, plus the i18n title/intro (`Activities & surroundings` / `Intro about the Notranjska…`).
- Шаг 2: layout is collection-driven — the page maps over `getCollection('activities')`, so adding/removing a JSON entry adds/removes a block with no markup edit (architectural).
- Шаг 3: compiled CSS shows `.activities__grid{…repeat(auto-fit,minmax(16rem,1fr))}` → reflows to a single column at 375px with no horizontal overflow (same accepted pattern as value-props/footer).
- Bonus: CTA rendered as `<a href="/rezervacija">` → routes correctly; `_activities.scss` has no raw hex; `activities.astro` has no inline `<style>`.
**Files changed:** src/pages/activities.astro, src/styles/blocks/_activities.scss, src/styles/main.scss, tasks.json (status), progress.md
**Note:** activity image paths/alt + `activities.*` copy remain `[MOCK]`/TODO for Webline/client; swapping/adding blocks needs no markup change (collection-driven).
