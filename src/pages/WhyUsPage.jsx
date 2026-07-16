import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CtaBand from "../components/ui/CtaBand.jsx";

export default function WhyUsPage({ setPage }) {
  const { theme } = useTheme();
  const { t } = useLang();
  const p = t.whyUsPage;

  return (
    <>
      <Section className="pb-6">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl mb-4">{p.title}</h1>
        <p className={`max-w-xl text-lg ${theme.muted}`}>{p.lead}</p>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.reasons.map((r) => (
            <Reveal key={r.title}>
              <Card>
                <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                <p className={`text-sm ${theme.muted}`}>{r.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <Card className="p-10">
            <Eyebrow>{p.commitmentEyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{p.commitmentTitle}</h2>
            <p className={`max-w-3xl ${theme.muted}`}>{p.commitmentBody}</p>
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
