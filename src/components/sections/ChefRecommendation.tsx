import { Star, Eye } from "lucide-react";
// @ts-ignore
import chef1 from "../../assets/chef-1.webp";
// @ts-ignore
import chef2 from "../../assets/chef-2.webp";
// @ts-ignore
import chef3 from "../../assets/chef-3.webp";
// @ts-ignore
import chef4 from "../../assets/chef-4.webp";

interface ChefRecommendationProps {
  onSelectRecommendation: (category: string, itemName: string) => void;
  onExploreMenu: () => void;
}

export default function ChefRecommendation({ onSelectRecommendation, onExploreMenu }: ChefRecommendationProps) {
  const recommendations = [
    {
      id: "rec-1",
      name: "Saumon Grillé",
      description: "Pavé de saumon sauvage saisi à la perfection, émulsion de beurre blanc à l'aneth et asperges bio rôties.",
      price: 24.90,
      rating: 4.8,
      image: chef1,
      category: "salad",
    },
    {
      id: "rec-2",
      name: "Spaghetti Carbonara",
      description: "Recette romaine authentique, pâtes fraîches au guanciale croustillant, pecorino romano et jaune d'œuf de poule élevée en plein air.",
      price: 18.50,
      rating: 4.6,
      image: chef2,
      category: "pasta",
    },
    {
      id: "rec-3",
      name: "Burger Gourmand",
      description: "Bifteck de bœuf maturé de race, cheddar de caractère doublement fondu, confit d'oignons maison et frites fraîches.",
      price: 16.90,
      rating: 4.7,
      image: chef3,
      category: "burger",
    },
    {
      id: "rec-4",
      name: "Pizza Margherita",
      description: "Sauce tomate maison, feuilles de basilic frais bio, mozzarella di bufala fondante et filet d'huile d'olive extra-vierge.",
      price: 17.90,
      rating: 4.5,
      image: chef4,
      category: "pizza",
    },
  ];

  return (
    <section className="bg-white py-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 font-sans text-sm font-semibold tracking-wider uppercase block mb-3">
            La Sélection du Chef
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            Nos Plats Incontournables
          </h2>
        </div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectRecommendation(item.category, item.name)}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-44 overflow-hidden relative">
                <img loading="lazy"
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center space-x-1">
                  <Star size={11} className="text-amber-400 fill-amber-400" />
                  <span className="font-mono text-[10px] font-bold text-white">{item.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-neutral-500 text-xs font-sans font-light leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Footer price & arrow */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-50">
                  <span className="font-mono text-base font-bold text-neutral-900">
                    {item.price.toFixed(2)} €
                  </span>
                  <span
                    className="text-amber-600 hover:text-amber-700 font-sans text-[11px] font-semibold flex items-center space-x-1"
                  >
                    <span>Commander</span>
                    <Eye size={11} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Trigger */}
        <div className="text-center mt-12">
          <button
            onClick={onExploreMenu}
            className="border-2 border-neutral-900 hover:border-amber-500 hover:text-amber-500 text-neutral-900 font-sans text-sm font-semibold px-8 py-3 rounded-lg transition-all cursor-pointer"
          >
            Consulter toute la carte
          </button>
        </div>

      </div>
    </section>
  );
}
