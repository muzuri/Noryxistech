import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import WhyUsPage from "./pages/WhyUsPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ImpressumPage from "./pages/ImpressumPage.jsx";
// import ClientPage from "./pages/ClientPage.jsx";

function Shell() {
  const { theme } = useTheme();
  const [page, setPage] = useState("home");

  let PageComponent;
  if (page === "services") PageComponent = <ServicesPage setPage={setPage} />;
  else if (page === "why") PageComponent = <WhyUsPage setPage={setPage} />;
  // else if (page === "team") PageComponent = <TeamPage />;
  // else if (page === "client") PageComponent = <ClientPage />;
  else if (page === "about") PageComponent = <AboutPage setPage={setPage} />;
  else if (page === "contact") PageComponent = <ContactPage />;
  else if (page === "impressum") PageComponent = <ImpressumPage />;
  else PageComponent = <HomePage setPage={setPage} />;

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme.page}`}>
      <Header page={page} setPage={setPage} />
      <main key={page}>{PageComponent}</main>
      <Footer setPage={setPage} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Shell />
      </LanguageProvider>
    </ThemeProvider>
  );
}
