import React from 'react';
import { ArrowRightIcon } from '../ui/Icons';

const CATEGORIES = [
  {
    slug: 'office-casuals',
    name: 'Office Casuals',
    caption: 'DAILY ROTATION',
    description: 'Crisp shirts, knit polos and tailored trousers made for effortless daily refinement.',
    image: '/photos/mob-category-office-casuals.jpg',
  },
  {
    slug: 'kurta-pyjama',
    name: 'Kurta Pajama',
    caption: 'FESTIVE & OCCASION',
    description: 'Handcrafted pure cotton and silk blend kurtas with timeless bespoke cuts.',
    image: '/photos/mob-category-kurta-pajama.jpg',
  },
  {
    slug: 'blazers',
    name: 'Tailored Blazers',
    caption: 'TAILORED REFINEMENT',
    description: 'Structured silhouettes, textured tweeds and Italian wool blends for black tie & formal evenings.',
    image: '/photos/blazer-1-navy-notch.jpg',
  },
];

export default function CategoryTiles({ onSelectCategory }) {
  return (
    <section className="section-y bg-bone" aria-labelledby="collections-heading">
      <div className="shell">
        <div
          data-reveal="up"
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="label text-muted">The collections</p>
            <h2
              id="collections-heading"
              data-reveal="sheen"
              data-lines
              className="t-head type-silver mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl"
            >
              Three wardrobes, kept tight.
            </h2>
          </div>
          <p className="t-body max-w-md text-neutral-600">
            We only make and stock what we can sell you properly. That is why
            our menswear collections are focused, pure, and uncompromising.
          </p>
        </div>

        <div
          data-reveal="up"
          data-reveal-stagger
          className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3"
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
              className="draw-border group relative block overflow-hidden cursor-pointer"
            >
              <div
                data-reveal="clip"
                className="media-frame aspect-[5/7] w-full"
              >
                <span className="skeleton" aria-hidden="true" />
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="zoom-slow w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.5)_45%,rgba(10,10,10,0.35)_100%)] pointer-events-none" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div>
                  <p className="label text-silver-200 text-[10px] sm:text-xs">
                    {cat.caption}
                  </p>
                  <h3 className="type-silver-dark font-display text-2xl sm:text-3xl lg:text-4xl font-light mt-2 sm:mt-3 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="t-body mt-2.5 max-w-sm text-neutral-300 text-xs sm:text-sm line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="label mt-5 sm:mt-6 inline-flex items-center gap-2 text-bone text-xs">
                    Explore
                    <ArrowRightIcon
                      width={15}
                      height={15}
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
