/* global React, FoundationIcons */
function CTAPanel() {
  const { ArrowRight } = FoundationIcons;
  return (
    <section className="fdn-cta">
      <div className="fdn-container fdn-cta__inner">
        <div className="fdn-cta__copy">
          <div className="fdn-eyebrow fdn-cta__eyebrow">Let's Talk</div>
          <h2 className="fdn-cta__headline">
            Ready to build a content<br />engine that compounds?
          </h2>
          <p className="fdn-cta__lede">
            We work with a handful of ambitious B2B teams each quarter.
            Tell us about your goals — we'll tell you whether we're the right fit.
          </p>
        </div>
        <div className="fdn-cta__actions">
          <button className="fdn-btn fdn-btn--coral fdn-btn--lg">Book A Call</button>
          <a className="fdn-cta__secondary" href="#">Or browse case studies →</a>
        </div>
      </div>
    </section>
  );
}

window.FoundationCTAPanel = CTAPanel;
