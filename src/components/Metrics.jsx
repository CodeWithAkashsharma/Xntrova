import React, { useState } from 'react';

// Real client case studies from Xntrova's client roster
const PORTFOLIO_CASES = [
  {
    id: 'scholar-scribe',
    client: 'Scholar Scribe Solutions',
    category: 'EdTech & Academic Solutions',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209654/xntrova-wp-media/xntrova-wp-media/27-93030f459f54a40f.webp',
    service: 'Technical SEO & Inbound Architecture',
    highlightMetric: '+380% Organic Reach',
    stats: [
      { label: 'Organic Traffic Lift', value: '+380%' },
      { label: 'Top 3 Keyword Ranks', value: '45+' },
      { label: 'Qualified Inquiries', value: '3.4x' },
    ],
    desc: 'Structured a high-authority content architecture and technical SEO sprint that secured top Google rankings across high-intent academic search queries in Delhi and globally.',
    badge: 'SEO & Organic Growth',
  },
  {
    id: 'herbals-here',
    client: 'Herbals Here',
    category: 'eCommerce & Ayurvedic Wellness',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209660/xntrova-wp-media/xntrova-wp-media/23-d847757291b16815.webp',
    service: 'Performance Marketing (PPC) & CRO',
    highlightMetric: '4.8x Return On Ad Spend',
    stats: [
      { label: 'Target ROAS', value: '4.8x' },
      { label: 'Customer CAC', value: '-34%' },
      { label: 'Monthly Revenue Lift', value: '+240%' },
    ],
    desc: 'Revamped Google Shopping, Meta Performance Max campaigns, and cart checkout funnel, scaling monthly revenue past ₹4.5Cr with sustained return on advertising spend.',
    badge: 'PPC & Ad Optimization',
  },
  {
    id: 'pitti-jewels',
    client: 'Pitti Jewels & Pearls',
    category: 'Luxury Retail & Fine Jewelry',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209663/xntrova-wp-media/xntrova-wp-media/5-3699036ea4992f89.webp',
    service: 'Social Media Optimization & Creative Storytelling',
    highlightMetric: '8.2x Campaign ROI',
    stats: [
      { label: 'Engagement Tier', value: 'Top 1%' },
      { label: 'Brand Video Views', value: '1.2M+' },
      { label: 'High-Ticket Inquiries', value: '+290%' },
    ],
    desc: 'Engineered high-aesthetic video storytelling and influencer collaborations that established luxury brand prestige and generated qualified private consultations.',
    badge: 'Social Media (SMO)',
  },
  {
    id: 'umbrella-infocare',
    client: 'Umbrella Infocare',
    category: 'Enterprise Cloud & IT Infrastructure',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209676/xntrova-wp-media/xntrova-wp-media/1-e2f9dbb875b34bd8.webp',
    service: 'B2B Lead Generation & Account-Based Search',
    highlightMetric: '₹12Cr+ Enterprise Pipeline',
    stats: [
      { label: 'Pipeline Generated', value: '₹12Cr+' },
      { label: 'Cost Per SQL', value: '-62%' },
      { label: 'Enterprise Win Rate', value: '+40%' },
    ],
    desc: 'Targeted C-level decision-makers through surgical LinkedIn and Google Search campaigns, driving high-value enterprise cloud transformation contracts.',
    badge: 'B2B Performance',
  },
  {
    id: 'orange-lilies',
    client: 'Orange Lilies',
    category: 'Fashion & D2C Apparel',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209661/xntrova-wp-media/xntrova-wp-media/22-28c745b590448d01.webp',
    service: 'E-Commerce Marketing & Retargeting Loops',
    highlightMetric: '+280% Sales Velocity',
    stats: [
      { label: 'Store Conversion Rate', value: '3.8%' },
      { label: 'Repeat Customer Rate', value: '+45%' },
      { label: 'Social Community', value: '55K+' },
    ],
    desc: 'Built dynamic catalog retargeting, automated abandoned cart recovery sequences, and viral seasonal collections that propelled national direct-to-consumer expansion.',
    badge: 'E-Commerce Scaling',
  },
  {
    id: 'etex',
    client: 'Etex',
    category: 'Building Materials & Global Manufacturing',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209657/xntrova-wp-media/xntrova-wp-media/25-b12b5da59d88eafd.webp',
    service: 'Corporate Website Engineering & Global SEO',
    highlightMetric: 'Sub-1.4s Load Speed',
    stats: [
      { label: 'Core Web Vitals', value: '99/100' },
      { label: 'International Inquiries', value: '+190%' },
      { label: 'Mobile Bounce Rate', value: '-48%' },
    ],
    desc: 'Re-engineered their global corporate web application for hyper-fast performance, headless CMS integration, and seamless multilingual B2B procurement navigation.',
    badge: 'Web Engineering',
  },
];

