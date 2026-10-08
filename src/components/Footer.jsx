import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Truck, RefreshCw, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import whatsappIcon from '../assets/whatsapp-circle.png';
import googleMapsIcon from '../assets/google-maps-pin.png';

export default function Footer({ onNavigate }) {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 pb-24 sm:pb-16 border-t border-zinc-900 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 mb-10 border-b border-zinc-800 text-center sm:text-left">
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 shrink-0">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Free Express Shipping</h4>
              <p className="text-[11px] sm:text-xs text-zinc-400">Complimentary nationwide courier on every order</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 shrink-0">
              <span className="font-serif font-black text-sm text-purple-400">MO</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Handcrafted Tailoring</h4>
              <p className="text-[11px] sm:text-xs text-zinc-400">Pure silks, French linens & Savile Row cuts</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2.5 shrink-0">
              <img src={whatsappIcon} alt="" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Direct WhatsApp Concierge</h4>
              <p className="text-[11px] sm:text-xs text-zinc-400">Instant inquiry, sizing guidance & live photos</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 border-b border-zinc-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="font-serif font-black text-black text-lg tracking-tighter">MO</span>
              </div>
              <div>
                <span className="block font-bold tracking-wider text-sm text-white uppercase font-sans">
                  Male Order Erise
                </span>
                <span className="block text-[10px] tracking-widest text-zinc-400 uppercase">
                  Apparel & Clothing • Bespoke Tailoring
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Discover Male Order Erise: Luxury Office casuals, handcrafted Kurta-pyjama sets, and structured tailored Blazers designed with timeless sartorial precision.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi, I would like to inquire about your menswear collection at ${BRAND_INFO.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all shadow-sm"
              >
                <img src={whatsappIcon} alt="" className="w-4 h-4 object-contain rounded-full shrink-0" />
                <span>WhatsApp ({BRAND_INFO.phoneDisplay})</span>
              </a>

              <a
                href={BRAND_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all"
              >
                <img src={googleMapsIcon} alt="" className="w-4 h-4 object-contain shrink-0" />
                <span>Locate Store</span>
              </a>
            </div>
          </div>

          {/* Column 2: 3 Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              Sections
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  Office casuals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  Kurta-pyjama
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  Blazers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Store Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              Store & Support
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href={BRAND_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Store Directions</span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi, I'd like to inquire about ${BRAND_INFO.name}.`)}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {BRAND_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <span>Mon – Sun: {BRAND_INFO.timingsDisplay}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
              VIP Notifications
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Stay updated on new collection drops for Office casuals, festive kurtas and blazers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 focus-within:border-purple-500">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email"
                  required
                  className="bg-transparent px-3 py-2 text-xs text-white placeholder:text-zinc-600 outline-none flex-1"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[11px] text-emerald-400 font-semibold">
                  ✓ VIP Subscription Confirmed!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} <span className="text-zinc-300 font-semibold">Male Order Erise</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
