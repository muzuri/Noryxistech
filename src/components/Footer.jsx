import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Logo from "./Logo.jsx";

const SHOW_IMPRESSUM = false;

export default function Footer({ setPage }) {
  const { theme } = useTheme();
  const { t } = useLang();

  const go = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const items = [
    { id: "services", label: t.nav.services },
    { id: "why", label: t.nav.why },
    //{ id: "client", label: t.nav.client },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className={`border-t ${theme.border} mt-10`}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          <div>
            <Logo onClick={() => go("home")} />
            <p className={`max-w-xs mt-3 text-sm ${theme.muted}`}>{t.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-7 text-sm">
            {items.map((item) => (
              <button key={item.id} onClick={() => go(item.id)} className={`${theme.muted} hover:text-cyan-500`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className={`pt-6 border-t ${theme.border} flex flex-wrap items-center justify-between gap-3 font-mono text-xs ${theme.muted}`}>
          <div className="flex flex-wrap items-center gap-4">
            <span>{t.footer.copyright}</span>
            {SHOW_IMPRESSUM && (
              <button onClick={() => go("impressum")} className="underline decoration-dotted underline-offset-4 hover:text-cyan-500">
                {t.nav.impressum}
              </button>
            )}
          </div>
          <span>{t.footer.tagline2}</span>
        </div>
      </div>
    </footer>
  );
}
