import React, { useState, useRef, useEffect } from "react";
import { Star, Heart } from "lucide-react";
import { categories, foodItems } from "../../data";

interface PopularCategoriesProps {
  onAddToBasket: (name: string, price: number) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  highlightedItemName: string | null;
  setHighlightedItemName: (name: string | null) => void;
}

export default function PopularCategories({
  onAddToBasket,
  activeCategory,
  setActiveCategory,
  highlightedItemName,
  setHighlightedItemName
}: PopularCategoriesProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isFirstRender = useRef(true);

  // Remettre le carrousel au début quand la catégorie change ou qu'une recommandation est cliquée
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    // S'assurer que le bouton de la catégorie active est bien visible
    const activeBtn = document.getElementById(`category-btn-${activeCategory}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeCategory, highlightedItemName]);

  // Filter items and place the highlighted item first
  const filteredItems = [...foodItems]
    .filter((item) => item.category === activeCategory)
    .sort((a, b) => {
      if (highlightedItemName) {
        if (a.name === highlightedItemName) return -1;
        if (b.name === highlightedItemName) return 1;
      }
      return 0;
    });

  const toggleFavorite = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const getCategoryLabel = (catId: string) => {
    switch (catId) {
      case "burger": return "Burgers";
      case "pizza": return "Pizzas";
      case "pasta": return "Pâtes";
      case "salad": return "Salades";
      case "dessert": return "Desserts";
      case "drinks": return "Boissons";
      default: return "Spécialité";
    }
  };

  return (
    <section id="menu" className="py-20 bg-neutral-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 font-sans text-sm font-semibold tracking-wider uppercase block mb-3">
            Nos Catégories Populaires
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            Qu'aimeriez-vous déguster aujourd'hui ?
          </h2>
        </div>

        {/* Categories Row */}
        <div className="flex overflow-x-auto pb-4 justify-start md:justify-center gap-4 scrollbar-none snap-x px-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                id={`category-btn-${cat.id}`}
                key={cat.id}
                onClick={(e) => {
                  setActiveCategory(cat.id);
                  setHighlightedItemName(null);
                }}
                className={`snap-center flex flex-col items-center min-w-[100px] p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 border-amber-500 text-neutral-950 shadow-lg shadow-amber-500/10 scale-105"
                    : "bg-white border-neutral-100 text-neutral-600 hover:border-amber-200 hover:bg-amber-50/20"
                }`}
              >
                {/* Icon */}
                <span className="text-3xl mb-2 filter drop-shadow-sm">{cat.icon}</span>
                {/* Name */}
                <span className="font-serif text-sm font-bold block">{cat.name}</span>
                {/* Count */}
                <span className={`text-[10px] font-sans font-medium mt-1 ${isActive ? "text-neutral-900" : "text-neutral-400"}`}>
                  {foodItems.filter((item) => item.category === cat.id).length} Recettes
                </span>
              </button>
            );
          })}
        </div>

        {/* Filtered Food Items Grid / Mobile Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 pb-6 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredItems.map((item) => {
            const isFav = favorites.includes(item.id);
            const isHighlighted = item.name === highlightedItemName;
            return (
              <div
                key={item.id}
                onClick={() => onAddToBasket(item.name, item.price)}
                className={`shrink-0 w-[85vw] sm:w-auto snap-center bg-white rounded-2xl overflow-hidden border transition-all duration-300 group flex flex-col relative cursor-pointer ${
                  isHighlighted 
                    ? "border-amber-500 shadow-xl ring-2 ring-amber-500/20 scale-[1.02]" 
                    : "border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5"
                }`}
              >
                {/* Image Container */}
                <div className="h-48 overflow-hidden relative bg-neutral-100">
                  <img loading="lazy"
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                    {getCategoryLabel(item.category)}
                  </div>
                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleFavorite(item.id, e)}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                      isFav
                        ? "bg-amber-500 border-amber-500 text-neutral-950"
                        : "bg-neutral-900/40 border-white/20 text-white hover:bg-neutral-900/60"
                    }`}
                  >
                    <Heart size={14} className={isFav ? "fill-current" : ""} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-neutral-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1 shrink-0 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-100">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span className="font-mono text-xs font-semibold text-neutral-700">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-neutral-500 text-xs font-sans font-light leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>

                  {/* Nutritional / gourmet info directly in the card */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-neutral-50 rounded-xl border border-neutral-100 mb-4 text-center">
                    <div>
                      <span className="text-[9px] font-sans text-neutral-400 block uppercase tracking-wider">Préparation</span>
                      <span className="font-mono text-xs font-bold text-neutral-850">12 - 15 min</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-neutral-400 block uppercase tracking-wider">Calories</span>
                      <span className="font-mono text-xs font-bold text-neutral-850">~ 420 kcal</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-neutral-400 block uppercase tracking-wider">Allergènes</span>
                      <span className="font-sans text-[10px] font-semibold text-amber-600 block truncate" title="Sans Produits Laitiers">Sans Produits Laitiers</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-50">
                    <span className="font-mono text-lg font-bold text-neutral-900">
                      {item.price.toFixed(2)} €
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToBasket(item.name, item.price);
                      }}
                      className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans text-[11px] font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/10 cursor-pointer"
                    >
                      Ça a l'air délicieux !
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
