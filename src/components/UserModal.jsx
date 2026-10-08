import React from 'react';
import { X, MessageCircle, Package, RefreshCw, Shield, HelpCircle, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function UserModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-zinc-200 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-black p-1 rounded-full hover:bg-zinc-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-serif font-bold text-xl shadow-md">
            MO
          </div>
          <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
            Male Order Erise Concierge
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Personalized menswear styling & order support
          </p>
        </div>

        <div className="space-y-2.5">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${BRAND_INFO.shortName}, I want to speak with a personal menswear stylist about sizing and recommendations.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-zinc-50 hover:bg-emerald-50 hover:text-emerald-900 border border-zinc-200 rounded-2xl transition-colors group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 group-hover:text-emerald-950">
                Chat with VIP Stylist
              </h4>
              <p className="text-[11px] text-zinc-500">
                Get real-time sizing advice & custom styling
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${BRAND_INFO.shortName}, I would like to track my order.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl transition-colors group"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center shadow-xs">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900">
                Track Existing Order
              </h4>
              <p className="text-[11px] text-zinc-500">
                Check dispatch status & tracking ID
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${BRAND_INFO.shortName}, I would like to inquire about custom tailoring and sizing adjustments for my order.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl transition-colors group"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900">
                Custom Tailoring & Fittings
              </h4>
              <p className="text-[11px] text-zinc-500">
                Bespoke sizing and tailored adjustments
              </p>
            </div>
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 text-center text-[11px] text-zinc-400">
          WhatsApp Helpline: <span className="font-semibold text-zinc-700">{BRAND_INFO.phoneDisplay}</span>
        </div>
      </div>
    </div>
  );
}
