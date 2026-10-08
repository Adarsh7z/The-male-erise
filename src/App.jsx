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
import { BRAND_INFO } from './data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'shop' | 'category'
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(null);
  
  // Persisted Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('moe_wishlist');
      return saved ? JSON.parse(saved) : ['moe-oc-01', 'moe-kp-01'];
    } catch {
      return ['moe-oc-01', 'moe-kp-01'];
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

  // Backward compatibility: resolve ?category=coats or ?section=coats to blazers
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category') || params.get('section');
      if (catParam) {
        const normalized = catParam.toLowerCase() === 'coats' ? 'blazers' : catParam.toLowerCase();
        setSelectedCategorySlug(normalized);
        setActiveTab('shop');
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectCategory = (slug) => {
    const normalizedSlug = slug === 'coats' ? 'blazers' : slug;
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
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Top Utility Header */}
      <TopBar />

      {/* 2. Main Sticky Navigation (Responsive on Mobile and Desktop) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
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
                  <div className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Male Order Erise Atelier</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight font-sans">
                    Office Casuals • Festive Kurta-Pyjamas • Tailored Blazers
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-xl">
                    Every piece is crafted with exquisite tailoring and premium textiles. Inquire directly on WhatsApp for customized fittings.
                  </p>
                </div>

                <div className="z-10 flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-center">
                  <button
                    onClick={handleNavigateToShop}
                    className="flex-1 md:flex-none bg-white hover:bg-zinc-100 text-black text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Browse Shop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hi, I would like to inquire about customized tailoring for Office casuals, Kurta-pyjama, and Blazers at ${BRAND_INFO.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-1.5"
                  >
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
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={toggleWishlist}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={toggleWishlist}
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
