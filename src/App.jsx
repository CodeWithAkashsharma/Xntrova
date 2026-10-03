import React from 'react';
import './App.css';
import { xntrovaData } from './data/xntrovaData';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import Metrics from './components/Metrics';
import About from './components/About';
import GrowthEngine from './components/GrowthEngine';
import Services from './components/Services';
import CtaBanner from './components/CtaBanner';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="xntrova-app">
      {/* 1. Announcement & Direct Contact Bar */}
      <TopBar meta={xntrovaData.meta} />

      {/* 2. Main Sticky Navigation */}
      <Header />

      {/* 3. Main Page Content */}
      <main id="main-content">
        {/* Hero Section with Live Audit Card */}
        <Hero meta={xntrovaData.meta} />

        {/* Ticker / Stat Ribbon */}
        <TickerBar />

        {/* Metrics That Move The Balance Sheet */}
        <Metrics />

        {/* About Xntrova Section with Ethos & 3 Feature Cards */}
        <About about={xntrovaData.about} />

        {/* The 4-Stage Xntrova Growth Engine */}
        <GrowthEngine />

        {/* Performance Architecture (Services) */}
        <Services />

        {/* High-Impact Bottom CTA Banner */}
        <CtaBanner phone={xntrovaData.meta.phone} />
      </main>

      {/* 4. Newsletter Subscription Bar */}
      <Newsletter />

      {/* 5. Rich Multi-Column Footer */}
      <Footer meta={xntrovaData.meta} />
    </div>
  );
}
