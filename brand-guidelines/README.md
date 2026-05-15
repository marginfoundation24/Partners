# Foundation Design System

Co-branding kit for **Foundation Marketing** — a content marketing firm that helps B2B brands plan, create, and distribute content that shapes culture. This system captures Foundation's visual + verbal identity so we can confidently build co-branded landing pages, decks, proposals, and campaign creative *with* (not *for*) the Foundation team.

> Foundation Marketing is a content marketing firm that helps B2B brands plan, create, and distribute content that shapes culture. We're a team of strategists, writers, planners, analysts, art directors, builders, and dreamers — who work together to help ambitious brands unlock success through content initiatives that actually move the needle.

## Sources used to build this system

These are the materials provided by the customer foundation. Store them, but assume the reader does not have access.

- **Logo SVG** — `uploads/logo.svg` (vector wordmark, single color `#ffeae1`).
- **Brand guidelines microsite** — <https://foundation-brand-guidelines.vercel.app/>
  Single long-scroll page with Logo, Typography, Colors, Illustration, and Presentation Deck sections. All values in `colors_and_type.css` were lifted verbatim from the site's compiled Tailwind theme.
- **Illustration library** (Google Drive) — <https://drive.google.com/drive/folders/1kMSWSibuUMmvwf8qtcO5brTZdcBh7yo4?usp=drive_link>
  Three samples (Marketing Strategy / Content Creation / Campaign Promotion) live in `assets/`. The full set should be pulled in when access is granted.

No codebase, Figma, or PDF was supplied — everything else was reconstructed from the brand guidelines site's compiled CSS/JS.

---

## Products

Foundation has a **single primary surface**: the **marketing website**. Decks, proposals, and campaign collateral share its identity but use a slightly different type stack (Fjalla One + Barlow) for print/presentation legibility.

- `ui_kits/website/` — React/JSX recreation of Foundation-style marketing site components (hero, section blocks, navbar, footer, illustration sections, CTA card). Use this as the basis for co-branded landing pages.

---

## Content Fundamentals

The verbal identity is **confident, plain-spoken, and a little bit warm**. Foundation is selling expertise *without* posturing.

**Voice traits**
- **We-voice for the agency, you-voice for the reader.** "We work with ambitious brands." "You'll find all the approved logos…here."
- **No jargon.** Sentences read aloud. The site uses "ambitious brands that have stories worth sharing" instead of "high-growth B2B verticals."
- **Em-dashes earn their keep** — used to land a clarifying punch, not as a tic. e.g. *"Foundation isn't just strategy — it's real-world execution."*
- **Action-forward verbs:** plan, create, distribute, unlock, shape, walk the walk, move the needle.
- **One concrete promise per paragraph.** Each marketing paragraph makes a claim *and* names what makes it credible.

**Casing**
- **Section headers**: title case sentence fragments, e.g. *"Who We're, What We're Doing"*.
- **Eyebrow labels**: ALL CAPS, wide tracking (`letter-spacing: 0.18em`), e.g. **BRAND GUIDELINES**, **VISUAL IDENTITY**.
- **Body**: sentence case. Foundation does not capitalize random nouns.
- **CTAs**: ALL CAPS for primary actions in marketing surfaces (`EXPLORE LIBRARY`, `DOWNLOAD`).

**Person**
- First-person plural (*we*) when speaking as Foundation.
- Second person (*you*) when speaking to the audience.
- Never third-person about Foundation (no *"the company believes"*).

**No emoji.** No ironic punctuation, no exclamation points outside of CTAs. Foundation reads like an editor, not a hype account.

**Sample passages** (lifted from the brand site)

> "Welcome to the official Foundation brand guide — your go-to source for staying on-brand and looking great while doing it."

> "We walk the walk. Rather than simply preaching marketing theory, we live it day-to-day by partnering with the brands we believe in. Foundation isn't just strategy — it's real-world execution."

> "From growing startups to global leaders, we help them communicate through content creation and strategic distribution."

When writing co-branded landing pages, lean on this rhythm: a short declarative sentence, an em-dash clarifier, then a concrete proof point.

---

## Visual Foundations

