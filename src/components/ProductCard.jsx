import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const FALLBACK_PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500" fill="%23f4f4f5"><rect width="400" height="500" fill="%23f4f4f5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a1a1aa" font-family="sans-serif" font-size="14">Image Unavailable</text></svg>';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView
}) {
  const imagesCount = product.images?.length || 1;
  const coverImage = product.images?.[0] || '';
  const secondaryImage = product.images?.[1] || null;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onQuickView(product);
    }
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      data-product-card
      aria-label={`View ${product.name}`}
      className="group bg-white rounded-2xl sm:rounded-[22px] p-2.5 sm:p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:scale-[0.98] flex flex-col justify-between h-full cursor-pointer border border-zinc-100 hover:border-zinc-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 select-none"
    >
      {/* Top Part: Image & Category & Title */}
      <div className="flex flex-col">
        {/* Product Image Frame (4:5 Portrait Ratio, Top-Center focus, Crossfade on desktop hover) */}
        <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#f4f4f5] mb-2 sm:mb-2.5">
          {/* Cover Image (Image 1) */}
          <img
            src={coverImage}
            alt={`${product.name}, view 1 of ${imagesCount}`}
            width="400"
            height="500"
            className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_PLACEHOLDER;
            }}
          />

          {/* Secondary Image (Image 2) - Desktop Hover Crossfade */}
          {secondaryImage && (
            <img
              src={secondaryImage}
              alt={`${product.name}, view 2 of ${imagesCount}`}
              width="400"
              height="500"
              className="absolute inset-0 w-full h-full object-cover object-[center_top] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out hidden md:block pointer-events-none"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_PLACEHOLDER;
              }}
            />
          )}

          {/* Subtle Badge (Top-left) */}
          {product.badge && (
            <span className="absolute top-2 left-2 bg-black/75 backdrop-blur-md text-white text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md shadow-xs z-10 pointer-events-none">
              {product.badge}
            </span>
          )}

          {/* Wishlist Heart Icon (Top-right circle) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all z-10 ${
              isWishlisted
                ? 'bg-red-500 text-white shadow-md scale-105'
                : 'bg-black/35 backdrop-blur-md text-white/90 hover:bg-black/60 hover:scale-105'
            }`}
            aria-label={isWishlisted ? `Remove ${product.name} from Wishlist` : `Add ${product.name} to Wishlist`}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-current' : 'stroke-[2]'}`} />
          </button>
        </div>

        {/* Small Muted Category Label */}
        <span className="text-[10px] sm:text-[11px] font-medium text-zinc-400 tracking-wider uppercase">
          {product.category}
        </span>

        {/* Product Title (Limited to 2 lines) */}
        <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-black transition-colors line-clamp-2 tracking-[var(--track-body)] leading-[1.35] mt-0.5">
          {product.name}
        </h3>
      </div>

      {/* Bottom Row: Price on left, Quiet "View" action on right */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-2 mt-2 sm:mt-3 pt-2 border-t border-zinc-100/70">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs sm:text-base font-bold text-zinc-900 tracking-[var(--track-body)]">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-[10px] sm:text-xs text-zinc-400 line-through tracking-[var(--track-body)]">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Quiet "View" action (Opens popup, never opens WhatsApp) */}
        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-zinc-700 group-hover:text-black transition-colors shrink-0">
          <span>View</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  );
}
