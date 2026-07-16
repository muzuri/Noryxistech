import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import logoMark from "../assets/logo-mark.png";

export default function Logo({ onClick }) {
  const { theme } = useTheme();
  return (
    <button onClick={onClick} className="flex items-center gap-2.5">
      <img src={logoMark} alt="Noryxis Tech" className="h-8 w-8" />
      <span className="font-mono text-base font-medium">
        Noryxis<span className={theme.cyanText}> Tech</span>
      </span>
    </button>
  );
}
