import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import CategoryDrawer from './components/CategoryDrawer';
import TrendingCategories from './components/TrendingCategories';
import FeaturedProducts from './components/FeaturedProducts';
import ShopView from './components/ShopView';
import CategoryView from './components/CategoryView';
import StoreLocation from './components/StoreLocation';
import ProductModal from './components/ProductModal';
import WishlistModal from './components/WishlistModal';
import SearchModal from './components/SearchModal';
import UserModal from './components/UserModal';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import { PRODUCTS, BRAND_INFO } from './data/products';
import whatsappIconBwTransparent from './assets/whatsapp-icon-bw-transparent.png';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPInteractions } from './hooks/useGSAPInteractions';

gsap.registerPlugin(ScrollTrigger);

const normalizeWishlistData = (data) => {
  if (!Array.isArray(data)) return [];
  return data
    .map((item) => {
      if (typeof item === 'string') {
        const prod = PRODUCTS.find((p) => p.id === item);
        return {
          id: item,
          size: prod?.sizes?.[0] || 'M',
        };
      }
      if (item && typeof item === 'object' && item.id) {
        const prod = PRODUCTS.find((p) => p.id === item.id);
        const validSize =
          item.size && (!prod || prod.sizes?.includes(item.size))
            ? item.size
            : prod?.sizes?.[0] || 'M';
        return {
          id: item.id,
          size: validSize,
        };
      }
      return null;
    })
    .filter(Boolean);
};

