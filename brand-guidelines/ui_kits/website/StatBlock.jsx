/* global React */
function StatBlock({ value, suffix = '', label, caption }) {
  return (
    <div className="fdn-stat">
      <div className="fdn-stat__value">
        {value}<span className="fdn-stat__suffix">{suffix}</span>
      </div>
      <div className="fdn-stat__label">{label}</div>
      {caption && <div className="fdn-stat__caption">{caption}</div>}
    </div>
  );
}

window.FoundationStatBlock = StatBlock;
