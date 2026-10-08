import React, { useState } from 'react';
import { BRAND_INFO } from '../../data/products';
import { WhatsAppIcon, HeartIcon } from '../ui/Icons';

export default function ProductCard({
  product,
  isWishlisted = false,
  onToggleWishlist,
  onQuickView,
  tone = 'light',
}) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'M'
  );

  const primaryImage = product.images?.[0] || '';
  const secondaryImage = product.images?.[1] || primaryImage;

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const sizeText = selectedSize ? `, Size: ${selectedSize}` : '';
    const message = encodeURIComponent(
      `Hi, I'd like to enquire about ${product.name} (₹${product.price?.toLocaleString()}${sizeText}) from ${BRAND_INFO.name}. Is it available?`
    );
    window.open(
      `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const isDark = tone === 'dark';

  return (
    <div
      onClick={() => onQuickView && onQuickView(product)}
      className="group block cursor-pointer select-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5"
    >
      {/* Media frame */}
      <div className="media-frame aspect-[3/4] relative overflow-hidden bg-[#f0f0ee]">
        <span className="skeleton" aria-hidden="true" />

        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={product.name}
          loading="lazy"
          className="base-image zoom-slow w-full h-full object-cover"
        />

        {/* Secondary Image on Hover (desktop) */}
        {secondaryImage && secondaryImage !== primaryImage && (
          <img
            src={secondaryImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="swap-image zoom-slow max-md:hidden absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span
            className={`label absolute top-2.5 left-2.5 z-[2] border px-2 py-1 text-[9px] backdrop-blur-sm ${
              isDark
                ? 'border-white/20 bg-black/60 text-white'
                : 'border-black/10 bg-white/85 text-[#0a0a0a]'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist toggle button */}
        {onToggleWishlist && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`absolute top-2.5 right-2.5 z-[3] w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isWishlisted
                ? 'bg-red-500 text-white shadow-sm'
                : 'bg-black/40 backdrop-blur-md text-white hover:bg-black/70'
            }`}
          >
            <HeartIcon
              width={14}
              height={14}
              className={isWishlisted ? 'fill-current' : ''}
            />
          </button>
        )}
      </div>

      {/* Card Info */}
      <div className="mt-3.5 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`text-sm font-normal tracking-[0.01em] transition-colors duration-500 line-clamp-1 ${
              isDark ? 'text-white group-hover:text-silver-300' : 'text-[#0a0a0a] group-hover:text-neutral-500'
            }`}
          >
            {product.name}
          </h3>
          <span className="label text-[10px] text-neutral-400 shrink-0">
            {product.fabric || product.category}
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a0a]'}`}>
            ₹{product.price?.toLocaleString()}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-neutral-400 line-through">
              ₹{product.originalPrice?.toLocaleString()}
            </span>
          )}
        </div>

        {/* Size Selection Chips */}
        {product.sizes && product.sizes.length > 0 && (
          <div
            className="flex items-center gap-1 pt-1 overflow-x-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`text-[10px] font-medium px-2 py-0.5 border transition-colors ${
                  selectedSize === size
                    ? 'border-[#0a0a0a] bg-[#0a0a0a] text-white'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* WhatsApp Inquiry Button */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full mt-2.5 py-2 px-3 border border-black/15 bg-white hover:bg-[#0a0a0a] text-[#0a0a0a] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 text-xs font-medium"
        >
          <WhatsAppIcon width={14} height={14} />
          <span>Inquiry on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
