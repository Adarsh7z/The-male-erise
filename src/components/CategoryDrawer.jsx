import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CATEGORIES } from '../data/categories';
import { ArrowRightIcon, CloseIcon } from './ui/Icons';

export default function CategoryDrawer({ isOpen, onClose, onSelectCategory }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.fromTo(
          containerRef.current,
          { autoAlpha: 0, y: -15 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power3.out' }
        );
      } else if (containerRef.current) {
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          y: -10,
          duration: 0.2,
          ease: 'power2.in',
        });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      onMouseLeave={onClose}
      className="w-full bg-[#0a0a0a] text-white border-b border-white/10 shadow-2xl z-40 relative select-none"
      data-category-drawer
    >
      <div className="shell py-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-silver-300"></span>
            <span className="label text-xs text-silver-200">
              Browse Collections
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                onSelectCategory(null);
                onClose();
              }}
              className="label text-xs text-silver-300 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>View All Pieces</span>
              <ArrowRightIcon width={13} height={13} />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close categories"
            >
              <CloseIcon width={16} height={16} />
            </button>
          </div>
        </div>

        {/* 3 Menswear Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.slug);
                onClose();
              }}
              className="group text-left p-3 border border-white/10 hover:border-silver-400 bg-[#131313] transition-all flex items-center gap-4 cursor-pointer"
            >
              <div className="w-16 h-20 overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover zoom-slow group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <span className="label text-[9px] text-silver-400 block mb-1">
                  Collection
                </span>
                <h4 className="font-display text-lg text-white group-hover:text-silver-200 font-light truncate">
                  {cat.name}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                  {cat.count} curated styles
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
