import React, { createContext, useContext, useState } from "react";
import { THEMES } from "../data/theme.js";

const ThemeContext = createContext({
  mode: "dark",
  theme: THEMES.dark,
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const theme = THEMES[mode];
  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
