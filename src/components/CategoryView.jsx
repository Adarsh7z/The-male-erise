import React, { useRef } from 'react';
import { CATEGORIES } from '../data/categories';
import { ArrowRightIcon } from './ui/Icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CategoryView({ onSelectCategory }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          motion: '(prefers-reduced-motion: no-preference)',
        },
        (ctx) => {
          const { reduce } = ctx.conditions;
          if (reduce) {
            gsap.set('.category-view-heading', { autoAlpha: 1 });
            gsap.set('.category-grid-item', { autoAlpha: 1 });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          tl.from('.category-view-heading', {
            y: 25,
            autoAlpha: 0,
            duration: 0.7,
          }).from(
            '.category-grid-item',
            {
              y: 35,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.08,
            },
            '-=0.3'
          );
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="section-y bg-[#ffffff] select-none">
      <div className="shell">
        {/* Editorial Heading */}
        <div className="category-view-heading text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="label text-muted">The Collections</p>
          <h1 className="t-head type-silver mt-4 text-4xl sm:text-5xl md:text-6xl font-light">
            Menswear Collections
          </h1>
          <p className="t-body text-neutral-600 mt-4 max-w-md mx-auto text-sm sm:text-base">
            Explore our 3 core bespoke lines: Office casuals, Kurta-pyjama & tailored blazers.
          </p>
        </div>

        {/* Grid of 3 Tall Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="category-grid-item draw-border group relative block overflow-hidden cursor-pointer"
            >
              <div className="media-frame aspect-[5/7] w-full relative overflow-hidden bg-neutral-900">
                <span className="skeleton" aria-hidden="true" />
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="zoom-slow w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.5)_45%,rgba(10,10,10,0.35)_100%)] pointer-events-none" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div>
                  <p className="label text-silver-200 text-xs">
                    {cat.itemCount} Tailored Styles
                  </p>
                  <h3 className="type-silver-dark font-display text-2xl sm:text-3xl lg:text-4xl font-light mt-2 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="t-body mt-2 max-w-sm text-neutral-300 text-xs sm:text-sm line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="label mt-5 inline-flex items-center gap-2 text-white text-xs">
                    View collection
                    <ArrowRightIcon
                      width={15}
                      height={15}
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
