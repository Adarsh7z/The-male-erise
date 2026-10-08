import React from 'react';
import { WhatsAppIcon, PinIcon } from './ui/Icons';
import { BRAND_INFO } from '../data/products';

export default function FloatingCTAs() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I would like to inquire about menswear at ${BRAND_INFO.name}.`
  )}`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Male+order+Bodakdev+Ahmedabad`;

  return (
    <>
      {/* Bottom-left: Directions on Google Maps */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Directions to Male Order Erise on Google Maps"
        className="fixed left-5 bottom-5 z-[60] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-silver-400/60 bg-[#0a0a0a] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
      >
        <PinIcon width={22} height={22} className="relative text-white" />
      </a>

      {/* Bottom-right: WhatsApp Inquiry with Reference wa-pulse Ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="wa-pulse fixed right-5 bottom-5 z-[60] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-silver-400 bg-[#0a0a0a] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
      >
        <WhatsAppIcon width={24} height={24} className="relative text-white" />
      </a>
    </>
  );
}
