import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";

export default function Card({ children, className = "" }) {
  const { theme } = useTheme();
  return (
    <div className={`${theme.cardBg} rounded-2xl p-7 transition-all duration-200 ${theme.cardHover} ${className}`}>
      {children}
    </div>
  );
}
