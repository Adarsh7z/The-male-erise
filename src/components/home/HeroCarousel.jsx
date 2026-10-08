import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRightIcon, ArrowUpRightIcon, PauseIcon, PlayIcon } from '../ui/Icons';
import { BRAND_INFO } from '../../data/products';

// Slide 1 to 6 cycling Office casuals, Kurta-pyjama, Blazers, Office casuals, Kurta-pyjama, Blazers
export const HERO_SLIDES = [
  {
    id: 'slide-1',
    categorySlug: 'office-casuals',
    label: 'Office Casuals',
    title: 'Tailored Linen & Sartorial Workwear',
    image: '/photos/mob-hero-office.jpg',
    desktopPos: 'center center',
    mobilePos: 'center top',
  },
  {
    id: 'slide-2',
    categorySlug: 'kurta-pyjama',
    label: 'Kurta-Pyjama',
    title: 'Festive Silk & Handcrafted Kurtas',
    image: '/photos/mob-hero-kurta.jpg',
    desktopPos: 'center center',
    mobilePos: 'center top',
  },
  {
    id: 'slide-3',
    categorySlug: 'blazers',
    label: 'Blazers',
    title: 'Erise Navy Notch Lapel Blazer',
    image: '/images/blazers/blazer-1-navy-notch.jpg',
    desktopPos: 'center 25%',
    mobilePos: 'center 20%',
  },
  {
    id: 'slide-4',
    categorySlug: 'office-casuals',
    label: 'Office Casuals',
    title: 'Double-Pleated Trousers & Camp Shirts',
    image: '/photos/mob-category-office-casuals.jpg',
    desktopPos: 'center center',
    mobilePos: 'center top',
  },
  {
    id: 'slide-5',
    categorySlug: 'kurta-pyjama',
    label: 'Kurta-Pyjama',
    title: 'Heritage Resham Embroidery Sets',
    image: '/photos/mob-category-kurta-pajama.jpg',
    desktopPos: 'center center',
    mobilePos: 'center top',
  },
  {
    id: 'slide-6',
    categorySlug: 'blazers',
    label: 'Blazers',
    title: 'Savile Double-Breasted Wool Blazer',
    image: '/images/blazers/blazer-5-savile-double-breasted.jpg',
    desktopPos: 'center 25%',
    mobilePos: 'center 20%',
  },
];

const INTERVAL = 6; // 6 seconds per slide from reference source

