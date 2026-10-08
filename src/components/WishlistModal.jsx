import React from 'react';
import { CloseIcon, HeartIcon, WhatsAppIcon, TrashIcon } from './ui/Icons';
import { PRODUCTS, BRAND_INFO } from '../data/products';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onOpenProduct,
}) {
  if (!isOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleInquiryAll = () => {
    if (wishlistedProducts.length === 0) return;
    const names = wishlistedProducts
      .map((p) => `• ${p.name} (₹${p.price.toLocaleString()})`)
      .join('\n');
    const message = encodeURIComponent(
      `Hi, I'd like to enquire about these saved items from ${BRAND_INFO.name}:\n${names}\n\nAre they available?`
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
      className="fixed inset-0 z-[100] overflow-hidden bg-black/75 backdrop-blur-xs flex justify-end select-none animate-fadeIn"
    >
      <div
        className="w-full max-w-md bg-[#0a0a0a] text-white h-full border-l border-white/10 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <HeartIcon width={16} height={16} className="text-red-500 fill-current" />
            <h2 className="label text-xs text-white">
              Saved Pieces ({wishlistedProducts.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white"
            aria-label="Close saved pieces"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/10 text-neutral-400 flex items-center justify-center mx-auto">
                <HeartIcon width={22} height={22} />
              </div>
              <p className="type-silver font-display text-2xl font-light">
                Your wishlist is empty
              </p>
              <p className="t-body text-xs text-neutral-400 max-w-xs mx-auto">
                Explore our menswear collections and tap the heart icon on any piece you wish to save.
              </p>
              <button
                onClick={onClose}
                className="btn btn-paper mt-3 text-xs"
              >
                Browse collections
              </button>
            </div>
          ) : (
            wishlistedProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex gap-3.5 bg-[#131313] border border-white/10 p-3.5 hover:border-silver-400/40 transition-colors"
              >
                <img
                  src={prod.images[0]}
                  alt={prod.name}
                  onClick={() => {
                    onClose();
                    onOpenProduct(prod);
                  }}
                  className="w-20 h-24 object-cover cursor-pointer bg-neutral-900 border border-white/5"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => {
                          onClose();
                          onOpenProduct(prod);
                        }}
                        className="text-xs font-normal text-white hover:text-silver-300 cursor-pointer line-clamp-1"
                      >
                        {prod.name}
                      </h4>
                      <button
                        onClick={() => onRemoveFromWishlist(prod.id)}
                        className="text-neutral-500 hover:text-red-400 p-0.5"
                        title="Remove from wishlist"
                      >
                        <TrashIcon width={14} height={14} />
                      </button>
                    </div>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs font-semibold text-white">
                        ₹{prod.price.toLocaleString()}
                      </span>
                      {prod.originalPrice && prod.originalPrice > prod.price && (
                        <span className="text-[10px] text-neutral-500 line-through">
                          ₹{prod.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hi, I'd like to enquire about ${prod.name} (₹${prod.price.toLocaleString()}) from ${BRAND_INFO.name}. Is it available?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 py-1.5 px-2.5 border border-white/15 bg-white/5 hover:bg-white hover:text-black text-white text-[10px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <WhatsAppIcon width={12} height={12} />
                    <span>Inquiry on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {wishlistedProducts.length > 0 && (
          <div className="p-4 border-t border-white/10 bg-[#0d0d0d]">
            <button
              onClick={handleInquiryAll}
              className="btn btn-paper w-full text-xs flex items-center justify-center gap-2"
            >
              <WhatsAppIcon width={14} height={14} />
              <span>Inquire All on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
