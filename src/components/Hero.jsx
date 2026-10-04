import React, { useState } from 'react';
import { OriginButton } from '@/components/ui/origin-button';

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Hero({ meta }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    service: 'SEO (Search Engine Optimisation)',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const chips = [
    { dot: 'green', label: '500+ Clients Scaled' },
    { dot: 'cyan',  label: '₹45Cr+ Revenue Generated' },
    { dot: 'amber', label: '4.9★ Clutch Rating' },
  ];

  return (
    <section id="home" className="hero-section" aria-label="Hero">
      {/* ── Driftmap-style Deep Dark Blue Atmospheric Background ── */}
      <div className="hero-drift-bg" aria-hidden="true">
        <div className="drift-ray-white" />
        <div className="drift-orb drift-orb-white" />
        <div className="drift-orb drift-orb-lightblue" />
        <div className="drift-orb drift-orb-royal" />
        <div className="drift-orb drift-orb-cobalt" />
        <div className="drift-orb drift-orb-ambient" />
        <div className="drift-prism-wave" />
      </div>
      {/* Top Black Mask: Guarantees pure pitch black at the top like Driftmap */}
      <div className="hero-top-black-veil" aria-hidden="true" />

      {/* ── Main Content Grid ── */}
      <div className="container hero-inner">

        {/* LEFT: Headline + CTAs */}
        <div className="hero-left">

          {/* Headline */}
          <h1 className="hero-headline">
            Scale Your Business<br />
            With <span className="text-gradient">Xntrova's</span>
            <br />
            <span className="text-warm">Growth Engine.</span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            {meta?.subtagline ||
              "Unlock your business potential and connect with your targeted customers by partnering with Xntrova — Delhi's best digital marketing agency."}
          </p>

          {/* Stat Chips */}
          <div className="hero-chip-row">
            {chips.map((c, i) => (
              <span key={i} className="hero-chip">
                <span className={`chip-dot ${c.dot}`} />
                {c.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <OriginButton
              onClick={() => {
                const el = document.getElementById('audit-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-btn-main hero-origin-btn"
              aria-label="Claim Free Growth Audit"
            >
              <span className="hero-origin-content">
                <span>Claim Free Growth Audit</span>
                <span className="arrow-icon">
                  <ArrowRight />
                </span>
              </span>
            </OriginButton>
            <a href="#engine" className="hero-btn-secondary">
              <span>Explore Methodology</span>
            </a>
          </div>

          {/* Trust / Social Proof */}
          <div className="hero-trust">
            <div className="avatar-stack">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
              ].map((src, i) => (
                <div key={i} className="avatar-ring">
                  <img src={src} alt="Client" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="trust-text">
              <div className="stars-row">★★★★★</div>
              <p>
                <strong className="trust-rating-title">4.9/5 Clutch Rating</strong>
                <span className="trust-separator"> · </span>
                <span className="trust-subtext">Verified ROI across 500+ companies</span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Floating Audit Card */}
        <div className="hero-right">
          <div className="hero-card-wrap">
            <div id="audit-form" className="audit-card">
              <span className="audit-card-tag">100% Free · No Obligation</span>
              <h2 className="audit-card-headline">Request Growth Audit</h2>
              <p className="audit-card-sub">
                Get a 14-point audit of your ad traffic, SEO rankings, and conversion drop-offs — delivered in 4 hours.
              </p>

              {submitted ? (
                <div className="audit-success">
                  <div className="success-check">✓</div>
                  <h3>Audit Request Confirmed!</h3>
                  <p>
                    Our Senior Growth Strategist will review your digital footprint and reach out within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="audit-form" noValidate>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    className="form-input"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-label="Your Name"
                  />
                  <input
                    type="email"
                    placeholder="Work Email Address *"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-label="Work Email"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    aria-label="Phone Number"
                  />
                  <select
                    className="form-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    aria-label="Select Service"
                  >
                    <option value="SEO (Search Engine Optimisation)">SEO (Search Engine Optimisation)</option>
                    <option value="PPC (Pay-Per-Click)">PPC &amp; Performance Marketing</option>
                    <option value="Web Development">Custom Web Development</option>
                    <option value="Social Media Marketing">Social Media &amp; Branding</option>
                    <option value="Full Growth Engine">Full 360° Growth Engine</option>
                  </select>
                  <button type="submit" className="form-submit-btn">
                    <span className="btn-content-wrap">
                      <span>Get My Comprehensive Audit</span>
                      <ArrowRight />
                    </span>
                  </button>
                </form>
              )}

              <div className="audit-guarantee">
                100% Confidential · No spam guarantee
              </div>
            </div>

            {/* Floating badge placed outside audit-card so overflow:hidden does not clip it */}
            <div className="audit-float-badge">
              <span className="star">★</span>
              500+ Audits Completed in 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
