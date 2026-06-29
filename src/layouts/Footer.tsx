import React, { useState } from "react";
import { Mail, Check, Facebook, Twitter, Instagram, Youtube, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase().includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const links = [
    { name: "Accueil", id: "home" },
    { name: "À Propos", id: "philosophy" },
    { name: "Carte", id: "menu" },
    { name: "Nos Chefs", id: "chefs" },
    { name: "Galerie", id: "gallery" },
    { name: "Offres", id: "offers" },
    { name: "Actualités", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Col 1: BiteCraft brand info (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center space-x-2 cursor-pointer group w-max"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-neutral-950 font-bold text-lg group-hover:rotate-12 transition-transform">
                E
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                El <span className="text-amber-500 font-sans font-normal text-xl">gusto</span>
              </span>
            </div>

            <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed max-w-sm">
              Une table d'exception au cœur de Paris, mariant la fraîcheur absolue des produits maraîchers locaux au savoir-faire passionné de nos chefs pour des moments d'une qualité inégalée.
            </p>

            {/* Social icons */}
            <div className="flex space-x-3.5 pt-2">
              <a href="#" aria-label="Notre page Facebook" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Notre compte Twitter" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Notre page Instagram" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Notre chaîne Youtube" className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 rounded-xl text-neutral-400 border border-neutral-800 transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-serif text-lg font-bold text-neutral-200">Liens Rapides</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {links.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-neutral-400 hover:text-amber-500 font-sans font-light transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours (Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-serif text-lg font-bold text-neutral-200">Horaires</h3>
            <div className="text-neutral-400 text-sm space-y-3 font-sans font-light">
              <div>
                <span className="font-semibold text-neutral-200 block">Lundi - Vendredi :</span>
                <span>10h00 - 23h00</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-200 block">Samedi - Dimanche :</span>
                <span>9h00 - Minuit</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter (Span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-serif text-lg font-bold text-neutral-200">Newsletter</h3>
            <p className="text-neutral-400 text-xs font-sans font-light leading-relaxed">
              Inscrivez-vous pour recevoir en priorité les suggestions de nos chefs, des invitations exclusives et des privilèges de fidélité.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-900 text-emerald-400 text-xs py-3 px-4 rounded-xl flex items-center space-x-2.5">
                <Check size={16} />
                <span>Inscription validée !</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none rounded-xl px-4 py-2.5 text-xs text-white transition-all font-sans"
                  aria-label="Adresse e-mail pour la newsletter"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md w-full sm:w-auto cursor-pointer"
                >
                  S'abonner
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© 2026 Restaurant El gusto. Tous droits réservés.</p>
            <span className="hidden sm:inline">•</span>
            <p>Made by <a href="https://mist3rth.github.io/presentMe/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 hover:underline transition-all">T.THIESSON</a></p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
            <a href="#" className="hover:text-amber-500 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Conditions Générales</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
