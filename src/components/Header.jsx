import React, { useState, useEffect, useRef } from 'react';

const countries = [
  { code: 'IN', name: 'India', flag: '🇮🇳', dial: '+91 868-382-8646' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dial: '+61 2 8000 0000' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dial: '+1 416 000 0000' },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerDropdownOpen, setDrawerDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const drawerDropdownRef = useRef(null);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Activate navbar dark background only after scrolling past 20% of the viewport height
      setScrolled(window.scrollY > window.innerHeight * 0.20);

      const scrollY = window.scrollY;

      // Top of page: always 'home'
      if (scrollY < 160) {
        setActiveNav('home');
        return;
      }

      // Bottom of page: always 'contact'
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveNav('contact');
        return;
      }

      // Sections in document order from top to bottom
      const sections = [
        { navId: 'home', id: 'home' },
        { navId: 'services', id: 'services' },
        { navId: 'services', id: 'how-we-work' }, // How We Work belongs to the services journey
        { navId: 'results', id: 'metrics' },
        { navId: 'about', id: 'about' },
        { navId: 'contact', id: 'contact' },
      ];

      // A section becomes active when its top is at or above the top 40% of the screen
      const triggerLine = window.innerHeight * 0.40;
      let currentNav = 'home';

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            currentNav = s.navId;
          }
        }
      }

      setActiveNav(currentNav);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Close country dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (drawerDropdownRef.current && !drawerDropdownRef.current.contains(e.target)) {
        setDrawerDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'results', label: 'Results', href: '#metrics' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ' transparent'}`} role="banner">
      <div className="container navbar">
        {/* Left Side: Brand Logo */}
        <a
          href="#home"
          className="brand-logo"
          aria-label="Xntrova Technologies — Home"
          onClick={(e) => {
            e.preventDefault();
            setActiveNav('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/assets/images/logo-dark.png"
            alt="Xntrova Technologies"
            className="navbar-logo-img dark-logo"
            onError={(e) => {
              if (e.currentTarget.src !== window.location.origin + '/assets/images/logo.png') {
                e.currentTarget.src = '/assets/images/logo.png';
              }
            }}
          />
        </a>

        {/* Center: Desktop Floating Capsule Nav (Hidden on Mobile) */}
        <nav className={`nav-capsule${scrolled ? '' : ' on-transparent'}`} aria-label="Primary Navigation">
          <ul className="nav-pill-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-pill-btn${activeNav === item.id ? ' active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(item.id);
                    if (item.id === 'home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const targetId = item.href.replace('#', '');
                      const el = document.getElementById(targetId);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: Desktop Country Dropdown & Mobile Hamburger Button */}
        <div className="nav-actions">
          {/* Desktop Country Dropdown (Hidden on Mobile) */}
          <div className="country-dropdown-wrap desktop-only-country" ref={dropdownRef}>
            <button
              type="button"
              className={`country-select-btn${scrolled ? '' : ' on-transparent'}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-label="Select Country"
            >
              <span className="country-flag">{selectedCountry.flag}</span>
              <span className="country-name">{selectedCountry.name}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`country-arrow${dropdownOpen ? ' open' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="country-menu" role="menu">
                {countries.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    className={`country-option${selectedCountry.code === c.code ? ' selected' : ''}`}
                    onClick={() => {
                      setSelectedCountry(c);
                      setDropdownOpen(false);
                    }}
                    role="menuitem"
                  >
                    <span className="country-flag">{c.flag}</span>
                    <span className="country-option-name">{c.name}</span>
                    {selectedCountry.code === c.code && (
                      <span className="country-check">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button (Right Side) */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`burger-bar bar-1 ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`burger-bar bar-2 ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`burger-bar bar-3 ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>

        {/* Mobile Slide-in Drawer from Right with Glass and Blur */}
        <div
          className={`mobile-drawer-backdrop${mobileMenuOpen ? ' active' : ''}`}
          onClick={() => {
            setMobileMenuOpen(false);
            setDrawerDropdownOpen(false);
          }}
          aria-hidden={!mobileMenuOpen}
        />

        <aside
          className={`mobile-right-drawer${mobileMenuOpen ? ' open' : ''}`}
          aria-label="Mobile Navigation Drawer"
        >
          {/* Drawer Top Header with Logo and Close */}
          <div className="drawer-header">
            <a
              href="#home"
              className="drawer-logo"
              onClick={(e) => {
                e.preventDefault();
                setActiveNav('home');
                setMobileMenuOpen(false);
                setDrawerDropdownOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="/assets/images/logo-dark.png"
                alt="Xntrova Technologies"
                className="drawer-logo-img"
              />
            </a>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setDrawerDropdownOpen(false);
              }}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Country Selector Inside Sidebar (Dropdown) */}
          <div className="drawer-country-wrap" ref={drawerDropdownRef}>
            <span className="drawer-section-label">REGION / OFFICE</span>
            <div className="drawer-country-box">
              <button
                type="button"
                className="drawer-country-btn"
                onClick={() => setDrawerDropdownOpen(!drawerDropdownOpen)}
                aria-expanded={drawerDropdownOpen}
                aria-label="Select Country"
              >
                <div className="drawer-country-btn-left">
                  <span className="country-flag">{selectedCountry.flag}</span>
                  <span className="drawer-country-name">{selectedCountry.name}</span>
                </div>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`country-arrow${drawerDropdownOpen ? ' open' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {drawerDropdownOpen && (
                <div className="drawer-country-menu" role="menu">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      className={`drawer-country-option${selectedCountry.code === c.code ? ' selected' : ''}`}
                      onClick={() => {
                        setSelectedCountry(c);
                        setDrawerDropdownOpen(false);
                      }}
                      role="menuitem"
                    >
                      <span className="country-flag">{c.flag}</span>
                      <span className="drawer-country-option-name">{c.name}</span>
                      <span className="drawer-country-option-dial">{c.dial}</span>
                      {selectedCountry.code === c.code && (
                        <span className="country-check">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Navigation in Sidebar */}
          <nav className="drawer-nav">
            <span className="drawer-section-label">MENU</span>
            <ul className="drawer-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="drawer-nav-item">
                  <a
                    href={item.href}
                    className={`drawer-nav-link${activeNav === item.id ? ' active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveNav(item.id);
                      setMobileMenuOpen(false);
                      setDrawerDropdownOpen(false);
                      if (item.id === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        const targetId = item.href.replace('#', '');
                        const el = document.getElementById(targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {activeNav === item.id && (
                      <span className="drawer-active-indicator" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer in Sidebar */}
          <div className="drawer-footer">
            <a
              href="#contact"
              className="drawer-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                setDrawerDropdownOpen(false);
                const el = document.getElementById('audit-form') || document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Free Growth Audit
            </a>
            <div className="drawer-contact-info">
              <span className="drawer-phone">📞 {selectedCountry.dial}</span>
              <span className="drawer-email">✉️ contact@xntrova.com</span>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
