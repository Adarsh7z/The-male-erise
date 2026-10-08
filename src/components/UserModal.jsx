import React from 'react';
import { CloseIcon, WhatsAppIcon, ShieldIcon, TruckIcon } from './ui/Icons';
import Logo from './ui/Logo';
import { BRAND_INFO } from '../data/products';

export default function UserModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-fadeIn"
    >
      <div
        className="bg-[#0a0a0a] text-white border border-silver-500/30 max-w-md w-full p-6 sm:p-7 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
          aria-label="Close concierge"
        >
          <CloseIcon width={16} height={16} />
        </button>

        <div className="text-center mb-6 pt-2">
          <Logo tone="silver" size="md" className="mx-auto mb-4" />
          <h3 className="type-silver-dark font-display text-xl font-light">
            Bespoke Concierge
          </h3>
          <p className="t-body text-xs text-neutral-400 mt-1">
            Personalized menswear styling & direct order assistance
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${BRAND_INFO.shortName}, I want to speak with a personal menswear stylist regarding sizing and recommendations.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3.5 bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 hover:border-silver-400/50 transition-colors group"
          >
            <div className="w-9 h-9 border border-white/20 bg-black flex items-center justify-center text-white shrink-0">
              <WhatsAppIcon width={16} height={16} />
            </div>
            <div>
              <h4 className="text-xs font-medium text-white group-hover:text-silver-300">
                Styling & Sizing Consultation
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Real-time measurements and recommendations
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${BRAND_INFO.shortName}, I would like to inquire about custom alterations and fittings.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3.5 bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 hover:border-silver-400/50 transition-colors group"
          >
            <div className="w-9 h-9 border border-white/20 bg-black flex items-center justify-center text-white shrink-0">
              <ShieldIcon width={16} height={16} />
            </div>
            <div>
              <h4 className="text-xs font-medium text-white group-hover:text-silver-300">
                Custom Alterations & Fit
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Bespoke waist, sleeve & length customization
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${BRAND_INFO.shortName}, I would like to track my order.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-3.5 bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 hover:border-silver-400/50 transition-colors group"
          >
            <div className="w-9 h-9 border border-white/20 bg-black flex items-center justify-center text-white shrink-0">
              <TruckIcon width={16} height={16} />
            </div>
            <div>
              <h4 className="text-xs font-medium text-white group-hover:text-silver-300">
                Track Existing Order
              </h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Check express dispatch and delivery status
              </p>
            </div>
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-neutral-400">
          WhatsApp Helpline:{' '}
          <a
            href={`tel:${BRAND_INFO.whatsappNumber}`}
            className="font-medium text-white underline ml-1"
          >
            {BRAND_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
