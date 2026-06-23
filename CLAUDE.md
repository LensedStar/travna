# Dom na Travni gori — Agent Rules (CLAUDE.md)

You are a coding agent working on the **Dom na Travni gori** project: a cozy, rustic presentation website for a mountain house / nature stay in the Notranjska region (Travna Gora, Slovenia), built with **Astro 4.x + React islands + SCSS (classic)**, deployed on **Netlify**, with an embedded **Bentral** reservation system.

> Authoritative source of product decisions: `PRD-DomNaTravniGori.md`. If this file and the PRD ever disagree, the PRD wins — stop and flag it in `progress.md`.

---

## 1. Before You Start Any Session

1. Read `tasks.json` — understand all tasks and their statuses
2. Run `git log --oneline -20` — understand what has already been done
3. Read `progress.md` — see summaries from previous sessions
4. Pick **one task** with `status: "pending"` and the **highest priority** (critical → high → medium → low)
5. Verify all tasks listed in `dependencies[]` have `status: "done"` before starting

---

## 2. During Work

- Work **only** on the selected task — do not touch unrelated code
- Commit after each logical change with a clear message referencing the task ID: `git commit -m "TASK-001: init Astro project with dependencies"`
- Do not refactor, clean up, or improve code outside the current task scope
- Do not add features not specified in the task's `acceptance_criteria`
- Do not add comments, docstrings, or type annotations to code you didn't change

---

## 3. Before Marking a Task Done

1. Execute **every step** listed in `test_steps` for the task
2. All acceptance criteria must be met
3. Update the task `status` in `tasks.json` from `"pending"` to `"done"`
4. Write a log entry in `progress.md` using this format:

```
## TASK-XXX — Short task name
**Date:** YYYY-MM-DD
**Status:** done
**Summary:** What was done, decisions made, edge cases.
**Files changed:** src/..., public/...
```

> **FORBIDDEN:** Deleting or editing task content in `tasks.json`. Only `status` may be changed.

---

## 4. Project Stack

| Layer | Technology |
|---|---|
| Framework | Astro 4.x (static output) |
| Interactivity | React islands only (where listed in tasks) |
| Styling | **SCSS (classic), block-based files + tokens — NO Tailwind** |
| Content | MDX content collections |
| Fonts | **Self-hosted** via `public/fonts/` — NO Google Fonts CDN. Headings: **Fraunces**; Body: **Lato** |
| i18n | EN only (Phase 1) + non-functional switcher stub; i18n-ready architecture |
| Forms | Netlify Forms (no backend) |
| Reservations | **Bentral** via isolated iframe component |
| Maps | **Google Maps embed in footer (every page)** |
| Analytics | **Google Analytics 4** (loads only after consent) + ads tracking prep |
| Hosting | Netlify, deployed from GitHub |
| Icons | Lucide or Phosphor — line-style, consistent weight |

> **Hard constraint:** Tailwind is NOT used anywhere. No utility classes in markup, no inline `<style>` with hardcoded values.

---

## 5. File & Folder Conventions

```
src/
  components/
    layout/       ← Header.astro, Footer.astro (incl. map), LanguageSwitcher.jsx (stub)
    sections/     ← One component per page section (.astro)
    ui/           ← Button, Card, SectionHeader (primitives, .astro)
    booking/      ← BentralEmbed.astro (isolated reservation iframe)
  islands/        ← React islands only: MobileNav.jsx, ContactForm.jsx, AccommodationSlider.jsx, ParallaxHero.jsx, LanguageSwitcher.jsx
  content/        ← MDX/data collections: activities/, menu/, valueProps/, gallery/
  i18n/
    en.ts         ← Source of truth for ALL UI strings (no hardcoded text in components)
  layouts/
    BaseLayout.astro  ← All pages use this (header + footer + map + skip link)
  pages/
    index.astro          ← Home (EN, default)
    accommodation.astro  ← Slider + descriptive copy
    activities.astro
    menu.astro           ← Online menu + embedded PDF
    contact.astro        ← Netlify form
    rezervacija.astro    ← Bentral page
    lp.astro             ← Hidden advertising landing (noindex)
  styles/
    tokens/    _colors.scss _typography.scss _radius.scss _shadows.scss _spacing.scss _motion.scss
    base/      _reset.scss _global.scss _typography.scss
    utils/     _mixins.scss _functions.scss
    blocks/    _header.scss _hero.scss _accommodation.scss _activities.scss _menu.scss
               _contact.scss _booking.scss _footer.scss _buttons.scss _cards.scss _landing.scss
    main.scss  ← @use / @forward — assembles everything
public/
  fonts/        ← Self-hosted Fraunces + Lato files
  images/       ← logo placeholder, og-default.png [MOCK]
  menu/         ← menu-scan.[MOCK].pdf
  robots.txt
```

---

## 6. Styling Rules (SCSS — Non-Negotiable)

