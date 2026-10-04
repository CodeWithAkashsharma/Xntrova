import React, { useState, useEffect } from 'react';

export default function Services({ onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalService(null);
      }
    };

    if (activeModalService) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalService]);

  const servicesList = [
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      badge: 'Organic Growth',
      metricPill: '+250% Organic Lift',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      desc: 'Achieve higher visibility and long-term organic growth. Our SEO services in Delhi integrate keyword optimization, on-page and off-page factors, and technical improvements that drive traffic, enhance ranking, and strengthen your brand authority.',
      bullets: [
        'Commercial keyword research & competitor gap analysis',
        'On-page content optimization & structural metadata',
        'Technical SEO audit & Core Web Vitals performance',
        'Authoritative digital PR & quality link acquisition',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      id: 'ppc',
      title: 'Paid Advertising (PPC)',
      badge: 'Targeted Paid Media',
      metricPill: '4.8x Target ROAS',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      desc: 'Accelerate results with targeted advertising across Google, Meta, and other leading platforms. We craft high-performance PPC campaigns that deliver measurable returns by reaching the right audience, at the right time, with the right message.',
      bullets: [
        'Google Search, Shopping & Performance Max campaigns',
        'High-converting Meta (Facebook & Instagram) ad sets',
        'Data-driven audience retargeting & funnel segmentation',
        'Real-time cost-per-acquisition (CAC) and ROAS reporting',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
        </svg>
      ),
    },
    {
      id: 'smo',
      title: 'Social Media Optimization (SMO)',
      badge: 'Community & Brand',
      metricPill: 'Top 1% Engagement Tier',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
      desc: 'Optimize your social media presence with our digital marketing company in Delhi. We elevate your social media impact through creative storytelling, influencer collaborations, and analytics-driven strategies, thus building relationships, engagement, and community growth.',
      bullets: [
        'Creative storytelling & viral short-form video reels',
        'Strategic influencer partnerships & creator outreach',
        'Proactive community management & brand voice',
        'Social listening & real-time audience analytics',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Marketing',
      badge: 'Sales Velocity',
      metricPill: '+45% Conversion Lift',
      imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80',
      desc: 'Boost your online sales with tailored e-commerce marketing strategies. From product optimization and PPC campaigns to remarketing and conversion rate improvement, our digital marketing agency in Delhi helps turn visitors into loyal customers through data-driven performance tactics.',
      bullets: [
        'Shopify, WooCommerce & marketplace store scaling',
        'High-intent dynamic catalog ads & retargeting',
        'Automated abandoned cart recovery & email flows',
        'Checkout funnel conversion rate optimization (CRO)',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
    },
    {
      id: 'content',
      title: 'Content Marketing',
      badge: 'Brand Authority',
      metricPill: '10x Reach Multiplier',
      imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
      desc: "Build your brand authority with Xntrova's content marketing services. Our team delivers blogs, articles, infographics, and storytelling campaigns that align with your brand voice and strengthen your digital footprint while improving SEO performance.",
      bullets: [
        'High-converting editorial blogs & thought leadership',
        'Custom infographics & branded visual collateral',
        'Multi-channel content syndication & outreach',
        'Lead magnet, whitepaper & case study production',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      id: 'web-dev',
      title: 'Website Development',
      badge: 'Modern Engineering',
      metricPill: 'Sub-1.8s Core Web Vitals',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      desc: 'Create a robust digital presence with responsive, SEO-ready websites that deliver performance and aesthetics. Our website design company in Delhi creates sites that are fast, functional, and aligned perfectly with your goals, thus ensuring seamless user experiences.',
      bullets: [
        'Clean modern code built for conversion & velocity',
        '100% mobile-first responsive architecture',
        'Sub-2-second load times engineered for Core Web Vitals',
        'Integrated conversion tracking & technical SEO setup',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
  ];

  const handleInquire = (serviceTitle) => {
    if (typeof onSelectService === 'function') {
      onSelectService(serviceTitle);
    }
    // Smooth scroll to audit-form / contact section
    const target = document.getElementById('audit-form') || document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-section services-section-bright" aria-label="Services">
      <div className="container">
        {/* Section Intro matching reference style */}
        <div className="services-intro services-intro-bright">
          <span className="services-top-badge-mobile">Our Capabilities</span>
          <h2 className="section-heading-bright">
            A world of experts,<br />
            <span className="heading-gradient-accent">at your service</span>
          </h2>
          <p className="section-sub-bright">
            Choose from specialized organic growth, targeted paid media, and engineering solutions — delivered by certified growth specialists.
          </p>
        </div>

        {/* 6 Services 3D/Modern Cards Grid (Desktop View) */}
        <div className="services-grid-3d services-grid-desktop">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              className="service-card-3d"
              onClick={() => setActiveModalService(srv)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalService(srv);
                }
              }}
              aria-label={`View details for ${srv.title}`}
            >
              {/* Top Visual Container */}
              <div className="service-card-3d-visual">
                <img
                  src={srv.imageUrl}
                  alt={srv.title}
                  className="service-3d-img"
                  loading="lazy"
                />
              </div>

              {/* Card Title & Desc */}
              <div className="service-card-3d-body">
                <h3 className="service-3d-title">{srv.title}</h3>
                <p className="service-3d-desc-preview">{srv.desc}</p>
              </div>

              {/* Interactive Prompt */}
              <div className="service-3d-footer">
                <span className="service-3d-explore-btn">
                  <span>Explore Details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Auto-moving Infinite Carousel (Small Screens Only) */}
        <div className="services-marquee-wrapper-mobile">
          <div className="services-marquee-track-mobile">
            {[...servicesList, ...servicesList, ...servicesList].map((srv, idx) => (
              <div
                key={`m-srv-${srv.id}-${idx}`}
                className="service-card-3d service-card-marquee"
                onClick={() => setActiveModalService(srv)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalService(srv);
                  }
                }}
                aria-label={`View details for ${srv.title}`}
              >
                <div className="service-card-3d-visual">
                  <img
                    src={srv.imageUrl}
                    alt={srv.title}
                    className="service-3d-img"
                    loading="lazy"
                  />
                </div>
                <div className="service-card-3d-body">
                  <h3 className="service-3d-title">{srv.title}</h3>
                  <p className="service-3d-desc-preview">{srv.desc}</p>
                </div>
                <div className="service-card-3d-footer">
                  <span className="service-3d-explore-btn">
                    <span>Explore Details</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Infinite auto-moving scrollbar indicator */}
          <div className="services-marquee-scrollbar-track" aria-hidden="true">
            <div className="services-marquee-scrollbar-thumb" />
          </div>
        </div>
      </div>

      {/* POP-UP MODAL FOR SERVICE DETAILS */}
      {activeModalService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setActiveModalService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div
            className="service-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setActiveModalService(null)}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Top Media Banner */}
            <div className="service-modal-banner">
              <img
                src={activeModalService.imageUrl}
                alt={activeModalService.title}
                className="service-modal-banner-img"
              />
              <div className="service-modal-banner-overlay" />
            </div>

            {/* Modal Body */}
            <div className="service-modal-body">
              <div className="service-modal-header">
                <div className="service-modal-icon-bubble">
                  {activeModalService.icon}
                </div>
                <div>
                  <h3 id="modal-service-title" className="service-modal-title">
                    {activeModalService.title}
                  </h3>
                  <span className="service-modal-tagline">Xntrova Certified Core Capability</span>
                </div>
              </div>

              <p className="service-modal-desc">{activeModalService.desc}</p>

              {/* Key Deliverables */}
              <div className="service-modal-deliverables">
                <h4 className="service-modal-deliverables-title">Strategic Deliverables & Execution:</h4>
                <ul className="service-modal-list">
                  {activeModalService.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="service-modal-check">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal CTAs */}
              <div className="service-modal-actions">
                <button
                  type="button"
                  className="service-modal-btn-primary"
                  onClick={() => {
                    handleInquire(activeModalService.title);
                    setActiveModalService(null);
                  }}
                >
                  <span>Request Strategy Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <a
                  href={`https://wa.me/918683828646?text=${encodeURIComponent(`Hi Xntrova, I would like to inquire about your ${activeModalService.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-modal-btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
