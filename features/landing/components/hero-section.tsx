"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section className="min-h-screen bg-[#0E0E0E]" />;

  const isDark = resolvedTheme === "dark";
  
  return (
    <>
      {/* 1. FIXED BACKGROUND LAYER (Glassmorphism base) */}
      <div 
        className="fixed inset-0 z-0 transition-colors duration-500 overflow-hidden"
        style={{ backgroundColor: isDark ? "#0E0E0E" : "#DCE1E6" }} // Using Deep Space Black
      >
        {/* Massive Bottom-Anchored Radial Glow */}
        <div 
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] blur-[100px] pointer-events-none transition-colors duration-700" 
          style={{ 
            background: isDark 
              ? "radial-gradient(ellipse at center, rgba(170,178,189,0.15), rgba(170,178,189,0.05), transparent)" 
              : "radial-gradient(ellipse at center, rgba(0,0,0,0.05), rgba(0,0,0,0.02), transparent)" 
          }}
        />

        {/* Orbital Rings */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1800px] h-[1800px] rounded-full border border-black/15 dark:border-white/5 pointer-events-none transition-colors" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full border border-black/15 dark:border-white/5 pointer-events-none transition-colors" />
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-black/15 dark:border-white/5 pointer-events-none transition-colors" />


      </div>

      {/* 2. SCROLLING CONTENT LAYER */}
      <section 
        className="relative z-10 w-full min-h-[150vh] flex flex-col items-center pt-24 pb-32 transition-colors duration-500"
        style={{ color: isDark ? "#ffffff" : "#0F172A" }}
      >
        {/* Main Content */}
        <div className="relative flex flex-col items-center text-center max-w-4xl px-6 mt-10 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm mb-8 transition-colors">
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 tracking-wide uppercase">The AI-Orchestrated Unified Workspace</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Supercharge your workflow <br />
            <span className="font-cursive text-[1.3em] font-normal mx-2 text-zinc-500 dark:text-zinc-400">with</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-[#D8E2FF] dark:to-[#A7B7E7]">Vegaspace</span>
          </h1>

          <p 
            className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed transition-colors"
            style={{ color: isDark ? "#8D8A84" : "#555555" }}
          >
            Vegaspace gives you a fully integrated path to development — IDE, terminal, deployment pipelines, and environment management in one hyper-fast system.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              className="px-8 py-3.5 rounded-full font-semibold transition-colors shadow-sm"
              style={{ 
                backgroundColor: isDark ? "#DCE1E6" : "#000000", 
                color: isDark ? "#0E0E0E" : "#FFFFFF" 
              }}
            >
              Free Resources
            </button>
            <button className="group flex items-center gap-2 px-8 py-3.5 rounded-full border text-sm font-semibold transition-all hover:bg-black/5 dark:hover:bg-white/5"
              style={{ 
                borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                color: isDark ? "#DCE1E6" : "#0F172A"
              }}
            >
              Vegaspace Pro
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mockup Dashboard with Pass-Through Glassmorphism */}
        <div className="relative w-full max-w-5xl mt-24 px-6 z-10">
          <div 
            className="w-full aspect-[16/9] rounded-2xl border shadow-2xl overflow-hidden relative transition-colors duration-500 backdrop-blur-3xl"
            style={{ 
              backgroundColor: isDark ? "rgba(36, 36, 36, 0.4)" : "rgba(255, 255, 255, 0.7)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.05)",
              boxShadow: isDark ? "0 25px 50px -12px rgba(0,0,0,0.5)" : "0 25px 50px -12px rgba(0,0,0,0.1)"
            }}
          >
            {/* Dashboard Header */}
            <div className="w-full h-12 border-b border-black/5 dark:border-white/10 flex items-center px-4 gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              </div>
              <div className="flex-1 max-w-md h-7 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center px-3">
                <span className="text-xs text-zinc-400 dark:text-zinc-400">Search environments...</span>
              </div>
            </div>
            
            {/* Dashboard Sidebar & Main */}
            <div className="flex h-[calc(100%-3rem)]">
              <div className="w-64 border-r border-black/5 dark:border-white/10 p-4 flex flex-col gap-4 bg-black/[0.01] dark:bg-white/[0.01] hidden md:flex">
                <div className="h-8 rounded-lg bg-black/5 dark:bg-white/10 w-full mb-4 flex items-center px-3 border border-black/5 dark:border-white/5">
                  <span className="text-xs text-black/50 dark:text-white/50">Dashboard</span>
                </div>
                <div className="h-6 rounded bg-black/5 dark:bg-white/5 w-3/4" />
                <div className="h-6 rounded bg-black/5 dark:bg-white/5 w-5/6" />
                <div className="h-6 rounded bg-black/5 dark:bg-white/5 w-2/3" />
              </div>
              <div className="flex-1 p-8 flex flex-col gap-6">
                <div className="w-1/3 h-8 bg-black/5 dark:bg-white/10 rounded mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="h-32 rounded-xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent p-4 flex flex-col justify-between">
                     <div className="w-1/2 h-4 bg-black/5 dark:bg-white/10 rounded" />
                     <div className="w-3/4 h-8 bg-black/10 dark:bg-white/20 rounded" />
                  </div>
                  <div className="h-32 rounded-xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent p-4 flex flex-col justify-between">
                     <div className="w-1/2 h-4 bg-black/5 dark:bg-white/10 rounded" />
                     <div className="w-2/3 h-8 bg-black/10 dark:bg-white/20 rounded" />
                  </div>
                  <div className="h-32 rounded-xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent p-4 flex flex-col justify-between">
                     <div className="w-1/2 h-4 bg-black/5 dark:bg-white/10 rounded" />
                     <div className="w-full h-8 bg-black/10 dark:bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup Base Glow (reflecting on the floor) */}
          <div 
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-[60px] pointer-events-none transition-colors duration-500" 
            style={{ backgroundColor: isDark ? "rgba(170,178,189,0.15)" : "rgba(99,102,241,0.2)" }} 
          />
        </div>
      </section>
    </>
  );
}
