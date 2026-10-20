import React from 'react';
import { Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function TopBar() {
  return (
    <div className="w-full bg-[#f8f9fa] border-b border-zinc-200 py-2.5 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        {/* Left: Phone / Helpline (Email removed as requested) */}
        <div className="flex items-center gap-4 font-semibold announcement-bar-text">
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-black transition-colors announcement-bar-text"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
            <span>{BRAND_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Center / Right: Banner Notice (Free Shipping Only, Exchange removed) */}
        <div className="font-medium text-center sm:text-right announcement-bar-text">
          <span>{BRAND_INFO.shippingNotice}</span>
        </div>
      </div>
    </div>
  );
}
