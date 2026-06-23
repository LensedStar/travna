# PRD — Dom na Travni gori (Mountain House Website)

**Document version:** 1.0
**Date:** 2026-06-23
**Prepared by:** Webline (Daniil Letkovskyi s.p.)
**Client:** Dom na TRAVNI GORI d.o.o.
**Build target:** AI coding agent (autonomous execution against this PRD)
**Reference contract:** Priloga št. 1, Pogodba št. 2026-011 (22.06.2026)

> **How to read this document.** This PRD is written for autonomous execution by an AI coding agent. It is intentionally explicit: no clarifying questions should be required during the build. All textual/visual content is placeholder and tagged `[MOCK]` — the agent must NOT generate real marketing copy or invent facts. Wherever a value is unknown, use the labelled placeholder and leave a clear `TODO` comment for later replacement by the client/Webline.

---

## 1. App Overview & Goals

### 1.1 What this is
A presentation ("spletna vizitka") website for **Dom na Travni gori**, a cozy mountain house / nature-stay hotel located on Travna Gora in the **Notranjska** region of Slovenia. The site presents the property and surroundings, exposes a **menu** (online + downloadable PDF), embeds a **Bentral** reservation system, captures inquiries via a contact form, and includes a **separate hidden landing page** for paid social advertising.

### 1.2 Primary goals
1. Communicate the property's atmosphere — nature, calm, "time flows slower", authentic Slovenian mountain house.
2. Drive **direct reservations** through the embedded Bentral system.
3. Capture inquiries through a contact form (email notifications).
4. Provide a dedicated, distraction-free **advertising landing page** for social-media campaigns whose primary CTA is **booking**.
5. Ship a fast, responsive, SEO-ready static site that Webline can extend later (localization, content).

### 1.3 Non-goals / out of scope (per contract §5)
- Original copywriting / marketing content (placeholders only).
- Professional photography, video, illustration.
- Legal review of texts (privacy policy, terms).
- **Blog and CMS** — not included.
- Bentral subscription/licenses and any third-party service costs.
- Ad campaign management (tracking setup IS included, campaign management is NOT).
- Ongoing maintenance/support.

### 1.4 Success criteria (high level)
- All pages render responsively (desktop / tablet / mobile) with no layout breakage.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90 on a representative build.
- Contact form submits via Netlify Forms and triggers an email notification.
- Bentral embed slot is isolated and swappable without touching other code.
- Design is fully token-driven: changing a handful of tokens restyles the whole site (no hardcoded colors/fonts/radii in blocks).

---

## 2. Target Audience

- **Primary:** Travellers seeking a calm nature stay — families, couples, small groups.
- **Secondary:** Hikers and cyclists using Travna Gora as a base for exploring inner Slovenia (Notranjska).
- **Traffic sources:** Organic/SEO, direct, and **paid social (Meta — Instagram/Facebook)** landing on the hidden advertising page.
- **Device skew:** Expect mobile-heavy traffic, especially from social ads. **Mobile-first** is mandatory.

Tone of the experience: warm, cozy, authentic, unhurried. Visually simple but characterful — interest comes from atmosphere (warm wood, forest, fog, soft rounded forms), NOT from "modern" tech effects that would clash with the rustic apartment style.

---

## 3. Languages & Localization (i18n-ready, EN-only in Phase 1)

> **Decision:** Phase 1 ships **English only**. A language switcher appears in the header as a **non-functional UI stub**. The architecture must be i18n-ready so Slovenian (and optionally Russian) can be enabled later **without refactor**.

Requirements:
- **Content language Phase 1:** English (`en`) only.
- **Language switcher:** present in header (e.g. `EN ▾` with `SI`, `RU` listed). It is a visual placeholder — selecting an option does NOT change content. Mark clearly in code as an intentional stub (`// i18n stub — non-functional in Phase 1`).
- **i18n-ready architecture:** structure routes/content so locales can be added later. Recommended approach:
  - Keep all UI strings in a single dictionary file (e.g. `src/i18n/en.ts`) rather than hardcoded in components.
  - Keep MDX content collections structured so a `locale` field / per-locale entries can be introduced later.
  - Use Astro's i18n routing config in a way that currently resolves only `en`, but is ready for `sl`/`ru`.
