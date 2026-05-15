/* global React */

// Trust badges row — sits under the hero copy. The production site uses
// awarded badges from LinkedIn, Moz, Semrush, Clutch, Reddit. Here we draw
// simple placeholder badges with the same visual rhythm; swap PNGs in once
// they're provided.
function TrustBadges() {
  const badges = [
    { color: '#C4923B', label: 'LinkedIn',  sub: 'Fundamentals\nCertified' },
    { color: '#2E5C99', label: 'MOZ',       sub: 'Recommended\nCompany' },
    { color: '#6B3FA0', label: 'SEMRUSH',   sub: 'Certified Agency\nPartner' },
    { color: '#4F8C3C', label: 'LinkedIn',  sub: 'Marketing Strategy\nCertified' },
    { color: '#D77A4B', label: 'Reddit',    sub: 'Agency\nPartner' },
    { color: '#1F3A4D', label: 'Clutch 100',sub: 'Fastest Growth\n2026' },
  ];
  return (
    <div className="fdn-badges">
      {badges.map((b, i) => (
        <div key={i} className="fdn-badge" style={{ background: b.color }}>
          <div className="fdn-badge__title">{b.label}</div>
          <div className="fdn-badge__sub">{b.sub}</div>
        </div>
      ))}
    </div>
  );
}

window.FoundationTrustBadges = TrustBadges;
