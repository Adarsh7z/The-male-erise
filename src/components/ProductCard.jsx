import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import whatsappIcon from '../assets/whatsapp-circle.png';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView
}) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');

  const handleWhatsAppInquiry = (e) => {
    e.stopPropagation();
    const sizeText = selectedSize ? `, Size: ${selectedSize}` : '';
    const message = encodeURIComponent(
      `Hi, I'd like to enquire about ${product.name} (₹${product.price.toLocaleString()}${sizeText}) from ${BRAND_INFO.name}. Is it available?`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group bg-white rounded-2xl p-2 sm:p-3 transition-all duration-300 hover:shadow-lg flex flex-col justify-between cursor-pointer border border-zinc-100 hover:border-zinc-200"
    >
      <div>
        {/* Product Image Box (Rounded with Wishlist Floating Button) */}
        <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#f4f4f5] mb-2 sm:mb-2.5">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badge if present */}
          {product.badge && (
            <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-black/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-1.5 sm:px-2 py-0.5 rounded">
              {product.badge}
            </span>
          )}

          {/* Wishlist Heart Icon (Top-right circle) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
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
        <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-purple-700 transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Pricing Formatting: Current Bold vs Strikethrough Original */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 mb-2">
          <span className="text-xs sm:text-base font-bold text-zinc-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-[11px] sm:text-xs text-zinc-400 line-through">
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

      {/* Primary WhatsApp Action Button with authentic WhatsApp logo (NO "Buy now" button) */}
      <button
        onClick={handleWhatsAppInquiry}
        className="w-full mt-1 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white text-[11px] sm:text-xs font-semibold py-2 sm:py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-all hover:shadow-sm"
        aria-label={`Inquire about ${product.name} on WhatsApp`}
      >
        <img src={whatsappIcon} alt="" className="w-4 h-4 object-contain rounded-full shrink-0" />
        <span className="truncate">Inquiry On Whatsapp</span>
      </button>
    </div>
  );
}
