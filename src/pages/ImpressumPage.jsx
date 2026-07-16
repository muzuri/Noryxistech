import React from "react";
import { AlertTriangle } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import PlaceholderText from "../components/ui/PlaceholderText.jsx";
import { IMPRESSUM_DE } from "../data/translations.js";

export default function ImpressumPage() {
  const { theme } = useTheme();
  const { t } = useLang();
  const p = t.impressumPage;

  return (
    <>
      <Section className="pb-6">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl mb-4">{p.title}</h1>
        {p.germanNote && <p className={`max-w-xl text-sm ${theme.muted}`}>{p.germanNote}</p>}
      </Section>

      <Section className="pt-0">
        <Reveal className="rounded-2xl border border-amber-400/30 bg-amber-400/10 px-6 py-5 flex gap-4 mb-12">
          <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-amber-500 mb-1">{p.warningTitle}</h2>
            <p className={`text-sm ${theme.muted}`}>{p.warningBody}</p>
          </div>
        </Reveal>

        <div className="max-w-2xl space-y-10">
          {IMPRESSUM_DE.sections.map((section) => (
            <Reveal key={section.heading}>
              <h3 className="font-mono text-sm font-semibold mb-2">{section.heading}</h3>
              <div className={`space-y-1 ${theme.muted}`}>
                {section.lines.map((line, i) => (
                  <p key={i} className="italic">
                    <PlaceholderText text={line} />
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
