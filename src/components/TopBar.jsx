import React from 'react';
import { Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function TopBar() {
  return (
    <div className="w-full bg-[#f8f9fa] border-b border-zinc-200 text-zinc-700 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        {/* Left: Phone / Helpline (Email removed as requested) */}
        <div className="flex items-center gap-4 text-zinc-700 font-semibold">
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-black transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-600" />
            <span>{BRAND_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Center / Right: Banner Notice (Free Shipping Only, Exchange removed) */}
        <div className="text-zinc-600 font-medium tracking-tight text-center sm:text-right">
          <span>{BRAND_INFO.shippingNotice}</span>
        </div>
      </div>
    </div>
  );
}
