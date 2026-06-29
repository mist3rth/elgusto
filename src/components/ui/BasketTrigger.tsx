import React from "react";
import { ShoppingBag } from "lucide-react";

interface BasketTriggerProps {
  count: number;
  onClick: () => void;
}

export default function BasketTrigger({ count, onClick }: BasketTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="relative p-4 bg-amber-500 hover:bg-amber-600 text-neutral-950 rounded-full shadow-2xl transition-all transform hover:scale-105 cursor-pointer hover:-translate-y-1"
      aria-label="Open order basket"
    >
      <ShoppingBag size={22} className="stroke-[2.5]" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-neutral-950 text-amber-400 font-mono text-[10px] font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-amber-500">
          {count}
        </span>
      )}
    </button>
  );
}
