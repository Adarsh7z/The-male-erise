import React from 'react';
import { PRODUCTS } from '../../data/products';

const LAYOUT = [
  { span: 'col-span-12 sm:col-span-6 lg:col-span-5', ratio: 'aspect-[3/4]', offset: '' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-7', ratio: 'aspect-[4/3] lg:aspect-[16/10]', offset: 'lg:mt-14' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-4', ratio: 'aspect-[3/4]', offset: 'lg:mt-6' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-3', ratio: 'aspect-[3/4]', offset: 'lg:mt-16' },
  { span: 'col-span-12 sm:col-span-6 lg:col-span-5', ratio: 'aspect-[4/3]', offset: 'lg:-mt-8' },
  { span: 'col-span-12 lg:col-span-7', ratio: 'aspect-[16/10]', offset: '' },
  { span: 'col-span-12 lg:col-span-5', ratio: 'aspect-[3/4]', offset: 'lg:-mt-20' },
];

export default function LookbookGrid({ onQuickView }) {
  // Select 7 diverse pieces (Office casuals, Kurtas, and Blazers)
  const pieces = [
    PRODUCTS.find((p) => p.id === 'moe-oc-01') || PRODUCTS[0],
    PRODUCTS.find((p) => p.id === 'blazer-1-navy-notch') || PRODUCTS[1],
    PRODUCTS.find((p) => p.id === 'moe-kp-01') || PRODUCTS[2],
    PRODUCTS.find((p) => p.id === 'blazer-2-charcoal-tweed') || PRODUCTS[3],
    PRODUCTS.find((p) => p.id === 'moe-oc-03') || PRODUCTS[4],
    PRODUCTS.find((p) => p.id === 'blazer-3-velvet-peak') || PRODUCTS[5],
    PRODUCTS.find((p) => p.id === 'moe-kp-03') || PRODUCTS[6],
  ].filter(Boolean);

  return (
    <section className="section-y bg-[#ffffff]" aria-labelledby="lookbook-heading">
      <div className="shell">
        <div data-reveal="up">
          <p className="label text-muted">Lookbook</p>
          <h2
            id="lookbook-heading"
            data-reveal="sheen"
            data-lines
            className="t-head type-silver mt-4 text-4xl sm:text-5xl"
          >
            This season, in the order we would wear it.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-12 gap-x-5 gap-y-10 md:mt-16 md:gap-x-6 lg:gap-y-0">
          {pieces.map((product, index) => {
            const tile = LAYOUT[index % LAYOUT.length];
            const primaryImg = product.images?.[0] || '';

            return (
              <li
                key={product.id}
                className={`${tile.span} ${tile.offset} cursor-pointer select-none`}
                onClick={() => onQuickView && onQuickView(product)}
              >
                <div data-reveal="up" className="group">
                  <div
                    data-reveal="clip"
                    className={`media-frame ${tile.ratio} relative overflow-hidden bg-[#f0f0ee]`}
                  >
                    <span className="skeleton" aria-hidden="true" />
                    <img
                      src={primaryImg}
                      alt={product.name}
                      loading="lazy"
                      className="zoom-slow w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <p className="label text-neutral-400 text-[10px]">
                      {String(index + 1).padStart(2, '0')} — {product.category}
                    </p>
                    <p className="truncate text-xs text-neutral-700 transition-colors duration-500 group-hover:text-black font-medium">
                      {product.name}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
