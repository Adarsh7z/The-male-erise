import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import googleMapsIcon from '../assets/google-maps-pin.png';
import whatsappIconBwTransparent from '../assets/whatsapp-icon-bw-transparent.png';

export default function StoreLocation() {
  return (
    <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-zinc-950 text-white rounded-3xl p-5 sm:p-10 border border-zinc-800 shadow-xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Store Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 badge-gloss-black text-white text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span className="text-white">Flagship Store Atelier</span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[var(--track-display)] font-sans text-white">
                Visit Male Order Erise
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Experience bespoke fabric selections, personalized wedding & festive trials, suiting, shirting, and made-to-measure tailoring at our flagship studio.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="space-y-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{BRAND_INFO.addressDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <span>Mon – Sun: {BRAND_INFO.timingsDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>Direct Helpline: {BRAND_INFO.phoneDisplay}</span>
              </div>
            </div>

            {/* Directions & Inquiry Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={BRAND_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                data-interactive-btn
                className="bg-white hover:bg-zinc-200 text-black text-xs font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98"
              >
                <img src={googleMapsIcon} alt="" className="w-4 h-4 object-contain shrink-0" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi, I'd like to book an appointment / visit ${BRAND_INFO.name} at ${BRAND_INFO.addressDisplay}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                data-interactive-btn
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
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
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Exact Coordinates and Styling */}
          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 relative">
              <iframe
                src={BRAND_INFO.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Male Order Erise Google Maps Location"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
