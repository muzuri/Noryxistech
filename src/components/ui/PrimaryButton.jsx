import React from "react";

export default function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-violet-500 to-cyan-400 text-gray-950 hover:-translate-y-0.5 transition-transform duration-150 ${className}`}
    >
      {children}
    </button>
  );
}
