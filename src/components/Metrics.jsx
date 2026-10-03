import React, { useState } from 'react';

export default function Metrics() {
  const [activeTab, setActiveTab] = useState('performance');

  const metricsData = [
    {
      num: '340%+',
      tag: 'ORGANIC GROWTH',
      title: 'Average Organic Traffic Lift',
      desc: 'Verified across SEO campaigns over 6-month continuous ranking cycles.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
    },
    {
      num: '₹45Cr+',
      tag: 'CLIENT REVENUE',
      title: 'Pipeline Revenue Generated',
      desc: 'Demonstrated client revenue generated across eCommerce & high-ticket B2B accounts.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      ),
    },
    {
      num: '150+',
      tag: 'GOOGLE RANKINGS',
      title: 'Active Benchmark Victories',
      desc: 'High-intent commercial keywords holding dominant #1 Google positions in Delhi & globally.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
    },
    {
      num: '98.4%',
      tag: 'RETENTION',
      title: 'Client Retention Rate',
      desc: 'Year-over-year partnership rate driven by compounding ROI and transparent weekly reporting.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="metrics" className="metrics-section">
      <div className="container">
        <div className="section-head-row">
          <div>
            <span className="section-tag">DOCUMENTED CLIENT OUTCOMES</span>
            <h2 className="section-main-title">Metrics That Move The Balance Sheet</h2>
          </div>

          <div className="tab-pill-group">
            <button
              className={`tab-pill ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              Performance
            </button>
            <button
              className={`tab-pill ${activeTab === 'organic' ? 'active' : ''}`}
              onClick={() => setActiveTab('organic')}
            >
              Organic / SEO
            </button>
            <button
              className={`tab-pill ${activeTab === 'fullstack' ? 'active' : ''}`}
              onClick={() => setActiveTab('fullstack')}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="metrics-cards-grid">
          {metricsData.map((card, idx) => (
            <div key={idx} className="metric-stat-card">
              <div className="metric-card-top">
                <div className="metric-icon-sq">{card.icon}</div>
                <span className="metric-cat-badge">{card.tag}</span>
              </div>
              <div className="metric-big-num">{card.num}</div>
              <h3 className="metric-caption-title">{card.title}</h3>
              <p className="metric-caption-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