- **Acceptance:** Adding a second locale later must not require rewriting components — only adding a dictionary + content entries + enabling routing. The switcher must be wired to that mechanism later by changing the stub to active.

---

## 4. Information Architecture & Pages

Global elements present on **every** page:
- **Header:** `[MOCK]` text logo "Dom na Travni gori" (set in `--font-heading`), primary nav, language switcher stub, prominent **"Book"** button → `/rezervacija`.
- **Footer (every page):** contact block `[MOCK]`, social links `[MOCK]`, legal entity `[MOCK]`, and an **embedded Google Map** (pin at property) + short "how to reach us" note. The map lives in the footer so no separate Location page is needed.

### 4.1 Page list

| Route | Page | Purpose | Indexed |
|---|---|---|---|
| `/` | **Home** | Hero + atmosphere + section previews + CTAs | Yes |
| `/accommodation` | **Accommodation** | Photo **slider** + warm descriptive copy (no per-room cards) | Yes |
| `/activities` | **Activities / Surroundings** | What to do nearby (hiking, cycling, Notranjska sights) | Yes |
| `/menu` | **Menu** | Structured online menu **+ embedded scannable PDF** (view + download) | Yes |
| `/contact` | **Contact** | Inquiry form (Netlify) + contact details + map | Yes |
| `/rezervacija` | **Booking** | Isolated **Bentral iframe** wrapper | Yes (page), see §7 for indexing of widget |
| `/lp` (or similar) | **Hidden Advertising Landing** | Single-offer page for paid social; CTA = booking | **No (noindex, nofollow, excluded from sitemap & nav)** |

> Booking route uses `/rezervacija` (Slovenian) per established convention. Keep it configurable.

### 4.2 Page specifications

#### 4.2.1 Home (`/`)
Sections (top → bottom):
1. **Hero** — full-bleed warm mountain/fog image `[MOCK]`, headline `[MOCK]`, subhead `[MOCK]`, two CTAs: primary **"Check availability"** → `/rezervacija`, secondary **"Explore the area"** → `/activities`. **Parallax** on hero (mountain + fog layers move at different speeds).
2. **Value props** — 3–4 rounded cards with icon + short label `[MOCK]` (e.g. nature around, calm & quiet, perfect base for trips, cozy authentic house). Icons `[MOCK]` placeholders.
3. **Accommodation preview** — teaser (image + 1 paragraph `[MOCK]`) → link to `/accommodation`.
4. **Activities preview** — short intro `[MOCK]` + links into `/activities`.
5. **Direct-booking value strip** — "Book direct" benefits (e.g. instant confirmation, best price, direct communication) `[MOCK]` + CTA → `/rezervacija`.
6. (Footer with map — global.)

**Acceptance:** All CTAs route correctly; hero parallax runs only above `prefers-reduced-motion: no-preference`; sections lazy-reveal with subtle fade/translate.

#### 4.2.2 Accommodation (`/accommodation`)
- **Photo slider** (React island) of interior + nature `[MOCK]` images, with prev/next and keyboard support.
- **Descriptive block** — warm atmosphere copy `[MOCK]` (Alpennelke-style "your cozy mountain retreat"). **No per-room cards, no per-unit breakdown** — unit selection and pricing are handled by Bentral on the booking page.
- Amenities row `[MOCK]` (icons + labels: Wi-Fi, parking, kitchen, fireplace/stove, heating, terrace/balcony, etc. — placeholder set).
- CTA → `/rezervacija`.

**Acceptance:** Slider works on touch + desktop, is accessible (aria, focus), and does not cause layout shift; images use responsive `srcset` with lazy loading.

#### 4.2.3 Activities / Surroundings (`/activities`)
- Intro `[MOCK]`.
- Grouped activity blocks `[MOCK]` (hiking, cycling, Notranjska attractions — e.g. Cerkniško jezero, Rakov Škocjan, Postojnska jama as placeholder examples; do NOT assert facts, keep `[MOCK]`).
- Each block: image `[MOCK]` + heading `[MOCK]` + 1–2 sentence `[MOCK]` description.
- CTA → `/rezervacija` or `/contact`.

**Acceptance:** Content is driven by an MDX/data collection so items can be added/removed without editing layout.

