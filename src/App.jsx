import React, { useState, useEffect } from 'react';
import Preloader from './components/layout/Preloader';
import MotionRoot from './components/motion/MotionRoot';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import HeroCarousel from './components/home/HeroCarousel';
import MarqueeBand from './components/home/MarqueeBand';
import CategoryTiles from './components/home/CategoryTiles';
import FeaturedRow from './components/home/FeaturedRow';
import StoryBand from './components/home/StoryBand';
import WhyShop from './components/home/WhyShop';
import HowOrdering from './components/home/HowOrdering';
import LookbookGrid from './components/home/LookbookGrid';
import VisitStore from './components/home/VisitStore';
import ShopView from './components/ShopView';
import CategoryView from './components/CategoryView';
import ProductModal from './components/ProductModal';
import WishlistModal from './components/WishlistModal';
import SearchModal from './components/SearchModal';
import UserModal from './components/UserModal';
import Footer from './components/layout/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'shop' | 'category'
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
        const normalized =
          catParam.toLowerCase() === 'coats' ? 'blazers' : catParam.toLowerCase();
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTab = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setSelectedCategorySlug(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0a0a0a] font-sans antialiased selection:bg-[#0a0a0a] selection:text-white">
      {/* 0. Intro Preloader (Session-cached, tap to skip) */}
      <Preloader />

      {/* 0.1 GSAP Scroll Choreography Manager */}
      <MotionRoot dependencies={[activeTab]} />

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Header */}
      <Header
        activeTab={activeTab}
        onNavigateTab={handleNavigateTab}
        selectedCategorySlug={selectedCategorySlug}
        onSelectCategory={handleSelectCategory}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenUser={() => setIsUserOpen(true)}
        wishlistCount={wishlist.length}
      />

      {/* 3. Main Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Hero Carousel */}
            <HeroCarousel onSelectCategory={handleSelectCategory} />

            {/* Slow Endless Marquee Band */}
            <MarqueeBand />

            {/* Category Tiles (The Collections: Office Casuals, Kurta-Pyjama, Blazers) */}
            <CategoryTiles onSelectCategory={handleSelectCategory} />

            {/* Picked For You (Featured Products Rail / Grid) */}
            <FeaturedRow
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
              onQuickView={(product) => setQuickViewProduct(product)}
              onNavigateToShop={() => handleNavigateTab('shop')}
            />

            {/* Story Band (Inside the store, Bodakdev Ahmedabad) */}
            <StoryBand />

            {/* Why Shop With Us (Honest fabrics, Fits you properly, Real store) */}
            <WhyShop />

            {/* How Ordering Works (3 steps, WhatsApp direct order) */}
            <HowOrdering />

            {/* Editorial Lookbook Grid */}
            <LookbookGrid
              onQuickView={(product) => setQuickViewProduct(product)}
            />

            {/* Visit The Store & Embedded Google Map */}
            <VisitStore />
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
          <CategoryView onSelectCategory={handleSelectCategory} />
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        onNavigate={(tab, catSlug) => {
          if (catSlug) {
            handleSelectCategory(catSlug);
          } else {
            handleNavigateTab(tab);
          }
        }}
      />

      {/* 5. Floating CTAs: WhatsApp (pulse) on right, Google Maps Directions on left */}
      <FloatingCTAs />

      {/* 6. Interactive Modals */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={
          quickViewProduct ? wishlist.includes(quickViewProduct.id) : false
        }
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

      <UserModal isOpen={isUserOpen} onClose={() => setIsUserOpen(false)} />
    </div>
  );
}
