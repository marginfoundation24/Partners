/* global React, FoundationIcons */

// Centered hero used on Case Studies, Insights, etc. landing pages.
// Title + lede + coral CTA with a thumbs-up icon (production signature).
function PageHero({ title, lede, ctaLabel = 'Learn How We Can Help', ctaIcon = 'ThumbsUp' }) {
  const Icon = FoundationIcons[ctaIcon];
  return (
    <section className="fdn-page-hero">
      <div className="fdn-container">
        <h1 className="fdn-page-hero__title">{title}</h1>
        <p className="fdn-page-hero__lede">{lede}</p>
        <button className="fdn-btn fdn-btn--coral fdn-btn--lg">
          {ctaLabel}
          {Icon && <Icon size={18} />}
        </button>
      </div>
    </section>
  );
}

// Alternating image/text row used to list case studies on the landing
// page. The image side flips for every-other entry.
function CaseStudyRow({ title, body, image, ctaLabel, flip = false }) {
  return (
    <section className={`fdn-cs-row ${flip ? 'fdn-cs-row--flip' : ''}`}>
      <div className="fdn-container fdn-cs-row__grid">
        <div className="fdn-cs-row__copy">
          <h2 className="fdn-cs-row__title">{title}</h2>
          <p className="fdn-cs-row__body">{body}</p>
          <button className="fdn-btn fdn-btn--coral fdn-btn--lg fdn-cs-row__cta">{ctaLabel}</button>
        </div>
        <div className="fdn-cs-row__art">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

window.FoundationPageHero = PageHero;
window.FoundationCaseStudyRow = CaseStudyRow;
