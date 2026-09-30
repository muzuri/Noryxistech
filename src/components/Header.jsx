import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Header({ page, setPage }) {
  const { theme } = useTheme();
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const items = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "why", label: t.nav.why },
    // { id: "client", label: t.nav.client },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md ${theme.headerBg}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo onClick={() => go("home")} />

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`w-9 h-9 flex items-center justify-center border ${theme.borderStrong} rounded-lg`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <div className="hidden xl:flex items-center gap-6 text-sm">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative pb-1 transition-colors ${page === item.id ? theme.navActive : theme.navInactive}`}
            >
              {item.label}
              {page === item.id && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-gradient-to-r from-violet-500 to-cyan-400" />
              )}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="font-mono text-xs px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-gray-950 font-semibold whitespace-nowrap"
          >
            {t.nav.startProject}
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>

      {menuOpen && (
        <div className={`xl:hidden ${theme.mobileMenuBg} px-6 py-4 flex flex-col gap-1`}>
          {items.map((item) => (
            <button key={item.id} onClick={() => go(item.id)} className={`text-left py-3 text-sm ${page === item.id ? theme.navActive : theme.muted}`}>
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="mt-2 font-mono text-xs px-4 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-gray-950 font-semibold text-center"
          >
            {t.nav.startProject}
          </button>
        </div>
      )}
    </header>
  );
}
