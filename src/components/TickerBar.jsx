import React from 'react';

export default function TickerBar() {
  const items = [
    { label: 'Scaling 100+ Brands', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: '500+ PROJECTS DELIVERED', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: '3.8X AVG ROAS', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'CORE WEB VITALS 99/100', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: "DELHI'S TOP RATED", icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { label: '14-DAY SPRINT LAUNCH', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <div className="ticker-ribbon" aria-label="Key Performance Indicators">
      <div className="container">
        <div className="ticker-items-flex">
          {items.map((item, idx) => (
            <div key={idx} className="ticker-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
