import React from 'react';
import {
  CheckCircle2,
  Search,
  Compass,
  Rocket,
  TrendingUp
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   AUTHENTIC TOOL LOGO SVGS (Matching user reference)
───────────────────────────────────────────────────────── */

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="#0081FB" aria-label="Meta">
    <path d="M6.915 4.035c-2.316 0-4.298 1.134-5.547 2.894C.486 8.163 0 9.878 0 11.758c0 2.052.574 3.91 1.636 5.289 1.259 1.635 3.12 2.603 5.279 2.603 2.502 0 4.67-1.332 6.085-3.328 1.415 1.996 3.583 3.328 6.085 3.328 2.159 0 4.02-.968 5.279-2.603 1.062-1.379 1.636-3.237 1.636-5.289 0-1.88-.486-3.595-1.368-4.829-1.249-1.76-3.231-2.894-5.547-2.894-2.585 0-4.815 1.428-6.085 3.535C11.73 5.463 9.5 4.035 6.915 4.035zm0 2.5c1.83 0 3.447 1.173 4.258 2.871l.827 1.733.827-1.733c.811-1.698 2.428-2.871 4.258-2.871 2.215 0 3.965 1.587 4.549 3.73.34 1.25.178 2.583-.443 3.654-.775 1.336-2.182 2.167-3.794 2.167-1.897 0-3.568-1.229-4.363-3.003l-1.034-2.308-1.034 2.308c-.795 1.774-2.466 3.003-4.363 3.003-1.612 0-3.019-.831-3.794-2.167-.621-1.071-.783-2.404-.443-3.654.584-2.143 2.334-3.73 4.549-3.73z"/>
  </svg>
);

const MozLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-label="Moz">
    <rect width="24" height="24" rx="5" fill="#008298"/>
    <path d="M5.5 18V6.5h3.2l3.3 5.8 3.3-5.8h3.2V18h-2.8v-7.2l-2.7 4.7h-2l-2.7-4.7V18H5.5z" fill="#ffffff"/>
  </svg>
);

const GoogleAnalyticsLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Google Analytics">
    <rect x="14" y="4" width="5.5" height="16" rx="2.75" fill="#F9AB00"/>
    <rect x="7.5" y="9" width="5.5" height="11" rx="2.75" fill="#E37400"/>
    <circle cx="3.75" cy="17.25" r="2.75" fill="#E37400"/>
  </svg>
);

const GoogleSearchConsoleLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Google Search Console">
    <rect x="2" y="7" width="20" height="14" rx="3.5" fill="#4285F4"/>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M14.5 11.5a2.5 2.5 0 0 0-3.3-.2l-2.4 2.4a.8.8 0 0 0 0 1.1l.7.7a.8.8 0 0 0 1.1 0l2.4-2.4a2.5 2.5 0 0 0 1.5-1.6z" fill="#ffffff"/>
  </svg>
);

const ScreamingFrogLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Screaming Frog">
    <circle cx="12" cy="12" r="11" fill="#00A651"/>
    <circle cx="12" cy="12" r="6" stroke="#ffffff" strokeWidth="3"/>
  </svg>
);

const AhrefsLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Ahrefs">
    <rect width="24" height="24" rx="6" fill="#FF5C35"/>
    <text x="12" y="16.5" fill="#ffffff" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">a</text>
  </svg>
);

const SemrushLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Semrush">
    <circle cx="12" cy="12" r="11" fill="#FF642D"/>
    <path d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 2.2.95 4.18 2.46 5.56l2.12-2.12C8.36 14.7 8 13.9 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.9-.36 2.7-1.08 3.44l2.12 2.12C18.55 16.18 19.5 14.2 19.5 12c0-4.14-3.36-7.5-7.5-7.5z" fill="#ffffff"/>
    <circle cx="12" cy="12" r="2.2" fill="#ffffff"/>
  </svg>
);

const DrupalLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Drupal">
    <path d="M12 2C12 2 5.5 9.5 5.5 15a6.5 6.5 0 0 0 13 0C18.5 9.5 12 2 12 2z" fill="#0678BE"/>
    <circle cx="9.5" cy="14" r="1.3" fill="#ffffff"/>
    <circle cx="14.5" cy="14" r="1.3" fill="#ffffff"/>
    <path d="M9.5 16.5c.8.8 3.2.8 4 0" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" width="28" height="26" fill="none" aria-label="Salesforce">
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      fill="#00A1E0"
    />
  </svg>
);

const AdobeLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Adobe">
    <rect width="24" height="24" rx="5" fill="#FF0000"/>
    <path d="M14.8 5H19v14l-4.2-14zm-5.6 0H5v14l4.2-14zm2.8 6.5l3.2 7.5h-2.3l-1.1-2.7h-2.5l1.8-4.8h.9z" fill="#ffffff"/>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="AWS">
    <rect width="24" height="24" rx="5" fill="#232F3E"/>
    <text x="12" y="12.5" fill="#FF9900" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif">aws</text>
    <path d="M6 16c3.5 2 8.5 2 12 0" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="HubSpot">
    <circle cx="17.5" cy="6.5" r="2.5" fill="#FF7A59"/>
    <circle cx="17.5" cy="17.5" r="2.5" fill="#FF7A59"/>
    <circle cx="6" cy="12" r="2" fill="#FF7A59"/>
    <circle cx="12" cy="12" r="4.2" fill="#FF7A59"/>
    <path d="M12 12l4-4M12 12l4 4M12 12H7" stroke="#FF7A59" strokeWidth="2.4" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="#ffffff"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="LinkedIn">
    <rect width="24" height="24" rx="5" fill="#0A66C2"/>
    <path d="M7.5 9.5v8H5v-8h2.5zM6.25 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm12.25 12h-2.5v-4.2c0-1.2-.5-1.8-1.5-1.8-1.1 0-1.7.8-1.7 1.8v4.2H10.3v-8h2.4v1.1c.5-.8 1.4-1.3 2.5-1.3 1.8 0 3.3 1.2 3.3 3.6v4.6z" fill="#ffffff"/>
  </svg>
);

const RankMathLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="RankMath">
    <rect width="24" height="24" rx="5" fill="#4834D4"/>
    <path d="M4 17l4-5 3.5 3.5 5.5-7.5 3 2.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="5" y="14" width="2" height="4" fill="#ffffff"/>
    <rect x="9" y="11" width="2" height="7" fill="#ffffff"/>
    <rect x="13" y="8" width="2" height="10" fill="#ffffff"/>
  </svg>
);

const GoogleAdsLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Google Ads">
    <path d="M4.5 15.5l7-12a3.5 3.5 0 0 1 6 3.5l-7 12a3.5 3.5 0 0 1-6-3.5z" fill="#4285F4"/>
    <path d="M17.5 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" fill="#FBBC04"/>
    <circle cx="6" cy="18" r="3.5" fill="#34A853"/>
  </svg>
);

const LookerStudioLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Looker Studio">
    <circle cx="6" cy="12" r="3" fill="#1A73E8"/>
    <circle cx="14" cy="6" r="3" fill="#4285F4"/>
    <circle cx="14" cy="18" r="3" fill="#4285F4"/>
    <circle cx="19.5" cy="12" r="2.8" fill="#8AB4F8"/>
    <path d="M6 12l8-6m-8 6l8 6m0-12l5.5 6m-5.5 6l5.5-6" stroke="#4285F4" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const CanvaLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Canva">
    <circle cx="12" cy="12" r="11" fill="#00C4CC"/>
    <path d="M14.5 9.5c-.8-.9-1.8-1.3-3-1.3-2.5 0-4.2 1.8-4.2 4.4 0 2.4 1.6 4.2 4.1 4.2 1.2 0 2.2-.4 3-1.3l-1.1-1.1c-.6.6-1.2.9-1.9.9-1.4 0-2.3-1-2.3-2.6 0-1.7.9-2.8 2.4-2.8.7 0 1.3.3 1.8.8l1.2-1.2z" fill="#ffffff"/>
  </svg>
);

const YoastLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-label="Yoast SEO">
    <rect width="24" height="24" rx="5" fill="#A4286A"/>
    <path d="M7 6.5l3.5 7v4.5h2.5v-4.5l3.5-7h-2.8l-2 4.5-2-4.5H7z" fill="#ffffff"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────
   4 VERTICAL SCROLLING COLUMNS (Only these tools)
───────────────────────────────────────────────────────── */
const COL_1_TOOLS = [
  { id: 'meta', name: 'Meta', category: 'Paid Advertising', logo: <MetaLogo /> },
  { id: 'moz', name: 'Moz', category: 'SEO', logo: <MozLogo /> },
  { id: 'ga4', name: 'Google Analytics', category: 'Analytics', logo: <GoogleAnalyticsLogo /> },
  { id: 'gsc', name: 'Google Search Console', category: 'SEO', logo: <GoogleSearchConsoleLogo /> },
  { id: 'frog', name: 'Screaming Frog', category: 'SEO', logo: <ScreamingFrogLogo /> }
];

const COL_2_TOOLS = [
  { id: 'ahrefs', name: 'Ahrefs', category: 'SEO', logo: <AhrefsLogo /> },
  { id: 'semrush', name: 'Semrush', category: 'SEO', logo: <SemrushLogo /> },
  { id: 'drupal', name: 'Drupal', category: 'CRM', logo: <DrupalLogo /> },
  { id: 'salesforce', name: 'Salesforce', category: 'CRM', logo: <SalesforceLogo /> },
  { id: 'adobe', name: 'Adobe', category: 'Design', logo: <AdobeLogo /> }
];

const COL_3_TOOLS = [
  { id: 'aws', name: 'AWS', category: 'CRM', logo: <AWSLogo /> },
  { id: 'hubspot', name: 'HubSpot', category: 'CRM', logo: <HubSpotLogo /> },
  { id: 'linkedin', name: 'LinkedIn', category: 'Paid Advertising', logo: <LinkedInLogo /> },
  { id: 'rankmath', name: 'RankMath', category: 'SEO', logo: <RankMathLogo /> },
  { id: 'googleads', name: 'Google Ads', category: 'Paid Advertising', logo: <GoogleAdsLogo /> }
];

const COL_4_TOOLS = [
  { id: 'looker', name: 'Looker Studio', category: 'Analytics', logo: <LookerStudioLogo /> },
  { id: 'canva', name: 'Canva', category: 'Design', logo: <CanvaLogo /> },
  { id: 'yoast', name: 'Yoast SEO', category: 'SEO', logo: <YoastLogo /> },
  { id: 'meta2', name: 'Meta', category: 'Paid Advertising', logo: <MetaLogo /> },
  { id: 'ahrefs2', name: 'Ahrefs', category: 'SEO', logo: <AhrefsLogo /> }
];

