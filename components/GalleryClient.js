'use client';

import { useState } from 'react';
import Image from 'next/image';
import '../styles/gallery.css'

const galleryItems = [
  {
    id: 1,
    src: '/Gallery/img1.JPG',
    category: 'Facility',
    type : 'image',
    title: 'Main Training Floor',
    desc: 'Our 15,000 sq ft main floor, equipped with over 300 premium machines and free weights.',
  },
  {
    id: 2,
    src:'/Gallery/img2.JPG',
    category: 'Training',
    type : 'image',
    title: 'Cardio Zone',
    desc: 'State-of-the-art cardio equipment with personal screens and climate control.',
  },
  {
    id: 3,
    src: '/Gallery/img3.JPG',
    category: 'Training',
    type : 'image',
    title: 'Olympic Lifting Platform',
    desc: 'Dedicated Olympic lifting platforms with competition-grade bumper plates.',
  },
  {
    id: 4,
    src: '/Gallery/img4.JPG',
    category: 'Training',
    type : 'image',
    title: 'Personal Training Studio',
    desc: 'Private studio spaces for one-on-one coaching sessions.',
  },
  {
    id: 5,
    src: '/Gallery/img5.JPG',
    category: 'Facility',
    type : 'image',
    title: 'Weights Gallery',
    desc: 'Extensive free weights selection from 5lb to 150lb dumbbells.',
  },
  {
    id: 6,
    src: '/Gallery/img6.JPG',
    category: 'Training',
    type : 'image',
    title: 'Functional Zone',
    desc: 'Dedicated functional training space with battle ropes, sleds, and turf.',
  },
  {
    id: 7,
    src: '/Gallery/img7.JPG',
    category: 'Recovery',
    type : 'image',
    title: 'Recovery Suite',
    desc: 'Premium recovery including cold plunge pools and infrared sauna.',
  },
  {
    id: 8,
    src: '/Gallery/img8.JPG',
    category: 'Classes',
    type : 'image',
    title: 'Group Studio',
    desc: 'Mirrored studio spaces for yoga, spin, HIIT, and group fitness classes.',
  },
  {
    id: 9,
    src: '/Gallery/img9.JPG',
    category: 'Training',
    type : 'image',
    title: 'Strength Lab',
    desc: 'Heavy compound movement area with squat racks and power cages.',
  },
  {
    id: 10,
    src: '/Gallery/img10.JPG',
    category: 'Facility',
    type : 'image',
    title: 'Luxury Locker Room',
    desc: 'Premium locker rooms with private suites and spa-quality amenities.',
  },
  {
    id: 11,
    src: '/Gallery/img11.JPG',
    category: 'Training',
    type : 'image',
    title: 'Boxing Suite',
    desc: 'Professional boxing and martial arts training area.',
  },
  {
    id: 12,
    src: '/Gallery/img12.JPG',
    category: 'Recovery',
    type : 'image',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
  {
    id: 13,
    src: '/Gallery/img13.JPG',
    category: 'Recovery',
    type : 'image',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
  {
    id: 14,
    src: '/Gallery/img14.JPG',
    category: 'Recovery',
    type : 'image',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
  {
    id: 15,
    src: '/Gallery/img15.JPG',
    category: 'Recovery',
    type : 'image',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },

  // videos below this
  
  {
    id: 16,
    src: '/Gallery/vid1.MP4',
    category: 'Recovery',
    type : 'video',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
  {
    id: 17,
    src: '/Gallery/vid2.MP4',
    category: 'Recovery',
    type : 'video',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
  {
    id: 18,
    src: '/Gallery/vid3.MP4',
    category: 'Recovery',
    type : 'video',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
  {
    id: 19,
    src: '/Gallery/vid4.MP4',
    category: 'Recovery',
    type : 'video',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
  {
    id: 20,
    src: '/Gallery/vid5.MP4',
    category: 'Recovery',
    type : 'video',
    title: 'Stretch & Mobility Zone',
    desc: 'Dedicated stretching area with foam rollers and mobility tools.',
  },
];

const categories = ['All', 'Facility', 'Training', 'Images', 'Videos'];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : activeCategory === 'Images'
      ? galleryItems.filter(item => item.type === 'image')
      : activeCategory === 'Videos'
      ? galleryItems.filter(item => item.type === 'video')
      : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
    <main className="gallery-page" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="container">
        <div className="gallery-hero">
          <div className="gallery-hero-inner">
            <div>
              <div className="section-label">Our Facility</div>
              <h1 className="section-title">
                THE<br /><span>GALLERY</span>
              </h1>
              <p className="section-subtitle">
                Every corner of IRONFORGE is designed to inspire performance and demand excellence.
              </p>
            </div>
            <div className="gallery-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="gallery-grid">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={item.id % 3 === 0 ? 750 : item.id % 2 === 0 ? 450 : 600}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              ) : (
                <video
                src={item.src}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              )}

              <div className="gallery-item-overlay">
                <div className="gallery-item-info">
                  <div className="gallery-item-category">{item.category}</div>
                  <div className="gallery-item-title">{item.title}</div>
                </div>
              </div>
              <div className="gallery-expand-icon">⤢</div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox">
          <div className="lightbox-backdrop" onClick={closeLightbox} />
          <div className="lightbox-content">
            <div className="lightbox-image-wrap">

              {filtered[lightboxIndex].type === 'image' ? (
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].title}
                  width={1100}
                  height={700}
                  style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'cover' }}
                />
              ) : (
                <video
                  src={filtered[lightboxIndex].src}
                  controls
                  autoPlay
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              )}

              <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            </div>

            <div className="lightbox-info">
              <div className="lightbox-category">{filtered[lightboxIndex].category}</div>
              <div className="lightbox-title">{filtered[lightboxIndex].title}</div>
              <p className="lightbox-desc">{filtered[lightboxIndex].desc}</p>
              <div className="lightbox-nav">
                <button className="lightbox-nav-btn" onClick={prevImage}>←</button>
                <button className="lightbox-nav-btn" onClick={nextImage}>→</button>
              </div>
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}