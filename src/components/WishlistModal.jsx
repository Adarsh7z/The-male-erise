import React from 'react';
import { X, Trash2, Heart } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/products';
import whatsappIconBwTransparent from '../assets/whatsapp-icon-bw-transparent.png';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlist = [],
  wishlistIds,
  onRemoveFromWishlist,
  onUpdateWishlistSize,
  onOpenProduct
}) {
  if (!isOpen) return null;

  // Resolve items while preserving the order added by the user
  const rawItems = wishlist && wishlist.length > 0 ? wishlist : (wishlistIds || []);
  const resolvedItems = rawItems
    .map((entry) => {
      const id = typeof entry === 'string' ? entry : entry?.id;
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) return null;
      const size =
        typeof entry === 'object' && entry?.size
          ? entry.size
          : (product.sizes?.[0] || 'M');
      return { product, size };
    })
    .filter(Boolean);

  const handleInquiryAll = () => {
    if (resolvedItems.length === 0) return;

    // Single item inquiry follows the exact single-product popup format
    if (resolvedItems.length === 1) {
      const { product, size } = resolvedItems[0];
      const message = encodeURIComponent(
        `Hi, I'd like to enquire about ${product.name} (₹${product.price.toLocaleString()}, Size: ${size}) from ${BRAND_INFO.name}. Is it available?`
      );
      window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
      return;
    }

    // Multi-item inquiry format
    const standardLines = resolvedItems.map(
      (item, index) => `${index + 1}. ${item.product.name} (₹${item.product.price.toLocaleString()}, Size: ${item.size})`
    );
    let messageText = `Hi, I'd like to enquire about these saved items from ${BRAND_INFO.name}:\n${standardLines.join('\n')}\n\nAre they available?`;
    let encodedUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Safe URL length guard (< 2000 chars fallback to compact format)
    if (encodedUrl.length > 2000) {
      const compactLines = resolvedItems.map(
        (item, index) => `${index + 1}. ${item.product.name} | Size: ${item.size}`
      );
      messageText = `Hi, I'd like to enquire about these saved items from ${BRAND_INFO.name}:\n${compactLines.join('\n')}\n\nAre they available?`;
      encodedUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    }

    window.open(encodedUrl, '_blank', 'noopener,noreferrer');
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
            <h2 className="text-base font-bold text-zinc-900 tracking-[var(--track-display)]">
              My Saved Wishlist ({resolvedItems.length})
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
          {resolvedItems.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <p className="text-base font-semibold text-zinc-800">Your wishlist is empty</p>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                Heart a few products to send one inquiry, or explore the Male Order Erise collection and tap the heart icon on any piece you love.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-zinc-800"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            resolvedItems.map(({ product: prod, size: currentSize }) => (
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
                  className="w-20 h-20 object-cover rounded-xl cursor-pointer bg-white shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4
                        onClick={() => {
                          onClose();
                          onOpenProduct(prod);
                        }}
                        className="text-xs font-semibold text-zinc-900 hover:text-black cursor-pointer line-clamp-1 transition-colors"
                      >
                        {prod.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveFromWishlist(prod.id)}
                        className="text-zinc-400 hover:text-red-500 p-1 shrink-0"
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

                    {/* Sizing Selector Chips */}
                    <div className="flex items-center gap-1.5 flex-wrap mt-2">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mr-0.5">Size:</span>
                      {prod.sizes?.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => onUpdateWishlistSize?.(prod.id, sz)}
                          className={`px-2 py-0.5 rounded-md text-[11px] font-bold border transition-all ${
                            currentSize === sz
                              ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                              : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                          }`}
                          aria-label={`Select size ${sz} for ${prod.name}`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Individual WhatsApp button */}
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hi, I'd like to enquire about ${prod.name} (₹${prod.price.toLocaleString()}, Size: ${currentSize}) from ${BRAND_INFO.name}. Is it available?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] py-1.5 px-3 rounded-lg mt-2.5 shadow-xs"
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
                    <span>Inquiry on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {resolvedItems.length > 0 && (
          <div className="p-4 border-t border-zinc-200 bg-zinc-50 space-y-2">
            <button
              type="button"
              onClick={handleInquiryAll}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
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
              <span>Inquire All Saved Items on WhatsApp ({resolvedItems.length})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
