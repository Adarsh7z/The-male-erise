import React from 'react';
import Logo from '../ui/Logo';
import { BRAND_INFO } from '../../data/products';
import {
  PinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from '../ui/Icons';

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I would like to enquire about menswear from ${BRAND_INFO.name}.`
  )}`;

  return (
    <footer className="on-dark bg-[#0a0a0a] text-[#f5f5f3] select-none">
      <div className="shell pt-16 pb-10 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4" data-reveal="up">
            <Logo tone="silver" size="lg" className="items-start" />
            <p className="t-body mt-6 max-w-xs text-neutral-300 text-sm leading-relaxed">
              A bespoke menswear studio in Bodakdev, Ahmedabad. Tailoring pure
              cotton, linen and wool ensembles for the modern gentleman.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-7 inline-flex items-center gap-2"
            >
              <WhatsAppIcon width={15} height={15} />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Shop Navigation */}
          <nav aria-label="Footer" className="lg:col-span-3" data-reveal="up">
            <h2 className="label text-silver-200 text-xs">Collections</h2>
            <ul className="mt-5 flex flex-col gap-3.5 text-sm text-neutral-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('shop', 'office-casuals')}
                  className="link-draw hover:text-white transition-colors"
                >
                  Office Casuals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('shop', 'kurta-pyjama')}
                  className="link-draw hover:text-white transition-colors"
                >
                  Kurta Pajama
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('shop', 'blazers')}
                  className="link-draw hover:text-white transition-colors"
                >
                  Tailored Blazers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('shop')}
                  className="link-draw hover:text-white transition-colors"
                >
                  All Menswear
                </button>
              </li>
            </ul>
          </nav>

          {/* Visit & Contact */}
          <div className="lg:col-span-3" data-reveal="up">
            <h2 className="label text-silver-200 text-xs">Visit Atelier</h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-neutral-300">
              <li className="flex gap-3">
                <PinIcon width={17} height={17} className="mt-0.5 shrink-0 text-silver-400" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  <span className="block font-medium text-white">{BRAND_INFO.name}</span>
                  <span className="block">{BRAND_INFO.address}</span>
                  <span className="block text-neutral-500">{BRAND_INFO.category}</span>
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <PhoneIcon width={17} height={17} className="shrink-0 text-silver-400" />
                <a
                  href={`tel:${BRAND_INFO.whatsappNumber}`}
                  className="link-draw hover:text-white text-xs sm:text-sm font-semibold"
                >
                  +91 9106688717
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="lg:col-span-2" data-reveal="up">
            <h2 className="label text-silver-200 text-xs">Atelier Hours</h2>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              <li className="leading-relaxed">
                <span className="block text-neutral-400 text-xs">Monday – Sunday</span>
                <span className="block text-white text-xs sm:text-sm font-medium mt-0.5">
                  11:00 am till 09:00 pm
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="label text-silver-200 text-[10px] mb-3">Connect</h3>
              <div className="flex items-center gap-4 text-silver-300">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Male Order Erise on Instagram"
                  className="hover:text-white transition-colors"
                >
                  <InstagramIcon width={18} height={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Male Order Erise on Facebook"
                  className="hover:text-white transition-colors"
                >
                  <FacebookIcon width={18} height={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="silver-rule mt-14 opacity-30" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center text-xs text-neutral-400">
          <p className="label text-[10px]">
            © {year} {BRAND_INFO.name}. All rights reserved.
          </p>
          <p className="label text-[10px]">
            Bodakdev, Ahmedabad · <span className="text-silver-300">WhatsApp Ordering</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
