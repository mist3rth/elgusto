import { useState, useEffect, useRef, useCallback, Suspense, lazy } from "react";
import Header from "./layouts/Header";
import Hero from "./components/sections/Hero";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Footer from "./layouts/Footer";

import { useBasket } from "./hooks/useBasket";
import { useRecommendations } from "./hooks/useRecommendations";
import { BasketSidebar } from "./components/ui/BasketSidebar";
import Toast from "./components/ui/Toast";
import ScrollToTop from "./components/ui/ScrollToTop";
import BasketTrigger from "./components/ui/BasketTrigger";

// Lazy loading the rest of the sections to improve initial load time
const WhatWeDo = lazy(() => import("./components/sections/WhatWeDo"));
const OurStory = lazy(() => import("./components/sections/OurStory"));
const PopularCategories = lazy(() => import("./components/sections/PopularCategories"));
const ChefRecommendation = lazy(() => import("./components/sections/ChefRecommendation"));
const TodaysSpecial = lazy(() => import("./components/sections/TodaysSpecial"));
const BookTable = lazy(() => import("./components/sections/BookTable"));
const MeetChefs = lazy(() => import("./components/sections/MeetChefs"));
const WhyChooseUs = lazy(() => import("./components/sections/WhyChooseUs"));
const Gallery = lazy(() => import("./components/sections/Gallery"));
const ClientsLove = lazy(() => import("./components/sections/ClientsLove"));
const SpecialOffers = lazy(() => import("./components/sections/SpecialOffers"));
const LatestNews = lazy(() => import("./components/sections/LatestNews"));

export default function App() {
  const { basket, handleAddToBasket: baseAddToBasket, handleRemoveFromBasket, clearBasket, totalAmount, totalItemsCount } = useBasket();
  const { getRecommendation } = useRecommendations(basket);
  
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const [activeMenuCategory, setActiveMenuCategory] = useState<string>("burger");
  const [highlightedMenuItem, setHighlightedMenuItem] = useState<string | null>(null);

  // Sécuriser le Timeout du Toast
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => setToast(null), 4000);
  }, []);

  // Mémoïsation des fonctions
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleBookClick = useCallback(() => scrollToSection("contact"), [scrollToSection]);
  const handleExploreMenu = useCallback(() => scrollToSection("menu"), [scrollToSection]);

  const handleSelectRecommendation = useCallback((category: string, itemName: string) => {
    setActiveMenuCategory(category);
    setHighlightedMenuItem(itemName);
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleAddToBasket = useCallback((name: string, price: number) => {
    baseAddToBasket(name, price, () => {
      triggerToast(`"${name}" a été ajouté à votre panier !`);
      setIsBasketOpen(true);
    });
  }, [baseAddToBasket, triggerToast]);

  const handleCheckout = useCallback(() => {
    setIsCheckoutSuccess(true);
    clearBasket();
  }, [clearBasket]);

  const handleCloseBasket = useCallback(() => setIsBasketOpen(false), []);
  const handleOpenBasket = useCallback(() => setIsBasketOpen(true), []);
  
  const handleCloseSuccess = useCallback(() => {
    setIsCheckoutSuccess(false);
    setIsBasketOpen(false);
  }, []);

  return (
    <HelmetProvider>
      <div className="bg-white min-h-screen relative antialiased scroll-smooth overflow-x-hidden">
        <Helmet>
          <title>El Gusto | Restaurant d'Exception</title>
          <meta name="description" content="Une expérience gastronomique inoubliable avec des produits de saison." />
          <meta property="og:title" content="El Gusto | Restaurant d'Exception" />
          <meta property="og:description" content="Une expérience gastronomique inoubliable avec des produits de saison." />
          <meta property="og:type" content="website" />
          <html lang="fr" />
        </Helmet>
        <Toast message={toast} />
      
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <ScrollToTop />
        <BasketTrigger count={totalItemsCount} onClick={handleOpenBasket} />
      </div>

      <Header onBookClick={handleBookClick} onNavigate={scrollToSection} />

      <main>
        <Hero onBookClick={handleBookClick} onExploreClick={handleExploreMenu} />
        
        {/* Code Splitting (Lazy Loading) pour les sections secondaires */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center font-sans text-amber-500 font-medium">Chargement du contenu...</div>}>
          <WhatWeDo />
          <OurStory />
          <PopularCategories
            onAddToBasket={handleAddToBasket}
            activeCategory={activeMenuCategory}
            setActiveCategory={setActiveMenuCategory}
            highlightedItemName={highlightedMenuItem}
            setHighlightedItemName={setHighlightedMenuItem}
          />
          <ChefRecommendation onSelectRecommendation={handleSelectRecommendation} onExploreMenu={handleExploreMenu} />
          <TodaysSpecial onOrderSpecial={handleAddToBasket} />
          <BookTable />
          <MeetChefs />
          <WhyChooseUs />
          <Gallery />
          <ClientsLove />
          <SpecialOffers />
          <LatestNews />
        </Suspense>
      </main>

      <Footer onNavigate={scrollToSection} />

      <BasketSidebar
        isOpen={isBasketOpen}
        onClose={handleCloseBasket}
        basket={basket}
        totalAmount={totalAmount}
        isCheckoutSuccess={isCheckoutSuccess}
        onCheckout={handleCheckout}
        onClearBasket={clearBasket}
        onCloseSuccess={handleCloseSuccess}
        onAdd={handleAddToBasket}
        onRemove={handleRemoveFromBasket}
        recommendation={getRecommendation()}
      />
      </div>
    </HelmetProvider>
  );
}
