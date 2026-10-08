import React, { useRef } from 'react';
import { CATEGORIES } from '../data/categories';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CategoryView({ onSelectCategory }) {
  const containerRef = useRef(null);

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
            gsap.set(".category-view-heading", { autoAlpha: 1 });
            gsap.set(".category-grid-item", { autoAlpha: 1 });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.from(".category-view-heading", {
            y: 25,
            autoAlpha: 0,
            duration: 0.7,
          }).from(
            ".category-grid-item",
            {
              y: 35,
              autoAlpha: 0,
              duration: 0.5,
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
    <div ref={containerRef} className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Heading Matching "Shop by Category" in Video */}
      <div className="category-view-heading text-center mb-8 sm:mb-12">
        <h1 className="font-display-title text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight">
          Shop by Category
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto mt-1">
          Explore our exclusive 3 core menswear lines: Office casuals, Kurta-pyjama & Blazers.
        </p>
      </div>

      {/* Grid of Category Cards (2 cols on mobile, 3 cols on desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.slug)}
            className="category-grid-item flex flex-col items-center cursor-pointer group"
          >
            {/* Dark Rounded Tile Matching Mobile-ui.mp4 */}
            <div className="w-full aspect-square bg-[#1c1c1c] rounded-2xl sm:rounded-3xl overflow-hidden p-2.5 sm:p-5 flex items-center justify-center relative shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-zinc-800">
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Hover arrow badge on desktop */}
              <div className="hidden sm:flex absolute bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Category Caption Below Card */}
            <div className="mt-2.5 text-center">
              <h3 className="text-xs sm:text-base font-semibold text-zinc-900 group-hover:text-purple-700 transition-colors tracking-tight">
                {cat.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-zinc-400 font-mono mt-0.5">
                {cat.itemCount} Designs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
