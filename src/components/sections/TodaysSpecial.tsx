import { useState } from "react";
import { todaysSpecialMenu } from "../../data";
import { Plus } from "lucide-react";
// @ts-ignore
import menuBg from "../../assets/menu.webp";

interface TodaysSpecialProps {
  onOrderSpecial: (itemName: string, price: number) => void;
}

export default function TodaysSpecial({ onOrderSpecial }: TodaysSpecialProps) {
  const [activeTab, setActiveTab] = useState<"appetizers" | "mains" | "desserts">("appetizers");

  const menuList = todaysSpecialMenu[activeTab];

  const tabs = [
    { id: "appetizers", name: "Entrées" },
    { id: "mains", name: "Plats" },
    { id: "desserts", name: "Desserts" },
  ] as const;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main curved dark olive-green banner container */}
        <div className="bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-emerald-900 relative p-4 sm:p-8 lg:p-16 w-full">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img loading="lazy"
              src={menuBg}
              alt="Menu Background"
              className="w-full h-full object-cover object-center opacity-100 select-none pointer-events-none"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-transparent pointer-events-none" />
          </div>

          {/* Decorative background circle */}
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-emerald-900/40 blur-2xl pointer-events-none z-10" />

          {/* Left / Center content: Headlines, Tabs & List */}
          <div className="flex flex-col justify-center relative z-10 w-full lg:max-w-[50%] p-5 sm:p-8 md:p-10 rounded-2xl border border-white/30 bg-emerald-950/70 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div>
                <span className="text-amber-400 font-sans text-xs font-semibold tracking-wider uppercase block mb-1">
                  La Suggestion du Chef
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                  Notre Ardoise du Jour
                </h2>
              </div>
              {/* 20% Off Ribbon Badge moved here next to the text */}
              <div className="animate-badge-float shrink-0">
                <div className="bg-amber-500 text-neutral-950 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-emerald-950 transform -rotate-12 hover:-rotate-6 hover:scale-110 transition-all duration-500 ease-out cursor-default">
                  <span className="font-sans text-[10px] uppercase font-bold tracking-wider leading-none">Offre</span>
                  <span className="font-sans text-lg font-extrabold leading-none my-0.5">-20%</span>
                  <span className="font-sans text-[8px] uppercase font-bold tracking-wider leading-none">Déduits</span>
                </div>
              </div>
            </div>

            {/* Menu Tabs */}
            <div className="flex flex-wrap gap-2.5 mb-10 border-b border-emerald-900/60 pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-serif text-sm font-semibold py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-amber-500 text-neutral-950 shadow-md"
                      : "text-neutral-300 hover:text-white hover:bg-emerald-900/50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Interactive Dotted List of Items */}
            <div className="space-y-6 min-h-[320px] sm:min-h-0">
              {menuList.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onOrderSpecial(item.name, item.price)}
                  className="group cursor-pointer hover:bg-emerald-900/20 p-2.5 -m-2.5 rounded-xl transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-0">
                    <span className="font-serif text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </span>
                    <span className="hidden sm:block flex-grow mx-4 border-b border-dotted border-emerald-800/80 self-center" />
                    <div className="self-start sm:self-auto flex items-center gap-2 bg-emerald-900/40 group-hover:bg-amber-500 text-amber-400 group-hover:text-neutral-950 px-2.5 py-1 rounded-lg transition-colors shrink-0 border border-emerald-800 group-hover:border-amber-500 shadow-sm">
                      <span className="font-mono text-base font-bold">
                        {item.price.toFixed(2)} €
                      </span>
                      <div className="bg-amber-500/20 group-hover:bg-neutral-950/10 p-0.5 rounded-md">
                        <Plus size={16} className="transition-transform group-hover:rotate-90" />
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs font-sans font-light mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
