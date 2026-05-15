/* global React, FoundationIcons */

// Production-style hero: centered headline, quick-link bar above,
// trust badges below, hero illustration optionally to the right.
function Hero({ variant = 'centered' }) {
  if (variant === 'split') return <HeroSplit />;
  return <HeroCentered />;
}

function HeroCentered() {
  const quickLinks = ['How We Help Clients', 'Our Approach', 'Our Insights', 'Contact Us'];
  return (
    <section className="fdn-hero fdn-hero--centered">
      <div className="fdn-container">
        <div className="fdn-hero__quicklinks">
          {quickLinks.map(l => <a key={l} href="#" className="fdn-hero__quicklink">{l}</a>)}
        </div>
        <h1 className="fdn-hero__headline">
          Digital Marketing Agency for<br />B2B Brands
        </h1>
        <p className="fdn-hero__lede">
          We're a strategic partner for B2B brands that drives organic growth
          through digital marketing.
        </p>
        <div className="fdn-hero__badges">
          {window.FoundationTrustBadges && <window.FoundationTrustBadges />}
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  const { ArrowRight } = FoundationIcons;
  return (
    <section className="fdn-hero fdn-hero--split">
      <div className="fdn-container fdn-hero__split-grid">
        <div className="fdn-hero__copy">
          <h1 className="fdn-hero__headline">
            We Build Content<br />Marketing Strategies<br />for Brands
          </h1>
          <p className="fdn-hero__lede">We build content marketing strategies that help brands win.</p>
          <p className="fdn-hero__lede">
            Our content marketing strategies are insightful, tactical, and tailored
            around moving the needle for your business. We prioritize your business
            goals and use strategies that are known to deliver results.
          </p>
          <button className="fdn-btn fdn-btn--coral fdn-btn--lg">Book Intro Call</button>
          <div className="fdn-hero__badges fdn-hero__badges--compact">
            {window.FoundationTrustBadges && <window.FoundationTrustBadges />}
          </div>
        </div>
        <div className="fdn-hero__art">
          <div className="fdn-hero__art-frame">
            <img src="../../assets/hero-illustration.svg" alt="Foundation's digital marketing engine" />
          </div>
        </div>
      </div>
    </section>
  );
}

window.FoundationHero = Hero;