/* ─────────────────────────────────────────────────────────
   PUSH PIN SVG COMPONENT (3D Colored Thumb Tack)
───────────────────────────────────────────────────────── */
function PushPin({ color = '#f59e0b', shadow = 'rgba(245, 158, 11, 0.45)' }) {
  const pinId = `pin-${color.replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <div className="pinned-pushpin-wrap" aria-hidden="true">
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pinned-pushpin-svg"
      >
        <defs>
          <filter id={`${pinId}-glow`} x="-35%" y="-35%" width="170%" height="170%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.75" />
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor={shadow} floodOpacity="0.5" />
          </filter>
          <radialGradient id={`${pinId}-radial`} cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="38%" stopColor={color} />
            <stop offset="100%" stopColor="#090d16" stopOpacity="0.7" />
          </radialGradient>
        </defs>

        <g filter={`url(#${pinId}-glow)`}>
          {/* Metal needle tip embedded into card */}
          <path d="M16 26 L16 37" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 31 L16 37" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />

          {/* Pin Top Cap / Dome */}
          <ellipse cx="16" cy="8" rx="8" ry="4.2" fill={`url(#${pinId}-radial)`} />
          <ellipse cx="14.8" cy="7.2" rx="4.8" ry="1.8" fill="rgba(255,255,255,0.5)" />

          {/* Pin Tapered Body */}
          <path
            d="M9.5 8.5 C9.5 13 11.8 15.2 11.8 19.5 L9 23.5 C9 25.2 11.2 26.2 16 26.2 C20.8 26.2 23 25.2 23 23.5 L20.2 19.5 C20.2 15.2 22.5 13 22.5 8.5 Z"
            fill={`url(#${pinId}-radial)`}
          />

          {/* 3D Highlight & Shadow Lines */}
          <path
            d="M12.8 10 C12.8 14 13.8 17.5 12.8 22"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19.2 10 C19.2 14 18.2 17.5 19.2 22"
            stroke="rgba(0, 0, 0, 0.35)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />

          {/* Bottom Ring Collar */}
          <ellipse cx="16" cy="24" rx="7" ry="2.4" fill={color} />
          <ellipse cx="15.4" cy="23.5" rx="4.5" ry="1.1" fill="rgba(255,255,255,0.4)" />
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   4 PINNED WORKFLOW CARDS DATA (Matching User's Reference Style)
───────────────────────────────────────────────────────── */
const PINNED_WORK_CARDS = [
  {
    step: '01',
    phase: 'Days 1–10',
    title: 'Discovery & Audit',
    pinColor: '#f59e0b', // Amber / Orange
    pinShadow: 'rgba(245, 158, 11, 0.5)',
    innerBg: 'linear-gradient(160deg, rgba(245, 158, 11, 0.08) 0%, rgba(18, 22, 33, 0.95) 100%)',
    borderColor: 'rgba(245, 158, 11, 0.22)',
    badgeBg: 'rgba(245, 158, 11, 0.12)',
    tilt: '-3.5deg',
    col: 'left',
    desc: 'Forensic inspection of your digital infrastructure, Core Web Vitals, and competitor gaps.',
    deliverables: [
      'Technical SEO & Crawl Audit',
      'Competitor Keyword Gaps',
      'Conversion Leak Mapping'
    ],
    highlight: '100% Comprehensive Baseline'
  },
  {
    step: '02',
    phase: 'Days 11–25',
    title: 'Strategy & UX Blueprint',
    pinColor: '#38bdf8', // Sky Blue
    pinShadow: 'rgba(56, 189, 248, 0.5)',
    innerBg: 'linear-gradient(160deg, rgba(56, 189, 248, 0.08) 0%, rgba(18, 22, 33, 0.95) 100%)',
    borderColor: 'rgba(56, 189, 248, 0.22)',
    badgeBg: 'rgba(56, 189, 248, 0.12)',
    tilt: '3.5deg',
    col: 'right',
    desc: 'Conversion-engineered wireframes, semantic content hierarchy, and paid media attribution.',
    deliverables: [
      'High-Intent Conversion Wireframes',
      'Topical Authority Architecture',
      'Omnichannel Budget Allocation'
    ],
    highlight: 'Sub-2s Architecture Design'
  },
  {
    step: '03',
    phase: 'Days 26–50',
    title: 'Agile Launch & Execution',
    pinColor: '#c084fc', // Vibrant Purple / Violet
    pinShadow: 'rgba(192, 132, 252, 0.5)',
    innerBg: 'linear-gradient(160deg, rgba(192, 132, 252, 0.08) 0%, rgba(18, 22, 33, 0.95) 100%)',
    borderColor: 'rgba(192, 132, 252, 0.22)',
    badgeBg: 'rgba(192, 132, 252, 0.12)',
    tilt: '-2.5deg',
    col: 'left',
    desc: 'High-velocity sprints deploying PPC, Google & Meta ads, and automated CRM pipelines.',
    deliverables: [
      'High-Speed Web Deployment',
      'Algorithmic PPC & Social Ads',
      'Salesforce & HubSpot CRM Sync'
    ],
    highlight: 'Top 1% Quality Score'
  },
  {
    step: '04',
    phase: 'Day 51 Onward',
    title: 'Optimization & Scale',
    pinColor: '#fb923c', // Warm Coral / Orange
    pinShadow: 'rgba(251, 146, 60, 0.5)',
    innerBg: 'linear-gradient(160deg, rgba(251, 146, 60, 0.08) 0%, rgba(18, 22, 33, 0.95) 100%)',
    borderColor: 'rgba(251, 146, 60, 0.22)',
    badgeBg: 'rgba(251, 146, 60, 0.12)',
    tilt: '3deg',
    col: 'right',
    desc: 'Continuous multivariate split-testing, CAC reduction, and executive Looker Studio reporting.',
    deliverables: [
      'Weekly Multivariate A/B Testing',
      'Margin-Protected Budget Scaling',
      '24/7 Executive BI Dashboards'
    ],
    highlight: '-34% CAC Reduction'
  }
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="how-we-work-section" aria-label="How We Work & Tools We Use">
      {/* Anchor alias so #engine links smoothly reach this section */}
      <div id="engine" style={{ position: 'relative', top: '-80px', visibility: 'hidden' }} />

      <div className="container">
        {/* ─────────────────────────────────────────────────────────
            1. SECTION HEADER (Clean & Sleek)
        ───────────────────────────────────────────────────────── */}
        <div className="how-we-work-head">
          <h2 className="section-heading">How We Work</h2>
          <p className="how-we-work-subheading">
            A battle-tested 4-phase delivery system engineered to grow your brand with speed and precision.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────
            2. PINNED CARDS ROADMAP (Matching User's Reference)
        ───────────────────────────────────────────────────────── */}
        <div className="pinned-roadmap-wrapper">
          {/* Dashed Connecting Lines SVG (Desktop Zigzag) */}
          <svg
            className="pinned-roadmap-svg pinned-roadmap-svg-desktop"
            viewBox="0 0 1000 780"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Step 01 to Step 02 */}
            <path
              d="M 430 145 C 500 155, 510 185, 570 215"
              className="pinned-dashed-line"
            />
            {/* Step 02 to Step 03 */}
            <path
              d="M 570 345 C 510 395, 490 425, 430 485"
              className="pinned-dashed-line"
            />
            {/* Step 03 to Step 04 */}
            <path
              d="M 430 585 C 500 605, 510 635, 570 665"
              className="pinned-dashed-line"
            />
          </svg>

          {/* Dashed Connecting Lines SVG (Mobile Cascading Zigzag) */}
          <svg
            className="pinned-roadmap-svg pinned-roadmap-svg-mobile"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 36 12 C 60 16, 64 26, 64 38 C 40 44, 36 52, 36 62 C 60 68, 64 78, 64 88"
              className="pinned-dashed-line pinned-dashed-line-mobile"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Cards Grid */}
          <div className="pinned-cards-grid">
            {PINNED_WORK_CARDS.map((card) => (
              <div
                key={card.step}
                className={`pinned-card-item item-${card.step} col-${card.col}`}
                style={{
                  '--card-tilt': card.tilt,
                  '--accent-color': card.pinColor,
                  '--accent-shadow': card.pinShadow,
                }}
              >
                {/* 3D Pushpin on top center */}
                <PushPin color={card.pinColor} shadow={card.pinShadow} />

                {/* Outer Card Body */}
                <div className="pinned-card-shell">
                  {/* Inner Tinted Container */}
                  <div
                    className="pinned-card-inner"
                    style={{
                      background: card.innerBg,
                      borderColor: card.borderColor,
                    }}
                  >
                    <div className="pinned-card-header">
                      <span className="pinned-step-num" style={{ color: card.pinColor }}>
                        {card.step}
                      </span>
                      <span
                        className="pinned-phase-tag"
                        style={{
                          color: card.pinColor,
                          borderColor: card.borderColor,
                          background: card.badgeBg,
                        }}
                      >
                        {card.phase}
                      </span>
                    </div>

                    <h3 className="pinned-card-title">{card.title}</h3>
                    <p className="pinned-card-desc">{card.desc}</p>

                    <div className="pinned-deliverables-list">
                      {card.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="pinned-d-row">
                          <CheckCircle2
                            width="14"
                            height="14"
                            className="pinned-d-icon"
                            style={{ color: card.pinColor }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pinned-card-bottom">
                      <span className="pinned-highlight-badge">
                        <span className="pinned-dot" style={{ background: card.pinColor }} />
                        {card.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            3. SMALL COMPACT SECTION FOR TOOLS (Vertical Scrolling Only)
        ───────────────────────────────────────────────────────── */}
        <div className="tools-vertical-compact-section">
          <div className="tools-compact-head">
            <h3 className="tools-compact-title">Tools We Work With</h3>
            <p className="tools-compact-sub">
              18+ enterprise platforms driving your growth engine.
            </p>
          </div>

          {/* Compact Vertical Columns Container */}
          <div className="tools-vertical-viewport">
            {/* Column 1: Upwards */}
            <div className="tools-vertical-col col-scroll-up">
              {/* Desktop track */}
              <div className="tools-vertical-track tools-track-desktop">
                {[...COL_1_TOOLS, ...COL_1_TOOLS, ...COL_1_TOOLS].map((tool, idx) => (
                  <div key={`c1-${idx}`} className="tool-vcard">
                    <div className="tool-vcard-logo">{tool.logo}</div>
                    <div className="tool-vcard-meta">
                      <span className="tool-vcard-name">{tool.name}</span>
                      <span className="tool-vcard-cat">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Mobile track (Combined Col 1 + Col 3 so all tools display in 2 columns) */}
              <div className="tools-vertical-track tools-track-mobile">
                {[...COL_1_TOOLS, ...COL_3_TOOLS, ...COL_1_TOOLS, ...COL_3_TOOLS].map((tool, idx) => (
                  <div key={`m1-${idx}`} className="tool-vcard">
                    <div className="tool-vcard-logo">{tool.logo}</div>
                    <div className="tool-vcard-meta">
                      <span className="tool-vcard-name">{tool.name}</span>
                      <span className="tool-vcard-cat">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Downwards */}
            <div className="tools-vertical-col col-scroll-down">
              {/* Desktop track */}
              <div className="tools-vertical-track tools-track-desktop">
                {[...COL_2_TOOLS, ...COL_2_TOOLS, ...COL_2_TOOLS].map((tool, idx) => (
                  <div key={`c2-${idx}`} className="tool-vcard">
                    <div className="tool-vcard-logo">{tool.logo}</div>
                    <div className="tool-vcard-meta">
                      <span className="tool-vcard-name">{tool.name}</span>
                      <span className="tool-vcard-cat">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Mobile track (Combined Col 2 + Col 4) */}
              <div className="tools-vertical-track tools-track-mobile">
                {[...COL_2_TOOLS, ...COL_4_TOOLS, ...COL_2_TOOLS, ...COL_4_TOOLS].map((tool, idx) => (
                  <div key={`m2-${idx}`} className="tool-vcard">
                    <div className="tool-vcard-logo">{tool.logo}</div>
                    <div className="tool-vcard-meta">
                      <span className="tool-vcard-name">{tool.name}</span>
                      <span className="tool-vcard-cat">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Upwards (Desktop Only) */}
            <div className="tools-vertical-col col-scroll-up-slow tools-col-desktop-only">
              <div className="tools-vertical-track">
                {[...COL_3_TOOLS, ...COL_3_TOOLS, ...COL_3_TOOLS].map((tool, idx) => (
                  <div key={`c3-${idx}`} className="tool-vcard">
                    <div className="tool-vcard-logo">{tool.logo}</div>
                    <div className="tool-vcard-meta">
                      <span className="tool-vcard-name">{tool.name}</span>
                      <span className="tool-vcard-cat">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: Downwards (Desktop Only) */}
            <div className="tools-vertical-col col-scroll-down-slow tools-col-desktop-only">
              <div className="tools-vertical-track">
                {[...COL_4_TOOLS, ...COL_4_TOOLS, ...COL_4_TOOLS].map((tool, idx) => (
                  <div key={`c4-${idx}`} className="tool-vcard">
                    <div className="tool-vcard-logo">{tool.logo}</div>
                    <div className="tool-vcard-meta">
                      <span className="tool-vcard-name">{tool.name}</span>
                      <span className="tool-vcard-cat">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top and Bottom Gradient Fade Masks */}
            <div className="tools-v-fade-top" />
            <div className="tools-v-fade-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}
