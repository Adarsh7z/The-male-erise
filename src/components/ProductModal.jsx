import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, Truck, RefreshCw, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import whatsappIcon from '../assets/whatsapp-circle.png';

export default function ProductModal({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist
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
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto border border-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-md border border-zinc-200 rounded-full flex items-center justify-center text-zinc-700 hover:text-black hover:scale-105 transition-all shadow-sm"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Gallery */}
          <div className="p-4 sm:p-6 bg-[#f8f9fa] flex flex-col justify-between">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-inner mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail selector if multiple images */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? 'border-purple-600 scale-105 shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
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
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-zinc-400 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-1">
                {product.name}
              </h2>

              {/* Price Line */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-base text-zinc-400 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {product.discount}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Sizing Selectors */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                    Select Size:
                  </span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-xs text-purple-600 hover:text-purple-800 font-medium underline"
                  >
                    {showSizeGuide ? "Hide Size Guide" : "Size Guide"}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedSize === size
                          ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm scale-105'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Size Guide Table Toggle */}
                {showSizeGuide && (
                  <div className="mt-3 p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs animate-fade-in">
                    <p className="font-bold text-zinc-800 mb-1.5">Size Dimensions (Inches):</p>
                    <table className="w-full text-left font-mono text-[11px]">
                      <thead>
                        <tr className="border-b border-zinc-200 text-zinc-400">
                          <th className="py-1">Size</th>
                          <th>Chest</th>
                          <th>Shoulder</th>
                          <th>Length</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200">
                        <tr><td className="py-1 font-bold">S</td><td>38"</td><td>17.5"</td><td>27.5"</td></tr>
                        <tr><td className="py-1 font-bold">M</td><td>40"</td><td>18.5"</td><td>28.5"</td></tr>
                        <tr><td className="py-1 font-bold">L</td><td>42"</td><td>19.5"</td><td>29.5"</td></tr>
                        <tr><td className="py-1 font-bold">XL</td><td>44"</td><td>20.5"</td><td>30.5"</td></tr>
                        <tr><td className="py-1 font-bold">XXL</td><td>46"</td><td>21.5"</td><td>31.5"</td></tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Fabric & Wash Care */}
              <div className="border-t border-zinc-100 pt-3 mb-6 space-y-1.5 text-xs text-zinc-600">
                <div>
                  <span className="font-semibold text-zinc-900">Composition: </span>
                  {product.fabric}
                </div>
                <div>
                  <span className="font-semibold text-zinc-900">Care: </span>
                  {product.care}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Prominent WhatsApp Button & Wishlist */}
            <div>
              <div className="flex items-center gap-3">
                {/* Primary WhatsApp Action (NO "Buy now" as instructed by user) */}
                <button
                  onClick={handleWhatsAppInquiry}
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <img src={whatsappIcon} alt="" className="w-5 h-5 object-contain rounded-full shrink-0" />
                  <span>Inquiry On Whatsapp</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3.5 border rounded-xl transition-all ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-zinc-300 text-zinc-700 hover:border-black hover:text-black'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Guarantees Badges */}
              <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-zinc-100 text-[11px] text-zinc-500 text-center font-medium">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-zinc-700" />
                  <span>Free Express Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-zinc-700" />
                  <span>Handcrafted Tailoring</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-zinc-700" />
                  <span>100% Quality Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
