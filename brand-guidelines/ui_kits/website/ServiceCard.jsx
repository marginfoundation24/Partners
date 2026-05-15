/* global React, FoundationIcons */
function ServiceCard({ icon, title, body, items = [] }) {
  const { ArrowUpRight, Check } = FoundationIcons;
  const Icon = icon ? FoundationIcons[icon] : null;
  return (
    <article className="fdn-service">
      <div className="fdn-service__head">
        {Icon && <span className="fdn-service__icon"><Icon size={22} /></span>}
        <h3 className="fdn-service__title">{title}</h3>
      </div>
      <p className="fdn-service__body">{body}</p>
      {items.length > 0 && (
        <ul className="fdn-service__items">
          {items.map(it => (
            <li key={it}><Check size={14} /> <span>{it}</span></li>
          ))}
        </ul>
      )}
      <a className="fdn-service__link" href="#">Learn more <ArrowUpRight size={14} /></a>
    </article>
  );
}

window.FoundationServiceCard = ServiceCard;
