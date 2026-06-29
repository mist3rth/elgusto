import React, { useState } from "react";
import { galleryPhotos } from "../../data";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev! - 1));
    }
  };

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev! + 1));
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    goPrev();
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNext();
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-600 font-sans text-sm font-semibold tracking-wider uppercase block mb-3">
              Galerie
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
              Un plaisir pour les yeux
            </h2>
          </div>
          <button
            onClick={() => openLightbox(0)}
            className="mt-4 md:mt-0 bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md self-start md:self-end cursor-pointer"
          >
            Ouvrir la Galerie
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((url, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-sm hover:shadow-lg group cursor-pointer border border-neutral-100 bg-neutral-50"
            >
              {/* Image */}
              <img loading="lazy"
                src={url}
                alt={`El gusto Dish & Vibe ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Overlay with Icon */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/95 text-neutral-950 p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-neutral-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-amber-400 bg-white/10 hover:bg-white/25 p-2 rounded-full transition-colors cursor-pointer z-[60]"
              aria-label="Fermer la galerie"
            >
              <X size={24} />
            </button>

            {/* Nav arrows */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-6 text-white hover:text-amber-400 bg-white/10 hover:bg-white/25 p-2 rounded-full transition-colors cursor-pointer z-[60]"
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-4 sm:right-6 text-white hover:text-amber-400 bg-white/10 hover:bg-white/25 p-2 rounded-full transition-colors cursor-pointer z-[60]"
              aria-label="Image suivante"
            >
              <ChevronRight size={24} />
            </button>

            {/* Central image */}
            <div className="w-full max-w-4xl h-[80vh] flex items-center justify-center relative rounded-2xl overflow-hidden">
              <AnimatePresence mode="popLayout" custom={lightboxIndex}>
                <motion.img loading="lazy"
                  key={lightboxIndex}
                  src={galleryPhotos[lightboxIndex]}
                  alt="El gusto Lightbox Large Showcase"
                  referrerPolicy="no-referrer"
                  className="absolute w-full h-full object-contain cursor-grab active:cursor-grabbing"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x < -50 || velocity.x < -500) {
                      goNext();
                    } else if (offset.x > 50 || velocity.x > 500) {
                      goPrev();
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>
            
            {/* Index indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-neutral-950/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-white z-[60]">
              {lightboxIndex + 1} / {galleryPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
