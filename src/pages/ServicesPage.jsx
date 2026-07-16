import React from "react";
import { Check } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CtaBand from "../components/ui/CtaBand.jsx";
import { SERVICE_ICONS } from "./HomePage.jsx";

function BulletList({ items, theme }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${theme.iconChipBg}`}>
            <Check size={11} className={theme.cyanText} />
          </span>
          <span className={theme.muted}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage({ setPage }) {
  const { theme } = useTheme();
  const { t } = useLang();
  const p = t.servicesPage;

  return (
    <>
      <Section className="pb-6">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl mb-4">{p.title}</h1>
        <p className={`max-w-xl text-lg ${theme.muted}`}>{p.lead}</p>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <Reveal key={s.title}>
                <Card>
                  <div className={`w-10 h-10 rounded-lg ${theme.iconChipBg} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={theme.cyanText} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className={`text-sm ${theme.muted}`}>{s.desc}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="space-y-14">
        <Reveal>
          <Eyebrow>{p.startups.eyebrow}</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{p.startups.title}</h2>
          <p className={`max-w-3xl ${theme.muted}`}>{p.startups.lead}</p>
        </Reveal>

        <Reveal>
          <Eyebrow>{p.businesses.eyebrow}</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{p.businesses.title}</h2>
          <p className={`max-w-3xl ${theme.muted}`}>{p.businesses.lead}</p>
        </Reveal>

        <Reveal>
          <Eyebrow>{p.government.eyebrow}</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{p.government.title}</h2>
          <p className={`max-w-3xl mb-6 ${theme.muted}`}>{p.government.lead}</p>
          <div className="max-w-xl">
            <BulletList items={p.government.bullets} theme={theme} />
          </div>
          <p className={`mt-6 max-w-3xl text-sm ${theme.muted}`}>{p.government.closing}</p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CtaBand eyebrow={p.cta.eyebrow} title={p.cta.title} onClick={() => setPage("contact")} label={p.cta.label} />
        </Reveal>
      </Section>
    </>
  );
}
