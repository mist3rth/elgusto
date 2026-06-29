import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setShow(window.scrollY > 400);
      }, 50); // Basic throttle
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="p-3.5 flex items-center justify-center bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 rounded-full shadow-2xl border border-neutral-800 transition-all cursor-pointer hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
