import { useState } from "react";
import { Check, X } from "lucide-react";
// @ts-ignore
import storyImg1 from "../../assets/story-1.webp";
// @ts-ignore
import storyImg2 from "../../assets/story-2.webp";
// @ts-ignore
import storyImg3 from "../../assets/story-3.webp";

export default function OurStory() {
  const bullets = [
    { title: "Produits de notre Terroir", desc: "Légumes biologiques cueillis à la main et produits de la mer livrés frais chaque matin." },
    { title: "Engagement Éco-responsable", desc: "Cuisine anti-gaspillage, réduction des déchets et soutien direct aux petits producteurs locaux." },
    { title: "Une Table Reconnue", desc: "Élu coup de cœur gastronomique de la région et récompensé par des distinctions d'excellence." },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story text */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-amber-600 font-sans text-sm font-semibold tracking-wider uppercase block mb-3">
                Notre Histoire
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
                L'art du goût, <br />
                <span className="text-amber-600 italic font-light">Le plaisir de se retrouver</span>
              </h2>
            </div>

            <p className="text-neutral-600 text-base font-sans font-light leading-relaxed">
              Chez El gusto, nous sommes convaincus que la cuisine va bien au-delà de la simple nutrition : c'est un art à part entière, une aventure sensorielle et une invitation au partage. Fondé en 2018, notre restaurant est né d'une vision simple et passionnée : proposer une cuisine sincère, savoureuse, <strong className="font-bold text-amber-600">entièrement fait maison</strong> et préparée avec le plus grand respect du produit.
            </p>

            <p className="text-neutral-500 text-sm font-sans font-light leading-relaxed">
              Chaque création raconte l'histoire de nos terroirs, mêlant recettes traditionnelles revisitées et exigence d'une qualité absolue.
            </p>

            {/* Bullet List */}
            <div className="space-y-4 pt-2">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3.5 group">
                  <div className="bg-amber-500/10 text-amber-600 p-1 rounded-full shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-neutral-900">{bullet.title}</h3>
                    <p className="text-neutral-500 text-xs font-sans font-light">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Beautiful staggered image layout */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            {/* Background absolute graphic element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-amber-500/20 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-amber-500/20 rounded-br-2xl pointer-events-none" />

            {/* Image 1: Tall / Portrait */}
            <div className="col-span-7 h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <img loading="lazy"
                src={storyImg1}
                alt="El gusto Dining Area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Images stacked vertically on the right */}
            <div className="col-span-5 flex flex-col gap-4">
              {/* Image 2 */}
              <div className="h-[165px] sm:h-[215px] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
                <img loading="lazy"
                  src={storyImg2}
                  alt="Our Chefs Cooking"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Image 3 */}
              <div className="h-[165px] sm:h-[215px] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
                <img loading="lazy"
                  src={storyImg3}
                  alt="Gourmet Plated Salmon"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