#### 4.2.4 Menu (`/menu`)
- **Online menu:** structured sections (e.g. Starters / Mains / Drinks `[MOCK]`) rendered from a data/MDX source — item name `[MOCK]`, optional description `[MOCK]`, price `[MOCK]`.
- **Embedded scanned PDF:** inline PDF viewer for the scanned menu `[MOCK].pdf` + a **Download** button.
- PDF served from `/public`; viewer must degrade gracefully on mobile (fallback link if inline viewer unsupported).

**Acceptance:** PDF both previews inline (where supported) and downloads; online menu renders from structured data; both share consistent styling.

#### 4.2.5 Contact (`/contact`)
- **Inquiry form** (Netlify Forms — implemented/owned by Webline; agent scaffolds the markup + Netlify attributes).
  - Fields: **Name** (text, required), **Email** (email, required), **Phone** (tel, optional), **Check-in / Check-out dates** (date, optional), **Message** (textarea, optional).
  - Netlify form wiring: `data-netlify="true"`, hidden `form-name`, honeypot field for spam, success state/redirect.
  - Email notifications configured by Webline in Netlify (not in code).
- Contact details `[MOCK]` (phone, email, social).
- Map (global footer; optionally repeated inline).

**Acceptance:** Form validates client-side, submits to Netlify, shows a success state, includes spam honeypot; no PII placed in URL query strings.

#### 4.2.6 Booking (`/rezervacija`)
- A dedicated page hosting the **Bentral reservation widget via iframe**.
- The embed is wrapped in an **isolated component** (`BentralEmbed`) with a clearly commented placeholder slot. The client/Webline will paste the real Bentral embed code / object ID later.
- Surrounding chrome (header, footer, short heading `[MOCK]`) styled to match; widget area framed with the site's rounded/warm styling where possible (without overriding Bentral internals).

**Acceptance:** Replacing the placeholder with the real embed requires editing only `BentralEmbed`; no other file changes. Page is responsive; iframe has a sensible min-height and `title` attribute.

#### 4.2.7 Hidden Advertising Landing (`/lp`)
- **Purpose:** destination for paid **social** (Meta) campaigns. Single, focused, **mobile-first** page.
- **No global navigation** (or minimal), no distractions — one clear path.
- **Primary CTA = Booking** (button → `/rezervacija`). 
- Structure: strong hero (`[MOCK]` offer headline + image) → 3 quick reasons-to-book `[MOCK]` → social proof `[MOCK]` → repeated booking CTA.
- **CTA block must be easily swappable** to an inquiry form or a special-offer capture later — implement the CTA as a single configurable component so the goal can change without rebuilding the page.
- **SEO:** `noindex, nofollow`, excluded from `sitemap.xml`, not linked from public nav.
- **Tracking:** GA4 + ad-platform tracking ready (see §10). Mark conversion-relevant clicks (booking CTA) so they can be wired to campaign tracking later.

**Acceptance:** Page is not indexed and not in sitemap; CTA routes to booking; CTA component is swappable via a single prop/config.

---

## 5. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Astro** (static output) | Content-driven, fast, islands architecture |
| Interactivity | **React islands** | Only where needed: slider, mobile menu, parallax wrapper, PDF/menu interactions |
| Styling | **SCSS (classic), NO Tailwind** | Block-based files + tokens + mixins. See §8 |
| Content | **MDX content collections** | Activities, menu, value props, etc. |
| Hosting/Deploy | **Netlify** | Static hosting + Netlify Forms + deploys |
| Forms | **Netlify Forms** | Email notifications (configured by Webline) |
| Reservations | **Bentral** (iframe) | Isolated embed component, inserted later |
| Maps | **Google Maps embed** | In global footer |
| Analytics | **Google Analytics 4** | + ad-tracking prep |
| Fonts | **Fraunces** (headings) + **Lato** (body) | Self-host or fontsource; tokenized |

> **Hard constraint:** Tailwind is explicitly NOT used. All styling is hand-authored SCSS in dedicated files (no utility classes in markup, no inline `<style>` with magic numbers).

