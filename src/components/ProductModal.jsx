import React, { useState, useEffect } from 'react';
import { CloseIcon, HeartIcon, WhatsAppIcon, ShieldIcon, TruckIcon } from './ui/Icons';
import { BRAND_INFO } from '../data/products';

export default function ProductModal({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
}) {
  const [selectedImage, setSelectedImage] = useState(product ? product.images[0] : null);
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : 'M');
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setSelectedSize(product.sizes[0] || 'M');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const sizeText = selectedSize ? `, Size: ${selectedSize}` : '';
    const message = encodeURIComponent(
      `Hi, I'd like to enquire about ${product.name} (₹${product.price.toLocaleString()}${sizeText}) from ${BRAND_INFO.name}. Is it available?`
    );
    window.open(
      `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[110] overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 select-none animate-fadeIn"
    >
      <div
        className="bg-white max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto border border-black/10 text-[#0a0a0a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 border border-black/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
          aria-label="Close product details"
        >
          <CloseIcon width={16} height={16} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Gallery */}
          <div className="p-5 sm:p-8 bg-[#f5f5f3] flex flex-col justify-between">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-white border border-black/5 mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.badge && (
                <span className="label absolute top-3 left-3 bg-[#0a0a0a] text-white text-[9px] px-2.5 py-1 tracking-wider uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2.5 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-16 overflow-hidden border transition-all ${
                      selectedImage === img
                        ? 'border-[#0a0a0a] opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category */}
              <div className="flex items-center justify-between mb-2">
                <span className="label text-[10px] text-neutral-500">
                  {product.category}
                </span>
                <span className="label text-[10px] text-neutral-400">
                  Bespoke Cut
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl font-light text-[#0a0a0a] leading-tight">
                {product.name}
              </h2>

              {/* Price Line */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-xl sm:text-2xl font-semibold text-[#0a0a0a]">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-neutral-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount && (
                  <span className="label text-[9px] text-neutral-500 border border-black/10 px-2 py-0.5">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="t-body text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Sizing Selectors */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="label text-[10px] text-neutral-700">
                    Select Size:
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="label text-[9px] text-neutral-500 hover:text-black underline transition-colors"
                  >
                    {showSizeGuide ? 'Hide Size Guide' : 'Size Guide'}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 text-xs border transition-colors ${
                        selectedSize === size
                          ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Size Guide Table */}
                {showSizeGuide && (
                  <div className="mt-3 p-3 bg-bone border border-black/10 text-xs animate-fadeIn">
                    <p className="label text-[10px] text-neutral-700 mb-1.5">
                      Dimensions (Inches):
                    </p>
                    <table className="w-full text-left text-[11px]">
                      <thead>
                        <tr className="border-b border-black/10 text-neutral-500">
                          <th className="py-1">Size</th>
                          <th>Chest</th>
                          <th>Shoulder</th>
                          <th>Length</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5 text-neutral-700">
                        <tr><td className="py-1 font-medium">S / 38</td><td>38"</td><td>17.5"</td><td>28"</td></tr>
                        <tr><td className="py-1 font-medium">M / 40</td><td>40"</td><td>18.5"</td><td>29"</td></tr>
                        <tr><td className="py-1 font-medium">L / 42</td><td>42"</td><td>19.5"</td><td>30"</td></tr>
                        <tr><td className="py-1 font-medium">XL / 44</td><td>44"</td><td>20.5"</td><td>31"</td></tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Fabric & Care */}
              <div className="border-t border-black/10 pt-3 mb-6 space-y-1 text-xs text-neutral-600">
                <div>
                  <span className="font-medium text-black">Textile: </span>
                  {product.fabric}
                </div>
                <div>
                  <span className="font-medium text-black">Care: </span>
                  {product.care}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="btn btn-ink flex-1 text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon width={16} height={16} />
                  <span>Inquiry on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3.5 border transition-colors ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-black/20 text-neutral-700 hover:border-black'
                  }`}
                  aria-label="Wishlist"
                >
                  <HeartIcon width={16} height={16} className={isWishlisted ? 'fill-current' : ''} />
                </button>
              </div>

              {/* Value propositions */}
              <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-black/10 text-[10px] text-neutral-500 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <ShieldIcon width={14} height={14} className="text-silver-400 shrink-0" />
                  <span>Complimentary Alterations</span>
                </div>
                <div className="flex items-center gap-2">
                  <TruckIcon width={14} height={14} className="text-silver-400 shrink-0" />
                  <span>Personal WhatsApp Concierge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
