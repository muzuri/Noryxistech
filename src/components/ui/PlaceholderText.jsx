import React from "react";

const PLACEHOLDER_RE = /(\[[^\]]+\])/g;

// Highlights any [bracketed placeholder] segment in a line of text so it's
// impossible to accidentally publish without noticing it.
export default function PlaceholderText({ text }) {
  const parts = text.split(PLACEHOLDER_RE);
  return (
    <>
      {parts.map((part, i) =>
        PLACEHOLDER_RE.test(part) ? (
          <mark key={i} className="bg-amber-400/20 text-amber-500 px-1 rounded font-medium not-italic">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}
