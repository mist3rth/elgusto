import React from "react";
// @ts-ignore
import legumesImg from "../../assets/legumes.webp";
// @ts-ignore
import cuisineImg from "../../assets/cuisine.webp";
// @ts-ignore
import focusImg from "../../assets/focus.webp";
// @ts-ignore
import pillarImg1 from "../../assets/4-1.webp";
// @ts-ignore
import pillarImg2 from "../../assets/4-2.webp";
export default function WhatWeDo() {
  const handleScrollToBooking = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="philosophy" className="bg-white py-24 relative overflow-hidden border-b border-neutral-100">
      {/* Subtle decorative design accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#78866B]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            L'excellence du produit brut, <br className="hidden sm:inline" /> sublimé par la passion du geste.
          </h2>
        </div>

        {/* 1. LE "BENTO BOX" DYNAMIQUE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Bloc 3 (Haut / Philosophie en gros caractères) - Spans 7 columns */}
          <div className="md:col-span-7 bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-150/50 flex flex-col justify-center min-h-[280px]">
            <span className="text-[10px] text-amber-600 uppercase font-bold tracking-widest block mb-4">
              Notre Philosophie
            </span>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-neutral-800 leading-relaxed">
              « La vérité d'une table s'écrit dans la sincérité de ses ingrédients. Nous croyons en une gastronomie vivante, respectueuse de la terre et génératrice d'émotions vraies. »
            </p>
          </div>

          {/* Bloc 2 (Petit / Produits locaux avec arrière-plan étal de légumes) - Spans 5 columns */}
          <div className="md:col-span-5 rounded-3xl p-8 sm:p-10 border border-neutral-800/10 flex flex-col justify-between min-h-[280px] relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img loading="lazy"
                src={legumesImg}
                alt="Étale de légumes frais"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-neutral-950/75" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-widest block mb-4">
                Terroir Engagé
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Produits locaux
              </h3>
              <p className="text-neutral-300 text-sm font-sans font-light leading-relaxed">
                Une démarche courte et transparente, privilégiant les maraîchers locaux à moins de 50 km pour une fraîcheur absolue à chaque service.
              </p>
            </div>
            <div className="relative z-10 mt-6 text-xs font-mono text-amber-400/80 font-semibold uppercase tracking-wider">
              Engagement local • 100% de saison
            </div>
          </div>

          {/* Bloc 1 (Large / Cuisines en pleine action) - Spans 12 columns */}
          <div className="md:col-span-12 h-[340px] rounded-3xl overflow-hidden relative group border border-neutral-150/50">
            <img loading="lazy"
              src={cuisineImg}
              alt="Cuisines en pleine action"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Visual overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <span className="text-amber-400 font-sans text-xs font-bold uppercase tracking-widest block mb-1">
                La Brigade en Action
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Des cuisines bouillonnantes d'idées
              </h4>
            </div>
          </div>



        </div>


        {/* 2. STRUCTURE ASYMÉTRIQUE & MAGAZINE PREMIUM */}
        <div className="border-t border-neutral-100 pt-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-neutral-900">
              Quatre piliers au cœur de notre histoire
            </h3>
            <p className="text-neutral-500 text-sm font-sans font-light mt-4 max-w-xl mx-auto leading-relaxed">
              Chaque détail de notre table est pensé comme un hommage à notre terroir et à la convivialité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Arguments (2 features) */}
            <div className="lg:col-span-4 space-y-16">
              
              {/* Pillar 1 */}
              <div className="lg:text-right space-y-3">
                <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block">
                  01 . Sourcing Local
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                  En direct de nos producteurs locaux
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  Preuve du terroir. Des fruits et légumes d'une fraîcheur absolue, récoltés à maturité et livrés sur notre table tous les matins.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="lg:text-right space-y-3">
                <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block">
                  02 . Brigade d'Artisans
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                  Le Chef Thierry thiesson et sa brigade
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  L'expertise incarnée. Une équipe passionnée dédiée à la perfection de chaque geste technique pour sublimer chaque plat.
                </p>
              </div>

            </div>

            {/* Central overlapping images collage */}
            <div className="lg:col-span-4 py-8 sm:py-12 flex justify-center items-center relative min-h-[440px]">
              
              {/* Back Image (Horizontal Plat Signature) */}
              <div className="absolute w-[240px] sm:w-[280px] h-[180px] sm:h-[210px] rounded-2xl overflow-hidden shadow-xl border-4 border-white top-10 left-4 sm:left-0 z-15 transform rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                <img loading="lazy"
                  src={pillarImg1}
                  alt="Plat signature"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image (Vertical Chef action) */}
              <div className="absolute w-[180px] sm:w-[220px] h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bottom-6 right-4 sm:right-0 z-20 transform rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                <img loading="lazy"
                  src={pillarImg2}
                  alt="Chef en action"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Right Column Arguments (2 features) */}
            <div className="lg:col-span-4 space-y-16">
              
              {/* Pillar 3 */}
              <div className="space-y-3">
                <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block">
                  03 . Rythme Saisonnier
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                  Une carte vivante, rythmée par les saisons
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  L'expérience sensorielle. Des plats revisités régulièrement qui célèbrent le meilleur de la nature sauvage à chaque saison.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="space-y-3">
                <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block">
                  04 . Art de Vivre
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                  L'art de vous recevoir
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  Bénéfice utilisateur. Un service attentionné, chaleureux et sur-mesure dans un cadre élégant conçu pour la détente absolue.
                </p>
              </div>

            </div>

          </div>

          {/* CRO - Centered Call To Action */}
          <div className="mt-20 text-center">
            <button
              onClick={handleScrollToBooking}
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-neutral-950/20 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Réserver une table</span>
            </button>
            <p className="text-neutral-400 text-[11px] font-sans mt-3">
              Réservation immédiate et confirmation par e-mail en quelques secondes
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
