import React from "react";
import {
  Code2,
  Zap,
  Sparkles,
  Landmark,
  Users,
  Smartphone,
  CreditCard,
  Link2,
  LifeBuoy,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import PrimaryButton from "../components/ui/PrimaryButton.jsx";
import GhostButton from "../components/ui/GhostButton.jsx";
import CtaBand from "../components/ui/CtaBand.jsx";
import TerminalDemo from "../components/TerminalDemo.jsx";

export const SERVICE_ICONS = [Code2, Zap, Sparkles, Landmark, Users, Smartphone, CreditCard, Link2, LifeBuoy, Handshake];

export default function HomePage({ setPage }) {
  const { theme } = useTheme();
  const { t } = useLang();

  return (
    <>
      <Section className="grid md:grid-cols-2 gap-14 items-center pt-16 pb-14">
        <div>
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="font-sans text-4xl md:text-6xl font-bold mb-5" style={{ lineHeight: 1.05 }}>
            {t.hero.title1}
            <br />
            {t.hero.title2}{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">{t.hero.titleGradient}</span>
          </h1>
          <p className={`text-lg max-w-md mb-7 ${theme.muted}`}>{t.hero.lead}</p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton onClick={() => setPage("contact")}>
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </PrimaryButton>
            <GhostButton onClick={() => setPage("services")}>{t.hero.ctaGhost}</GhostButton>
          </div>
        </div>
        <TerminalDemo />
      </Section>

      <Section className="pt-0 pb-14">
        <Reveal>
          <p className="text-center max-w-2xl mx-auto text-xl md:text-2xl font-medium">{t.missionStrip.text}</p>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal className="max-w-xl mb-10">
          <Eyebrow>{t.audienceSection.eyebrow}</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{t.audienceSection.title}</h2>
          <p className={theme.muted}>{t.audienceSection.subtitle}</p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {t.audienceSection.items.map((a) => (
            <Reveal key={a.title}>
              <Card>
                <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
                <p className={`text-sm ${theme.muted}`}>{a.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-xl mb-12">
          <Eyebrow>{t.servicesSection.eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.servicesSection.title}</h2>
          <p className={theme.muted}>{t.servicesSection.subtitle}</p>
        </Reveal>
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

      <Section>
        <Reveal>
          <Card className="p-10">
            <span className={`font-mono text-xs ${theme.cyanText} block mb-4`}>{t.valuesSection.eyebrow}</span>
            <h2 className="text-xl md:text-2xl font-bold mb-6">{t.valuesSection.title}</h2>
            <div className="flex flex-wrap gap-2.5">
              {t.valuesSection.values.map((v) => (
                <span key={v} className={`font-mono text-xs px-3 py-1.5 rounded-full border ${theme.border} ${theme.muted}`}>
                  {v}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CtaBand eyebrow={t.homeCta.eyebrow} title={t.homeCta.title} sub={t.homeCta.sub} onClick={() => setPage("contact")} label={t.homeCta.label} />
        </Reveal>
      </Section>
    </>
  );
}
