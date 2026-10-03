/**
 * Xntrova Technologies - Main Application Script
 * Clean, modular, reusable vanilla ES6 JavaScript
 * Zero external bloated dependencies. Fast, accessible & lightweight.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Reading & Scroll Progress Bar
  // --------------------------------------------------------------------------
  const scrollProgressBar = document.getElementById('scroll-progress');
  const siteHeader = document.querySelector('.site-header');

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrolled}%`;
    }

    if (siteHeader) {
      if (scrollTop > 40) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --------------------------------------------------------------------------
  // 2. Dark / Light Theme Toggle
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('xntrova-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    rootElement.setAttribute('data-theme', 'light');
  } else {
    rootElement.removeAttribute('data-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = rootElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        rootElement.removeAttribute('data-theme');
        localStorage.setItem('xntrova-theme', 'dark');
        themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
      } else {
        rootElement.setAttribute('data-theme', 'light');
        localStorage.setItem('xntrova-theme', 'light');
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn');

  const openDrawer = () => {
    mobileDrawer?.classList.add('is-open');
    mobileDrawerBackdrop?.classList.add('is-visible');
    mobileToggleBtn?.classList.add('is-active');
    mobileToggleBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer?.classList.remove('is-open');
    mobileDrawerBackdrop?.classList.remove('is-visible');
    mobileToggleBtn?.classList.remove('is-active');
    mobileToggleBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer?.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  mobileDrawerBackdrop?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // --------------------------------------------------------------------------
  // 4. Scrollspy for Active Nav Links
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.scrollY + 140;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // --------------------------------------------------------------------------
  // 5. Intersection Observer: Scroll Reveal Animations
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // --------------------------------------------------------------------------
  // 6. Animated Number Counters
  // --------------------------------------------------------------------------
  const counterElements = document.querySelectorAll('.counter-val');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
      const duration = 1800; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quad
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = (easeOut * target).toFixed(decimals);

        counter.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const statsSection = document.querySelector('.stats-container');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    statsObserver.observe(statsSection);
  }

  // --------------------------------------------------------------------------
  // 7. Interactive ROI & Growth Calculator
  // --------------------------------------------------------------------------
  const budgetSlider = document.getElementById('calc-budget-slider');
  const budgetDisplay = document.getElementById('calc-budget-display');
  const industrySelect = document.getElementById('calc-industry-select');

  const resVisitors = document.getElementById('calc-res-visitors');
  const resLeads = document.getElementById('calc-res-leads');
  const resRoas = document.getElementById('calc-res-roas');
  const resRevenue = document.getElementById('calc-res-revenue');

  const industryMultipliers = {
    b2b: { cpc: 45, convRate: 0.045, avgDeal: 85000, roasBase: 4.8 },
    ecommerce: { cpc: 22, convRate: 0.038, avgDeal: 2800, roasBase: 5.4 },
    healthcare: { cpc: 55, convRate: 0.062, avgDeal: 120000, roasBase: 4.5 },
    services: { cpc: 35, convRate: 0.052, avgDeal: 45000, roasBase: 4.2 },
    local: { cpc: 28, convRate: 0.075, avgDeal: 18000, roasBase: 3.9 }
  };

  const calculateROI = () => {
    if (!budgetSlider || !industrySelect) return;

    const budget = parseInt(budgetSlider.value, 10);
    const industryKey = industrySelect.value || 'b2b';
    const config = industryMultipliers[industryKey] || industryMultipliers.b2b;

    // Format currency (INR formatting with commas)
    budgetDisplay.textContent = `₹${budget.toLocaleString('en-IN')}`;

    // Estimated targeted clicks/visitors
    const visitors = Math.round(budget / config.cpc);
    // Estimated qualified leads
    const leads = Math.max(1, Math.round(visitors * config.convRate));
    // Estimated pipeline revenue
    const estimatedClosedDeals = Math.round(leads * 0.25);
    const revenue = Math.round(estimatedClosedDeals * config.avgDeal);
    const roas = ((revenue / budget) || config.roasBase).toFixed(1);

    if (resVisitors) resVisitors.textContent = `${visitors.toLocaleString('en-IN')}+`;
    if (resLeads) resLeads.textContent = `${leads.toLocaleString('en-IN')}+`;
    if (resRoas) resRoas.textContent = `${roas}x`;
    if (resRevenue) resRevenue.textContent = `₹${revenue.toLocaleString('en-IN')}`;
  };

  if (budgetSlider && industrySelect) {
    budgetSlider.addEventListener('input', calculateROI);
    industrySelect.addEventListener('change', calculateROI);
    calculateROI();
  }

  // --------------------------------------------------------------------------
  // 8. Interactive Portfolio Filter
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.classList.remove('is-hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.classList.add('is-hidden');
          }, 250);
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 9. Interactive Testimonial Slider
  // --------------------------------------------------------------------------
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.getElementById('testimonial-dots');
  let currentSlide = 0;
  let autoplayTimer = null;

  if (slides.length > 0) {
    // Generate navigation dots
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    const goToSlide = (slideIndex) => {
      slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (dots[idx]) dots[idx].classList.remove('active');
      });

      currentSlide = (slideIndex + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    nextBtn?.addEventListener('click', () => {
      nextSlide();
      restartAutoplay();
    });

    prevBtn?.addEventListener('click', () => {
      prevSlide();
      restartAutoplay();
    });

    const startAutoplay = () => {
      autoplayTimer = setInterval(nextSlide, 6500);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    const restartAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    const sliderWrapper = document.querySelector('.testimonial-slider-wrapper');
    sliderWrapper?.addEventListener('mouseenter', stopAutoplay);
    sliderWrapper?.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  }

  // --------------------------------------------------------------------------
  // 10. FAQ Accordion
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('is-open');
        questionBtn.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.maxHeight = `${answer.scrollHeight + 30}px`;
      }
    });
  });

  // Open first FAQ item by default for better initial UX
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstBtn = firstItem.querySelector('.faq-question-btn');
    const firstAns = firstItem.querySelector('.faq-answer');
    firstItem.classList.add('is-open');
    firstBtn?.setAttribute('aria-expanded', 'true');
    if (firstAns) firstAns.style.maxHeight = `${firstAns.scrollHeight + 30}px`;
  }

  // --------------------------------------------------------------------------
  // 11. Lead Capture Form with Validation & Modal Confirmation
  // --------------------------------------------------------------------------
  const leadForm = document.getElementById('lead-capture-form');
  const modalOverlay = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.replace(/\s+/g, ''));
  };

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = leadForm.querySelector('input[name="name"]');
      const emailInput = leadForm.querySelector('input[name="email"]');
      const phoneInput = leadForm.querySelector('input[name="phone"]');
      const submitBtn = leadForm.querySelector('button[type="submit"]');

      // Reset validation styles
      leadForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

      if (!nameInput?.value.trim()) {
        nameInput?.classList.add('is-invalid');
        isValid = false;
      }

      if (!emailInput || !validateEmail(emailInput.value.trim())) {
        emailInput?.classList.add('is-invalid');
        isValid = false;
      }

      if (phoneInput && phoneInput.value.trim() && !validatePhone(phoneInput.value.trim())) {
        phoneInput?.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) return;

      // Show submitting state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Generating Custom Audit...
      `;

      // Simulate API submission
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        leadForm.reset();

        // Show Success Modal
        modalOverlay?.classList.add('is-visible');
      }, 1200);
    });
  }

  // Close modal
  const closeModal = () => {
    modalOverlay?.classList.remove('is-visible');
  };

  modalCloseBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // --------------------------------------------------------------------------
  // 12. Newsletter Subscription
  // --------------------------------------------------------------------------
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const btn = newsletterForm.querySelector('button');

      if (!input || !validateEmail(input.value.trim())) {
        input?.focus();
        return;
      }

      const origText = btn.innerHTML;
      btn.innerHTML = 'Subscribed!';
      btn.style.background = 'var(--accent-emerald)';
      input.value = '';

      setTimeout(() => {
        btn.innerHTML = origText;
        btn.style.background = '';
      }, 3000);
    });
  }

  // --------------------------------------------------------------------------
  // 13. Back to Top Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
