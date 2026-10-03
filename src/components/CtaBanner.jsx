import React from 'react';

export default function CtaBanner({ phone }) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-wrapper">
          <span className="cta-tagline-pill">UNLOCK YOUR BRAND'S REAL MARKET SHARE</span>
          <h2 className="cta-banner-title">
            Stop Guessing. Build Your <br />
            Growth Architecture Today.
          </h2>
          <p className="cta-banner-sub">
            Join high-growth brands generating massive predictable revenue in Delhi NCR and worldwide. Partner directly with a senior performance squad.
          </p>

          <div className="cta-banner-actions">
            <a href="#audit-form" className="hero-btn-white">
              <span>Get Your Free Strategy Audit</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href={`tel:${phone || '+918683828646'}`} className="btn-cyan-pill" style={{ padding: '12px 24px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Direct Call: {phone || '+91 868-382-8646'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
