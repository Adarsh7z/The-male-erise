import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CATEGORIES } from '../data/categories';
import { ArrowRight, X } from 'lucide-react';

export default function CategoryDrawer({ isOpen, onClose, onSelectCategory }) {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

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

          if (isOpen) {
            if (reduce) {
              gsap.set(containerRef.current, { autoAlpha: 1, y: 0 });
              gsap.set(".category-card-item", { autoAlpha: 1, y: 0 });
            } else {
              const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
              tl.fromTo(
                containerRef.current,
                { autoAlpha: 0, y: -20 },
                { autoAlpha: 1, y: 0, duration: 0.35 }
              ).fromTo(
                ".category-card-item",
                { autoAlpha: 0, y: 15, scale: 0.95 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.04 },
                "-=0.2"
              );
            }
          } else {
            if (containerRef.current) {
              gsap.to(containerRef.current, {
                autoAlpha: 0,
                y: -15,
                duration: 0.25,
                ease: "power2.in",
              });
            }
          }
        }
      );
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      onMouseLeave={onClose}
      className="w-full bg-[#0a0a0a] text-white border-b border-zinc-800 shadow-2xl z-40 transition-all duration-300 relative"
      data-category-drawer
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-300">
              Browse Categories
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                onSelectCategory(null);
                onClose();
              }}
              className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 transition-colors"
            >
              <span>View All Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-white transition-colors rounded hover:bg-zinc-800"
              aria-label="Close categories drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Category List (As seen in Cat animation.mp4) */}
        <div
          ref={cardsRef}
          className="flex items-center gap-3.5 sm:gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.slug);
                onClose();
              }}
              className="category-card-item flex-shrink-0 group focus:outline-none text-left"
            >
              {/* Rounded Dark Tile */}
              <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl bg-[#18181b] border border-zinc-800 group-hover:border-purple-500 overflow-hidden relative p-2 flex flex-col items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(139,36,214,0.25)]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl pointer-events-none" />
                <span className="absolute bottom-1.5 px-1 text-[11px] font-semibold text-white tracking-tight drop-shadow-md text-center line-clamp-1 w-full">
                  {cat.shortName}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
