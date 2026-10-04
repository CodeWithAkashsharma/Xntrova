import React, { useState, useEffect, useRef } from 'react';
import {
  BarChart3,
  Award,
  Eye,
  Sparkles,
  Headphones,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const WHY_CHOOSE_PILLARS = [
  {
    id: 'data-driven',
    icon: BarChart3,
    title: 'Result-Driven & Data-Oriented',
    tag: 'MEASURABLE ROI',
    metric: '100% Revenue Focused',
    desc: 'Every strategy is engineered around verified commercial growth, pipeline revenue, and conversion lift — never superficial vanity metrics.',
    bulletPoints: [
      'Granular CAC and ROAS tracking across channels',
      'Data-backed multi-stage funnel optimization',
      'Compounding long-term organic search equity'
    ],
    highlightStat: { label: 'Average Pipeline ROI', val: '4.8x' },
    accentColor: '#004d6d'
  },
  {
    id: 'certified-experts',
    icon: Award,
    title: 'Certified Growth Specialists',
    tag: 'ELITE EXPERTISE',
    metric: 'Top 1% Talent Tier',
    desc: 'Work directly with certified Google, Meta, and full-stack technical engineering specialists with multi-platform mastery across 500+ successful campaigns.',
    bulletPoints: [
      'Certified Google Premier & Meta Business Partners',
      'Senior dedicated strategists leading every account',
      'Agile bi-weekly sprint execution & transparent reviews'
    ],
    highlightStat: { label: 'Campaigns Managed', val: '500+' },
    accentColor: '#0077cc'
  },
  {
    id: 'transparency',
    icon: Eye,
    title: 'Impeccable Transparency',
    tag: 'NO HIDDEN FEES',
    metric: '100% Clear Reporting',
    desc: 'Complete peace of mind with live executive Looker Studio dashboards, transparent attribution models, and zero hidden markup costs.',
    bulletPoints: [
      '24/7 live executive analytics dashboard access',
      'Structured weekly performance syncs with leadership',
      'Complete governance over media budgets and invoices'
    ],
    highlightStat: { label: 'Reporting Accuracy', val: '100%' },
    accentColor: '#0284c7'
  },
  {
    id: 'custom-solutions',
    icon: Sparkles,
    title: 'Tailored & Futuristic Solutions',
    tag: 'BESPOKE ARCHITECTURE',
    metric: 'Custom Craftsmanship',
    desc: 'No cookie-cutter templates. Every website engineering framework and advertising funnel is custom-crafted specifically for your target audience and economics.',
    bulletPoints: [
      'Hyper-fast sub-2-second website architectures',
      'Audience-specific messaging angles and custom creatives',
      'Omnichannel behavioral retargeting loops'
    ],
    highlightStat: { label: 'Speed Benchmark', val: '< 1.8s' },
    accentColor: '#0099ff'
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'Continuous 24/7 Dedicated Support',
    tag: 'ALWAYS-ON PARTNER',
    metric: 'Proactive Monitoring',
    desc: 'Dedicated account directors, proactive uptime monitoring, and rapid execution turnarounds so your business never misses a market opportunity.',
    bulletPoints: [
      'Direct Slack and WhatsApp communication channels',
      'Rapid turnaround time for urgent campaign iterations',
      'Continuous conversion rate auditing and health checks'
    ],
    highlightStat: { label: 'Average Response Time', val: '< 15m' },
    accentColor: '#0ea5e9'
  },
  {
    id: 'scalable-growth',
    icon: Zap,
    title: 'Cost-Effective Scalable Growth',
    tag: 'UNIT ECONOMICS',
    metric: 'Margin Protection',
    desc: 'Engineered for capital efficiency. We optimize cost-per-acquisition (CAC) first, then scale spend aggressively without diluting net profit margins.',
    bulletPoints: [
      'High-velocity checkout and landing page CRO testing',
      'Low CAC customer acquisition and higher LTV',
      'Scalable enterprise roadmaps built for expansion'
    ],
    highlightStat: { label: 'Average CAC Reduction', val: '-34%' },
    accentColor: '#004d6d'
  }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tabsRef = useRef([]);
  const navListRef = useRef(null);

  // Auto-switch active heading every 3 seconds unless paused by hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WHY_CHOOSE_PILLARS.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  // Automatically scroll the horizontal nav list so the active tab is always centered in the viewport
  useEffect(() => {
    const activeTabEl = tabsRef.current[activeIndex];
    const navListEl = navListRef.current;
    if (activeTabEl && navListEl) {
      const isHorizontal = navListEl.scrollWidth > navListEl.clientWidth;
      if (isHorizontal) {
        const containerLeft = navListEl.getBoundingClientRect().left;
        const tabLeft = activeTabEl.getBoundingClientRect().left;
        const currentScrollLeft = navListEl.scrollLeft;
        const targetScrollLeft =
          currentScrollLeft +
          (tabLeft - containerLeft) -
          (navListEl.clientWidth / 2 - activeTabEl.clientWidth / 2);

        navListEl.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex]);

  const activeItem = WHY_CHOOSE_PILLARS[activeIndex];
  const ActiveIcon = activeItem.icon;

  const handleScrollToAudit = (e) => {
    e.preventDefault();
    const target = document.getElementById('audit-form') || document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-choose-us" className="why-choose-section" aria-label="Why Choose Xntrova">
      <div className="container">
        {/* Section Header */}
        <div className="why-choose-head">
          <h2 className="section-heading">Why Choose Xntrova Technologies</h2>
        </div>

        {/* Interactive Split Showcase: Headings on Left, Active Detail on Right */}
        <div className="why-split-container">
          {/* Left Column: Heading Tabs with 3s progress indicator (hover pauses timer) */}
          <div
            ref={navListRef}
            className="why-nav-list"
            role="tablist"
            aria-label="Why Choose Us Pillars"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {WHY_CHOOSE_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`why-nav-item${isActive ? ' active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="why-nav-item-inner">
                    <span className="why-nav-num">0{idx + 1}</span>
                    <div className="why-nav-icon-box">
                      <Icon width="18" height="18" />
                    </div>
                    <div className="why-nav-text">
                      <span className="why-nav-title">{item.title}</span>
                      <span className="why-nav-tag">{item.tag}</span>
                    </div>
                    <ChevronRight className="why-nav-arrow" width="16" height="16" />
                  </div>

                  {/* 3s Active Progress Indicator */}
                  {isActive && (
                    <div className="why-nav-progress-track">
                      <div
                        key={`prog-${activeIndex}`}
                        className={`why-nav-progress-fill${isPaused ? ' paused' : ''}`}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Panel with Transition (hovering here does NOT stop the left timer) */}
          <div
            className="why-detail-panel"
            key={activeItem.id}
            onMouseEnter={() => setIsPaused(false)}
          >
            <div className="why-detail-card">
              {/* Card Header with Icon, Tag & Metric */}
              <div className="why-detail-header">
                <div className="why-detail-icon-wrap" style={{ color: activeItem.accentColor }}>
                  <ActiveIcon width="28" height="28" />
                </div>
                <div className="why-detail-meta">
                  <div className="why-detail-pill-group">
                    <span className="why-tag">{activeItem.tag}</span>
                    <span className="why-metric-pill">{activeItem.metric}</span>
                  </div>
                  <h3 className="why-detail-title">{activeItem.title}</h3>
                </div>
              </div>

              {/* Core Description */}
              <p className="why-detail-desc">{activeItem.desc}</p>

              {/* Key Deliverables Bullet Points */}
              <div className="why-detail-features">
                <h4 className="why-features-heading">Key Value Deliverables:</h4>
                <ul className="why-detail-bullets">
                  {activeItem.bulletPoints.map((pt, idx) => (
                    <li key={idx} className="why-bullet-item">
                      <ShieldCheck width="16" height="16" className="why-bullet-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Stat & Action Bar */}
              <div className="why-detail-footer">
                <div className="why-highlight-stat">
                  <span className="why-stat-num">{activeItem.highlightStat.val}</span>
                  <span className="why-stat-label">{activeItem.highlightStat.label}</span>
                </div>
                <a
                  href="#contact"
                  onClick={handleScrollToAudit}
                  className="why-detail-cta"
                >
                  <span>Experience This Advantage</span>
                  <ArrowRight width="14" height="14" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="why-choose-cta-bar">
          <div className="why-cta-text">
            <h4 className="why-cta-title">Ready to experience the Xntrova difference?</h4>
            <p className="why-cta-sub">
              Partner with Delhi NCR's top-rated digital agency and unlock your business potential.
            </p>
          </div>
          <a
            href="#contact"
            onClick={handleScrollToAudit}
            className="why-cta-button"
          >
            <span>Get Free Digital Audit</span>
            <ArrowRight width="14" height="14" />
          </a>
        </div>
      </div>
    </section>
  );
}

