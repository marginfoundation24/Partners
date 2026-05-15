# Foundation Website UI Kit

JSX components that recreate the Foundation Marketing visual language for the **website** product. Use this kit to compose new co-branded landing pages, campaign microsites, and case-study pages.

## Files
- `index.html` — homepage composition: navbar, centered hero, 4-step process, logos, stats, split hero, services, CTA, footer. **Open this to preview.**
- `case-studies.html` — Case Studies landing page: centered page hero + three alternating image/text rows.
- `Navbar.jsx` — bracketed `[FOUNDATION]` lockup, dropdown nav, coral CTA, right-anchored search.
- `Hero.jsx` — two variants: `centered` (homepage with quick-link bar + trust badges) and `split` (illustration right + book-intro-call CTA).
- `ProcessSteps.jsx` — ★ signature 4-step (Research/Create/Distribute/Optimize) pill + color-blocked-card pattern.
- `TrustBadges.jsx` — partner / award badges row.
- `CaseStudyComponents.jsx` — `PageHero` + alternating `CaseStudyRow`.
- `SectionBlock.jsx` — 35/15/50 (or 28/4/62 with `wide`) eyebrow+title+content layout.
- `ServiceCard.jsx` — card used in service grids.
- `LogoStrip.jsx` — Foundation's real client lockups (Snowflake, Canva, Mailchimp, Procore, Webex, Paychex, Rockwell, Bitly, Tidio, Flourish, STAT, Buildxact).
- `StatBlock.jsx` — big-number stat block.
- `CTAPanel.jsx` — beige end-of-page CTA card.
- `Footer.jsx` — black footer with link columns + bracketed wordmark.
- `Icons.jsx` — inline Lucide-style stroke icons.
- `kit.css` — every component style (uses tokens from `../../colors_and_type.css`).

## Conventions
- Components are functional, take a `className` prop where useful, and expose minimal interactive state (open/closed menu, search focus). They are **cosmetic** — no real network or routing.
- All styling pulls from `../../colors_and_type.css`. The kit does not redefine tokens.
- Default surface is dark (`--primary-800`). Light variants exist where the brand site uses them.
- Iconography uses inline Lucide SVGs. Swap for `lucide-react` in production.

## Iteration history
1. First pass: laid out the 4 marquee sections (hero, services, illustration showcase, CTA + footer).
2. Tightened type scale to match brand site (heading-01 56px, paragraph-03 18px) and added the section-label 35/15/50 grid.
