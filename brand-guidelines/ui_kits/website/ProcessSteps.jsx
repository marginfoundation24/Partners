/* global React, FoundationIcons */

// The Foundation production site's signature visual: four pill-shaped
// step labels above four matching color-blocked cards. Coral/azure/beige/sky.
function ProcessSteps() {
  const { Search, Pen, Network, Frame } = FoundationIcons;
  const steps = [
    {
      n: '01', label: 'Research', icon: Search,
      bg: 'var(--secondary-500)', fg: '#fff',
      items: ['Keyword Research', 'Social Research', 'Audience Research', 'Community Research',
              'Competitive Research', 'SERP Research', 'Backlink Research', 'Social Share Research'],
    },
    {
      n: '02', label: 'Create', icon: Pen,
      bg: 'var(--primary-500)', fg: '#fff',
      items: ['Long Form Blog Posts', 'Short Form Blog Posts', 'Social Media Content', 'Research Assets',
              'Presentations', 'Video Content', 'Infographics', 'Webinars', 'Graphics', 'Quizzes'],
    },
    {
      n: '03', label: 'Distribute', icon: Network,
      bg: 'var(--color-beige)', fg: 'var(--primary-800)',
      items: ['Media Relationship', 'Backlink Acquisition', 'Newsletter Distro', 'LinkedIn Content',
              'Sponsorships', 'Newsletters', 'YouTube', 'Reddit', 'Sales', 'X'],
    },
    {
      n: '04', label: 'Optimize', icon: Frame,
      bg: 'var(--color-sky-blue)', fg: 'var(--primary-800)',
      items: ['Social Optimization', 'Conversion Rate', 'Content Refresh', 'Data Updates',
              'Link Updates', 'On-site SEO', 'Off-site SEO', 'Local SEO'],
    },
  ];

  return (
    <section className="fdn-process">
      <div className="fdn-container">
        <div className="fdn-process__pills">
          {steps.map((s, i) => {
            const I = s.icon;
            return (
              <div key={s.n} className="fdn-process__pill" style={{ background: s.bg, color: s.fg }}>
                <span className="fdn-process__pill-number">{s.n}</span>
                <span className="fdn-process__pill-label">{s.label}</span>
                <span className="fdn-process__pill-icon" aria-hidden>
                  <I size={18} />
                </span>
              </div>
            );
          })}
        </div>
        <div className="fdn-process__cards">
          {steps.map(s => (
            <div key={s.n} className="fdn-process__card" style={{ background: s.bg, color: s.fg }}>
              <ul>
                {s.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.FoundationProcessSteps = ProcessSteps;
