import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: 'Performance Marketing & PPC',
      badge: 'Targeted Paid Media',
      desc: 'Drive instant targeted traffic and maximize return on ad spend (ROAS) across Google Ads, Meta Ads, and LinkedIn with precision audience targeting and high-converting ad copy.',
      bullets: [
        'Multi-channel programmatic and algorithmic bidding',
        'Google Search, Performance Max and Shopping funnels',
        'Transparent cost-per-acquisition (CAC) reporting',
      ],
      linkText: 'Explore Ad Architecture',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
        </svg>
      ),
    },
    {
      title: 'SEO & Organic Search Domination',
      badge: 'Top Google Rankings',
      desc: 'Achieve higher visibility and long-term organic growth. Our SEO services in Delhi integrate keyword optimization, on-page and off-page factors, and technical improvements that drive traffic, enhance ranking, and strengthen your brand authority.',
      bullets: [
        'Full technical audits and Core Web Vitals speed tuning',
        'High-converting commercial intent keyword clusters',
        'Authoritative digital PR and high-grade link acquisition',
      ],
      linkText: 'Unpack Organic Roadmap',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      title: 'High-Converting Web Design & CRO',
      badge: 'Speed & Conversion First',
      desc: 'Custom, fast-loading, and responsive web platforms built with modern technology that turn visitors into loyal customers with sub-2-second loading and frictionless UX.',
      bullets: [
        'Sub-2-second load times engineered with clean code',
        'Mobile-responsive architectures that boost conversions',
        'Multivariate A/B split-testing and friction analysis',
      ],
      linkText: 'Inspect Engineering Standards',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: 'Social Media & Content Engineering',
      badge: 'Organic Reach & Authority',
      desc: 'Engage and grow your community with tailored social campaigns, impactful creatives, and viral short-form content that build brand authority and long-term loyalty.',
      bullets: [
        'High-retention short-form video reels and creative assets',
        'B2B thought leadership content and brand positioning',
        'Omnichannel audience nurturing loops for repeat sales',
      ],
      linkText: 'Explore Content Playbooks',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-intro-center">
          <span className="section-tag">COMPREHENSIVE DIGITAL CAPABILITIES</span>
          <h2 className="section-main-title" style={{ marginBottom: 12 }}>
            Performance Architecture That Delivers
          </h2>
          <p style={{ color: 'var(--xn-text-body)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
            We replace siloed packages. Every growth initiative is orchestrated around your balance sheet: traffic, conversion, and repeat value.
          </p>
        </div>

        <div className="services-grid-2x2">
          {servicesList.map((srv, idx) => (
            <article key={idx} className="service-box">
              <div>
                <div className="service-box-header">
                  <div className="service-icon-wrap">{srv.icon}</div>
                  <span className="service-badge-pill">{srv.badge}</span>
                </div>

                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>

                <ul className="service-checklist">
                  {srv.bullets.map((b, i) => (
                    <li key={i}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-bottom-row">
                <a href="#audit-form" className="service-action-link">
                  <span>{srv.linkText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
