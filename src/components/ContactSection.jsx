import React, { useState, useEffect } from 'react';

export default function ContactSection({ meta, preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Search Engine Optimization (SEO)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Search Engine Optimization (SEO)',
    'Paid Advertising (PPC)',
    'Social Media Optimization (SMO)',
    'E-Commerce Marketing',
    'Content Marketing',
    'Website Development',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact Xntrova">
      {/* Anchor for any #audit-form targets */}
      <div id="audit-form" className="audit-form-anchor" />

      <div className="container">
        {/* Centered Section Heading (Short & Punchy) */}
        <div className="contact-section-intro centered">
          <h2 className="contact-main-heading">
            <span className="contact-heading-part1">Ready to Scale?</span>
            <span className="contact-heading-break"> </span>
            <span className="contact-heading-part2">Let's Talk</span>
          </h2>
          <p className="contact-main-sub">
            Tell us about your goals and our experts will get back to you shortly.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <div className="contact-welcome-card-clean">
              <h3 className="contact-clean-title">Get in touch with us</h3>

              {/* Direct Info List */}
              <div className="contact-clean-list">
                {/* Call For Advice */}
                <div className="contact-clean-item contact-clean-item-call">
                  <div className="contact-clean-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-clean-text">
                    <span className="contact-clean-label">Call For Advice</span>
                    <a href={`tel:${meta?.phone?.replace(/[^0-9+]/g, '') || '+918683828646'}`} className="contact-clean-link">
                      {meta?.phone || '+91 868-382-8646'}
                    </a>
                  </div>
                </div>

                {/* Mail Us */}
                <div className="contact-clean-item contact-clean-item-mail">
                  <div className="contact-clean-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="contact-clean-text">
                    <span className="contact-clean-label">Mail Us</span>
                    <a href={`mailto:${meta?.email || 'info@xntrova.com'}`} className="contact-clean-link">
                      {meta?.email || 'info@xntrova.com'}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="contact-clean-item contact-clean-item-address">
                  <div className="contact-clean-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-clean-text">
                    <span className="contact-clean-label">Office Address</span>
                    <address className="contact-clean-address">
                      <span>A107, 2nd Floor, Sector 8, Dwarka, New Delhi – 110077</span>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (Matching Original Site Image 1) */}
          <div className="contact-form-col">
            <div className="contact-clean-form-card">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-circle">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 className="success-title">Message Received!</h4>
                  <p className="success-desc">
                    Thank you, <strong>{formData.fullName}</strong>. Our experts will get back to you shortly regarding <strong>{formData.service}</strong>.
                  </p>
                  <button
                    type="button"
                    className="success-reset-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-actual-form-clean" onSubmit={handleSubmit}>
                  {/* Row 1: Your Name* & you@company.com* */}
                  <div className="form-row-2">
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your Name*"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="clean-form-input"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com*"
                      value={formData.email}
                      onChange={handleChange}
                      className="clean-form-input"
                    />
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="form-row-2">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="clean-form-input"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="clean-form-input"
                    />
                  </div>

                  {/* Row 3: Dropdown for Service Interested In */}
                  <div className="form-row-full">
                    <div className="select-dropdown-wrap">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="clean-form-select"
                        required
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="select-arrow-icon"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Row 4: Business Goals Textarea */}
                  <div className="form-row-full">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your business goals"
                      value={formData.message}
                      onChange={handleChange}
                      className="clean-form-textarea"
                    />
                  </div>

                  {/* Row 5: Submit Button matching Image 1 */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="clean-form-submit-btn"
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