- **No Tailwind. No utility classes in markup. No inline `<style>` with raw values.**
- **Styles live in dedicated SCSS files under `src/styles/`, NOT inside components.** Components reference semantic classes only.
- **Tokens are the single source of truth.** SCSS variables/maps are emitted to `:root` as CSS custom properties and consumed as `var(--token)`.
- **No raw hex colors** in blocks — only `var(--color-*)`.
- **No magic numbers** for spacing/radius/shadow — only tokens.
- **No font-family literals** in blocks — only `var(--font-*)`.
- **Semantic, BEM-like class names:** `.hero`, `.hero__title`, `.card`, `.btn`, `.btn--primary`.
- **Reuse via mixins / shared blocks** (`utils/_mixins.scss`) — buttons, cards, section wrappers defined once.
- Changing the color + font tokens must visibly restyle the whole site with zero per-component edits.

### Design tokens (starting values — meant to be changed freely)
```
--color-bg:         #F3E9D8   /* warm background base */
--color-wood:       #C8884B   /* warm accent 1 — buttons, icons */
--color-forest:     #3E5A40   /* nature co-accent — sections, lines, hover, motifs */
--color-terracotta: #A65A3A   /* deep accent — primary CTAs */
--color-mist:       #B8BCA8   /* fog neutral */
--color-text:       #3A2E26   /* cocoa-brown text (not black) */
--font-heading:     "Fraunces", serif
--font-body:        "Lato", sans-serif
/* plus: --radius-*, --shadow-*, --space-*, --text-*, --motion-duration, --motion-ease */
```

---

## 7. Design Rules (Non-Negotiable)

- **Aesthetic:** rustic + cozy / hygge — warm wood in golden light, earthy palette, fog, soft rounded forms. Visually **simple but characterful**; interest comes from **atmosphere**, not modern/tech effects.
- **Must not clash** with the rustic apartment style. Avoid the "rustic = cheap/dated" trap: clean grid, generous whitespace, large warm photography.
- **Large warm photography IS central** (interior, wood, forest, fog) — unlike a minimalist look, photos carry the mood.
- **Soft large rounded forms + enveloping soft shadows** (from tokens).
- **NO** bright gradients, glassmorphism, SaaS-style colors, harsh drop shadows, aggressive type.
- **NO** fake animated counters.
- Use only colors from tokens — no ad-hoc hex in components.
- Icons: line-style only (Lucide or Phosphor), consistent weight.

### Motion
- **Targeted parallax only** where it strengthens atmosphere: **hero** (mountain + fog layers, different speeds), optionally 1–2 nature sections. Not everywhere.
- **Subtle reveals:** fade-in + small `translateY` on section enter; gentle hover on cards/buttons.
- Animate only `transform` / `opacity`. Honor `prefers-reduced-motion` (disable parallax + reveals). Durations/easing from motion tokens. No "springy"/abrupt motion.

---

## 8. Content Rules (MOCK — Non-Negotiable)

- **Do NOT generate real marketing copy.** All text is short `[MOCK]` placeholder with a `// TODO` note.
- **Do NOT invent factual claims** (distances, awards, amenities, prices) — placeholders only.
- All visible UI strings come from `src/i18n/en.ts` — **no hardcoded strings in components**.
- Content items (activities, menu, value props, gallery) come from `src/content/` collections so they can be added/removed without editing layout.
- Logo, contacts, social, legal entity, Bentral embed, photos, domain — all `[MOCK]`/placeholder. Domain via `SITE_URL` placeholder (set by Webline at launch).

---

## 9. i18n Rules (EN only in Phase 1)

- **Phase 1 ships English only.** Content language = `en`.
- **Language switcher is a non-functional UI stub** in the header (e.g. `EN ▾` listing `SI`, `RU`). Selecting an option does NOT change content. Mark clearly: `// i18n stub — non-functional in Phase 1`.
- **i18n-ready architecture:** all strings in `src/i18n/en.ts`; content collections structured so a locale field/per-locale entries can be added later; Astro i18n routing scaffolded to currently resolve only `en`.
- Adding `sl`/`ru` later must require only: new dictionary + content entries + enabling routing + activating the switcher — **no component rewrites**.

---

## 10. React Islands — Strict Scope

Use React **only** for these components (as defined in tasks):
- `LanguageSwitcher.jsx` (dropdown open/close; switching is a stub)
- `MobileNav.jsx`
- `ContactForm.jsx`
- `AccommodationSlider.jsx`
- `ParallaxHero.jsx`

All other components must be pure `.astro` files (zero client-side JS). `BentralEmbed` and the landing CTA are `.astro`.

---

## 11. Reservations (Bentral) Rules

- The Bentral widget lives **only** on `/rezervacija`, inside an **isolated** `BentralEmbed.astro` component.
- Ship a clearly commented **placeholder iframe slot**; the real Bentral embed code / object ID is pasted later by Webline/client.
- Replacing the placeholder must require editing **only** `BentralEmbed.astro` — no other file changes.
- iframe: sensible `min-height`, `title` attribute, `loading="lazy"`. Do NOT pass user PII to the widget.
- Do not fight the widget's internal styling; frame around it with site styling only.

