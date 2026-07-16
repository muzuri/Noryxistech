import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";

export default function GhostButton({ children, onClick, className = "" }) {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border ${theme.borderStrong} hover:border-cyan-400 transition-colors duration-150 ${className}`}
    >
      {children}
    </button>
  );
}