### Color
**The production site lives on pure black with cream text.** This is the headline correction after seeing the real foundationinc.co — the brand-guidelines microsite is its own contained piece (dark navy), and decks/proposals use the navy palette, but **the main marketing surface is black + cream + coral**.

- **Page background:** `--site-bg` `#000000`.
- **Primary text:** `--site-fg` `#FFEAE1` (cream — the same fill as the logo SVG). Body text uses this color at full opacity for headlines and ~72% opacity (`--site-fg-dim`) for paragraphs.
- **Primary CTA:** coral `--secondary-500` `#DD6052`. All "BOOK A CALL" / "BOOK INTRO CALL" / primary action buttons are coral with white text.
- **Color-blocked cards:** the production site's signature pattern is four hard-edged color blocks — Coral, Azure, Beige, Sky Blue — for the four-step process component (Research / Create / Distribute / Optimize). These four are the *canonical* highlight palette.
- **Navy/azure scale** stays valuable but is reserved for: the brand-guidelines microsite, deck templates, and the secondary product card (`02 CREATE`).

Light surfaces are rare and only appear in dropdowns/tooltips. There is no "light mode" of the site itself.

### Type
- **Web** — Avenir (paid). The brand site substitutes **IBM Plex Sans** at runtime and so do we. The production site's bold display weight is set in IBM Plex Sans **Bold 700**. Body copy is **Regular 400 / 18px / 150% line-height** in the same family. Tracking is normal-to-tight (-0.015em on headlines).
- **Wordmark** — `[FOUNDATION]` is a *custom lockup*, not a typeface. The brackets are integral. Always use the SVG/PNG; never recreate in type.
- **Decks + proposals** — Fjalla One (display) + Barlow (body). Only on slides.

⚠️ **Avenir substitution** — same as before. IBM Plex Sans is the substitute the brand site uses; we follow suit. Flag at handoff.

### Backgrounds
- **Flat black** is the default canvas. Almost every section is `#000`.
- **Color-blocked panels** (coral / azure / beige / sky) used for the process-step component — sharply-defined, no gradients, no shadows on the panels themselves.
- **Photography exists** on the production site (header image of a coffee shop, etc.) but is used sparingly as section dividers, not as full-bleed backgrounds.
- **Illustrations** (the chunky vector character spots in `assets/Marketing Strategy.svg`, etc.) sit on their own contained color blocks, often coral or azure tinted.
- **No gradients, no glassmorphism, no noise/grain, no repeating patterns.**

### Animation
- Entrance: 600ms `cubic-bezier(0.22, 1, 0.36, 1)` opacity + scale 0.95→1.
- UI hover: 220ms `cubic-bezier(0.4, 0, 0.2, 1)`.
- Back-to-top button (bottom-right, green-teal pill) — fades in on scroll.
- No bounces, no parallax, no scroll-jacking.

### Hover & press states
- **Primary coral CTA:** slight darkening + cursor pointer. No transform.
- **Nav links:** dropdown caret rotates 180° on hover/open. Underline never used.
- **Text links:** color shifts from cream → coral.
- **Cards:** no hover state in the four-block process component (they are *decorative* color blocks, not interactive cards). On clickable cards, a 2px translate-y lift is acceptable.

### Borders & dividers
- Hairlines are `rgba(255, 234, 225, 0.20)` — very subtle, used for the "How We Help Clients / Our Approach / …" pill-shaped quick-link bar in the hero.
- Section separation is by whitespace + (occasionally) photography, not lines.

### Shadow system
- The production site uses **virtually no shadow**. The illustration container has an offset dark-card behind it for depth — that's stylistic, not a generalizable shadow rule.
- Keep `--shadow-card` / `--shadow-pop` for modal/dropdown use only.

### Corner radii
- **Pill-shaped:** primary CTAs (coral buttons), quick-link bars in hero, process-step labels.
- **`--radius-md` (10px):** search input.
- **`--radius-xl` (20px+):** the large color-blocked process cards. Generously rounded.
- **`--radius-lg` (12px):** misc cards, illustration containers.

### Transparency & blur
- Used sparingly. The search input on dark uses `rgba(255, 234, 225, 0.06)` (subtle cream wash). No backdrop-filter blur.

