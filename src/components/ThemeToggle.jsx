import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggle({ className = "" }) {
  const { mode, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`w-9 h-9 flex items-center justify-center rounded-lg border border-current/20 hover:border-cyan-400 transition-colors ${className}`}
    >
      {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
