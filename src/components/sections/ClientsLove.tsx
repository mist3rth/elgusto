import { motion } from "motion/react";
import { Star } from "lucide-react";
import ReviewItems from "../ui/ReviewItems";
// @ts-ignore
import whyChooseUsBg from "../../assets/why-choose-us.webp";

export default function ClientsLove() {
  return (
    <section 
      className="py-24 relative overflow-hidden bg-center bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${whyChooseUsBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-950/80 z-0" />
      {/* Decorative background element */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="flex flex-col justify-start items-start md:w-1/2">
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="text-amber-500 font-sans text-sm font-semibold tracking-wider uppercase block mb-4">
                Témoignages
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
                Ce que disent nos clients
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            >
              <p className="font-sans text-lg text-neutral-300 leading-relaxed max-w-md">
                Des mots sincères de nos clients qui partagent leur expérience culinaire et l'atmosphère unique de notre restaurant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
              className="mt-10"
            >
              <div className="flex flex-wrap gap-4">
                {["The Fork", "Le Fooding", "Google Maps"].map((platform) => (
                  <div key={platform} className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 flex flex-col gap-1.5 backdrop-blur-md">
                    <span className="text-white font-serif font-medium text-base tracking-wide">{platform}</span>
                    <div className="flex items-center space-x-2">
                      <div className="flex text-amber-500">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" className="opacity-60" />
                      </div>
                      <span className="text-neutral-400 text-xs font-sans">
                        <strong className="text-neutral-200">4.7</strong>/5 (1500 avis)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Scrolling Content */}
          <div className="md:w-1/2 flex justify-end">
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, amount: 0.2, margin: "50px" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
              className="w-full max-w-lg"
            >
              <ReviewItems />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
