import React from 'react';
import { ArrowUpRightIcon, WhatsAppIcon } from '../ui/Icons';
import { BRAND_INFO } from '../../data/products';

export default function StoryBand() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'd like to learn more about bespoke tailoring and custom sizing at ${BRAND_INFO.name}.`
  )}`;

  return (
    <section className="on-dark section-y bg-[#0a0a0a] text-[#f5f5f3]" aria-labelledby="story-heading">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="draw-border relative lg:col-span-6" data-reveal="up">
          <div data-reveal="clip" className="media-frame aspect-[4/3] w-full relative overflow-hidden bg-[#1c1c1c]">
            <span className="skeleton" aria-hidden="true" />
            <img
              src="/photos/mob-story-store.jpg"
              alt="Inside the Male Order Erise store in Bodakdev, Ahmedabad"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="label mt-4 text-silver-300">Bodakdev, Ahmedabad</p>
        </div>

        <div className="lg:col-span-6">
          <div data-reveal="up">
            <p className="label text-silver-300">Our story</p>
            <h2
              id="story-heading"
              data-reveal="sheen"
              data-lines
              className="t-head type-silver-dark mt-5 text-4xl sm:text-5xl lg:text-6xl"
            >
              A store you can walk into, now at your fingertips.
            </h2>
          </div>

          <div data-reveal="up">
            <div className="t-body mt-7 space-y-4 text-neutral-300 text-sm sm:text-base">
              <p>
                We have been fitting men in Bodakdev, Ahmedabad for years. Not a
                franchise, not an impersonal warehouse — one dedicated shop, master
                tailors who know every hanger on the rail, and a habit of telling
                customers the absolute truth about fit and fabric.
              </p>
              <p>
                This site is that same atelier, minus the walk. Browse what is on the
                rail today across Office casuals, festive Kurta-pyjamas, and tailored
                blazers. Message us directly on WhatsApp — we will confirm, alter if
                needed, and prepare your garments.
              </p>
            </div>
          </div>

          <div data-reveal="up" className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost inline-flex items-center gap-2"
            >
              <WhatsAppIcon width={15} height={15} />
              <span>Talk to our stylists</span>
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
