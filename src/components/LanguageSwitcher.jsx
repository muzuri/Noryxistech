import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang, LANGS } from "../context/LanguageContext.jsx";

export default function LanguageSwitcher({ className = "" }) {
  const { theme } = useTheme();
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center rounded-lg border ${theme.borderStrong} p-0.5 font-mono text-xs ${className}`}>
      {LANGS.map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-current={lang === code ? "true" : undefined}
          className={`px-2 py-1.5 rounded-md transition-colors ${
            lang === code ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-gray-950 font-semibold" : `${theme.muted} hover:text-cyan-500`
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
