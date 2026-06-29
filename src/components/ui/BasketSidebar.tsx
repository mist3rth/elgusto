import React from "react";
import { ShoppingBag, X, Check, Flame, Gift } from "lucide-react";
import { BasketItem } from "../../hooks/useBasket";

interface BasketSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  basket: BasketItem[];
  totalAmount: number;
  isCheckoutSuccess: boolean;
  onCheckout: () => void;
  onClearBasket: () => void;
  onCloseSuccess: () => void;
  onAdd: (name: string, price: number) => void;
  onRemove: (name: string) => void;
  recommendation: any; // Nous allons typer ceci dans une prochaine étape
}

export const BasketSidebar: React.FC<BasketSidebarProps> = ({
  isOpen,
  onClose,
  basket,
  totalAmount,
  isCheckoutSuccess,
  onCheckout,
  onClearBasket,
  onCloseSuccess,
  onAdd,
  onRemove,
  recommendation
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop blur */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 w-full max-w-md flex pl-10 sm:pl-0">
        <div className="w-full bg-white shadow-2xl flex flex-col h-full border-l border-neutral-100">
          {/* Cart Header */}
          <div className="px-6 py-5 bg-neutral-950 text-white flex justify-between items-center border-b border-neutral-900">
            <span className="font-serif text-lg font-bold flex items-center space-x-2">
              <ShoppingBag size={18} className="text-amber-500" />
              <span>Votre Panier Gourmand</span>
            </span>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-neutral-900 transition-colors cursor-pointer"
              aria-label="Fermer le panier"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-grow overflow-y-auto px-6 py-6 space-y-4">
            {isCheckoutSuccess ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">Commande passée !</h3>
                <p className="text-neutral-500 text-sm max-w-xs mx-auto leading-relaxed">
                  Votre sélection savoureuse est en cours de préparation. Préparez vos papilles !
                </p>
                <button
                  onClick={onCloseSuccess}
                  className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans font-semibold px-6 py-2 rounded transition-all cursor-pointer"
                >
                  Terminé
                </button>
              </div>
            ) : basket.length === 0 ? (
              <div className="text-center py-16 text-neutral-400 space-y-4">
                <ShoppingBag size={48} className="mx-auto stroke-[1.2] text-neutral-300" />
                <p className="font-sans text-sm font-light">Votre panier est actuellement vide.</p>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed">
                  Ajoutez des plats savoureux depuis notre ardoise pour commencer à composer votre commande.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Delivery Progress Motivation */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center space-x-1.5 text-neutral-800">
                      <Gift size={14} className="text-amber-600 animate-bounce" />
                      <span>Livraison gratuite (dès 50.00 €)</span>
                    </span>
                    <span className="font-mono text-amber-700">
                      {totalAmount >= 50 
                        ? "Offerte !" 
                        : `${(50 - totalAmount).toFixed(2)} € restants`
                      }
                    </span>
                  </div>
                  
                  {/* Visual progress bar */}
                  <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-amber-500 h-full transition-all duration-500"
                      style={{ width: `${Math.min((totalAmount / 50) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {basket.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100"
                    >
                      <div className="flex-grow pr-4">
                        <h4 className="font-serif text-base font-bold text-neutral-900 line-clamp-1">{item.name}</h4>
                        <span className="font-mono text-sm font-semibold text-neutral-500 block mt-1">
                          {item.price.toFixed(2)} € l'unité
                        </span>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center space-x-3 bg-white border border-neutral-100 rounded-full px-3 py-1 shrink-0">
                        <button
                          onClick={() => onRemove(item.name)}
                          className="text-neutral-400 hover:text-amber-600 font-bold transition-colors w-5 h-5 flex items-center justify-center"
                          aria-label={`Diminuer la quantité de ${item.name}`}
                        >
                          -
                        </button>
                        <span className="font-mono text-sm font-bold text-neutral-700">{item.qty}</span>
                        <button
                          onClick={() => onAdd(item.name, item.price)}
                          className="text-neutral-400 hover:text-amber-600 font-bold transition-colors w-5 h-5 flex items-center justify-center"
                          aria-label={`Augmenter la quantité de ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Intelligent Cross-selling Recommendation */}
                {recommendation && (
                  <div className="mt-6 border border-amber-500/30 bg-amber-50/50 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center space-x-1.5">
                      <Flame size={15} className="text-amber-600 animate-pulse" />
                      <span className="font-serif text-xs font-bold uppercase tracking-wider text-amber-800">
                        Suggestion du Chef
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 font-sans leading-relaxed italic">
                      "{recommendation.reason}"
                    </p>
                    <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-neutral-100">
                      <div className="w-12 h-12 shrink-0 bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center">
                        <img 
                          src={recommendation.image} 
                          alt={recommendation.name} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover text-[8px] text-neutral-400 text-center"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h5 className="font-serif text-xs font-bold text-neutral-900 truncate">{recommendation.name}</h5>
                        <span className="font-mono text-xs font-bold text-neutral-800">{recommendation.price.toFixed(2)} €</span>
                      </div>
                      <button
                        onClick={() => onAdd(recommendation.name, recommendation.price)}
                        className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer"
                      >
                        + Ajouter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart Footer Summary */}
          {!isCheckoutSuccess && basket.length > 0 && (
            <div className="border-t border-neutral-100 px-6 py-6 bg-neutral-50 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-neutral-500">Sous-total :</span>
                <span className="font-mono text-xl font-bold text-neutral-900">{totalAmount.toFixed(2)} €</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onCheckout}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans text-sm font-bold py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Passer commande
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
