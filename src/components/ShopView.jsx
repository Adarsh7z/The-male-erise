import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { SlidersHorizontal, Search, RotateCcw, X, ArrowDownUp } from 'lucide-react';

export default function ShopView({
  selectedCategorySlug,
  setSelectedCategorySlug,
  wishlist,
  onToggleWishlist,
  onQuickView
}) {
  const [productSearch, setProductSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(
    selectedCategorySlug ? [selectedCategorySlug === 'coats' ? 'blazers' : selectedCategorySlug] : []
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

  // Available sizes across the 3 sections
  const availableSizes = ["S", "M", "L", "XL", "XXL", "38", "40", "42", "44"];

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
          p.category.toLowerCase().includes(productSearch.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categorySlug));
    }

    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s))
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
    <div className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Mobile Top Controls: Search Bar & Dual Purple Buttons (Exact layout in Mobile-ui.mp4 at 00:07) */}
      <div className="lg:hidden mb-5 space-y-2.5">
        {/* Search Bar with Purple Button */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
              className="w-full text-xs sm:text-sm pl-4 pr-3 py-2.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <button
            onClick={() => {}}
            className="bg-[#8b24d6] hover:bg-[#7a1ec0] text-white p-2.5 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Dual Purple Action Buttons: [Filter] and [Sort by] */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="bg-[#8b24d6] hover:bg-[#7a1ec0] text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter {selectedCategories.length > 0 && `(${selectedCategories.length})`}</span>
          </button>

          <button
            onClick={() => setMobileSortOpen(true)}
            className="bg-[#8b24d6] hover:bg-[#7a1ec0] text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
          >
            <ArrowDownUp className="w-3.5 h-3.5" />
            <span>Sort by</span>
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between pb-6 mb-6 border-b border-zinc-200">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Catalog & Shop
          </h1>
          <p className="text-sm text-zinc-500 mt-0.5">
            Showing {displayProducts.length} items across Office casuals, Kurta-pyjama & Blazers
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar: Desktop FILTER */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-xs space-y-6 sticky top-24">
            
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-zinc-900" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                  FILTER
                </h2>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-zinc-500 hover:text-black flex items-center gap-1 transition-colors"
                title="Reset Filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* SECTIONS: Office casuals, Kurta-pyjama, Blazers */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                SECTIONS
              </h3>
              <div className="space-y-2.5">
                {CATEGORIES.map((cat) => {
                  const isChecked = selectedCategories.includes(cat.slug);
                  return (
                    <label
                      key={cat.id}
                      className="flex items-center justify-between text-xs text-zinc-700 hover:text-black cursor-pointer group py-0.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleCategory(cat.slug)}
                          className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-zinc-300 cursor-pointer"
                        />
                        <span className={`group-hover:translate-x-0.5 transition-transform ${isChecked ? 'font-bold text-zinc-900' : ''}`}>
                          {cat.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-mono">
                        ({cat.itemCount})
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* SIZE */}
            <div className="pt-4 border-t border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                SIZE
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {availableSizes.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => toggleSize(size)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border transition-all ${
                        isSelected
                          ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PRICE */}
            <div className="pt-4 border-t border-zinc-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  PRICE
                </h3>
                <span className="text-xs font-mono font-bold text-zinc-800">
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
                className="w-full accent-purple-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1 font-mono">
                <span>₹1,000.00</span>
                <span>₹15,000.00</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Main Catalog Grid */}
        <main className="lg:col-span-3">
          
          {/* Desktop Control Bar */}
          <div className="hidden lg:flex bg-zinc-50 border border-zinc-200/80 rounded-xl px-4 py-3 mb-6 items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-600">
              {displayProducts.length} PRODUCTS FOUND
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-semibold bg-white border border-zinc-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-zinc-500 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Active Filter Tags */}
          {(selectedCategories.length > 0 || selectedSizes.length > 0 || maxPrice < 15000) && (
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-4">
              <span className="text-xs text-zinc-400 font-medium">Active Filters:</span>
              {selectedCategories.map((slug) => {
                const cat = CATEGORIES.find((c) => c.slug === slug);
                return (
                  <span
                    key={slug}
                    className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-xs px-2.5 py-1 rounded-full font-medium"
                  >
                    {cat?.name || slug}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-purple-900"
                      onClick={() => toggleCategory(slug)}
                    />
                  </span>
                );
              })}
              {selectedSizes.map((size) => (
                <span
                  key={size}
                  className="inline-flex items-center gap-1 bg-zinc-100 text-zinc-700 text-xs px-2.5 py-1 rounded-full font-medium"
                >
                  Size: {size}
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-black"
                    onClick={() => toggleSize(size)}
                  />
                </span>
              ))}
              <button
                onClick={resetFilters}
                className="text-xs text-red-500 hover:text-red-700 font-medium ml-1 underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Product Grid: 2 columns on Mobile, 3 on Desktop (Matching Mobile-ui.mp4) */}
          {displayProducts.length === 0 ? (
            <div className="bg-zinc-50 border border-dashed border-zinc-300 rounded-2xl p-10 text-center my-6">
              <p className="text-sm font-semibold text-zinc-700">No pieces match your filters</p>
              <button
                onClick={resetFilters}
                className="mt-3 bg-zinc-900 text-white text-xs font-semibold px-4 py-2 rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">
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

      {/* Mobile Filter Modal / Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs">
          <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 max-h-[85vh] overflow-y-auto space-y-5 animate-slide-up">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-purple-700" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Filter By</h3>
              </div>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-zinc-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2">Sections</h4>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <label key={cat.id} className="flex items-center justify-between text-xs text-zinc-800 py-1">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.slug)}
                        onChange={() => toggleCategory(cat.slug)}
                        className="w-4 h-4 rounded text-purple-600"
                      />
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <span className="text-zinc-400">({cat.itemCount})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2">Sizes</h4>
              <div className="flex flex-wrap gap-1.5">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => toggleSize(size)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                      selectedSizes.includes(size)
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>Max Price:</span>
                <span className="font-mono">₹{maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-purple-600"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={resetFilters}
                className="flex-1 border border-zinc-300 text-zinc-700 font-semibold py-2.5 rounded-xl text-xs"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 bg-[#8b24d6] text-white font-semibold py-2.5 rounded-xl text-xs shadow-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sort Modal */}
      {mobileSortOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs">
          <div className="w-full sm:max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-5 space-y-4 animate-slide-up">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Sort Products</h3>
              <button onClick={() => setMobileSortOpen(false)} className="p-1 text-zinc-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-1">
              {[
                { label: 'Featured', value: 'featured' },
                { label: 'Price: Low to High', value: 'price-low' },
                { label: 'Price: High to Low', value: 'price-high' },
                { label: 'Top Rated', value: 'rating' }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSortBy(opt.value);
                    setMobileSortOpen(false);
                  }}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-semibold ${
                    sortBy === opt.value ? 'bg-purple-50 text-purple-700 font-bold' : 'text-zinc-700 hover:bg-zinc-50'
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
  );
}
