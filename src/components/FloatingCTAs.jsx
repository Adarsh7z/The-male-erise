import React from 'react';
import { BRAND_INFO } from '../data/products';
import whatsappIcon from '../assets/whatsapp-circle.png';
import googleMapsIcon from '../assets/google-maps-pin.png';

export default function FloatingCTAs() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I would like to inquire about your menswear collection at ${BRAND_INFO.name}.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleMapsClick = () => {
    window.open(BRAND_INFO.googleMapsLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Left Bottom: Large Floating Google Maps Bubble Icon (Prominent on Mobile & Desktop) */}
      <aside
        aria-label="Store Location on Google Maps"
        className="pointer-events-auto fixed bottom-5 sm:bottom-6 left-3.5 sm:left-6"
      >
        <button
          onClick={handleMapsClick}
          className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white text-zinc-900 flex items-center justify-center p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)] border-2 border-white/90 transition-all duration-300 transform hover:scale-110 active:scale-90 focus:outline-none cursor-pointer"
          aria-label="Open Male Order Erise on Google Maps"
          title="Locate Male Order Erise on Google Maps"
        >
          {/* High-Resolution Google Maps Pin Logo */}
          <img
            src={googleMapsIcon}
            alt="Google Maps"
            className="w-full h-full object-contain filter drop-shadow-xs transition-transform"
          />
        </button>
      </aside>

      {/* 2. Right Bottom: Large Floating WhatsApp Bubble Icon (Prominent on Mobile & Desktop) */}
      <aside
        aria-label="Direct WhatsApp Concierge"
        className="pointer-events-auto fixed bottom-5 sm:bottom-6 right-3.5 sm:right-6"
      >
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#25D366] text-white flex items-center justify-center p-0 shadow-[0_10px_32px_rgba(37,211,102,0.6)] hover:shadow-[0_14px_40px_rgba(37,211,102,0.75)] border-2 border-white/30 transition-all duration-300 transform hover:scale-110 active:scale-90 focus:outline-none cursor-pointer relative"
          aria-label="Direct WhatsApp Inquiry"
          title={`Direct WhatsApp Inquiry (${BRAND_INFO.phoneDisplay})`}
        >
          {/* High-Resolution WhatsApp Circular 'O' Logo */}
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="w-full h-full object-cover rounded-full transition-transform"
          />
          {/* Online green/white pulse indicator */}
          <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full border-2 border-[#25D366] shadow-xs"></span>
        </button>
      </aside>
    </div>
  );
}
