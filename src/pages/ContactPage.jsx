import React, { useState } from "react";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LanguageContext.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/ui/Section.jsx";
import Reveal from "../components/ui/Reveal.jsx";

const INFO_ICONS = [Mail, MapPin, Globe];

export default function ContactPage() {
  const { theme } = useTheme();
  const { t } = useLang();
  const p = t.contactPage;

  const [form, setForm] = useState({ name: "", email: "", service: p.form.serviceOptions[0], message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const fieldClass = `w-full ${theme.inputBg} rounded-lg px-4 py-3 text-sm ${theme.placeholder} focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400`;

  return (
    <>
      <Section className="pb-6">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl mb-4">{p.title}</h1>
        <p className={`max-w-xl text-lg ${theme.muted}`}>{p.lead}</p>
      </Section>

      <Section className="grid md:grid-cols-2 gap-12">
        <Reveal>
          {sent ? (
            <Card>
              <h3 className="text-lg font-semibold mb-2">{p.sentTitle}</h3>
              <p className={`text-sm ${theme.muted}`}>{p.sentBody(form.name || "—", form.email || "—")}</p>
            </Card>
          ) : (
            <form onSubmit={submit}>
              <div className="mb-5">
                <label className={`block font-mono text-xs mb-2 ${theme.muted}`}>{p.form.name}</label>
                <input value={form.name} onChange={update("name")} type="text" placeholder={p.form.namePlaceholder} required className={fieldClass} />
              </div>
              <div className="mb-5">
                <label className={`block font-mono text-xs mb-2 ${theme.muted}`}>{p.form.email}</label>
                <input value={form.email} onChange={update("email")} type="email" placeholder={p.form.emailPlaceholder} required className={fieldClass} />
              </div>
              <div className="mb-5">
                <label className={`block font-mono text-xs mb-2 ${theme.muted}`}>{p.form.serviceLabel}</label>
                <select value={form.service} onChange={update("service")} className={fieldClass}>
                  {p.form.serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className={`block font-mono text-xs mb-2 ${theme.muted}`}>{p.form.messageLabel}</label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  placeholder={p.form.messagePlaceholder}
                  required
                  rows={4}
                  className={`${fieldClass} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="w-full justify-center inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-violet-500 to-cyan-400 text-gray-950"
              >
                {p.form.submit} <ArrowRight size={16} />
              </button>
            </form>
          )}
        </Reveal>

        <Reveal>
          <h2 className="text-2xl font-bold mb-4">{p.otherWaysTitle}</h2>
          <ul className={`divide-y ${theme.divide} border-t ${theme.border}`}>
            {p.info.map((row, i) => {
              const Icon = INFO_ICONS[i];
              return (
                <li key={row.k} className="flex items-center gap-3 py-4 text-sm">
                  <Icon size={16} className={theme.cyanText} />
                  <span className={`font-mono text-xs w-24 shrink-0 ${theme.muted}`}>{row.k}</span>
                  <span>{row.v}</span>
                </li>
              );
            })}
          </ul>
          <p className={`text-sm mt-6 ${theme.muted}`}>{p.note}</p>
        </Reveal>
      </Section>
    </>
  );
}
