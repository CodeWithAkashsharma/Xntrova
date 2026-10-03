import React, { useState } from 'react';

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div className="newsletter-strip" aria-label="Newsletter Subscription">
      <div className="container newsletter-flex">
        <div>
          <h3 className="newsletter-title">Scale with algorithmic performance insights</h3>
          <p className="newsletter-desc">
            Join 3,200+ founders receiving bi-weekly growth tear-downs, algorithm updates & playbooks.
          </p>
        </div>

        {subscribed ? (
          <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.875rem' }}>
            ✓ Successfully Subscribed! Welcome aboard.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your work email"
              className="newsletter-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Work Email for Newsletter"
            />
            <button type="submit" className="btn-subscribe">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