Recommended docs for the agent:
- Astro: https://docs.astro.build
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- Astro + React islands: https://docs.astro.build/en/guides/integrations-guide/react/
- Astro i18n routing: https://docs.astro.build/en/guides/internationalization/
- SCSS (`@use`/`@forward`): https://sass-lang.com/documentation/at-rules/use/
- Netlify Forms: https://docs.netlify.com/forms/setup/
- MDX in Astro: https://docs.astro.build/en/guides/integrations-guide/mdx/

---

## 6. Conceptual Data / Content Model (MDX & data collections)

All content is `[MOCK]`. Model content so it is editable without touching layout.

### 6.1 `site` (global config / single source)
- `siteUrl: string` — placeholder `SITE_URL` (set by Webline at DNS/launch). Used for canonical, sitemap, OG.
- `siteName: string` — "Dom na Travni gori"
- `contact: { phone[MOCK], email[MOCK], whatsapp?[MOCK] }`
- `social: { instagram[MOCK], facebook[MOCK] }`
- `legal: { entity: "Dom na TRAVNI GORI d.o.o."[MOCK], address[MOCK], vatNote }`
- `map: { embedUrl[MOCK], lat[MOCK], lng[MOCK], directionsNote[MOCK] }`

### 6.2 `valueProps` (Home cards)
- `id: string`
- `icon: string` (asset ref `[MOCK]`)
- `label: string` `[MOCK]`
- `description?: string` `[MOCK]`

### 6.3 `activities`
- `id: string`
- `title: string` `[MOCK]`
- `image: string` `[MOCK]`
- `description: string` `[MOCK]`
- `order: number`

### 6.4 `menu`
- `sections: [{ id, title[MOCK], items: [{ name[MOCK], description?[MOCK], price?[MOCK] }] }]`
- `scanPdf: string` → `/menu/menu-scan.[MOCK].pdf`

### 6.5 `gallery` (Accommodation slider)
- `images: [{ src[MOCK], alt[MOCK] }]`

### 6.6 `i18n` dictionary
- `en.ts` — all UI strings (nav labels, buttons, form labels, etc.). Structured so `sl.ts` / `ru.ts` can be added later.

---

## 7. SEO, Analytics & Meta

Per contract: on-page SEO is a deliverable.

- **Per-page meta:** unique `<title>` `[MOCK]` and `meta description` `[MOCK]` for every public page, driven by frontmatter.
- **Open Graph / Twitter cards:** `og:title`, `og:description`, `og:image` `[MOCK]`, `og:type`, `og:url` (from `siteUrl`), `twitter:card=summary_large_image`.
- **`sitemap.xml`:** auto-generated (e.g. `@astrojs/sitemap`), **excluding** `/lp` (hidden landing).
- **`robots.txt`:** allow public pages; `Disallow` the hidden landing path; reference sitemap.
- **Hidden landing:** `<meta name="robots" content="noindex, nofollow">`.
- **Canonical URLs:** based on `siteUrl` placeholder.
- **GA4:** install via measurement ID placeholder `GA_MEASUREMENT_ID` `[MOCK]`; load respecting consent (see §9).
- **Ads prep:** structure so a Meta Pixel / conversion tag can be added later; mark the booking CTA as the key conversion event. (Campaign management out of scope.)
- **Structured data (recommended):** `LodgingBusiness`/`LocalBusiness` JSON-LD with `[MOCK]` fields, ready to fill.

**Acceptance:** Every public page has unique title + description + OG image; sitemap excludes `/lp`; robots disallows `/lp`; GA4 fires after consent.

---

## 8. Design System (token-driven, SCSS)

> **Core principle:** *Visually simple, warm, cozy, authentic-rustic. Interest comes from atmosphere (warm wood, forest, fog, soft rounded forms), not from "modern"/tech effects.* Must not clash with the rustic apartment style. Avoid the rustic-cheap trap by keeping structure clean, photos large, and whitespace generous.

### 8.1 Style direction
- **Rustic + cozy / hygge:** warm wood in golden light, soft lighting, fireplace/blanket warmth, earthy textures.
- **Simple but characterful:** clean grid, generous whitespace, large warm photography; character via warmth + texture + organic rounded forms, NOT via gradients/glass/aggressive type.
- **Mobile-first**, responsive across desktop/tablet/mobile.

### 8.2 Tokens (single source of truth)
All design values are **tokens** authored in SCSS and exposed as CSS custom properties on `:root`, so changing a token restyles the whole site. **Semantic names** (by role), not literal color names.

