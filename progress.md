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
