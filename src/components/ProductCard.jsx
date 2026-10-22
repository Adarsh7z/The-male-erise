import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import whatsappIconBwTransparent from '../assets/whatsapp-icon-bw-transparent.png';

const FALLBACK_PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500" fill="%23f4f4f5"><rect width="400" height="500" fill="%23f4f4f5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a1a1aa" font-family="sans-serif" font-size="14">Image Unavailable</text></svg>';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView
}) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');

  const handleWhatsAppInquiry = (e) => {
    e.stopPropagation();
    const sizeText = selectedSize ? `, Size: ${selectedSize}` : '';
    const message = encodeURIComponent(
      `Hi, I'd like to enquire about ${product.name} (₹${product.price.toLocaleString()}${sizeText}) from ${BRAND_INFO.name}. Is it available?`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const imagesCount = product.images?.length || 1;
  const coverImage = product.images?.[0] || '';
  const secondaryImage = product.images?.[1] || null;

  return (
    <div
      onClick={() => onQuickView(product)}
      data-product-card
      className="group bg-white rounded-2xl p-2 sm:p-3 transition-all duration-300 hover:shadow-lg flex flex-col justify-between cursor-pointer border border-zinc-100 hover:border-zinc-200"
    >
      <div>
        {/* Product Image Box (4:5 Portrait Ratio, Top-Center focus, Crossfade on desktop hover) */}
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

          {/* Small Indicator Dots for Multi-image Products on Mobile / Touch */}
          {imagesCount > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-1.5 pointer-events-none md:hidden z-10">
              {product.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === 0 ? 'bg-white shadow-xs w-3' : 'bg-white/70 w-1.5'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Badge if present */}
          {product.badge && (
            <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-black/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-1.5 sm:px-2 py-0.5 rounded z-10">
              {product.badge}
            </span>
          )}

          {/* Wishlist Heart Icon (Top-right circle) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all z-10 ${
              isWishlisted
                ? 'bg-red-500 text-white shadow-md scale-105'
                : 'bg-black/40 backdrop-blur-md text-white/90 hover:bg-black/70'
            }`}
            aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-current' : 'stroke-[2]'}`} />
          </button>
        </div>

        {/* Product Title */}
        <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-black transition-colors line-clamp-1 tracking-[var(--track-body)] leading-[1.35]">
          {product.name}
        </h3>

        {/* Pricing Formatting: Current Bold vs Strikethrough Original */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 mb-2">
          <span className="text-xs sm:text-base font-bold text-zinc-900 tracking-[var(--track-body)]">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-[11px] sm:text-xs text-zinc-400 line-through tracking-[var(--track-body)]">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Sizing Selectors (Pills) */}
        {product.sizes && product.sizes.length > 0 && (
          <div
            className="flex items-center gap-1 mb-2.5 overflow-x-auto no-scrollbar py-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded border transition-all ${
                  selectedSize === size
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Primary WhatsApp Action Button with authentic WhatsApp logo */}
      <button
        onClick={handleWhatsAppInquiry}
        data-interactive-btn
        className="w-full mt-1 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white text-[12px] sm:text-xs font-semibold py-2.5 px-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-all hover:shadow-sm tracking-[var(--track-ui)] leading-[1.2] min-h-[40px] sm:min-h-[44px]"
        aria-label={`Inquire about ${product.name} on WhatsApp`}
      >
        <img
          src={whatsappIconBwTransparent}
          alt=""
          aria-hidden="true"
          draggable="false"
          width="26"
          height="26"
          className="wa-icon-img shrink-0"
        />
        <span className="truncate">Inquiry On Whatsapp</span>
      </button>
    </div>
  );
}
