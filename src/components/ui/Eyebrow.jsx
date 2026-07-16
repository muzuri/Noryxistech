import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";

export default function Eyebrow({ children, center }) {
  const { theme } = useTheme();
  return (
    <span className={`font-mono text-xs ${theme.cyanText} inline-flex items-center gap-2 mb-3 ${center ? "justify-center w-full" : ""}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 10px #22d3ee" }} />
      {children}
    </span>
  );
}
