import { useState } from "react";
import { newsItems } from "../../data";
import { Calendar, BookOpen, Clock, ChevronRight } from "lucide-react";
import { NewsItem } from "../../types";

export default function LatestNews() {
  const [activeNews, setActiveNews] = useState<NewsItem>(newsItems[0]);

  const renderArticleDetail = (article: NewsItem) => (
    <div className="bg-white rounded-3xl overflow-hidden border border-neutral-150/80 shadow-md flex flex-col h-full lg:min-h-[500px]">
      {/* Header Cover Image */}
      <div className="h-56 relative bg-neutral-100 overflow-hidden shrink-0">
        <img loading="lazy"
          key={article.id}
          src={article.image}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-6 bg-amber-500 text-neutral-950 font-sans text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {article.category}
        </span>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
        <div>
          {/* Meta Details */}
          <div className="flex items-center space-x-3 text-neutral-400 text-xs font-sans mb-3">
            <span className="flex items-center space-x-1.5">
              <Calendar size={13} className="text-amber-500" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <Clock size={13} className="text-amber-500" />
              <span>Lecture : 3 min</span>
            </span>
          </div>

          <h3 key={`title-${article.id}`} className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight leading-tight animate-in slide-in-from-bottom-2 duration-300">
            {article.title}
          </h3>
          
          <div key={`body-${article.id}`} className="space-y-4 text-neutral-600 font-sans text-sm font-light leading-relaxed animate-in fade-in duration-500">
            <p className="font-medium text-neutral-800 text-base">
              {article.description}
            </p>
            <p>
              Chez El gusto, nous mettons un point d'honneur à réinventer sans cesse les plaisirs de la table tout en préservant l'authenticité de nos produits de caractère. Chaque saison est l'opportunité d'imaginer des créations inspirées et d'unir nos forces aux petits maraîchers locaux pour vous faire vivre une véritable dégustation d'auteur.
            </p>
            <p className="italic text-neutral-500 text-xs border-l-2 border-amber-500 pl-3 py-1 bg-neutral-50 rounded-r-lg">
              Suivez nos publications régulières pour de futurs partages de recettes, des invitations prioritaires à nos soirées privées et des secrets de nos chefs !
            </p>
          </div>
        </div>

        {/* Footer read completion indicator */}
        <div className="border-t border-neutral-150 pt-5 mt-6 flex items-center justify-between text-neutral-400 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping" />
            <span className="font-sans font-medium text-neutral-500">Lecture en cours</span>
          </div>
          <span className="font-sans font-semibold text-amber-600 flex items-center space-x-1 uppercase tracking-wider text-[10px]">
            <span>Chronique El gusto</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="blog" className="py-20 bg-neutral-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 font-sans text-sm font-semibold tracking-wider uppercase block mb-3">
            Actualités &amp; Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            Les Événements &amp; Coulisses
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: 3 News Lists */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {newsItems.map((item) => {
                const isActive = activeNews.id === item.id;
                return (
                  <div key={item.id} className="flex flex-col">
                    <div
                      onClick={() => setActiveNews(item)}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex gap-5 cursor-pointer group ${
                      isActive
                        ? "bg-amber-500/10 border-amber-500/50 shadow-md ring-1 ring-amber-500/20"
                        : "bg-white border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200"
                    }`}
                  >
                    {/* Image on left */}
                    <div className="w-24 h-24 sm:w-28 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-neutral-100">
                      <img loading="lazy"
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        {/* Date and Category bar */}
                        <div className="flex items-center space-x-2 text-neutral-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                          <span className="flex items-center space-x-1">
                            <Calendar size={10} className="text-amber-500" />
                            <span>{item.date}</span>
                          </span>
                          <span>•</span>
                          <span className="text-amber-600">{item.category}</span>
                        </div>

                        <h3 className={`font-serif text-base font-bold transition-colors mb-1 leading-snug line-clamp-1 ${
                          isActive ? "text-amber-600" : "text-neutral-900 group-hover:text-amber-600"
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-neutral-500 text-[11px] font-sans font-light leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <span className="text-amber-600 font-sans text-[11px] font-semibold flex items-center space-x-1 mt-2">
                        <span>Lire l'article</span>
                        <ChevronRight size={11} />
                      </span>
                    </div>
                    </div>
                    {/* Mobile details (Accordion) */}
                    {isActive && (
                      <div className="mt-4 lg:hidden animate-in slide-in-from-top-4 fade-in duration-300">
                        {renderArticleDetail(item)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom info banner card */}
            <div className="bg-neutral-950 text-white p-6 rounded-2xl border border-neutral-900 shadow-sm mt-4">
              <span className="text-amber-500 font-mono text-[9px] font-bold uppercase tracking-widest block mb-2">
                Coulisses de cuisine
              </span>
              <h4 className="font-serif text-lg font-bold mb-2">Au cœur de El gusto</h4>
              <p className="text-neutral-400 text-xs font-sans font-light leading-relaxed">
                Nos portes vous sont grandes ouvertes. Sélectionnez l'un de nos sujets à gauche pour explorer les secrets de nos chefs et les coulisses de notre table d'exception.
              </p>
            </div>
          </div>
          
          {/* Right Column: Dynamic Article Details Pane */}
          <div className="hidden lg:block lg:col-span-7">
            {renderArticleDetail(activeNews)}
          </div>

        </div>
      </div>
    </section>
  );
}
