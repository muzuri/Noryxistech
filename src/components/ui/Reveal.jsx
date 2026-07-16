import React, { useEffect, useState } from "react";

export default function Reveal({ children, className = "" }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 40);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`transition-all duration-700 ease-out ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}>
      {children}
    </div>
  );
}