export default function App() {
  useGSAPInteractions();
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'shop' | 'category'
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(null);
  
  // Persisted Wishlist: [{ id: string, size: string }]
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('moe_wishlist');
      if (saved) {
        return normalizeWishlistData(JSON.parse(saved));
      }
      return normalizeWishlistData(['moe-sh-01', 'moe-ku-01']);
    } catch {
      return normalizeWishlistData(['moe-sh-01', 'moe-ku-01']);
    }
  });

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('moe_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    // Refresh ScrollTrigger after font & layout render as per GSAP rule 3.5
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready
        .then(() => {
          ScrollTrigger.refresh();
        })
        .catch(() => {});
    }
  }, [activeTab]);

  // Backward compatibility: resolve legacy category/section query params
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category') || params.get('section');
      if (catParam) {
        let normalized = catParam.toLowerCase();
        if (normalized === 'coats') normalized = 'blazers';
        if (normalized === 'office-casuals' || normalized === 'office') normalized = 'shirts';
        if (normalized === 'kurta-pyjama' || normalized === 'kurta') normalized = 'kurtas';
        setSelectedCategorySlug(normalized);
        setActiveTab('shop');
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleWishlist = (productId, optionalSize) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => (typeof item === 'string' ? item : item.id) === productId);
      if (exists) {
        return prev.filter((item) => (typeof item === 'string' ? item : item.id) !== productId);
      }
      const prod = PRODUCTS.find((p) => p.id === productId);
      const chosenSize = optionalSize || prod?.sizes?.[0] || 'M';
      return [...prev, { id: productId, size: chosenSize }];
    });
  };

  const updateWishlistSize = (productId, newSize) => {
    setWishlist((prev) =>
      prev.map((item) => {
        const itemId = typeof item === 'string' ? item : item.id;
        if (itemId === productId) {
          return { id: productId, size: newSize };
        }
        return typeof item === 'string' ? { id: item, size: 'M' } : item;
      })
    );
  };

  const handleSelectCategory = (slug) => {
    let normalizedSlug = slug;
    if (slug === 'coats') normalizedSlug = 'blazers';
    if (slug === 'office-casuals') normalizedSlug = 'shirts';
    if (slug === 'kurta-pyjama') normalizedSlug = 'kurtas';
    setSelectedCategorySlug(normalizedSlug);
    setActiveTab('shop');
    setIsCategoryOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToCategories = () => {
    setActiveTab('category');
    setIsCategoryOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToShop = () => {
    setSelectedCategorySlug(null);
    setActiveTab('shop');
    setIsCategoryOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* 1. Top Utility Header */}
      <TopBar />

      {/* 2. Main Sticky Navigation (Responsive on Mobile and Desktop) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenUser={() => setIsUserOpen(true)}
      />

      {/* 3. Category Drawer ("Cat animation" below header) */}
      <CategoryDrawer
        isOpen={isCategoryOpen}
        onClose={() => setIsCategoryOpen(false)}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Page Content based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Trending Categories Section (Exact layout as media_1791450569581_6fb4d289.png: 2 cards on mobile) */}
            <TrendingCategories
              onSelectCategory={handleSelectCategory}
              onNavigateToCategories={handleNavigateToCategories}
            />

            {/* Featured Products Section (Exact layout as Mobile-ui.mp4: 2 columns, WhatsApp buttons, NO Buy Now) */}
            <FeaturedProducts
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
              onQuickView={(product) => setQuickViewProduct(product)}
              onNavigateToShop={handleNavigateToShop}
            />

            {/* Atelier Highlights Banner */}
            <section className="py-4 sm:py-6 px-3 sm:px-6 max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 border border-zinc-800 shadow-lg relative overflow-hidden">
                <div className="space-y-1.5 text-center md:text-left z-10">
                  <div className="inline-flex items-center gap-1.5 badge-gloss-black text-white text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-white">Male Order Erise Atelier</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold tracking-[var(--track-display)] font-sans">
                    Shirts • Handcrafted Kurtas • Tailored Blazers
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-xl">
                    Every piece is crafted with exquisite tailoring and premium textiles. Inquire directly on WhatsApp for customized fittings.
                  </p>
                </div>

                <div className="z-10 flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-center">
                  <button
                    onClick={handleNavigateToShop}
                    data-magnetic
                    data-interactive-btn
                    className="flex-1 md:flex-none bg-white hover:bg-zinc-100 text-black text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Browse Shop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hi, I would like to inquire about customized tailoring for Shirts, Kurtas, and Blazers at ${BRAND_INFO.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic
                    data-interactive-btn
                    className="flex-1 md:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-1.5"
                  >
                    <img
                      src={whatsappIconBwTransparent}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      width="26"
                      height="26"
                      className="wa-icon-img shrink-0"
                    />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Store Location Map & Direct Directions (With the user's provided iframe embed & Google Maps link) */}
            <StoreLocation />
          </div>
        )}

        {activeTab === 'shop' && (
          <ShopView
            selectedCategorySlug={selectedCategorySlug}
            setSelectedCategorySlug={setSelectedCategorySlug}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onQuickView={(product) => setQuickViewProduct(product)}
          />
        )}

        {activeTab === 'category' && (
          <CategoryView
            onSelectCategory={handleSelectCategory}
          />
        )}
      </main>

      {/* 5. Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          setIsCategoryOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 6. Dual Floating CTAs (Google Maps on bottom-left, WhatsApp on bottom-right, logo only!) */}
      <FloatingCTAs />

      {/* 7. Interactive Modals */}
      {(() => {
        const currentWishlistItem = quickViewProduct
          ? wishlist.find((item) => (typeof item === 'string' ? item : item.id) === quickViewProduct.id)
          : null;
        return (
          <ProductModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            isWishlisted={Boolean(currentWishlistItem)}
            savedSize={currentWishlistItem ? (typeof currentWishlistItem === 'object' ? currentWishlistItem.size : null) : null}
            onToggleWishlist={toggleWishlist}
            onUpdateWishlistSize={updateWishlistSize}
          />
        );
      })()}

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        wishlistIds={wishlist}
        onRemoveFromWishlist={toggleWishlist}
        onUpdateWishlistSize={updateWishlistSize}
        onOpenProduct={(product) => setQuickViewProduct(product)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setQuickViewProduct(product)}
      />

      <UserModal
        isOpen={isUserOpen}
        onClose={() => setIsUserOpen(false)}
      />
    </div>
  );
}
