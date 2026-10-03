import React, { useState } from 'react';

export default function GrowthEngine() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Forensic Audit & Discovery',
      shortDesc: 'Deep technical SEO, conversion friction audit, and competitor ad deconstruction.',
      focusTag: 'STAGE 01 FOCUS: FIRST 10 DAYS',
      headline: 'Forensic Audit, Competitor Mapping & Conversion Baseline',
      fullDesc:
        'We dissect your current search footprint, advertising attribution, and user drop-off points. We benchmark against top industry rivals in Delhi NCR and build a surgical 90-day growth roadmap.',
      deliverables: [
        'Complete Technical SEO & Speed Audit',
        'Competitor Ad Creative & Keyword Intel',
        'Full-Funnel CRO & Friction Mapping',
        'GA4 & Pixel Attribution Verification',
      ],
      timeframe: 'Day 1 to 10',
    },
    {
      step: '02',
      title: 'High-Velocity Launch',
      shortDesc: 'Rapid deployment of high-converting landing pages and targeted search ad funnels.',
      focusTag: 'STAGE 02 FOCUS: DAYS 11 TO 25',
      headline: 'Full-Funnel Campaign Architecture & Technical Infrastructure',
      fullDesc:
        'We engineer frictionless landing page experiences, launch algorithmic Google and Meta campaigns, and set up event-level server-side tracking for zero data loss.',
      deliverables: [
        'Conversion-Engineered Landing Pages',
        'Algorithmic Paid Search & Social Launch',
        'On-Page Topical Authority Clusters',
        'Automated Lead Nurture & CRM Sync',
      ],
      timeframe: 'Day 11 to 25',
    },
    {
      step: '03',
      title: 'Algorithmic Testing',
      shortDesc: 'Continuous A/B testing of messaging, bid strategies, and intent keywords.',
      focusTag: 'STAGE 03 FOCUS: DAYS 26 TO 60',
      headline: 'Multivariate Experimentation & CAC Reduction',
      fullDesc:
        'Every dollar is scrutinized. We run weekly multivariate experiments on ad headlines, audience segments, and page checkouts to systematically lower your blended customer acquisition cost.',
      deliverables: [
        'Continuous Landing Page Split Testing',
        'Keyword Bidding & Negative Match Sprints',
        'Creative Refresh & Video Reel Iterations',
        'Bi-Weekly Sprint Review & Performance Calls',
      ],
      timeframe: 'Day 26 to 60',
    },
    {
      step: '04',
      title: 'Synchronized Scale',
      shortDesc: 'Scaling ad spend profitably while locking in long-term organic search dominance.',
      focusTag: 'STAGE 04 FOCUS: DAY 61 ONWARD',
      headline: 'Multi-Channel Market Dominance & Predictable Expansion',
      fullDesc:
        'With proven unit economics and rising organic domain authority, we scale monthly spend aggressively while preserving margin and expanding market share across India and internationally.',
      deliverables: [
        'Budget Scaling & Multi-Channel Synergy',
        'High-Authority Backlink Compounding',
        'Omnichannel Retargeting Loops',
        'Live Executive BI / Looker Studio Dashboards',
      ],
      timeframe: 'Day 61 Onward',
    },
  ];

  const current = stages[activeStage];

  return (
    <section id="engine" className="engine-section">
      <div className="container">
        <div className="section-head-row">
          <div>
            <span className="section-tag">OUR SPRINT ARCHITECTURE</span>
            <h2 className="section-main-title">The 4-Stage Xntrova Growth Engine</h2>
            <p style={{ color: 'var(--xn-text-muted)', fontSize: '0.875rem', marginTop: 4 }}>
              Click on any stage to examine the key deliverables, timeframes, and checkpoints.
            </p>
          </div>
          <a href="#audit-form" className="btn-outline-pill">
            View Full Methodology
          </a>
        </div>

        {/* 4 Interactive Stage Cards */}
        <div className="engine-stages-grid">
          {stages.map((st, idx) => (
            <button
              key={st.step}
              className={`stage-tab-card ${activeStage === idx ? 'active' : ''}`}
              onClick={() => setActiveStage(idx)}
              aria-label={`Select stage ${st.step}: ${st.title}`}
            >
              <div className="stage-header-row">
                <div className="stage-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <span className="stage-num">{st.step}</span>
              </div>
              <h3 className="stage-card-title">{st.title}</h3>
              <p className="stage-card-desc">{st.shortDesc}</p>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Box */}
        <div className="stage-detail-box">
          <div>
            <div className="stage-focus-tag">{current.focusTag}</div>
            <h3 className="stage-focus-title">{current.headline}</h3>
            <p className="stage-focus-desc">{current.fullDesc}</p>

            <ul className="stage-checklist">
              {current.deliverables.map((item, i) => (
                <li key={i} className="check-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="stage-time-card">
            <div className="time-card-tag">STAGE {current.step} TIME-TO-VALUE</div>
            <div className="time-card-val">{current.timeframe}</div>
            <a href="#audit-form" className="btn-submit-audit" style={{ textDecoration: 'none' }}>
              <span>Start Phase {current.step} Audit</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