// Real authentic client testimonials (concise, minimalist quotes)
const CLIENT_TESTIMONIALS = [
  {
    id: 't1',
    author: 'Rahul Verma',
    role: 'Founder & CEO',
    company: 'Scholar Scribe Solutions',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209654/xntrova-wp-media/xntrova-wp-media/27-93030f459f54a40f.webp',
    rating: 5,
    platform: 'Clutch Verified',
    quote: 'Held #1 Google rankings for 45+ high-intent academic queries in under 4 months.',
  },
  {
    id: 't2',
    author: 'Priya Sharma',
    role: 'Head of Growth',
    company: 'Herbals Here',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209660/xntrova-wp-media/xntrova-wp-media/23-d847757291b16815.webp',
    rating: 5,
    platform: 'Google Review',
    quote: 'CAC dropped by 34% while scaling to a sustained 4.8x ROAS across paid channels.',
  },
  {
    id: 't3',
    author: 'Amit Pitti',
    role: 'Managing Director',
    company: 'Pitti Jewels & Pearls',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209663/xntrova-wp-media/xntrova-wp-media/5-3699036ea4992f89.webp',
    rating: 5,
    platform: 'Clutch Verified',
    quote: 'Targeted campaigns consistently brought high-net-worth buyers into our showroom.',
  },
  {
    id: 't4',
    author: 'Sanjay Kulkarni',
    role: 'VP Enterprise Solutions',
    company: 'Umbrella Infocare',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209676/xntrova-wp-media/xntrova-wp-media/1-e2f9dbb875b34bd8.webp',
    rating: 5,
    platform: 'TechBehemoths',
    quote: 'Generated ₹12Cr+ in qualified cloud infrastructure enterprise pipeline.',
  },
  {
    id: 't5',
    author: 'Neha Kapoor',
    role: 'Co-Founder',
    company: 'Orange Lilies',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209661/xntrova-wp-media/xntrova-wp-media/22-28c745b590448d01.webp',
    rating: 5,
    platform: 'Google Review',
    quote: '280% jump in order volume within 90 days across national channels.',
  },
  {
    id: 't6',
    author: 'David Chen',
    role: 'Technology Director',
    company: 'Etex',
    logo: 'https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1787209657/xntrova-wp-media/xntrova-wp-media/25-b12b5da59d88eafd.webp',
    rating: 5,
    platform: 'Clutch Verified',
    quote: 'Sub-1.4s load speed with a 190% increase in international procurement inquiries.',
  },
];

export default function Metrics() {
  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio' | 'testimonials'

  return (
    <section id="metrics" className="results-section" aria-label="Client Results & Portfolio">
      <div className="container">
        {/* Results Header */}
        <div className="results-head">
          <div className="results-head-text">
            <h2 className="section-heading">
              Proven Results for<br className="mobile-only-break" /> Market Leaders
            </h2>
            <p className="results-subheading">
              Explore our client portfolio transformations and see what founders and marketing leaders say about scaling with Xntrova.
            </p>
          </div>

          {/* Interactive Switcher Tabs */}
          <div className="results-tab-switcher" role="tablist" aria-label="Results view selector">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'portfolio'}
              className={`results-tab-btn${activeTab === 'portfolio' ? ' active' : ''}`}
              onClick={() => setActiveTab('portfolio')}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>Client Portfolio</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'testimonials'}
              className={`results-tab-btn${activeTab === 'testimonials' ? ' active' : ''}`}
              onClick={() => setActiveTab('testimonials')}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Client Testimonials</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CLIENT PORTFOLIO (MINIMALIST CASE STUDIES) */}
        {activeTab === 'portfolio' && (
          <div className="portfolio-grid animate-fade-in" role="tabpanel">
            {PORTFOLIO_CASES.map((item) => (
              <div key={item.id} className="portfolio-card">
                {/* Top: Client Logo & Badge */}
                <div className="portfolio-card-head">
                  <div className="portfolio-logo-wrap">
                    <img
                      src={item.logo}
                      alt={`${item.client} Logo`}
                      className="portfolio-client-logo"
                      loading="lazy"
                    />
                  </div>
                  <span className="portfolio-badge">{item.badge}</span>
                </div>

                {/* Client Name & Category */}
                <div className="portfolio-client-meta">
                  <h3 className="portfolio-client-name">{item.client}</h3>
                  <span className="portfolio-category">{item.category}</span>
                </div>

                {/* Highlight Core Metric */}
                <div className="portfolio-metric-banner">
                  <span className="metric-banner-val">{item.highlightMetric}</span>
                </div>

                {/* 3 Compact Metric Pills */}
                <div className="portfolio-stats-grid">
                  {item.stats.map((s, idx) => (
                    <div key={idx} className="portfolio-stat-box">
                      <span className="stat-box-val">{s.value}</span>
                      <span className="stat-box-label">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="portfolio-card-footer">
                  <a
                    href="#contact"
                    className="portfolio-inquire-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById('audit-form') || document.getElementById('contact');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Scale Like This</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CLIENT TESTIMONIALS (MINIMALIST REVIEWS) */}
        {activeTab === 'testimonials' && (
          <div className="testimonials-grid animate-fade-in" role="tabpanel">
            {CLIENT_TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-card">
                {/* Top: Stars & Platform */}
                <div className="testimonial-card-top">
                  <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {'★'.repeat(t.rating)}
                  </div>
                  <span className="testimonial-platform-badge">{t.platform}</span>
                </div>

                {/* Concise Testimonial Quote */}
                <blockquote className="testimonial-quote">
                  “{t.quote}”
                </blockquote>

                {/* Author Info & Company Logo */}
                <div className="testimonial-author-row">
                  <div className="testimonial-author-info">
                    <span className="author-name">{t.author}</span>
                    <span className="author-role">{t.role}, <strong>{t.company}</strong></span>
                  </div>
                  <img
                    src={t.logo}
                    alt={t.company}
                    className="testimonial-client-logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
