import React from "react";
import {
  ShieldCheck,
  Lightbulb,
  Award,
  Handshake,
  Leaf,
  Heart,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CtaBand from "../components/ui/CtaBand.jsx";
import logoFull from "../assets/logo-full.png";

// Order matches values: ["Trust", "Innovation", "Quality", "Integrity",
// "Sustainability", "Customer Success", "Professionalism", "Continuous Improvement"]
const VALUE_ICONS = [ShieldCheck, Lightbulb, Award, Handshake, Leaf, Heart, Briefcase, TrendingUp];

export default function AboutPage({ setPage }) {
  const { theme } = useTheme();
  const { t } = useLang();
  const p = t.aboutPage;

  return (
    <>
      <Section className="grid md:grid-cols-2 gap-14 items-center pb-6">
        <Reveal>
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{p.title}</h1>
          <p className={`text-lg ${theme.muted}`}>{p.lead}</p>
        </Reveal>
        <Reveal>
          <Card className="flex items-center justify-center">
            <img src={logoFull} alt="Noryxis Tech — Innovate. Integrate. Elevate." className="w-full max-w-xs h-auto" />
          </Card>
        </Reveal>
      </Section>

      <Section className="grid md:grid-cols-2 gap-10">
        <Reveal>
          <Eyebrow>{p.missionEyebrow}</Eyebrow>
          <h2 className="text-2xl font-bold mb-3">{p.missionTitle}</h2>
          <p className={theme.muted}>{p.missionBody}</p>
        </Reveal>
        <Reveal>
          <Eyebrow>{p.visionEyebrow}</Eyebrow>
          <h2 className="text-2xl font-bold mb-3">{p.visionTitle}</h2>
          <p className={theme.muted}>{p.visionBody}</p>
        </Reveal>
      </Section>

      <Section>
        <Reveal className="mb-10">
          <Eyebrow>{p.valuesEyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold">{p.valuesTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {p.values.map((name, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <Reveal key={name}>
                <Card className="text-center p-6">
                  <div className={`w-10 h-10 rounded-lg ${theme.iconChipBg} flex items-center justify-center mb-3 mx-auto`}>
                    <Icon size={18} className={theme.cyanText} />
                  </div>
                  <h3 className="text-sm font-semibold">{name}</h3>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <Reveal>
          <CtaBand eyebrow={p.cta.eyebrow} title={p.cta.title} sub={p.cta.sub} onClick={() => setPage("contact")} label={p.cta.label} />
        </Reveal>
      </Section>
    </>
  );
}
