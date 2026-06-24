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
