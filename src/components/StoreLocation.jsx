import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import googleMapsIcon from '../assets/google-maps-pin.png';
import whatsappIcon from '../assets/whatsapp-circle.png';

export default function StoreLocation() {
  return (
    <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-zinc-950 text-white rounded-3xl p-5 sm:p-10 border border-zinc-800 shadow-xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Store Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Flagship Store Atelier</span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-white">
                Visit Male Order Erise
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Experience bespoke fabric selections, personalized wedding & festive trials, suiting, shirting, and made-to-measure tailoring at our flagship studio.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="space-y-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.addressDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Mon – Sun: {BRAND_INFO.timingsDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Direct Helpline: {BRAND_INFO.phoneDisplay}</span>
              </div>
            </div>

            {/* Directions & Inquiry Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={BRAND_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
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
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <img src={whatsappIcon} alt="" className="w-4 h-4 object-contain rounded-full shrink-0" />
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