---

## 12. Hidden Advertising Landing (`/lp`) Rules

- Destination for paid **social** (Meta) campaigns. **Mobile-first**, single focused page, minimal/no global nav.
- **Primary CTA = Booking** (button → `/rezervacija`).
- The CTA must be a **single swappable component** (prop/config) so the goal can later change to inquiry form or special-offer capture without rebuilding the page.
- **`<meta name="robots" content="noindex, nofollow">`**, **excluded from `sitemap.xml`**, **not linked from public nav**.
- Mark the booking CTA as the key conversion (for later campaign tracking).

---

## 13. Contact Form Rules

- Netlify Forms: `data-netlify="true"`, form name `contact-en` (Phase 1, single language).
- Hidden `form-name` field; honeypot field `name="bot-field"` hidden via CSS (not `type="hidden"`).
- Fields: **Name** (required), **Email** (required), **Phone** (optional), **Check-in / Check-out dates** (optional), **Message** (optional).
- Client-side validation before submission. **No PII in URL query strings.**
- Privacy/consent checkbox **required** — form must not submit without it.
- On success: show a clear success state (or redirect to `/thank-you/`).
- Email notifications are configured by Webline in Netlify (not in code).

---

## 14. SEO Checklist (Every Public Page)

- [ ] Unique `<title>` containing "Dom na Travni gori"
- [ ] Unique `<meta name="description">`
- [ ] `<link rel="canonical">` self-referencing (from `SITE_URL`)
- [ ] OG tags: `og:title`, `og:description`, `og:image` `[MOCK]`, `og:url`, `og:type`; `twitter:card=summary_large_image`
- [ ] `<html lang="en">`
- [ ] JSON-LD `LodgingBusiness` / `LocalBusiness` schema with `[MOCK]` fields
- [ ] Page included in auto-generated `sitemap.xml` — **except `/lp` (excluded)**
- [ ] `robots.txt` disallows `/lp` and references the sitemap
- [ ] `hreflang` tags are NOT required in Phase 1 (single locale); architecture stays ready to add them with locales

---

## 15. Analytics & Consent Rules

- **Google Analytics 4** via measurement ID placeholder `GA_MEASUREMENT_ID` `[MOCK]`.
- GA4 loads **only after the user grants consent** (EU/GDPR). Provide a lightweight consent mechanism.
- **Ads prep:** structure so a Meta Pixel / conversion tag can be added later (campaign management is out of scope).
- No secrets committed to the repo — IDs via env/placeholder.

---

## 16. Performance Rules

- Images: WebP, `loading="lazy"`, explicit `width` and `height`, responsive `srcset` where sensible.
- Fonts self-hosted — **no external font CDN** requests.
- Third-party iframes (Bentral, Google Maps) `loading="lazy"`.
- Target: Lighthouse Performance 90+, SEO 90+, Accessibility 90+, Best Practices 90+.

---

## 17. Accessibility Rules

- Every `<img>` must have descriptive `alt` text.
- Every form field must have an associated `<label>`.
- `<html lang="en">` set correctly.
- All interactive elements keyboard-navigable (slider, mobile nav, switcher).
- Color contrast ≥ 4.5:1 (WCAG AA) — verify token combinations.
- Skip-to-content link present in `BaseLayout`.
- `prefers-reduced-motion` respected for all motion.

---

## 18. Loop Limitation Rules

- **Maximum 3 attempts** on any single action (build, test, fix). After 3 failed attempts — stop, log the blocker in `progress.md`, and halt the session.
- **Never retry the same command unchanged.** Diagnose the root cause first; change approach before retrying.
- **Never sleep-poll.** Do not use `sleep` between retries; use a check command to verify state.
- **Never brute-force a passing test.** Fix the underlying issue — do not modify the test to make it pass.
- **Never bypass safety hooks** (`--no-verify`, `--force`, etc.). If a hook fails, fix the cause.
- **Maximum 1 task per session.** Do not chain into the next task. Stop, commit, log in `progress.md`, end the session.
- If you find yourself doing the same thing more than twice — stop, write what you tried and what blocked you in `progress.md`, then halt.

---

## 19. Out of Scope (Do Not Implement)

- Blog, articles, client portal, login
- **CMS** (content is static MDX in Phase 1)
- Online payments / quote calculator (reservations & payment are handled by Bentral)
- Live chat widget, CRM integration
- Original copywriting / professional photography / illustration (client-provided)
- Active SL/RU localization (architecture is ready; content is EN-only in Phase 1)
- Ad **campaign management** (tracking setup IS in scope; running campaigns is NOT)
- Ongoing maintenance/support

> **In scope, unlike a typical brochure site:** Google Maps (footer), Google Analytics 4 + consent, Bentral reservation embed, hidden advertising landing. Do not "helpfully" remove these.