### Imagery / illustration mood
- Two distinct illustration libraries:
  1. **Chunky character spots** (production-site style) — bold flat color, character-driven, coral + azure + black accents. The "guy with glasses on tablet" hero illustration. These feel more retro/editorial than the brand-guideline set.
  2. **Brand-guideline spot illustrations** (cream/beige/coral, more delicate) — the Marketing Strategy / Content Creation / Campaign Promotion set in `assets/`. Use for the guidelines microsite and matching decks.
- No photography in the brand identity surfaces; the rare photography (the coffee-shop image) is purely a section divider.

### Cards
- **Color-blocked process card:** generous radius (~20px), bold solid fill, list of short labels stacked inside at 18-22px. No border, no shadow.
- **Dark surface card:** `--bg-surface` (`#0a0a0a`) on black, ~12px radius, internal padding 24-28px, no shadow.
- **Beige CTA card:** end-of-page section style, `--color-beige` fill, primary-800 type.

### Hand-drawn annotations
- The production site uses a **hand-drawn orange circle + arrow + handwritten label** to call out specific items ("Most 'content marketing agencies' just do this"). This is a *brand-distinctive* element. Use sparingly to add personality.

### Layout rules
- Sections breathe a lot — 96-132px between blocks.
- Hero copy and visuals are laid out asymmetrically: copy left-anchored, illustration right-anchored, with intentional negative space.
- Container max-width 1440px; side padding scales from 24px (mobile) to ~96px (desktop).
- Trust-badge row sits directly under the hero copy block.

---

## Iconography

Foundation uses **Lucide React** icons. Confirmed from compiled markup on the brand site: `class="lucide lucide-search w-5 h-5 text-neutral-50"` with the search-icon path inlined as SVG. Stroke icons, 2px stroke, rounded line caps and joins.

- **Icon set:** [Lucide](https://lucide.dev) — load via CDN <https://unpkg.com/lucide@latest> or `lucide-react` in JSX builds.
- **Sizing:** 20px (`w-5 h-5`) is the default in nav and inline-with-text positions. 24px and 32px appear in feature blocks.
- **Color:** stroke uses `currentColor` so icons inherit text color.
- **Stroke weight:** 2px. **Linecap/join:** round.
- **No emoji.** **No unicode glyph icons.** **No icon font.**
- **Custom illustrations** (large vector scenes) are a separate system — full-color SVGs in `assets/` (Marketing Strategy, Content Creation, Campaign Promotion). They are *not* icons; they are illustration spots used inside section blocks.

### Logo assets in `assets/`
- `logo.svg` — single-color wordmark provided by the customer (used on cream/coral backgrounds).
- `logo-wordmark-light.png` — wordmark for **dark** backgrounds (white-on-dark wordmark).
- `logo-wordmark-dark.png` — wordmark for **light** backgrounds (dark-on-light wordmark).
- `logo-brandmark-light.png` — square brandmark for **dark** backgrounds.
- `logo-brandmark-dark.png` — square brandmark for **light** backgrounds.
- `logo-primary.png` — primary lockup as displayed in the brand site navbar.

> ℹ️ Brand site filenames are slightly misleading: "light" = use on dark, "dark" = use on light. Naming preserved verbatim for traceability.

### Illustration assets in `assets/`
- `Hero-image.svg` — hero illustration (people working, coral / beige / blue).
- `Marketing Strategy.svg` — section illustration.
- `Content Creation.svg` — section illustration.
- `Campaign Promotion.svg` — section illustration (heaviest — character spot).
- `avenir.svg`, `Fjalla One.svg`, `barlow.svg` — typography specimen SVGs from the brand guide.

---

## Index — what's in this folder

| Path | Purpose |
| --- | --- |
| `README.md` | This file. Brand context, voice, visual foundations. |
| `SKILL.md` | Agent Skills frontmatter so this system is invocable in Claude Code / other agents. |
| `colors_and_type.css` | All design tokens (color, type, spacing, radii, easing). Drop-in stylesheet. |
| `assets/` | Logos, brand illustrations, type specimens. |
| `preview/` | Design-system tab cards (color swatches, type specimens, components). |
| `ui_kits/website/` | JSX components + `index.html` that recreates a Foundation-style marketing page. |
| `research/` | Raw extracted CSS + page.js from the brand guidelines site, for traceability. |

