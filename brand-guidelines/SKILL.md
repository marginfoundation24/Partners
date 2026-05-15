---
name: foundation-design
description: Use this skill to generate well-branded interfaces and assets for Foundation Marketing, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand:** Foundation Marketing — a B2B content marketing agency.
- **Tone:** confident, plain-spoken, em-dash-y. We-voice for the agency, you-voice for the reader. No emoji.
- **Default surface:** dark — `--primary-800` (`#071a31`) or `--primary-700` (`#0e2c50`). Coral (`#dd6052`) is the only accent — use sparingly.
- **Type:** IBM Plex Sans (as a free substitute for Avenir, paid) for web; Fjalla One + Barlow for decks/proposals.
- **Iconography:** Lucide, 2px stroke, currentColor.
- **Drop-in stylesheet:** link `colors_and_type.css` and use the CSS vars + semantic element styles. Everything else composes on top.

## Files of interest

- `colors_and_type.css` — design tokens.
- `assets/` — logos, brand illustrations.
- `ui_kits/website/` — modular JSX components for marketing pages (hero, navbar, footer, section blocks, color swatch hero, CTA card).
- `preview/` — card-sized specimens of each token / component, useful for sanity-checking changes.

## Working notes for agents

- ⚠️ **Avenir substitution**: Avenir is the brand's declared web typeface but is paid. We default to IBM Plex Sans (same substitute the brand guidelines site uses). When handing off, flag this so the client can decide whether to license Avenir.
- Do not invent gradients, drop shadows, glassmorphism, or photography — none of those appear in the brand identity.
- Section labels are ALL CAPS, wide-tracked. Headlines are sentence/title case. Primary CTAs are ALL CAPS.
- When pulling illustrations, lean on the four spot illustrations in `assets/` (Hero, Marketing Strategy, Content Creation, Campaign Promotion). For new spots, ask the user — do not generate replacements.
