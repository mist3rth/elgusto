import React from "react";

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl border border-neutral-800 text-sm font-sans font-medium flex items-center space-x-3 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-neutral-950 font-bold text-xs">
        ✓
      </div>
      <span>{message}</span>
    </div>
  );
}
