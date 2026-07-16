import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { TERMINAL_SCRIPT } from "../data/translations.js";

// Always dark, by design — it's a terminal window, so it stays
// consistent regardless of the site's light/dark theme.
export default function TerminalDemo() {
  const { theme } = useTheme();
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [cursorText, setCursorText] = useState("");
  const runningRef = useRef(false);

  useEffect(() => {
    if (runningRef.current) return;
    runningRef.current = true;
    let cancelled = false;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    async function run() {
      for (const step of TERMINAL_SCRIPT) {
        if (cancelled) return;
        if (step.type === "wait") {
          await sleep(step.ms);
          continue;
        }
        if (step.type === "progress") {
          setProgress(0);
          requestAnimationFrame(() => setProgress(100));
          continue;
        }
        if (step.type === "cmd" || step.type === "muted" || step.type === "ok") {
          setCursorText("");
          for (let i = 0; i < step.text.length; i++) {
            if (cancelled) return;
            setCursorText(step.text.slice(0, i + 1));
            await sleep(step.type === "cmd" ? 22 : 8);
          }
          setLines((prev) => [...prev, { type: step.type, text: step.text }]);
          setCursorText("");
        }
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`rounded-2xl overflow-hidden border ${theme.terminalBorder} bg-slate-900 shadow-xl`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/60 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-xs text-slate-400">Project status</span>
      </div>
      <div className="px-5 py-6 font-mono text-sm" style={{ minHeight: "210px" }}>
        {lines.map((l, i) => (
          <div key={i} className={`mb-2 whitespace-pre-wrap ${l.type === "ok" ? "text-cyan-400" : "text-slate-400"}`}>
            {l.text}
          </div>
        ))}
        {lines.some((l) => l.type === "cmd") && lines.length === 1 && (
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden mb-3">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all ease-out"
              style={{ width: `${progress}%`, transitionDuration: "1800ms" }}
            />
          </div>
        )}
        {cursorText !== "" && (
          <div className="text-slate-400 whitespace-pre-wrap">
            {cursorText}
            <span className="inline-block w-2 h-4 bg-cyan-400 align-text-bottom animate-pulse ml-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}
