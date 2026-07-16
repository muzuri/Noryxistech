import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Eyebrow from "./Eyebrow.jsx";
import PrimaryButton from "./PrimaryButton.jsx";
import { ArrowRight } from "lucide-react";

export default function CtaBand({ eyebrow, title, sub, onClick, label }) {
  const { theme } = useTheme();
  return (
    <div className={`relative overflow-hidden rounded-2xl ${theme.ctaBg} px-8 py-14 text-center`}>
      <div className={`absolute -inset-x-10 -top-24 h-56 bg-gradient-to-r from-violet-500 to-cyan-400 blur-3xl ${theme.ctaGlow}`} />
      <div className="relative">
        <Eyebrow center>{eyebrow}</Eyebrow>
        <h2 className="text-2xl md:text-3xl font-bold max-w-md mx-auto mb-2">{title}</h2>
        {sub && <p className={`mb-6 ${theme.muted}`}>{sub}</p>}
        <PrimaryButton onClick={onClick} className="mx-auto">
          {label} <ArrowRight size={16} />
        </PrimaryButton>
      </div>
    </div>
  );
}
