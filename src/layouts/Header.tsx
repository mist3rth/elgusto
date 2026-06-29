import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, MapPin, ShoppingBag, Award, CalendarDays } from "lucide-react";

interface HeaderProps {
  onBookClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onBookClick, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Accueil", id: "home" },
    { name: "À Propos", id: "philosophy" },
    { name: "Carte", id: "menu" },
    { name: "Nos Chefs", id: "chefs" },
    { name: "Galerie", id: "gallery" },
    { name: "Offres", id: "offers" },
    { name: "Actualités", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/95 backdrop-blur-md shadow-lg border-b border-neutral-800/50"
          : "bg-transparent"
      }`}>
      {/* Top Info Bar - Hidden on mobile, transparent/dark background */}
      <div className={`bg-neutral-950 text-neutral-400 text-xs px-4 hidden md:block transition-all duration-300 overflow-hidden ${
        isScrolled ? "max-h-0 py-0 border-b-0 opacity-0" : "max-h-10 py-2 border-b border-neutral-800 opacity-100"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 hover:text-amber-500 transition-colors">
              <Phone size={13} className="text-amber-500" />
              <span>Service &amp; Livraison : 01 45 67 89 10</span>
            </span>
            <span className="flex items-center space-x-1.5 hover:text-amber-500 transition-colors">
              <ShoppingBag size={13} className="text-amber-500" />
              <span>Click &amp; Collect disponible</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock size={13} className="text-amber-500" />
              <span>Lun - Ven : 10h00 - 23h00 | Sam - Dim : 9h00 - Minuit</span>
            </span>
          </div>
          <span className="flex items-center space-x-1.5 hover:text-amber-500 transition-colors cursor-pointer">
            <MapPin size={13} className="text-amber-500" />
            <span>123 Rue de la Gastronomie, 75001 Paris</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full py-4 px-4 sm:px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => handleItemClick("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-neutral-950 font-bold text-lg group-hover:rotate-12 transition-transform">
              E
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
              El <span className="text-amber-500 font-sans font-normal text-lg sm:text-xl">gusto</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-neutral-300 hover:text-amber-500 font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Book Table Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onBookClick}
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans text-sm font-semibold p-2.5 sm:px-5 sm:py-2.5 rounded transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
              aria-label="Réserver une table"
            >
              <CalendarDays size={20} className="sm:hidden" />
              <span className="hidden sm:inline">Réserver une table</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-neutral-950 flex flex-col pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-300 overflow-y-auto">
          <div className="absolute top-4 left-4 sm:left-6 flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-neutral-950 font-bold text-lg">
              E
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
              El <span className="text-amber-500 font-sans font-normal text-lg sm:text-xl">gusto</span>
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 sm:right-6 text-white p-2 hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col space-y-6 text-center mt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-neutral-300 hover:text-amber-500 font-sans text-xl font-medium tracking-wider transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-8 flex flex-col space-y-4 items-center">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full max-w-xs bg-amber-500 hover:bg-amber-600 text-neutral-950 font-sans text-base font-semibold py-3 rounded transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <CalendarDays size={18} />
                <span>Réserver une table</span>
              </button>
              <div className="text-neutral-500 text-xs text-center space-y-1 pt-4">
                <p>01 45 67 89 10</p>
                <p>123 Rue de la Gastronomie, Paris</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
