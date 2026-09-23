"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

      {/* Orbital Rings Cluster (Exactly 3 Lines) */}

      {/* 1800px Outer Ring */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1800px] h-[1800px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border-[0.5px] border-black/10 dark:border-white/[0.03] transition-colors relative"
        >
          {/* Light Streaks */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-80 h-[2px] bg-gradient-to-r from-transparent via-black/30 dark:via-white/30 to-transparent blur-[1px]" />
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-80 h-[2px] bg-gradient-to-r from-transparent via-black/30 dark:via-white/30 to-transparent blur-[1px]" />

          {/* Satellite - Emerald */}
          <div className="absolute top-1/2 -left-[1px] -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#A7F3D0] shadow-[0_0_12px_#A7F3D0]" />
        </motion.div>
      </div>

      {/* 1400px Middle Ring */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px]">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border-[0.5px] border-black/10 dark:border-white/[0.03] transition-colors relative"
        >
          {/* Light Streaks */}
          <div className="absolute top-1/2 -left-[1px] -translate-y-1/2 h-64 w-[2px] bg-gradient-to-b from-transparent via-black/40 dark:via-white/40 to-transparent blur-[1px]" />
          <div className="absolute top-1/2 -right-[1px] -translate-y-1/2 h-64 w-[2px] bg-gradient-to-b from-transparent via-black/40 dark:via-white/40 to-transparent blur-[1px]" />

          {/* Satellite - White */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:shadow-[0_0_8px_white]" />
        </motion.div>
      </div>

      {/* 1000px Inner Ring */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border-[0.5px] border-black/10 dark:border-white/[0.03] transition-colors relative"
        >
          {/* Light Streaks */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-black/50 dark:via-white/50 to-transparent blur-[1px]" />
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-black/50 dark:via-white/50 to-transparent blur-[1px]" />

          {/* Satellite - Orange */}
          <div className="absolute top-1/2 -right-[1px] -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[#D27D2D] shadow-[0_0_10px_#D27D2D]" />
        </motion.div>
      </div>
    </div>
  );
}
