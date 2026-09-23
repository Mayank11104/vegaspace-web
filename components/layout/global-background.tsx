"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-[#0E0E0E] pointer-events-none" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="fixed inset-0 z-[-1] transition-colors duration-500 overflow-hidden pointer-events-none"
      style={{
        background: isDark
          ? "#0E0E0E"
          : "linear-gradient(135deg, #FFFBFA 0%, #FDEEE1 100%)"
      }}
    >
      {/* Massive Bottom-Anchored Radial Glow */}
      <div
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] blur-[100px] transition-colors duration-700"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center, rgba(216,234,215,0.2), rgba(216,234,215,0.06), transparent)"
            : "radial-gradient(ellipse at center, rgba(255,255,255,0.8), rgba(255,255,255,0.4), transparent)"
        }}
      />

      {/* Orbital Rings */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1800px] h-[1800px] rounded-full border border-black/15 dark:border-white/5 transition-colors" />
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full border border-black/15 dark:border-white/5 transition-colors" />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-black/15 dark:border-white/5 transition-colors" />
    </div>
  );
}
