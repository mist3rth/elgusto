import { motion } from "motion/react";
import { Truck, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
// @ts-ignore
import heroBg from "../../assets/hero-bg.webp";

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onBookClick, onExploreClick }: HeroProps) {
  return (
    <section id="home" className="relative bg-neutral-950 text-white pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img fetchPriority="high"
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover object-[25%_center] sm:object-center opacity-80 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-neutral-950/30 to-neutral-950/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950/80" />
      </div>

      {/* Decorative radial gradients for luxury atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center space-y-6 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold font-serif leading-tight text-white tracking-tight"
          >
            <span className="text-amber-400 italic block font-light mb-1">Cuisine d'exception</span>
            Faite avec amour &amp; passion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-xl max-w-2xl font-sans font-light leading-relaxed"
          >
            Des ingrédients frais de premier choix, des chefs de grand talent et une atmosphère chaleureuse s'unissent pour créer des souvenirs culinaires tout simplement inoubliables.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto"
          >
            <button
              onClick={onBookClick}
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded transition-all shadow-lg shadow-amber-500/20 text-center cursor-pointer w-full sm:w-auto"
            >
              Réserver une table
            </button>
            <button
              onClick={onExploreClick}
              className="border border-neutral-700 hover:border-amber-500 hover:text-amber-500 text-neutral-200 font-sans font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded flex items-center justify-center space-x-2 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Découvrir la carte</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Feature Cards Bar */}
        <div className="mt-16 md:mt-24 border-t border-neutral-900 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-neutral-900/30 border border-neutral-900/50 hover:border-amber-500/20 transition-colors">
              <div className="bg-amber-500/10 p-3.5 rounded-lg text-amber-500 shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-white mb-1">Livraison Gratuite</h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Dès 50 € d'achat. Transport rapide et ultra-frais garanti.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-neutral-900/30 border border-neutral-900/50 hover:border-amber-500/20 transition-colors">
              <div className="bg-amber-500/10 p-3.5 rounded-lg text-amber-500 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-white mb-1">Fraîcheur Absolue</h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Des ingrédients soigneusement sélectionnés chaque matin auprès de fermes biologiques.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-neutral-900/30 border border-neutral-900/50 hover:border-amber-500/20 transition-colors">
              <div className="bg-amber-500/10 p-3.5 rounded-lg text-amber-500 shrink-0">
                <Headphones size={24} />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-white mb-1">À votre service</h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Notre équipe est à votre écoute pour organiser vos repas de famille ou événements sur-mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
