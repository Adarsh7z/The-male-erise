import React from 'react';

const ITEMS = [
  'Office Casuals',
  'Kurta Pajama',
  'Tailored Blazers',
  'Erise, Bodakdev, Ahmedabad',
  'Easy ordering on WhatsApp',
  'Honest fabrics',
  'Fits you properly',
  'Timings: 11:00 am till 09:00 pm',
];

export default function MarqueeBand() {
  return (
    <div className="marquee overflow-hidden border-b border-black/10 bg-bone py-4.5 sm:py-5 select-none">
      <p className="sr-only">
        Office Casuals, Kurta Pajama, and Blazers from Male Order Erise, Ahmedabad. Easy ordering on WhatsApp.
      </p>

      <div
        className="marquee-track"
        style={{ '--marquee-duration': '48s' }}
        aria-hidden="true"
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {ITEMS.map((item) => (
              <li key={item} className="flex shrink-0 items-center">
                <span className="type-silver label px-6 sm:px-8 text-[0.6875rem] sm:text-xs">
                  {item}
                </span>
                <span className="text-silver-400 text-xs" aria-hidden="true">
                  •
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
