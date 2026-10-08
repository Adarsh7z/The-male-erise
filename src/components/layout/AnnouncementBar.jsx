import React from 'react';
import { BRAND_INFO } from '../../data/products';
import { WhatsAppIcon } from '../ui/Icons';

export function AnnouncementBar() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'd like to enquire about your menswear collection at ${BRAND_INFO.name}.`
  )}`;

  return (
    <div className="on-dark flex h-9 items-center justify-center overflow-hidden border-b border-white/10 bg-ink px-4 select-none">
      <p className="label flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[0.5625rem] text-silver-200 sm:text-[0.625rem]">
        {/* Mobile shows direct WhatsApp prompt, Desktop shows full atelier facts */}
        <span className="hidden sm:inline">
          Visit us in Bodakdev, Ahmedabad
        </span>

        <span className="inline-flex items-center gap-3">
          <span aria-hidden="true" className="hidden text-silver-500 sm:inline">
            •
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tap -my-2 inline-flex items-center gap-1.5 py-2 transition-colors duration-500 hover:text-silver-100 text-bone"
          >
            <WhatsAppIcon width={12} height={12} />
            <span>Order easily on WhatsApp ({BRAND_INFO.phoneDisplay})</span>
          </a>
        </span>

        <span className="hidden items-center gap-3 sm:inline-flex">
          <span aria-hidden="true" className="text-silver-500">
            •
          </span>
          <span>{BRAND_INFO.timingsDisplay} Daily</span>
        </span>
      </p>
    </div>
  );
}

export default AnnouncementBar;
