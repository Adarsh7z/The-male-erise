import React, { useState, useMemo } from 'react';
import ProductCard from './product/ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { SlidersIcon, SearchIcon, CloseIcon, ArrowDownUpIcon, ResetIcon } from './ui/Icons';

export default function ShopView({
  selectedCategorySlug,
  setSelectedCategorySlug,
  wishlist,
  onToggleWishlist,
  onQuickView,
}) {
  const [productSearch, setProductSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(
    selectedCategorySlug
      ? [selectedCategorySlug === 'coats' ? 'blazers' : selectedCategorySlug]
      : []
  );

  React.useEffect(() => {
    if (selectedCategorySlug) {
      const normalized = selectedCategorySlug === 'coats' ? 'blazers' : selectedCategorySlug;
      setSelectedCategories([normalized]);
    }
  }, [selectedCategorySlug]);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  // Available sizes across the 3 collections
  const availableSizes = ['S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', '44'];

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setMaxPrice(15000);
    setProductSearch('');
    if (setSelectedCategorySlug) setSelectedCategorySlug(null);
  };

  // Filter and sort products
  const displayProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (productSearch.trim()) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
          p.category.toLowerCase().includes(productSearch.toLowerCase()) ||
          (p.fabric && p.fabric.toLowerCase().includes(productSearch.toLowerCase()))
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categorySlug));
    }

    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes && p.sizes.some((s) => selectedSizes.includes(s))
      );
    }

    result = result.filter((p) => p.price <= maxPrice);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [productSearch, selectedCategories, selectedSizes, maxPrice, sortBy]);

  return (
    <div className="section-y bg-[#ffffff] select-none">
      <div className="shell">
        {/* Mobile Top Controls */}
        <div className="lg:hidden mb-6 space-y-3">
          {/* Search Bar */}
          <div className="flex items-center border border-black/15 bg-[#f5f5f3] px-3 py-2">
            <SearchIcon width={16} height={16} className="text-neutral-500 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search garments, fabrics..."
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
              className="w-full text-xs bg-transparent outline-none text-[#0a0a0a] placeholder:text-neutral-400"
            />
            {productSearch && (
              <button onClick={() => setProductSearch('')} className="p-1 text-neutral-400">
                <CloseIcon width={14} height={14} />
              </button>
            )}
          </div>

          {/* Dual Buttons: [Filter] and [Sort by] */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="btn btn-ink text-xs py-2.5 flex items-center justify-center gap-2"
            >
              <SlidersIcon width={13} height={13} />
              <span>
                Filter {selectedCategories.length > 0 ? `(${selectedCategories.length})` : ''}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileSortOpen(true)}
              className="btn btn-ghost text-xs py-2.5 flex items-center justify-center gap-2 border-black/20 text-[#0a0a0a]"
            >
              <ArrowDownUpIcon width={13} height={13} />
              <span>Sort by</span>
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-end justify-between pb-6 mb-8 border-b border-black/10">
          <div>
            <p className="label text-muted">Bespoke Catalog</p>
            <h1 className="t-head type-silver mt-2 text-4xl font-light">
              All Menswear
            </h1>
            <p className="t-body text-xs text-neutral-500 mt-1">
              Showing {displayProducts.length} pieces across Office casuals, Kurta-pyjama & Blazers
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Quick Search */}
            <div className="flex items-center border border-black/15 bg-white px-3 py-1.5 w-64">
              <SearchIcon width={14} height={14} className="text-neutral-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search collection..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                className="w-full text-xs outline-none bg-transparent placeholder:text-neutral-400"
              />
              {productSearch && (
                <button onClick={() => setProductSearch('')} className="p-0.5 text-neutral-400">
                  <CloseIcon width={12} height={12} />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <span className="label text-[10px] text-neutral-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="label text-xs bg-white border border-black/15 px-3 py-1.5 outline-none cursor-pointer text-[#0a0a0a]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar: Desktop FILTER */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-bone border border-black/10 p-5 space-y-6 sticky top-28">
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <SlidersIcon width={14} height={14} className="text-[#0a0a0a]" />
                  <h2 className="label text-xs text-[#0a0a0a]">Filters</h2>
                </div>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="label text-[10px] text-neutral-500 hover:text-black flex items-center gap-1 transition-colors"
                >
                  <ResetIcon width={11} height={11} />
                  <span>Reset</span>
                </button>
              </div>

              {/* SECTIONS: Office casuals, Kurta-pyjama, Blazers */}
              <div>
                <h3 className="label text-[10px] text-neutral-500 mb-3">
                  Collections
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => {
                    const isChecked = selectedCategories.includes(cat.slug);
                    return (
                      <label
                        key={cat.id}
                        className="flex items-center justify-between text-xs text-neutral-700 hover:text-black cursor-pointer group py-0.5 select-none"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCategory(cat.slug)}
                            className="w-4 h-4 rounded-none accent-[#0a0a0a] cursor-pointer"
                          />
                          <span className={isChecked ? 'font-medium text-black' : ''}>
                            {cat.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-400">
                          ({cat.itemCount})
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* SIZE */}
              <div className="pt-4 border-t border-black/10">
                <h3 className="label text-[10px] text-neutral-500 mb-3">
                  Size
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {availableSizes.map((size) => {
                    const isSelected = selectedSizes.includes(size);
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className={`text-xs px-2.5 py-1 border transition-colors ${
                          isSelected
                            ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PRICE */}
              <div className="pt-4 border-t border-black/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="label text-[10px] text-neutral-500">
                    Max Price
                  </h3>
                  <span className="text-xs font-medium text-black">
                    Up to ₹{maxPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#0a0a0a] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>₹1,000</span>
                  <span>₹15,000</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Catalog Grid */}
          <main className="lg:col-span-3">
            {/* Active Filter Tags */}
            {(selectedCategories.length > 0 || selectedSizes.length > 0 || maxPrice < 15000) && (
              <div className="flex items-center gap-2 flex-wrap mb-5">
                <span className="label text-[10px] text-neutral-400">Active:</span>
                {selectedCategories.map((slug) => {
                  const cat = CATEGORIES.find((c) => c.slug === slug);
                  return (
                    <span
                      key={slug}
                      className="label text-[10px] inline-flex items-center gap-1.5 bg-bone border border-black/10 px-2.5 py-1 text-black"
                    >
                      {cat?.name || slug}
                      <CloseIcon
                        width={11}
                        height={11}
                        className="cursor-pointer hover:text-red-500"
                        onClick={() => toggleCategory(slug)}
                      />
                    </span>
                  );
                })}
                {selectedSizes.map((size) => (
                  <span
                    key={size}
                    className="label text-[10px] inline-flex items-center gap-1.5 bg-bone border border-black/10 px-2.5 py-1 text-black"
                  >
                    Size: {size}
                    <CloseIcon
                      width={11}
                      height={11}
                      className="cursor-pointer hover:text-red-500"
                      onClick={() => toggleSize(size)}
                    />
                  </span>
                ))}
                <button
                  type="button"
                  onClick={resetFilters}
                  className="label text-[10px] text-red-600 hover:text-red-800 underline ml-1"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid */}
            {displayProducts.length === 0 ? (
              <div className="bg-bone border border-dashed border-black/15 p-12 text-center my-6">
                <p className="t-head text-2xl font-light text-neutral-800">
                  No pieces match your filters
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn btn-ink mt-4 text-xs"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {displayProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.includes(product.id)}
                    onToggleWishlist={onToggleWishlist}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            )}
          </main>
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div
            onClick={() => setMobileFilterOpen(false)}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-xs select-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-[#0a0a0a] text-white border-t border-white/10 p-6 max-h-[85vh] overflow-y-auto space-y-5 animate-slide-up"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <SlidersIcon width={15} height={15} className="text-silver-300" />
                  <h3 className="label text-xs text-white">Filter Collection</h3>
                </div>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-neutral-400">
                  <CloseIcon width={16} height={16} />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h4 className="label text-[10px] text-silver-300 mb-2.5">Collections</h4>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <label key={cat.id} className="flex items-center justify-between text-xs py-1">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.slug)}
                          onChange={() => toggleCategory(cat.slug)}
                          className="w-4 h-4 rounded-none accent-white"
                        />
                        <span className="text-neutral-200">{cat.name}</span>
                      </div>
                      <span className="text-neutral-500 text-[10px]">({cat.itemCount})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h4 className="label text-[10px] text-silver-300 mb-2.5">Sizes</h4>
                <div className="flex flex-wrap gap-1.5">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => toggleSize(size)}
                      className={`text-xs px-3 py-1.5 border transition-colors ${
                        selectedSizes.includes(size)
                          ? 'bg-white text-black border-white'
                          : 'bg-[#1a1a1a] text-neutral-300 border-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="label text-[10px] text-silver-300">Max Price:</span>
                  <span className="font-semibold text-white">₹{maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-white"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn btn-ghost flex-1 text-xs py-2.5"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="btn btn-paper flex-1 text-xs py-2.5"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Sort Modal */}
        {mobileSortOpen && (
          <div
            onClick={() => setMobileSortOpen(false)}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-xs select-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-[#0a0a0a] text-white border-t border-white/10 p-6 space-y-4 animate-slide-up"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <h3 className="label text-xs text-white">Sort Collection</h3>
                <button onClick={() => setMobileSortOpen(false)} className="p-1 text-neutral-400">
                  <CloseIcon width={16} height={16} />
                </button>
              </div>
              <div className="space-y-1">
                {[
                  { label: 'Featured', value: 'featured' },
                  { label: 'Price: Low to High', value: 'price-low' },
                  { label: 'Price: High to Low', value: 'price-high' },
                  { label: 'Top Rated', value: 'rating' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setSortBy(opt.value);
                      setMobileSortOpen(false);
                    }}
                    className={`w-full text-left py-2.5 px-3 text-xs transition-colors ${
                      sortBy === opt.value
                        ? 'bg-white text-black font-semibold'
                        : 'text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
