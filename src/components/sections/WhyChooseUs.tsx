import React from "react";
import { ChefHat, ShieldAlert, Heart, Smile, UtensilsCrossed } from "lucide-react";
// @ts-ignore
import whyChooseUsImg from "../../assets/why-choose-us.webp";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Cuisine de Qualité",
      description: "Nous ne servons que des viandes de première qualité élevées en plein air et des légumes certifiés biologiques.",
      icon: ChefHat,
    },
    {
      title: "Hygiène Irréprochable",
      description: "La propreté, la sécurité alimentaire et la prévention stricte des allergènes sont nos priorités absolues.",
      icon: ShieldAlert,
    },
    {
      title: "Cadre Chaleureux",
      description: "Une acoustique soignée, des assises confortables et un éclairage tamisé pour une soirée de pure détente.",
      icon: Heart,
    },
    {
      title: "Clients Heureux",
      description: "Des milliers de fins gourmets comblés chaque jour, repartant le sourire aux lèvres et des souvenirs plein la tête.",
      icon: Smile,
    },
  ];

  return (
    <section className="bg-emerald-950 text-white py-20 overflow-hidden relative border-b border-emerald-900">
      
      {/* Background Decorative glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Circular food plate */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/20 animate-spin-slow" />
              
              {/* Image Circle */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-emerald-900 shadow-2xl relative">
                <img loading="lazy"
                  src={whyChooseUsImg}
                  alt="Premium Table Plating"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Us text points */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-amber-400 font-sans text-xs font-semibold tracking-wider uppercase block mb-3">
                Pourquoi nous choisir ?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Bien plus qu'un simple <br /> restaurant d'exception
              </h2>
            </div>

            {/* List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4 p-2 -m-2 rounded-xl hover:bg-emerald-900/20 transition-all">
                    <div className="bg-amber-500/10 p-3 rounded-xl text-amber-400 shrink-0 border border-amber-500/10">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white mb-1">{pt.title}</h3>
                      <p className="text-neutral-400 text-xs font-sans font-light leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Labels & Certifications */}
            <div className="pt-10 mt-6 border-t border-emerald-900/40">
              <div className="flex items-center gap-3 mb-6">
                <UtensilsCrossed size={18} className="text-amber-500" />
                <span className="text-amber-500 font-serif text-sm font-semibold tracking-widest uppercase">
                  Nos Certifications & Engagements
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="flex flex-col gap-1.5">
                  <span className="text-neutral-100 font-serif text-lg tracking-wide">Green Food</span>
                  <span className="text-emerald-400/70 font-sans text-[10px] uppercase tracking-widest">Éco-responsable</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-emerald-900/50"></div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-neutral-100 font-serif text-lg tracking-wide">Label AB</span>
                  <span className="text-emerald-400/70 font-sans text-[10px] uppercase tracking-widest">Agriculture Biologique</span>
                </div>
                <div className="hidden sm:block w-px h-10 bg-emerald-900/50"></div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-neutral-100 font-serif text-lg tracking-wide">Maître Restaurateur</span>
                  <span className="text-amber-400/70 font-sans text-[10px] uppercase tracking-widest">Fait Maison Certifié</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
