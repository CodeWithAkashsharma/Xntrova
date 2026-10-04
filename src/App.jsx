import React, { useState, useEffect } from 'react';
import './App.css';
import { xntrovaData } from './data/xntrovaData';

import Header from './components/Header';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import WhyChooseUs from './components/WhyChooseUs';
import Metrics from './components/Metrics';
import About from './components/About';
import HowWeWork from './components/HowWeWork';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedService, setSelectedService] = useState('Search Engine Optimization (SEO)');

  useEffect(() => {
    // 1. Prevent browser from remembering previous scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. Immediately reset to top of viewport
    window.scrollTo(0, 0);

    // 3. Clear any lingering hash that forces unwanted jump on refresh
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="xntrova-app">
      {/* 1. Main Sticky Navigation */}
      <Header />

      {/* 2. Main Page Content */}
      <main id="main-content">
        {/* Hero Section with Live Audit Card */}
        <Hero meta={xntrovaData.meta} />

        {/* Ticker / Stat Ribbon */}
        <TickerBar />

        {/* Why Choose Us - Pillars sourced from original xntrova.com */}
        <WhyChooseUs />

        {/* Performance Architecture (Services) */}
        <Services onSelectService={(srvTitle) => setSelectedService(srvTitle)} />

        {/* Section: How We Work — 4-Stage Growth Cycle */}
        <HowWeWork />

        {/* Metrics That Move The Balance Sheet (Results) */}
        <Metrics />

        {/* About Xntrova Section with Ethos & 4 Pillars */}
        <About about={xntrovaData.about} />

        {/* Contact Us & Strategy Audit Section */}
        <ContactSection meta={xntrovaData.meta} preselectedService={selectedService} />
      </main>

      {/* 3. Rich Multi-Column Footer */}
      <Footer meta={xntrovaData.meta} />

      {/* 5. Sticky Floating WhatsApp Contact Icon (Bottom-Right) */}
      <WhatsAppButton
        phone={xntrovaData.meta.phone}
        message="Hi Xntrova, I would like to know more about your services and I'm interested in connecting with you."
      />
    </div>
  );
}
