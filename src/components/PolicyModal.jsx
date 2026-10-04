import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import policiesData from '../data/parsedPolicies.json';

export default function PolicyModal({ isOpen, onClose, policyId = 'privacy' }) {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scrolling while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPolicy = policiesData[policyId] || policiesData.privacy;

  return (
    <div className="policy-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="policy-modal-title">
      <div className="policy-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="policy-modal-header">
          <div className="policy-header-left">
            <div className="policy-header-badge-row">
              <ShieldCheck className="policy-header-shield-icon" />
              <span className="policy-modal-company">Xntrova Technologies Pvt. Ltd.</span>
            </div>
            <h3 id="policy-modal-title" className="policy-modal-title">
              {currentPolicy.title}
            </h3>
          </div>

          <button
            type="button"
            className="policy-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="close-icon" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="policy-modal-body">
          {currentPolicy.sections && currentPolicy.sections.length > 0 ? (
            currentPolicy.sections.map((sec, idx) => {
              if (sec.tag === 'h1' || sec.tag === 'h2') {
                return <h4 key={idx} className="policy-body-h2">{sec.text}</h4>;
              }
              if (sec.tag === 'h3' || sec.tag === 'h4') {
                return <h5 key={idx} className="policy-body-h3">{sec.text}</h5>;
              }
              if (sec.tag === 'li') {
                return (
                  <div key={idx} className="policy-body-li">
                    <span className="policy-li-bullet" aria-hidden="true" />
                    <span>{sec.text}</span>
                  </div>
                );
              }
              return <p key={idx} className="policy-body-p">{sec.text}</p>;
            })
          ) : (
            <p className="policy-body-p">Loading policy content...</p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="policy-modal-footer">
          <div className="policy-footer-note">
            For legal inquiries or clarifications, email us directly at{' '}
            <a href="mailto:info@xntrova.com" className="policy-footer-email">
              info@xntrova.com
            </a>
          </div>
          <button type="button" className="policy-close-primary-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
