'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroCanvas from './HeroCanvas';
import '../styles/home.css';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero ${loaded ? 'loaded' : ''}`}>
      <div className="hero-bg">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt="IRONFORGE Gym"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-overlay-lines" />
      <HeroCanvas />

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Established 2016 · Govindpuri Extension Kalkaji</span>
        </div>

        <h1 className="hero-title">
          <span>FORGE</span>
          <span className="line-gold">YOUR</span>
          <span className="line-stroke">LEGACY</span>
        </h1>

        <p className="hero-description">
          Where elite performance meets luxury. Train with world-class coaches, 
          cutting-edge equipment, and a community that refuses to settle for ordinary.
        </p>

        <div className="hero-actions">
          <Link href="/enquiry" className="btn-primary">
            <span>Start Your Journey</span>
            <span>→</span>
          </Link>
          <Link href="/gallery" className="btn-secondary">
            <span>View Gallery</span>
          </Link>
        </div>
      </div>

      <div className="hero-stats">
        {[
          { number: '5+', label: 'Years' },
          { number: '2K+', label: 'Members' },
          { number: '40+', label: 'Clients' },
        ].map((stat) => (
          <div key={stat.label} className="hero-stat">
            <div className="hero-stat-number">{stat.number}</div>
            <div className="hero-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-text">Scroll</div>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