export function HeroCarousel({ onSelectCategory }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion.current) setPlaying(false);
  }, []);

  // GSAP Slide Crossfade & subtle zoom
  useGSAP(
    () => {
      const nodes = slidesRef.current.filter(Boolean);
      nodes.forEach((node, i) => {
        const img = node.querySelector('img');
        if (i === index) {
          gsap.set(node, { opacity: 1, zIndex: 1 });
          if (img && !reduceMotion.current) {
            gsap.fromTo(
              img,
              { scale: 1.08 },
              { scale: 1, duration: 2.8, ease: 'power3.out' }
            );
          }
        } else {
          gsap.set(node, { opacity: 0, zIndex: 0 });
        }
      });
    },
    { scope: containerRef, dependencies: [index] }
  );

  // GSAP ticker autoplay
  useEffect(() => {
    if (!playing || reduceMotion.current) return;
    const call = gsap.delayedCall(INTERVAL, () => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    });
    return () => {
      call.kill();
    };
  }, [playing, index]);

  const step = useCallback((delta) => {
    setIndex((current) => (current + delta + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const current = HERO_SLIDES[index];

  return (
    <section
      ref={containerRef}
      className="on-dark relative isolate bg-ink text-bone overflow-hidden min-h-[92dvh] sm:min-h-screen flex flex-col justify-between"
      role="region"
      aria-roledescription="carousel"
      aria-label="Male Order Erise Atelier Collections"
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          step(1);
        }
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          step(-1);
        }
      }}
    >
      {/* Background Slides */}
      <div className="absolute inset-0" aria-live={playing ? 'off' : 'polite'}>
        {HERO_SLIDES.map((slide, i) => {
          const rendered = Math.abs(i - index) <= 1 || (index === 0 && i === HERO_SLIDES.length - 1) || (index === HERO_SLIDES.length - 1 && i === 0);

          return (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[i] = el)}
              className="media-frame absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === 0 ? 1 : 0 }}
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${HERO_SLIDES.length}`}
            >
              <span className="skeleton" aria-hidden="true" />
              {rendered && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: window.innerWidth < 768 ? slide.mobilePos : slide.desktopPos,
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Dual Layer Scrim matching reference exact gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgba(10,10,10,0.78)_0%,rgba(10,10,10,0.45)_38%,rgba(10,10,10,0.5)_66%,rgba(10,10,10,0.92)_100%)]"
        />
      </div>

      {/* Brand Greeting Hero Content */}
      <div className="relative z-[3] flex flex-1 flex-col justify-center px-5 pt-32 pb-44 text-center sm:px-8 max-w-4xl mx-auto w-full">
        <div>
          <p className="label text-silver-200 tracking-[0.22em]">
            Office Casuals • Kurta-Pyjama • Tailored Blazers • Bodakdev, Ahmedabad
          </p>

          <h1 className="type-silver-dark t-display mt-6 sm:mt-8">
            <span className="block font-light">Welcome to</span>
            <span className="mt-1 block sm:mt-2 font-normal">Male Order Erise</span>
          </h1>

          <p className="t-body mx-auto mt-6 max-w-md text-bone/85">
            Tailored for work. Made for celebrations.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button
              onClick={() => onSelectCategory('office-casuals')}
              className="btn btn-paper w-full sm:w-auto cursor-pointer"
            >
              <span>Shop Office Casuals</span>
              <ArrowRightIcon width={15} height={15} />
            </button>
            <button
              onClick={() => onSelectCategory('kurta-pyjama')}
              className="btn btn-ghost w-full sm:w-auto cursor-pointer"
            >
              <span>Shop Kurta Pyjama</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Caption (Left aligned on desktop) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-44 sm:bottom-28 z-[4] px-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl justify-center sm:justify-start">
          <button
            type="button"
            onClick={() => onSelectCategory(current.categorySlug)}
            className="pointer-events-auto flex items-center gap-4 transition-opacity duration-700 cursor-pointer text-left"
          >
            <span className="hidden sm:block">
              <span className="label block text-silver-200">{current.label}</span>
              <span className="mt-1 block font-display text-lg text-bone">
                {current.title}
              </span>
            </span>
            <span className="label flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-bone backdrop-blur-sm transition-colors duration-500 hover:border-white/70">
              <span>View</span>
              <ArrowUpRightIcon width={14} height={14} />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Controls (Progress Bars + Slide Counter + Pause/Play) */}
      <div className="absolute inset-x-0 bottom-24 sm:bottom-8 z-[4] px-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          
          {/* Counter "01 / 06" */}
          <p className="label hidden text-silver-300 sm:block">
            <span className="tabular-nums font-mono">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="px-2 text-silver-500">/</span>
            <span className="tabular-nums font-mono">
              {String(HERO_SLIDES.length).padStart(2, '0')}
            </span>
          </p>

          {/* 6 Segmented Progress Bars & Pause Toggle */}
          <div className="flex items-center gap-3.5 mx-auto sm:mx-0">
            <ul className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, i) => (
                <li key={slide.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show slide ${i + 1}: ${slide.title}`}
                    aria-current={i === index}
                    className="tap flex h-8 w-6 sm:w-8 items-center justify-center cursor-pointer"
                  >
                    <span
                      className={`block h-px w-full transition-all duration-500 ${
                        i === index ? 'bg-bone h-[2px]' : 'bg-white/35'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              className="tap flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-bone transition-colors duration-500 hover:border-white/60 cursor-pointer"
            >
              {playing ? (
                <PauseIcon width={12} height={12} />
              ) : (
                <PlayIcon width={12} height={12} />
              )}
              <span className="label text-[10px]">{playing ? 'Pause' : 'Play'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