**Color tokens (starting values — easily changeable):**
| Token | Role | Start value |
|---|---|---|
| `--color-bg` | warm background base | `#F3E9D8` |
| `--color-wood` | wood/warm accent 1 (buttons, icons) | `#C8884B` |
| `--color-forest` | forest/nature co-accent (sections, lines, hover, nature motifs) | `#3E5A40` |
| `--color-terracotta` | deep warm accent (primary CTAs, details) | `#A65A3A` |
| `--color-mist` | fog neutral | `#B8BCA8` |
| `--color-text` | cocoa-brown text (not black) | `#3A2E26` |

Usage logic: **wood/amber** = warmth + buttons/icons; **forest green** = section accents and "play with forest & trees" (lines, icons, background nature elements, hovers); **terracotta** = primary CTAs only; balance green ↔ wood so warmth isn't saccharine and nature isn't cold.

**Typography tokens:**
- `--font-heading: "Fraunces", serif;` (warm character — cozy/rustic)
- `--font-body: "Lato", sans-serif;` (calm, readable)
- Type scale tokens: `--text-h1`, `--text-h2`, `--text-h3`, `--text-body`, `--text-small` (+ line-heights, weights) — centralized so scale changes don't touch components.

**Shape / depth / motion tokens:**
- `--radius-sm`, `--radius-md`, `--radius-lg` (large soft rounding is part of the identity)
- `--shadow-soft`, `--shadow-card` (enveloping soft shadows)
- `--space-*` spacing scale
- `--motion-duration`, `--motion-ease` (warm ease-out), used by all animations

> **Why tokens:** the client wants to experiment freely with colors and fonts later. Both palette and typography must be changeable from one place.

### 8.3 SCSS architecture
```
src/styles/
  tokens/    _colors.scss  _typography.scss  _radius.scss  _shadows.scss  _spacing.scss  _motion.scss
  base/      _reset.scss   _global.scss      _typography.scss
  utils/     _mixins.scss  _functions.scss
  blocks/    _header.scss  _hero.scss        _accommodation.scss  _activities.scss
             _menu.scss    _contact.scss     _booking.scss        _footer.scss
             _buttons.scss _cards.scss       _landing.scss
  main.scss  // @use / @forward — assembles everything
```
Rules:
- **Styles live in dedicated SCSS files, NOT inside components.** Components reference semantic classes; they do not carry inline `<style>` with raw rules.
- **Semantic, BEM-like class names:** `.hero`, `.hero__title`, `.card`, `.btn`, `.btn--primary`.
- **Reuse via mixins / shared blocks:** buttons, cards, section wrappers defined once in `utils`/`blocks` and reused — change in one place.
- Tokens flow: SCSS variables/maps → emitted to `:root` as CSS custom properties → consumed as `var(--token)`.

### 8.4 Anti-hardcode acceptance criteria
- **No raw hex colors** in block styles — only `var(--color-*)`.
- **No magic numbers** for spacing/radius/shadow in blocks — only tokens.
- **No font-family literals** in blocks — only `var(--font-*)`.
- **No utility classes** (Tailwind absent) and **no inline `<style>`** with hardcoded values in components.
- Changing the 6 color tokens + 2 font tokens visibly restyles the entire site with no per-component edits.

### 8.5 Motion
- **Targeted parallax** where it strengthens atmosphere: **hero** (mountain + fog layers, different speeds), optionally 1–2 nature sections. Not everywhere.
- **Subtle reveals:** fade-in + small `translateY` on section enter; gentle hover on cards/buttons.
- **Performance/a11y:** animate only `transform`/`opacity`; honor `prefers-reduced-motion` (disable parallax + reveals); durations/easing from motion tokens.

---

## 9. Security, Privacy & Compliance

- **GDPR / cookie consent:** EU audience → a consent mechanism for analytics. GA4 loads **only after consent**. (Legal review of policy texts is out of scope; provide placeholder Privacy Policy page/text `[MOCK]` if referenced in footer.)
- **Forms:** honeypot anti-spam; no PII in URL query strings; submit over HTTPS (Netlify default).
- **Third-party iframes (Bentral, Maps):** loaded with appropriate `title`, `loading="lazy"` where possible; do not pass user PII to them.
- **Headers:** sensible defaults via Netlify (`_headers`) — basic CSP-friendly setup compatible with Bentral/Maps/GA (document any required allowances).
- **No secrets in repo:** GA ID and any keys via env/placeholder, not committed.

