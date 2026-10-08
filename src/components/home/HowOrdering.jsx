import React from 'react';
import { WhatsAppIcon } from '../ui/Icons';
import { BRAND_INFO } from '../../data/products';

const STEPS = [
  {
    title: 'Pick what you like',
    body: 'Browse our three collections. Choose your preferred size and cut. Nothing is added to a complex cart, because personal ordering happens directly.',
  },
  {
    title: 'Message us on WhatsApp',
    body: 'One tap from any product opens WhatsApp with your chosen garment and details preloaded. Edit or add custom requests freely.',
  },
  {
    title: 'We confirm and hand it to you',
    body: 'We check store availability, confirm the size or alterations, and either prepare it for in-store trial or express dispatch.',
  },
];

export default function HowOrdering() {
  const generalWhatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I would like to enquire about ordering menswear from ${BRAND_INFO.name}.`
  )}`;

  return (
    <section className="section-y bg-[#f5f5f3]" aria-labelledby="how-heading">
      <div className="shell">
        <div
          data-reveal="up"
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="label text-muted">How ordering works</p>
            <h2
              id="how-heading"
              data-reveal="sheen"
              data-lines
              className="t-head type-silver mt-4 text-4xl sm:text-5xl"
            >
              Three steps, then it is yours.
            </h2>
          </div>
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink shrink-0 inline-flex items-center gap-2"
          >
            <WhatsAppIcon width={15} height={15} />
            <span>Start a message</span>
          </a>
        </div>

        <div
          data-reveal="up"
          data-reveal-stagger
          className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8"
        >
          {STEPS.map((step, index) => (
            <div key={step.title} className="border-t border-silver-500/25 pt-8">
              <p className="type-silver font-display text-5xl sm:text-6xl font-light leading-none">
                0{index + 1}
              </p>
              <h3 className="t-head type-silver mt-6 text-2xl sm:text-3xl font-light">
                {step.title}
              </h3>
              <p className="t-body mt-4 max-w-sm text-neutral-600 text-sm sm:text-base leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal="up">
          <p className="t-body mt-14 border-t border-silver-500/20 pt-8 text-neutral-600 text-sm sm:text-base">
            Prefer to speak directly? Call the shop on{' '}
            <a href={`tel:${BRAND_INFO.whatsappNumber}`} className="font-semibold text-neutral-900 underline">
              +91 9106688717
            </a>{' '}
            during opening hours ({BRAND_INFO.timings}) and our tailors will assist you. We are located in {BRAND_INFO.address}.
          </p>
        </div>
      </div>
    </section>
  );
}
