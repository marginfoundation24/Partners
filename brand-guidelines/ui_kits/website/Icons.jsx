/* global React */
const { useState } = React;

const Icon = ({ d, size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <g dangerouslySetInnerHTML={{ __html: d }} />
  </svg>
);

// Lucide paths — copied verbatim from lucide.dev so it can be swapped for lucide-react 1:1.
window.FoundationIcons = {
  Search:    (p) => <Icon size={p?.size} d='<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>' />,
  ArrowRight:(p) => <Icon size={p?.size} d='<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>' />,
  ArrowUp:   (p) => <Icon size={p?.size} d='<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>' />,
  ChevronDown:(p)=> <Icon size={p?.size} d='<path d="m6 9 6 6 6-6"/>' />,
  ArrowUpRight:(p)=> <Icon size={p?.size} d='<path d="M7 7h10v10"/><path d="M7 17 17 7"/>' />,
  Menu:      (p) => <Icon size={p?.size} d='<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>' />,
  X:         (p) => <Icon size={p?.size} d='<path d="M18 6 6 18"/><path d="m6 6 12 12"/>' />,
  Check:     (p) => <Icon size={p?.size} d='<path d="M20 6 9 17l-5-5"/>' />,
  Sparkles:  (p) => <Icon size={p?.size} d='<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>' />,
  Compass:   (p) => <Icon size={p?.size} d='<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>' />,
  Layers:    (p) => <Icon size={p?.size} d='<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>' />,
  Megaphone: (p) => <Icon size={p?.size} d='<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>' />,
  Pen:       (p) => <Icon size={p?.size} d='<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>' />,
  Network:   (p) => <Icon size={p?.size} d='<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>' />,
  Frame:     (p) => <Icon size={p?.size} d='<line x1="22" x2="2" y1="6" y2="6"/><line x1="22" x2="2" y1="18" y2="18"/><line x1="6" x2="6" y1="2" y2="22"/><line x1="18" x2="18" y1="2" y2="22"/>' />,
  CornerUp:  (p) => <Icon size={p?.size} d='<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>' />,
  ThumbsUp:  (p) => <Icon size={p?.size} d='<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>' />,
};
