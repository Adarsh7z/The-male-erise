import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function Navbar({
  activeTab,
  setActiveTab,
  isCategoryOpen,
  setIsCategoryOpen,
  onOpenWishlist,
  onOpenSearch,
  onOpenUser
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab === 'category') {
      setIsCategoryOpen(!isCategoryOpen);
    } else {
      setIsCategoryOpen(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-black text-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-18">
            
            {/* Left: Mobile Hamburger & Logo (Styled exactly as media_1791450569581_6fb4d289.png) */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* Animated Hamburger (Uiverse.io by JulanDeAlb - Mobile Only) */}
              <label className="hamburger md:hidden select-none -ml-1" aria-label="Toggle navigation menu">
                <input
                  type="checkbox"
                  checked={mobileMenuOpen}
                  onChange={(e) => setMobileMenuOpen(e.target.checked)}
                  aria-label="Toggle navigation menu"
                />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  />
                  <path className="line" d="M7 16 27 16" />
                </svg>
              </label>

              {/* White Square Badge Logo */}
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2.5 group text-left focus:outline-none"
                aria-label="Male Order Erise Home"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-md sm:rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <span className="font-serif font-black text-black text-base sm:text-xl tracking-tighter">
                    MO
                  </span>
                </div>
                <div className="hidden sm:block">
                  <span className="block font-bold tracking-wider text-xs sm:text-sm text-white uppercase font-sans">
                    Male Order
                  </span>
                  <span className="block text-[9px] sm:text-[10px] tracking-widest text-zinc-400 uppercase -mt-0.5">
                    Erise Studio
                  </span>
                </div>
              </button>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold tracking-widest uppercase transition-colors relative py-2 ${
                  activeTab === 'home' && !isCategoryOpen ? 'text-white' : 'text-zinc-300 hover:text-white'
                }`}
              >
                HOME
                {activeTab === 'home' && !isCategoryOpen && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('shop')}
                className={`text-xs font-bold tracking-widest uppercase transition-colors relative py-2 ${
                  activeTab === 'shop' ? 'text-white' : 'text-zinc-300 hover:text-white'
                }`}
              >
                SHOP
                {activeTab === 'shop' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></span>
                )}
              </button>

              <button
                onClick={() => {
                  setIsCategoryOpen(!isCategoryOpen);
                  if (activeTab !== 'category') {
                    setActiveTab('category');
                  }
                }}
                onMouseEnter={() => setIsCategoryOpen(true)}
                className={`text-xs font-bold tracking-widest uppercase transition-colors relative py-2 flex items-center gap-1.5 ${
                  isCategoryOpen || activeTab === 'category' ? 'text-white' : 'text-zinc-300 hover:text-white'
                }`}
                aria-expanded={isCategoryOpen}
              >
                CATEGORY
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                {(isCategoryOpen || activeTab === 'category') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full"></span>
                )}
              </button>
            </nav>

            {/* Right: Actions / Icons (Search, Profile, Bag with 0 Badge) */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search */}
              <button
                onClick={onOpenSearch}
                className="p-1.5 sm:p-2 text-white hover:text-zinc-300 transition-colors focus:outline-none"
                aria-label="Search catalog"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* User Account */}
              <button
                onClick={onOpenUser}
                className="p-1.5 sm:p-2 text-white hover:text-zinc-300 transition-colors focus:outline-none"
                aria-label="Account"
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* Shopping Bag with 0 Badge (Exactly matching Mobile Screenshot & Video) */}
              <button
                onClick={onOpenWishlist}
                className="p-1.5 sm:p-2 text-white hover:text-zinc-300 transition-colors relative focus:outline-none"
                aria-label="Cart & Wishlist"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-transparent text-white text-[10px] sm:text-[11px] font-bold flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Side Navigation Drawer (Matching Mobile-ui.mp4 at 00:04, 00:06, 00:08) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Dark overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Solid Black Side Drawer covering ~70% screen */}
          <div className="relative w-[72%] max-w-[280px] bg-black text-white h-full shadow-2xl z-10 flex flex-col justify-between p-6 animate-slide-right">
            <div>
              {/* Top Drawer Header with Brand Emblem & Close Button */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                    <span className="font-serif font-black text-black text-sm">MO</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Male Order
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-zinc-400 hover:text-white focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Menu Items: HOME, SHOP, CATEGORY (Exact layout in Mobile-ui.mp4) */}
              <nav className="space-y-4">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`block w-full text-left py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                    activeTab === 'home' ? 'text-white font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  HOME
                </button>

                <button
                  onClick={() => handleNavClick('shop')}
                  className={`block w-full text-left py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                    activeTab === 'shop' ? 'text-white font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  SHOP
                </button>

                <button
                  onClick={() => handleNavClick('category')}
                  className={`block w-full text-left py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                    activeTab === 'category' ? 'text-white font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  CATEGORY
                </button>
              </nav>

              {/* Sub-sections: 3 Curated Menswear Collections */}
              <div className="mt-8 pt-6 border-t border-zinc-800 space-y-2.5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-2">
                  Featured Sections
                </span>
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-xs text-zinc-300 hover:text-purple-400 py-1"
                >
                  • Office casuals
                </button>
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-xs text-zinc-300 hover:text-purple-400 py-1"
                >
                  • Kurta-pyjama
                </button>
                <button
                  onClick={() => {
                    setActiveTab('shop');
                    setMobileMenuOpen(false);
                  }}
                  className="block text-xs text-zinc-300 hover:text-purple-400 py-1"
                >
                  • Blazers
                </button>
              </div>
            </div>

            {/* Bottom Contact inside Drawer */}
            <div className="pt-4 border-t border-zinc-900 text-xs text-zinc-500">
              <p className="text-[11px] text-zinc-400">Direct Helpline:</p>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi, I would like to inquire about your menswear collection at ${BRAND_INFO.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-semibold mt-0.5 block"
              >
                {BRAND_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
