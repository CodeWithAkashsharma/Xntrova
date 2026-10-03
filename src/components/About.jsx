import React from 'react';

export default function About({ about }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Top Split Header */}
        <div className="about-header-grid">
          <div>
            <span className="section-tag">ABOUT OUR ETHOS</span>
            <h2 className="section-main-title" style={{ marginBottom: 16 }}>
              Driven By Ideas. <br />
              <span style={{ color: 'var(--xn-blue-primary)' }}>Focused on Hard Results.</span>
            </h2>
            <p style={{ color: 'var(--xn-text-body)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
              {about?.content ||
                'At Xntrova, we believe that the key to great marketing is understanding people. Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters. We combine creativity with data-driven decisions to create meaningful experiences that connect, engage, and inspire action.'}
            </p>
            <p style={{ color: 'var(--xn-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              {about?.secondary ||
                'Whether you want to shape your brand story, improve visibility, or drive conversion, we take a creative and data-driven approach to ensure the best possible results in Delhi NCR.'}
            </p>
          </div>

          <div className="growth-lab-box">
            <div className="lab-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div>
              <div className="lab-title">Delhi's Active Growth Lab</div>
              <div className="lab-desc">
                Engineered for high-speed client ROI & scalable revenue architecture.
              </div>
            </div>
          </div>
        </div>

        {/* 3 Features Cards Grid */}
        <div className="about-features-grid">
          {/* Feature 1 (Large left card) */}
          <div className="about-card-white">
            <div>
              <div className="card-top-icon-row">
                <div className="feat-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <span className="feat-tag">FULL-FUNNEL TRAFFIC ACQUISITION</span>
              </div>

              <h3 className="about-card-title">Build High-Intent Visibility</h3>
              <p className="about-card-desc">
                We anchor your brand around commercial search intent. By pairing technical SEO architecture with precision search ads, we place your business at the precise moment customers are ready to buy.
              </p>

              <div className="search-meter-box">
                <span style={{ fontWeight: 600, color: 'var(--xn-text-dark)' }}>
                  Target Commercial Intent Queries
                </span>
                <span style={{ color: 'var(--xn-emerald)', fontWeight: 700 }}>
                  Top 3 Rank Share: 84.6%
                </span>
              </div>
            </div>

            <a href="#services" className="about-card-link">
              <span>Explore SEO Architecture</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Right Column with 2 stacked cards */}
          <div className="about-feat-col-right">
            {/* Feature 2 */}
            <div className="about-card-white">
              <div>
                <div className="card-top-icon-row">
                  <div className="feat-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="feat-tag">CREATIVE RESONANCE</span>
                </div>

                <h3 className="about-card-title" style={{ fontSize: '1.2rem' }}>
                  Engage & Convert Audience
                </h3>
                <p className="about-card-desc">
                  Turn casual viewers into committed buyers through high-velocity creative campaigns, viral social assets, and multi-touch email retargeting.
                </p>
              </div>

              <a href="#services" className="about-card-link">
                <span>View Creative Framework</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Feature 3 */}
            <div className="about-card-white">
              <div>
                <div className="card-top-icon-row">
                  <div className="feat-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                  <span className="feat-tag">VELOCITY OPTIMIZATION</span>
                </div>

                <h3 className="about-card-title" style={{ fontSize: '1.2rem' }}>
                  Maximize Conversion Velocity
                </h3>
                <p className="about-card-desc">
                  We eliminate conversion bottlenecks, optimize Core Web Vitals to sub-2-second speeds, and extract compounding revenue from current traffic.
                </p>
              </div>

              <a href="#services" className="about-card-link">
                <span>Audit Conversion Funnel</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
