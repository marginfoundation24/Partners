/* global React */

// Real Foundation clients. Wide lockups + a few square marks.
const CLIENT_LOGOS = [
  { name: 'Snowflake', file: 'snowflake.svg', h: 24 },
  { name: 'Canva',     file: 'canva.svg',     h: 32, square: true },
  { name: 'Mailchimp', file: 'mailchimp.svg', h: 24 },
  { name: 'Procore',   file: 'procore.svg',   h: 14 },
  { name: 'Webex',     file: 'webex.svg',     h: 22 },
  { name: 'Paychex',   file: 'paychex.svg',   h: 18 },
  { name: 'Rockwell',  file: 'rockwell.svg',  h: 24 },
  { name: 'Bitly',     file: 'bitly.svg',     h: 28 },
  { name: 'Tidio',     file: 'tidio.svg',     h: 28 },
  { name: 'Flourish',  file: 'flourish.svg',  h: 26 },
  { name: 'STAT',      file: 'stat.svg',      h: 26 },
  { name: 'Buildxact', file: 'bx.svg',        h: 22 },
];

function LogoStrip({ logos = CLIENT_LOGOS, label = 'Trusted by ambitious brands' }) {
  return (
    <div className="fdn-logo-strip">
      {label && <div className="fdn-eyebrow fdn-logo-strip__label">{label}</div>}
      <div className="fdn-logo-strip__row">
        {logos.map(l => (
          <img key={l.name}
               src={`../../assets/clients/${l.file}`}
               alt={l.name}
               style={{ height: l.h, width: 'auto', opacity: 0.86 }} />
        ))}
      </div>
    </div>
  );
}

window.FoundationLogoStrip = LogoStrip;
window.FoundationClientLogos = CLIENT_LOGOS;
