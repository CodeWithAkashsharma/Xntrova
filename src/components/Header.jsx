import React, { useState } from 'react';

export default function Header() {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'engine', label: 'Growth Engine', href: '#engine' },
    { id: 'results', label: 'Results', href: '#metrics' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header" role="banner">
      <div className="container navbar">
        <a href="#home" className="brand-logo" aria-label="Xntrova Technologies Home">
          <img src="/assets/images/logo.png" alt="Xntrova Technologies" width="150" height="36" />
        </a>

        <nav aria-label="Primary Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link-btn ${activeNav === item.id ? 'active' : ''}`}
                  onClick={() => setActiveNav(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#audit-form" className="btn-cyan-pill">
            <span>Free Digital Audit</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="tel:+918683828646" className="btn-outline-pill">
            <span>Schedule Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}
