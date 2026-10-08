import React from 'react';
import { X, Trash2, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/products';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onOpenProduct
}) {
  if (!isOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleInquiryAll = () => {
    if (wishlistedProducts.length === 0) return;
    const names = wishlistedProducts.map((p) => `• ${p.name} (₹${p.price.toLocaleString()})`).join('\n');
    const message = encodeURIComponent(
      `Hi, I'd like to enquire about these saved items from ${BRAND_INFO.name}:\n${names}\n\nAre they available?`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <h2 className="text-base font-bold text-zinc-900 tracking-tight">
              My Saved Wishlist ({wishlistedProducts.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <p className="text-base font-semibold text-zinc-800">Your wishlist is empty</p>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                Explore the Male Order Erise collection and tap the heart icon on any piece you love.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-zinc-800"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            wishlistedProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex gap-3 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3 hover:border-zinc-300 transition-colors"
              >
                <img
                  src={prod.images[0]}
                  alt={prod.name}
                  onClick={() => {
                    onClose();
                    onOpenProduct(prod);
                  }}
                  className="w-20 h-20 object-cover rounded-xl cursor-pointer bg-white"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4
                        onClick={() => {
                          onClose();
                          onOpenProduct(prod);
                        }}
                        className="text-xs font-semibold text-zinc-900 hover:text-purple-700 cursor-pointer line-clamp-1"
                      >
                        {prod.name}
                      </h4>
                      <button
                        onClick={() => onRemoveFromWishlist(prod.id)}
                        className="text-zinc-400 hover:text-red-500 p-1"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs font-bold text-zinc-900">
                        ₹{prod.price.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-zinc-400 line-through">
                        ₹{prod.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Individual WhatsApp button */}
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hi, I'd like to enquire about ${prod.name} (₹${prod.price.toLocaleString()}) from ${BRAND_INFO.name}. Is it available?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] py-1.5 px-3 rounded-lg mt-2 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Inquiry on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {wishlistedProducts.length > 0 && (
          <div className="p-4 border-t border-zinc-200 bg-zinc-50 space-y-2">
            <button
              onClick={handleInquiryAll}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire All Saved Items on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
