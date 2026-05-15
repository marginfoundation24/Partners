/* global React */
function Footer() {
  const cols = [
    { title: 'Services', items: ['Strategy', 'Content Creation', 'Distribution', 'Analytics'] },
    { title: 'Work',     items: ['Case Studies', 'Industries', 'Approach'] },
    { title: 'Company',  items: ['About', 'Team', 'Careers', 'Contact'] },
    { title: 'Resources',items: ['Insights', 'Newsletter', 'Brand Kit'] },
  ];
  const Wordmark = window.FoundationBracketedWordmark;
  return (
    <footer className="fdn-footer">
      <div className="fdn-container fdn-footer__inner">
        <div className="fdn-footer__brand">
          {Wordmark ? <Wordmark size={22} /> : <span style={{font:'800 22px var(--font-primary)'}}>[FOUNDATION]</span>}
          <p>Content marketing that helps B2B brands shape culture — internally and externally.</p>
        </div>
        <div className="fdn-footer__cols">
          {cols.map(c => (
            <div key={c.title} className="fdn-footer__col">
              <div className="fdn-eyebrow">{c.title}</div>
              <ul>{c.items.map(i => <li key={i}><a href="#">{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="fdn-container fdn-footer__base">
        <span>© Foundation Marketing, Inc.</span>
        <span className="fdn-footer__legal">
          <a href="#">Privacy</a><span>·</span><a href="#">Terms</a><span>·</span><a href="#">Brand</a>
        </span>
      </div>
    </footer>
  );
}

window.FoundationFooter = Footer;
