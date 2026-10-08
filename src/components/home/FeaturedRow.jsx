import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../product/ProductCard';
import { ArrowRightIcon } from '../ui/Icons';

const TABS = [
  { id: 'all', label: 'All Items' },
  { id: 'office-casuals', label: 'Office Casuals' },
  { id: 'kurta-pyjama', label: 'Kurta Pajama' },
  { id: 'blazers', label: 'Blazers' },
];

export default function FeaturedRow({
  wishlist = [],
  onToggleWishlist,
  onQuickView,
  onNavigateToShop,
}) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;
    if (activeTab !== 'all') {
      list = PRODUCTS.filter((p) => p.categorySlug === activeTab);
    }
    // Return top 8 items
    return list.slice(0, 8);
  }, [activeTab]);

  return (
    <section className="section-y overflow-hidden bg-white" aria-labelledby="featured-heading">
      <div className="shell">
        <div data-reveal="up" className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-muted">Selected by us</p>
            <h2
              id="featured-heading"
              data-reveal="sheen"
              className="t-head type-silver mt-4 text-4xl sm:text-5xl"
            >
              Picked for you
            </h2>
          </div>

          <button
            type="button"
            onClick={onNavigateToShop}
            className="label inline-flex items-center gap-2 text-[#0a0a0a] hover:text-neutral-500 transition-colors"
          >
            <span>View all collections</span>
            <ArrowRightIcon width={14} height={14} />
          </button>
        </div>

        {/* Tab Pills */}
        <div data-reveal="up" className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`label px-4 py-2 text-xs border transition-colors ${
                activeTab === tab.id
                  ? 'border-[#0a0a0a] bg-[#0a0a0a] text-white'
                  : 'border-black/10 bg-white text-[#0a0a0a] hover:border-black/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          data-reveal="up"
          data-reveal-stagger
          className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