**Acceptance:** Analytics gated behind consent; no PII in query strings; iframes are titled and lazy where feasible.

---

## 10. Development Phases / Milestones

Mapped to the contract's three-installment structure (avans / vmesna faza / predaja).

**Phase 0 — Setup**
- Astro project, React + MDX + SCSS + sitemap integrations, Netlify config.
- Token layer (`tokens/*`), base styles, fonts (Fraunces/Lato), global layout (header/footer + map).
- i18n scaffold (en dictionary, routing ready, switcher stub).
- *Deliverable:* running skeleton, design tokens live, global chrome.

**Phase 1 — Core pages (interim milestone / 2nd installment)**
- Home, Accommodation (slider), Activities, Menu (online + PDF), Contact (Netlify form).
- Booking page with `BentralEmbed` placeholder.
- SCSS blocks per section; motion (hero parallax + reveals).
- *Deliverable:* all public pages content-complete with `[MOCK]`, responsive.

**Phase 2 — Landing, SEO, analytics, QA (handover / 3rd installment)**
- Hidden advertising landing (`/lp`, noindex, booking CTA, swappable CTA component).
- SEO (meta/OG/sitemap/robots/JSON-LD), GA4 + consent + ads prep.
- Cross-browser + responsive + form QA.
- *Deliverable:* launch-ready build; DNS/domain + real Bentral embed + content inserted by Webline/client.

---

## 11. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Rustic style reads "cheap/dated" | Clean structure, generous whitespace, large warm photography; rustic via atmosphere not clutter |
| Bentral embed styling/responsiveness limits | Isolate in `BentralEmbed`; frame around it; don't fight widget internals; set min-height |
| `[MOCK]` content shipped to production by mistake | Tag every placeholder `[MOCK]` + `TODO`; pre-launch checklist to grep for `[MOCK]` |
| Hardcoded styles creep in | Anti-hardcode acceptance criteria + token-only rule enforced in review |
| Hidden landing accidentally indexed | `noindex,nofollow` + sitemap exclusion + robots disallow; verify in QA |
| i18n retrofit pain | Strings in dictionary, content collections locale-ready, Astro i18n routing scaffolded now |
| Consent vs GA compliance | GA loads only post-consent |
| Map/iframe performance hit | Lazy-load iframes; optimize/`srcset` images |

---

## 12. Future Expansion Opportunities

- Activate **SI (and RU)** localization via the prepared i18n layer + switcher.
- Swap hidden-landing CTA from booking to **inquiry/offer capture** as campaign goals evolve (already componentized).
- Add **CMS** (e.g. Decap) over MDX if the client later wants self-editing (currently out of scope).
- Add a **blog** for SEO (out of scope now).
- Wire **Meta Pixel / conversion tracking** for active campaigns.
- Telegram lead notifications (Webline's standard pattern) in addition to email, if desired.

---

## 13. Global Build Constraints (must-follow summary for the agent)

1. **Do NOT generate real marketing copy.** All text is short `[MOCK]` placeholder with a `TODO`.
2. **Do NOT invent factual claims** (distances, awards, amenities) — placeholders only.
3. **No Tailwind.** Classic SCSS, block files, tokens, mixins.
4. **No hardcoded colors/fonts/radii/spacing** in blocks — tokens only.
5. **Styles in dedicated SCSS files**, not inside components.
6. **EN only** now; language switcher is a stub; keep i18n-ready.
7. **Bentral** and **contacts** and **logo** are `[MOCK]`/placeholder; domain set by Webline (`SITE_URL`).
8. **Hidden landing** is `noindex,nofollow`, excluded from sitemap & nav; CTA = booking, swappable.
9. **Map in footer** on every page.
10. **Mobile-first, accessible** (aria, focus, `prefers-reduced-motion`), performant (transform/opacity, lazy media).

---

*End of PRD v1.0 — ready for AI-agent execution. Replace all `[MOCK]`/`TODO` markers before production launch.*
