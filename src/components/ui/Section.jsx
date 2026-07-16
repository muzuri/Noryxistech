import React from "react";

export default function Section({ children, className = "" }) {
  return <section className={`max-w-6xl mx-auto px-6 py-20 ${className}`}>{children}</section>;
}
