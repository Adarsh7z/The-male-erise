import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon, CloseIcon } from './ui/Icons';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results =
    searchTerm.trim() === ''
      ? []
      : PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.fabric && p.fabric.toLowerCase().includes(searchTerm.toLowerCase()))
        );

  const quickKeywords = [
    'Office Casuals',
    'Kurta Pajama',
    'Blazers',
    'Linen',
    'Silk Kurta',
    'Tweed Blazer',
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 select-none animate-fadeIn"
    >
      <div
        className="w-full max-w-2xl bg-[#0a0a0a] text-white border border-silver-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3">
          <SearchIcon width={18} height={18} className="text-silver-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Office casuals, Kurta-pyjama, Blazers..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-white placeholder:text-neutral-500 font-sans"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-neutral-400 hover:text-white"
            >
              <CloseIcon width={16} height={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="label text-[10px] text-neutral-400 hover:text-white px-2 py-1 border border-white/10"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="p-3.5 bg-[#131313] border-b border-white/5 flex items-center gap-2 flex-wrap">
          <span className="label text-[9px] text-silver-400 mr-1">Suggested:</span>
          {quickKeywords.map((k) => (
            <button
              key={k}
              onClick={() => setSearchTerm(k)}
              className="label text-[9px] bg-[#1a1a1a] hover:bg-[#262626] border border-white/10 text-neutral-300 hover:text-white px-2.5 py-1 transition-colors"
            >
              {k}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-white/5">
          {searchTerm.trim() !== '' && results.length === 0 ? (
            <div className="py-12 text-center text-neutral-400">
              <p className="text-sm">No menswear pieces found matching "{searchTerm}"</p>
              <p className="text-xs mt-1 text-neutral-500">
                Try searching for "Blazer", "Kurta", "Linen", or "Shirt"
              </p>
            </div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 px-2 flex items-center justify-between gap-4 hover:bg-[#151515] cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-16 object-cover bg-neutral-900 border border-white/10"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-normal text-white group-hover:text-silver-300 transition-colors">
                      {product.name}
                    </h4>
                    <p className="label text-[10px] text-neutral-400 mt-1">
                      {product.category} {product.fabric ? `· ${product.fabric}` : ''}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    ₹{product.price.toLocaleString()}
                  </div>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-[10px] text-neutral-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-neutral-500 text-xs">
              Type above to search across our full menswear inventory
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
