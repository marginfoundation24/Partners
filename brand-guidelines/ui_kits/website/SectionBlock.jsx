/* global React */
function SectionBlock({ eyebrow, title, lede, children, wide, surfaceClass = '' }) {
  return (
    <section className={`fdn-section ${wide ? 'fdn-section--wide' : ''} ${surfaceClass}`}>
      <div className="fdn-container fdn-section__grid">
        <div className="fdn-section__label">
          {eyebrow && <div className="fdn-eyebrow">{eyebrow}</div>}
          <h2 className="fdn-section__title">{title}</h2>
          {lede && <p className="fdn-section__lede">{lede}</p>}
        </div>
        <div className="fdn-section__spacer" aria-hidden />
        <div className="fdn-section__content">{children}</div>
      </div>
    </section>
  );
}

window.FoundationSectionBlock = SectionBlock;
