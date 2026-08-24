import React, { useEffect, useState } from "react";
import { HeartPulse, Building2, ShieldCheck, Stethoscope } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CtaBand from "../components/ui/CtaBand.jsx";

const STAT_ICONS = [Building2, HeartPulse, Stethoscope, ShieldCheck];

function formatCount(value, suffix) {
  if (suffix === "/7") return `${value}/7`;
  return `${value}${suffix}`;
}

export default function ClientPage({ setPage }) {
  const { theme } = useTheme();
  const { t } = useLang();
  const p = t.clientPage;
  const stats = [
    { target: 50, suffix: "+" },
    { target: 2, suffix: "" },
    { target: 24, suffix: "/7" },
    { target: 100, suffix: "%" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    let rafId;
    const start = performance.now();
    const duration = 1400;

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setCounts(stats.map((stat) => Math.round(stat.target * eased)));

      if (progress < 1) {
        rafId = requestAnimationFrame(update);
      }
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [p.title]);

  return (
    <>
      <Section className="pb-6">
        <Reveal>
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mb-4">{p.title}</h1>
          <p className={`max-w-3xl text-lg ${theme.muted}`}>{p.lead}</p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {p.stats.map((stat, index) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            return (
              <Reveal key={stat.label}>
                <Card className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl ${theme.iconChipBg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={22} className={theme.cyanText} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{formatCount(counts[index], stats[index].suffix)}</div>
                  <p className={`text-sm ${theme.muted}`}>{stat.label}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        <Reveal>
          <Card className="p-8">
            <Eyebrow>{p.trustTitle}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{p.trustTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {p.trustItems.map((item) => (
                <div key={item} className={`flex items-start gap-3 rounded-xl border ${theme.border} p-4`}>
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  <span className={theme.muted}>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="p-8">
            <Eyebrow>{p.impactTitle}</Eyebrow>
            <h3 className="text-2xl font-bold mb-4">{p.impactTitle}</h3>
            <p className={theme.muted}>{p.impactBody}</p>
          </Card>
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