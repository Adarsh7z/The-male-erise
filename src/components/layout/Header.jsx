import React, { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import {
  SearchIcon,
  WhatsAppIcon,
  HeartIcon,
  UserIcon,
  CloseIcon,
  ArrowRightIcon
} from '../ui/Icons';
import { BRAND_INFO } from '../../data/products';

export function Header({
  activeTab,
  onNavigateTab,
  selectedCategorySlug,
  onSelectCategory,
  onOpenSearch,
  onOpenWishlist,
  onOpenUser,
  wishlistCount = 0,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const overHero = activeTab === 'home';
  const transparent = overHero && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I would like to inquire about your menswear collection at ${BRAND_INFO.name}.`
  )}`;

  const navItems = [
    { label: 'Home', id: 'home', active: activeTab === 'home', onClick: () => { onNavigateTab('home'); setMenuOpen(false); } },
    { label: 'Shop', id: 'shop', active: activeTab === 'shop' && !selectedCategorySlug, onClick: () => { onNavigateTab('shop'); onSelectCategory(null); setMenuOpen(false); } },
    { label: 'Office Casuals', id: 'office-casuals', active: activeTab === 'shop' && selectedCategorySlug === 'office-casuals', onClick: () => { onSelectCategory('office-casuals'); setMenuOpen(false); } },
    { label: 'Kurta Pyjama', id: 'kurta-pyjama', active: activeTab === 'shop' && selectedCategorySlug === 'kurta-pyjama', onClick: () => { onSelectCategory('kurta-pyjama'); setMenuOpen(false); } },
    { label: 'Blazers', id: 'blazers', active: activeTab === 'shop' && selectedCategorySlug === 'blazers', onClick: () => { onSelectCategory('blazers'); setMenuOpen(false); } },
  ];

  const inkClass = transparent ? "text-bone" : "text-ink";

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-16 md:h-[72px] transition-[background-color,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-black/8 bg-white/92 backdrop-blur-md shadow-[0_2px_28px_-18px_rgba(0,0,0,0.35)]"
        }`}
      >
        <div className="shell relative flex h-full items-center justify-between gap-4">
          
          {/* Left: Desktop Nav Links (Small uppercase, wide letter-spacing, active link underlined) */}
          <nav aria-label="Primary" className="hidden flex-1 xl:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={item.onClick}
                    className={`label relative py-2 transition-colors duration-500 cursor-pointer ${
                      transparent
                        ? "text-bone/75 hover:text-bone"
                        : "text-neutral-500 hover:text-ink"
                    } ${item.active ? (transparent ? "text-bone font-semibold" : "text-ink font-semibold") : ""}`}
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left silver-underline transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        item.active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Left on Mobile / Tablet: Thin 2-line Hamburger */}
          <div className="flex-1 xl:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`tap -ml-2 flex h-11 w-11 items-center justify-center transition-colors duration-500 ${inkClass} hover:text-silver-400 cursor-pointer`}
            >
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span
                  className={`absolute inset-x-0 top-1/2 block h-px bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen ? "rotate-45" : "-translate-y-1"
                  }`}
                  style={{ marginTop: "-0.5px" }}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 block h-px bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen ? "-rotate-45" : "translate-y-1"
                  }`}
                  style={{ marginTop: "-0.5px" }}
                />
              </span>
            </button>
          </div>

          {/* Centre: Centered Serif Wordmark "Male Order" + Thin Rule + ERISE */}
          <Logo
            size="sm"
            tone={transparent ? "silver" : "ink"}
            className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => {
              onNavigateTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Right: Thin line icons (Search, WhatsApp, Wishlist, Account) */}
          <div className={`flex flex-1 items-center justify-end gap-1.5 md:gap-2.5 ${inkClass}`}>
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search"
              className="tap flex h-10 w-10 items-center justify-center transition-colors duration-500 hover:text-silver-400 cursor-pointer"
            >
              <SearchIcon width={18} height={18} />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="tap flex h-10 w-10 items-center justify-center transition-colors duration-500 hover:text-silver-400 cursor-pointer"
            >
              <WhatsAppIcon width={18} height={18} />
            </a>

            <button
              type="button"
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="tap relative flex h-10 w-10 items-center justify-center transition-colors duration-500 hover:text-silver-400 cursor-pointer"
            >
              <HeartIcon width={18} height={18} />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-bone">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenUser}
              aria-label="Account details"
              className="tap flex h-10 w-10 items-center justify-center transition-colors duration-500 hover:text-silver-400 cursor-pointer"
            >
              <UserIcon width={18} height={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Menu Modal on Mobile / Tablet */}
      {menuOpen && (
        <div className="fixed inset-0 z-[95] xl:hidden">
          {/* Scrim */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-ink/65 backdrop-blur-[3px] transition-opacity duration-300"
          />

          {/* Floating Panel Anchored Below Header */}
          <div className="on-dark fixed top-18 left-4 right-4 z-[96] max-h-[calc(100dvh-5.5rem)] max-w-sm overflow-y-auto rounded-[18px] border border-white/12 bg-ink/97 p-5 shadow-[0_34px_90px_-28px_rgba(0,0,0,0.85)] outline-none animate-slide-up">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Logo tone="silver" size="sm" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="tap flex h-8 w-8 items-center justify-center text-silver-300 hover:text-bone cursor-pointer"
              >
                <CloseIcon width={18} height={18} />
              </button>
            </div>

            <nav aria-label="Mobile Navigation" className="mt-5 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-medium tracking-[0.16em] transition-colors flex items-center justify-between cursor-pointer ${
                    item.active
                      ? "text-bone font-bold bg-white/10"
                      : "text-silver-300 hover:text-bone hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRightIcon width={13} height={13} className="text-silver-500" />
                </button>
              ))}
            </nav>

            <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
              <p className="text-[11px] text-silver-400 tracking-wider uppercase">Atelier Contact</p>
              <p className="text-xs text-bone font-serif">
                Bodakdev, Ahmedabad • {BRAND_INFO.timingsDisplay}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-paper w-full text-center mt-3"
              >
                <WhatsAppIcon width={14} height={14} />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
