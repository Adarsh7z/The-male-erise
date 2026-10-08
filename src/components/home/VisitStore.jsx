import React from 'react';
import { PinIcon, ClockIcon, PhoneIcon } from '../ui/Icons';
import { BRAND_INFO } from '../../data/products';

export default function VisitStore() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Male+order+Bodakdev+Ahmedabad`;

  return (
    <section
      id="visit"
      className="section-y scroll-mt-28 bg-[#f5f5f3]"
      aria-labelledby="visit-heading"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div data-reveal="up">
            <p className="label text-muted">Visit the store</p>
            <h2
              id="visit-heading"
              data-reveal="sheen"
              data-lines
              className="t-head type-silver mt-4 text-4xl sm:text-5xl"
            >
              Come in and try it on.
            </h2>
            <p className="t-body mt-6 max-w-md text-neutral-600 text-sm sm:text-base leading-relaxed">
              Everything on this site is on the rail in our Bodakdev store. If you
              are in Ahmedabad or nearby, come and experience the textures,
              hand-feel, and custom measurements in person before you decide.
            </p>
          </div>

          <div data-reveal="up">
            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <dt className="shrink-0">
                  <PinIcon width={19} height={19} className="text-silver-400 mt-1" />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>
                  <address className="t-body not-italic text-neutral-700 text-sm sm:text-base leading-relaxed">
                    <span className="block font-medium text-black">{BRAND_INFO.name}</span>
                    <span className="block">{BRAND_INFO.address}</span>
                    <span className="block text-neutral-500">Category: {BRAND_INFO.category}</span>
                  </address>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="shrink-0">
                  <ClockIcon width={19} height={19} className="text-silver-400 mt-1" />
                  <span className="sr-only">Opening hours</span>
                </dt>
                <dd className="t-body text-neutral-700 text-sm sm:text-base">
                  <span className="block">
                    <span className="text-neutral-500 font-medium">Monday – Sunday</span>
                  </span>
                  <span className="block font-semibold text-black mt-0.5">
                    {BRAND_INFO.timings}
                  </span>
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="shrink-0">
                  <PhoneIcon width={19} height={19} className="text-silver-400 mt-1" />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd className="t-body text-neutral-700 text-sm sm:text-base">
                  <a
                    href={`tel:${BRAND_INFO.whatsappNumber}`}
                    className="link-draw font-semibold text-black hover:text-neutral-600"
                  >
                    +91 9106688717
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div data-reveal="up">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink mt-8 inline-flex items-center gap-2"
            >
              <PinIcon width={14} height={14} />
              <span>Get directions</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7" data-reveal="up">
          <div className="draw-border relative h-full min-h-[22rem] overflow-hidden bg-bone border border-black/10">
            <iframe
              title={`Map showing ${BRAND_INFO.name} in Bodakdev, Ahmedabad`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697960754877!2d72.50853547600747!3d23.034873715870025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b46df51b2c7%3A0xe54d6ec5c9ebfe17!2sMale%20order!5e0!3m2!1sen!2sin!4v1743128956789!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[24rem] w-full border-0 grayscale contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
