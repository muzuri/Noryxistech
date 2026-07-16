import React, { createContext, useContext, useState } from "react";
import { TRANSLATIONS } from "../data/translations.js";

export const LANGS = ["en", "fr", "de"];

const LanguageContext = createContext({
  lang: "en",
  t: TRANSLATIONS.en,
  setLang: () => {},
});

// English is the default language.
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = TRANSLATIONS[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
