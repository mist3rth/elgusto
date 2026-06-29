import React, { useState } from "react";
import { offers } from "../../data";
import { Copy, Check, Ticket, X } from "lucide-react";

export default function SpecialOffers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const promoCodes: Record<string, string> = {
    "offer-1": "LUNCH30",
    "offer-2": "FAMILY25",
    "offer-3": "WEEKEND20",
  };

  const handleCopyCode = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const code = promoCodes[id];
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="offers" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-amber-600 font-sans text-sm font-semibold tracking-wider uppercase block mb-3">
              Nos Offres Spéciales
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
              Les Privilèges du Moment
            </h2>
          </div>
        </div>

        {/* 3 Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => {
            const code = promoCodes[offer.id];
            const isCopied = copiedCode === offer.id;
            const isDetailsOpen = activeOfferId === offer.id;

            return (
              <div
                key={offer.id}
                className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col relative min-h-[420px]"
              >
                {/* Visual Header Image with discount badge overlay */}
                <div className="h-44 relative overflow-hidden bg-neutral-100">
                  <img loading="lazy"
                    src={offer.image}
                    alt={offer.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-amber-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {offer.discount}
                  </div>
                  {/* Time Badge */}
                  <div className="absolute bottom-4 left-4 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded">
                    {offer.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-neutral-500 text-xs font-sans font-light leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-neutral-100/60 flex items-center justify-between">
                    <button
                      onClick={() => setActiveOfferId(offer.id)}
                      className="text-xs text-amber-600 hover:text-amber-700 font-semibold cursor-pointer flex items-center space-x-1"
                    >
                      <span>Voir les détails</span>
                    </button>

                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <span className="text-[9px] text-neutral-400 block uppercase font-bold tracking-wider">Code</span>
                        <span className="font-mono text-xs font-bold text-neutral-800">{code}</span>
                      </div>

                      <button
                        onClick={(e) => handleCopyCode(offer.id, e)}
                        className={`p-2 rounded-xl transition-all border cursor-pointer ${
                          isCopied
                            ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                            : "bg-white border-neutral-100 hover:border-amber-200 text-neutral-500 hover:text-amber-600"
                        }`}
                        title="Copier le code"
                      >
                        {isCopied ? <Check size={12} /> : <Copy size={12} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive slide-up details layer inside the card itself */}
                <div
                  className={`absolute inset-0 bg-neutral-950 text-white p-6 flex flex-col justify-between transition-all duration-300 z-20 ${
                    isDetailsOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-sans font-bold bg-amber-500 text-neutral-950 uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {offer.discount}
                      </span>
                      <button
                        onClick={() => setActiveOfferId(null)}
                        className="text-neutral-400 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-white mb-2">{offer.title}</h4>
                    <p className="text-neutral-400 text-xs font-sans font-light leading-relaxed mb-4">
                      Profitez de {offer.discount.toLowerCase()} sur votre commande ! Cette réduction exclusive est spécialement pensée pour sublimer vos moments gourmands parmi nos recettes signatures.
                    </p>

                    {/* Conditions */}
                    <div className="space-y-2 border-t border-neutral-800 pt-3">
                      <span className="text-[10px] text-neutral-500 font-semibold block uppercase">Conditions :</span>
                      <div className="flex items-start space-x-2 text-[11px] text-neutral-300">
                        <Ticket size={10} className="text-amber-400 mt-0.5 shrink-0" />
                        <span>Valable sur place &amp; à emporter.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-[11px] text-neutral-300">
                        <Ticket size={10} className="text-amber-400 mt-0.5 shrink-0" />
                        <span>Créneaux : {offer.badge}.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-[11px] text-neutral-300">
                        <Ticket size={10} className="text-amber-400 mt-0.5 shrink-0" />
                        <span>Non cumulable.</span>
                      </div>
                    </div>
                  </div>

                  {/* Code action inside layer */}
                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[9px] text-neutral-500 block uppercase font-bold tracking-wider">CODE PROMO</span>
                      <span className="font-mono text-sm font-bold text-amber-400">{code}</span>
                    </div>

                    <button
                      onClick={(e) => handleCopyCode(offer.id, e)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all border cursor-pointer flex items-center space-x-1.5 ${
                        isCopied
                          ? "bg-emerald-500 border-emerald-500 text-neutral-950"
                          : "bg-amber-500 hover:bg-amber-600 border-amber-500 text-neutral-950"
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check size={12} />
                          <span>Copié</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copier</span>
                        </>
                      )}
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
