import React from 'react';
import { FabricIcon, FitIcon, StoreIcon } from '../ui/Icons';

const REASONS = [
  {
    icon: FabricIcon,
    title: 'Honest fabrics',
    body: 'We tell you the exact composition, weave and origin. If a textile will not hold its shape and endure seasons, we will not craft it.',
  },
  {
    icon: FitIcon,
    title: 'Fits you properly',
    body: 'Custom alterations are handled by master tailors, and we gladly re-measure with you over WhatsApp if you are between sizes.',
  },
  {
    icon: StoreIcon,
    title: 'Real store, real people',
    body: 'The same counter, the same people who measure you in Bodakdev. Nothing here is fulfilled by an anonymous third-party warehouse.',
  },
];

export default function WhyShop() {
  return (
    <section className="section-y bg-[#ffffff]" aria-labelledby="why-heading">
      <div className="shell">
        <div data-reveal="up">
          <p className="label text-muted">Why shop with us</p>
          <h2
            id="why-heading"
            data-reveal="sheen"
            data-lines
            className="t-head type-silver mt-4 max-w-2xl text-4xl sm:text-5xl"
          >
            Three things we will not compromise on.
          </h2>
        </div>

        <div
          data-reveal="up"
          data-reveal-stagger
          className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8"
        >
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border-t border-silver-500/25 pt-8">
              <Icon width={26} height={26} className="text-silver-400" />
              <h3 className="t-head type-silver mt-6 text-2xl sm:text-3xl font-light">
                {title}
              </h3>
              <p className="t-body mt-4 max-w-sm text-neutral-600 text-sm sm:text-base leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
