import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function WhatsAppFloat() {
  const handleOpen = () => {
    const text = encodeURIComponent(
      `Hello ${BRAND_INFO.shortName},\n\nI am browsing your collection on the website and would like some assistance with product recommendations and sizing.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Direct WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group"
    >
      {/* Tooltip Pill */}
      <span className="hidden sm:inline-block bg-zinc-900/90 backdrop-blur-md text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with Stylist
      </span>

      {/* Floating Button */}
      <button
        onClick={handleOpen}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all transform hover:scale-110 active:scale-95 relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-[#25D366]" />
        {/* Glowing Pulse Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#25D366]"></span>
      </button>
    </aside>
  );
}
