/* global React, FoundationIcons */
const { useState } = React;

// Bracketed FOUNDATION lockup — the brackets are integral to the mark.
// Drawn inline in CSS so the wordmark stays sharp at any size.
function BracketedWordmark({ size = 22 }) {
  return (
    <span className="fdn-wordmark" style={{ fontSize: size, ['--wm-pad']: `${size * 0.36}px` }}>
      <span className="fdn-wordmark__bracket fdn-wordmark__bracket--l" aria-hidden />
      <span className="fdn-wordmark__text">FOUNDATION</span>
      <span className="fdn-wordmark__bracket fdn-wordmark__bracket--r" aria-hidden />
    </span>
  );
}

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { Search, Menu, X, ChevronDown } = FoundationIcons;
  const links = [
    { label: 'Industries', items: ['SaaS', 'Fintech', 'B2B Marketplaces', 'Healthcare'] },
    { label: 'Services',   items: ['Strategy', 'Content Creation', 'Distribution', 'Analytics'] },
    { label: 'Key Insights', items: ['Articles', 'Reports', 'Frameworks'] },
    { label: 'Company',    items: ['About', 'Team', 'Careers', 'Contact'] },
  ];
  return (
    <header className="fdn-navbar">
      <div className="fdn-navbar__inner">
        <a className="fdn-navbar__brand" href="#" aria-label="Foundation">
          <BracketedWordmark size={20} />
        </a>
        <nav className="fdn-navbar__links">
          {links.map(l => (
            <div key={l.label} className="fdn-navbar__link-group"
                 onMouseEnter={() => setOpenMenu(l.label)}
                 onMouseLeave={() => setOpenMenu(null)}>
              <button className="fdn-navbar__link" aria-haspopup="true" aria-expanded={openMenu === l.label}>
                {l.label} <ChevronDown size={14} />
              </button>
              {openMenu === l.label && (
                <div className="fdn-navbar__dropdown">
                  {l.items.map(i => <a key={i} href="#" className="fdn-navbar__dropdown-item">{i}</a>)}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="fdn-navbar__actions">
          <button className="fdn-btn fdn-btn--coral fdn-btn--sm">Book A Call</button>
          <div className="fdn-navbar__search">
            <Search size={16} />
            <input placeholder="What are you looking for?" />
          </div>
          <button className="fdn-navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="fdn-navbar__mobile-sheet">
          {links.map(l => <a key={l.label} href={`#${l.label}`} className="fdn-navbar__mobile-link">{l.label}</a>)}
        </div>
      )}
    </header>
  );
}

window.FoundationBracketedWordmark = BracketedWordmark;
window.FoundationNavbar = Navbar;
