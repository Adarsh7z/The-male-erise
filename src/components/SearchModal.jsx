import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MessageCircle } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = searchTerm.trim() === ''
    ? []
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.fabric.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const quickKeywords = ["Linen Shirt", "Silk Kurta", "Pyjama Set", "Navy Blazer", "Tweed Blazer", "Trouser"];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div
        className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search office casuals, kurta-pyjama, blazers..."
            className="flex-1 text-sm sm:text-base outline-none text-zinc-900 placeholder:text-zinc-400 font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-zinc-400 hover:text-black rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold text-zinc-500 hover:text-black px-2 py-1 bg-zinc-100 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="p-4 bg-zinc-50 border-b border-zinc-100 flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Popular:</span>
          {quickKeywords.map((k) => (
            <button
              key={k}
              onClick={() => setSearchTerm(k)}
              className="text-xs bg-white border border-zinc-200 text-zinc-700 hover:border-black px-2.5 py-1 rounded-full font-medium transition-colors"
            >
              {k}
            </button>
          ))}
        </div>

        {/* Results area */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-zinc-100">
          {searchTerm.trim() !== '' && results.length === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <p className="text-sm font-semibold">No pieces found matching "{searchTerm}"</p>
              <p className="text-xs mt-1">Try another keyword or search by category name</p>
            </div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 px-2 flex items-center justify-between gap-4 hover:bg-zinc-50 rounded-xl cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-xl bg-zinc-100"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-purple-700 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-medium">
                      {product.category}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs sm:text-sm font-bold text-zinc-900">
                    ₹{product.price.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-zinc-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-zinc-400 text-xs">
              Type keywords above to search all current Male Order Erise inventory.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
