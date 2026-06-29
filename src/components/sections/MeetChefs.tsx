import { chefs } from "../../data";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function MeetChefs() {
  return (
    <section id="chefs" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 font-sans text-sm font-semibold tracking-wider uppercase block mb-3">
            Rencontrez nos Chefs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            Les Maîtres Artisans de vos Assiettes
          </h2>
        </div>

        {/* 4 Chefs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center p-5 relative"
            >
              {/* Avatar circle */}
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-neutral-50 shadow-inner mb-6 relative">
                <img loading="lazy"
                  src={chef.image}
                  alt={chef.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Chef Name & Role */}
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                {chef.name}
              </h3>
              <p className="text-neutral-400 text-xs font-sans font-semibold tracking-wider uppercase mb-6">
                {chef.role}
              </p>

              {/* Hoverable / Static Social Icons */}
              <div className="flex space-x-2.5 mt-auto">
                <a
                  href={chef.socials.facebook}
                  className="w-8 h-8 rounded-full bg-neutral-50 hover:bg-amber-500 hover:text-neutral-950 text-neutral-400 flex items-center justify-center transition-all border border-neutral-100"
                  aria-label={`${chef.name} Facebook`}
                >
                  <Facebook size={14} className="fill-current" />
                </a>
                <a
                  href={chef.socials.twitter}
                  className="w-8 h-8 rounded-full bg-neutral-50 hover:bg-amber-500 hover:text-neutral-950 text-neutral-400 flex items-center justify-center transition-all border border-neutral-100"
                  aria-label={`${chef.name} Twitter`}
                >
                  <Twitter size={14} className="fill-current" />
                </a>
                <a
                  href={chef.socials.instagram}
                  className="w-8 h-8 rounded-full bg-neutral-50 hover:bg-amber-500 hover:text-neutral-950 text-neutral-400 flex items-center justify-center transition-all border border-neutral-100"
                  aria-label={`${chef.name} Instagram`}
                >
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
