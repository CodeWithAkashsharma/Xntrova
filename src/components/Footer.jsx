import React from 'react';

export default function Footer({ meta }) {
  return (
    <footer id="contact" className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-columns-grid">
          {/* Col 1: Brand & Contact */}
          <div>
            <div className="footer-brand-logo">
              <img src="/assets/images/logo.png" alt="Xntrova Technologies" width="140" height="34" />
            </div>
            <p className="footer-brand-desc">
              {meta?.description ||
                'Grow your business with Xntrova – the Best Digital Marketing Company in Delhi NCR offering expert Digital Marketing Services.'}
            </p>

            <div className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{meta?.address || 'A107, 2nd Floor, Sector 8, Dwarka, New Delhi - 110077'}</span>
            </div>

            <div className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{meta?.phone || '+91 868-382-8646'}</span>
            </div>

            <div className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{meta?.email || 'info@xntrova.com'}</span>
            </div>

            <div className="footer-partner-badges">
              <span className="partner-tag">Google Partner</span>
              <span className="partner-tag">Meta Certified</span>
              <span className="partner-tag">Clutch 4.9★</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="footer-title">CORE SERVICES</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">SEO (Search Engine Optimisation)</a></li>
              <li><a href="#services" className="footer-link">PPC & Paid Social Media</a></li>
              <li><a href="#services" className="footer-link">Website Development Services</a></li>
              <li><a href="#services" className="footer-link">Conversion Rate Optimization</a></li>
              <li><a href="#services" className="footer-link">Social Media Marketing</a></li>
              <li><a href="#services" className="footer-link">Content Marketing & PR</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#engine" className="footer-link">The Growth Engine</a></li>
              <li><a href="#metrics" className="footer-link">Case Studies & Outcomes</a></li>
              <li><a href="#audit-form" className="footer-link">Request Free Audit</a></li>
              <li><a href="#home" className="footer-link">Verified Reviews</a></li>
              <li><a href="#contact" className="footer-link">Contact & Location</a></li>
            </ul>
          </div>

          {/* Col 4: Verified Ratings */}
          <div>
            <h4 className="footer-title">VERIFIED RATINGS</h4>
            <div className="rating-box">
              <div className="rating-stars">★★★★★</div>
              <div className="rating-score">4.9/5.0 Overall Rating</div>
              <div className="rating-caption">500+ Verified Business Reviews on Clutch & Google</div>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
              <strong style={{ color: '#cbd5e1' }}>SLA Performance Guarantee:</strong> <br />
              All campaigns engineered with full-funnel attribution and guaranteed sprint turnaround standards.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Xntrova Technologies Pvt. Ltd. All rights reserved. Sector 8, Dwarka, New Delhi.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
            <a href="#terms" className="footer-legal-link">Terms of Service</a>
            <a href="#security" className="footer-legal-link">Security</a>
            <a href="#sitemap" className="footer-legal-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
