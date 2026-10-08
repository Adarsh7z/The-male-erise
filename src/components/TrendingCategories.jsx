import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrendingCategories({ onSelectCategory, onNavigateToCategories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // We have 3 categories: Office casuals, Kurta-pyjama, Blazers
  // On mobile: 2 cards per view, so max index is 1 (index 0 shows items 0,1; index 1 shows items 1,2)
  // On desktop: 3 cards fit side by side comfortably
  const maxMobileIndex = Math.max(0, CATEGORIES.length - 2);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxMobileIndex, prev + 1));
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { reduce } = ctx.conditions;
          if (reduce) {
            gsap.set(".trending-title", { autoAlpha: 1 });
            gsap.set(".trending-card", { autoAlpha: 1 });
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          });

          tl.from(".trending-title", {
            y: 25,
            autoAlpha: 0,
            duration: 0.7,
          }).from(
            ".trending-card",
            {
              y: 35,
              autoAlpha: 0,
              duration: 0.6,
              stagger: 0.08,
            },
            "-=0.3"
          );
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title Styled exactly as in Screenshot media_1791450569581_6fb4d289.png */}
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="trending-title font-display-title text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight">
          Trending Category
        </h2>
      </div>

      {/* Carousel Container matching Screenshot: 2 cards side-by-side on mobile with purple side buttons */}
      <div className="relative px-3 sm:px-8">
        
        {/* Left Arrow Button (Purple as in reference) */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-7 h-10 sm:w-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#8b24d6] hover:bg-[#7a1ec0] text-white flex items-center justify-center shadow-md transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Previous categories"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden mx-5 sm:mx-8 py-2">
          <div
            className="flex gap-3 sm:gap-6 transition-transform duration-400 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 52}%)`,
            }}
          >
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className="trending-card flex-shrink-0 w-[calc(50%-6px)] md:w-[calc(33.333%-16px)] flex flex-col items-center cursor-pointer group"
              >
                {/* Dark Rounded Category Tile (As in reference screenshot) */}
                <div className="w-full aspect-square bg-[#1c1c1c] rounded-2xl sm:rounded-3xl overflow-hidden p-2 sm:p-4 flex items-center justify-center relative shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-zinc-800">
                  <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  </div>
                </div>

                {/* Category Caption Below Card */}
                <span className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-purple-700 transition-colors tracking-tight text-center">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button (Purple as in reference) */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxMobileIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-7 h-10 sm:w-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#8b24d6] hover:bg-[#7a1ec0] text-white flex items-center justify-center shadow-md transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Next categories"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>
      </div>

      {/* "View All Categories ↗" Purple Button (Identical to reference screenshot) */}
      <div className="mt-7 sm:mt-10 text-center">
        <button
          onClick={onNavigateToCategories}
          className="inline-flex items-center gap-2 bg-[#8b24d6] hover:bg-[#7a1ec0] text-white font-semibold text-xs sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
        >
          <span>View All Categories</span>
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </section>
  );
}
