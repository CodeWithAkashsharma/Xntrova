import React from 'react';
import { clientLogosRow1, clientLogosRow2, clientLogosRow3 } from '../data/clientLogos';

export default function TickerBar() {
  const row1 = clientLogosRow1.concat(clientLogosRow2.slice(0, 4));
  const row2 = clientLogosRow2.slice(4).concat(clientLogosRow3);

  return (
    <div className="ecosystem-strip" aria-label="Verified Client Ecosystem">
      <div className="ecosystem-flex">
        {/* Left Lead Badge */}
        <div className="ecosystem-lead">
          <span className="eco-pulse-dot" />
          <div className="eco-lead-text">
            <span className="eco-tag">VERIFIED PARTNERS</span>
            <span className="eco-title">Client Ecosystem</span>
          </div>
          <div className="eco-divider" />
        </div>

        {/* Two Alternating Moving Rows */}
        <div className="ecosystem-multi-rows">
          {/* Row 1 - Moves Left */}
          <div className="ecosystem-cards-wrap">
            <div className="ecosystem-cards-track track-move-left">
              {row1.concat(row1).concat(row1).map((client, idx) => (
                <div key={`r1-${idx}`} className="eco-brand-card" title={client.name}>
                  <img
                    src={client.src}
                    alt={client.name}
                    className="eco-brand-logo-img"
                    loading="lazy"
                  />
                  <span className="eco-brand-name">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moves Right (Opposite Direction) */}
          <div className="ecosystem-cards-wrap">
            <div className="ecosystem-cards-track track-move-right">
              {row2.concat(row2).concat(row2).map((client, idx) => (
                <div key={`r2-${idx}`} className="eco-brand-card" title={client.name}>
                  <img
                    src={client.src}
                    alt={client.name}
                    className="eco-brand-logo-img"
                    loading="lazy"
                  />
                  <span className="eco-brand-name">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
