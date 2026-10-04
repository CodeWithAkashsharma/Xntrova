import React from 'react';
import {
  Lightbulb,
  Compass,
  BarChart3,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function About({ about }) {
  // 4 Key Pillars from the original Xntrova website
  const pillars = [
    {
      id: 'creative-ideas',
      number: '100%',
      title: 'Creative Ideas',
      desc: 'Fresh thinking that builds powerful brand stories.',
      colorClass: 'blue',
      icon: Lightbulb,
    },
    {
      id: 'strategic-planning',
      number: '360°',
      title: 'Strategic Planning',
      desc: 'Smart strategies backed by deep market insights.',
      colorClass: 'green',
      icon: Compass,
    },
    {
      id: 'data-driven',
      number: '10x',
      title: 'Data-Driven Decisions',
      desc: 'Decisions tied to real impact and ROI.',
      colorClass: 'orange',
      icon: BarChart3,
    },
    {
      id: 'measurable-results',
      number: '+250%',
      title: 'Measurable Results',
      desc: 'Real results that drive growth and long-term success.',
      colorClass: 'purple',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="about-section" aria-label="About Xntrova">
      <div className="container">
        <div className="about-grid-layout">
          {/* Left Column: Authentic Content & Value Story */}
          <div className="about-content-col">
            <div className="about-eyebrow-wrap">
              <span className="about-eyebrow-line" aria-hidden="true" />
              <span className="about-eyebrow-text">ABOUT XNTROVA</span>
            </div>

            <h2 className="about-main-title">
              Driven By Ideas.<br />
              Focused on <span className="text-highlight">Results</span>
            </h2>

            <p className="about-lead-paragraph">
              {about?.content ||
                'At Xntrova, we believe that the key to great marketing is understanding people. Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters. We combine creativity with data-driven decisions to create meaningful experiences that connect, engage, and inspire action.'}
            </p>

            <div className="about-quote-box">
              <p className="about-secondary-paragraph">
                {about?.secondary ||
                  'Whether you want to shape your brand story, improve visibility, or drive conversion, we take a creative and data-driven approach to ensure the best possible results. Standing as the best digital marketing agency in Delhi NCR, we aim to create work that delivers measurable results and helps your business climb the competitive ladder with confidence.'}
              </p>
            </div>

            {/* CTA Action Button */}
            <div className="about-cta-wrap">
              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('audit-form') || document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="about-primary-btn"
              >
                <span>Let’s Grow Together</span>
                <ArrowRight className="btn-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Key Points Bento Showcase (Matching Original Website Data) */}
          <div className="about-bento-showcase">
            <div className="about-bento-grid">
              {pillars.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className={`bento-card bento-card-${item.colorClass}`}>
                    <div className="bento-card-head">
                      <div className={`bento-icon-wrap bento-icon-${item.colorClass}`}>
                        <IconComponent className="bento-icon" />
                      </div>
                    </div>
                    <div className="bento-card-number">{item.number}</div>
                    <h4 className="bento-card-title">{item.title}</h4>
                    <p className="bento-card-sub">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
