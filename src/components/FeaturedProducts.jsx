import React, { useRef, useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProducts({
  wishlist,
  onToggleWishlist,
  onQuickView,
  onNavigateToShop
}) {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // ONLY the 3 requested sections: Shirts, Kurtas, Blazers
  const filterCategories = [
    { label: "All Items", slug: "all" },
    { label: "Shirts", slug: "shirts" },
    { label: "Kurtas", slug: "kurtas" },
    { label: "Blazers", slug: "blazers" },
  ];

  let targetFilter = activeFilter;
  if (activeFilter === 'coats') targetFilter = 'blazers';
  if (activeFilter === 'office-casuals') targetFilter = 'shirts';
  if (activeFilter === 'kurta-pyjama') targetFilter = 'kurtas';

  const filteredProducts = targetFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === targetFilter);

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
            gsap.set(".featured-heading-block", { autoAlpha: 1 });
            gsap.set(".featured-product-card", { autoAlpha: 1 });
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

          tl.from(".featured-heading-block", {
            y: 25,
            autoAlpha: 0,
            duration: 0.7,
          }).from(
            ".featured-product-card",
            {
              y: 35,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.06,
            },
            "-=0.3"
          );
        }
      );
    },
    { dependencies: [activeFilter], scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Headings Matching Reference Screenshot */}
      <div className="featured-heading-block text-center mb-6 sm:mb-10">
        <span className="block eyebrow-text mb-1">
          EXPLORE
        </span>
        <h2 className="font-display-title text-zinc-900">
          Featured Product
        </h2>

        {/* 3 Sections Filter Pills (Scrollable row on mobile, centered on desktop, min 44px touch target) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mt-4 sm:mt-6 overflow-x-auto no-scrollbar pb-2 px-1 max-w-full">
          {filterCategories.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActiveFilter(tab.slug)}
              data-interactive-btn
              className={`filter-chip-btn flex items-center justify-center shrink-0 px-4 py-2.5 rounded-full transition-all ${
                activeFilter === tab.slug
                  ? 'btn-gloss-black text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Product Grid on Mobile, 3-4 on Desktop (Matching Mobile-ui.mp4) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="featured-product-card">
            <ProductCard
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA to View Complete Catalog */}
      <div className="mt-8 sm:mt-12 text-center">
        <button
          onClick={onNavigateToShop}
          data-magnetic
          data-interactive-btn
          className="inline-flex items-center gap-2 border border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 text-xs sm:text-sm font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl transition-all shadow-xs"
        >
          <span>Explore All 3 Curated Collections</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
