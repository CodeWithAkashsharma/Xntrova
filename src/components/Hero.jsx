import React, { useState } from 'react';

export default function Hero({ meta }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SEO (Search Engine Optimisation)',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Hero Typography & CTAs */}
        <div className="hero-left-content">
          <div className="hero-badge-pill">
            <span className="star-icon">★</span>
            <span>DELHI'S PREMIER GROWTH ENGINE — 500+ CLIENTS SCALED</span>
          </div>

          <h1 className="hero-title">
            Scale Your Business With Delhi's Premier <span className="highlight">Growth Engine.</span>
          </h1>

          <p className="hero-description">
            {meta?.subtagline ||
              'Unlock your business potential and connect with your targeted customers by partnering with Xntrova, the best digital marketing agency in Delhi.'}
          </p>

          <div className="hero-cta-row">
            <a href="#audit-form" className="hero-btn-white">
              <span>Claim Free Growth Audit</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#engine" className="hero-btn-ghost">
              <span>Explore Methodology</span>
            </a>
          </div>

          {/* Social Proof Trust Bar */}
          <div className="hero-trust-bar">
            <div className="avatar-stack">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Client Reviewer"
                className="avatar-circle"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Client Reviewer"
                className="avatar-circle"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                alt="Client Reviewer"
                className="avatar-circle"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                alt="Client Reviewer"
                className="avatar-circle"
              />
            </div>
            <div className="trust-copy">
              <div className="stars-gold">★★★★★</div>
              <p>
                <strong>4.9/5 Clutch Rating</strong> | Verified ROI Attribution across 500+ companies
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Request Growth Audit Card */}
        <div id="audit-form" className="hero-right-card">
          <div className="audit-card">
            <div className="audit-card-badge">100% Free Custom Analysis</div>
            <h2 className="audit-card-title">Request Growth Audit</h2>
            <p className="audit-card-desc">
              Receive an actionable 14-point audit of your ad traffic, SEO rankings, and conversion drop-offs.
            </p>

            {submitted ? (
              <div style={{ padding: '24px 0', textAlign: 'center' }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: '#ecfdf5',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px auto',
                    fontSize: 24,
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#001726', marginBottom: 8 }}>
                  Audit Request Confirmed!
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Our Senior Growth Strategist in Delhi will review your digital footprint and reach out within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="audit-form">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  className="form-field-input"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  placeholder="Work Email Address *"
                  className="form-field-input"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-label="Work Email"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number"
                  className="form-field-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  aria-label="Phone Number"
                />
                <select
                  className="form-field-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  aria-label="Select Target Service"
                >
                  <option value="SEO (Search Engine Optimisation)">SEO (Search Engine Optimisation)</option>
                  <option value="PPC (Pay-Per-Click)">PPC & Performance Marketing</option>
                  <option value="Web Development">Custom Web Development</option>
                  <option value="Social Media Marketing">Social Media & Branding</option>
                  <option value="Full Growth Engine">Full 360° Growth Engine</option>
                </select>

                <button type="submit" className="btn-submit-audit">
                  <span>Get My Comprehensive Audit</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            )}

            <div className="audit-guarantee">✓ 100% Confidential. No spam guarantee.</div>

            {/* Floating Tag */}
            <div className="audit-floating-tag">
              <span style={{ color: '#00b4d8' }}>★</span>
              <span>500+ Audits Completed in 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
