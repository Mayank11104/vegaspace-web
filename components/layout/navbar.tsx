"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 inset-x-0 z-50 flex flex-col items-center mt-4 px-4 sm:px-6 pointer-events-none"
    >
      {/* Floating Pill Container */}
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "pointer-events-auto relative flex items-center justify-between rounded-full border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isScrolled
            ? "bg-white/60 dark:bg-black/60 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-black/10 dark:border-white/10 px-6 py-3.5 w-full max-w-4xl"
            : "bg-transparent backdrop-blur-none border-transparent px-8 py-5 w-full max-w-7xl"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center transition-colors">
            <span className="text-white dark:text-black font-[450] text-xl leading-none">V</span>
          </div>
          <span className={cn(
            "font-[450] text-zinc-900 dark:text-white transition-all duration-300",
            isScrolled ? "text-lg" : "text-xl"
          )}>Vegaspace</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <Link href="#features" className="text-sm font-[450] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Features</Link>
          <Link href="#integrations" className="text-sm font-[450] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Integrations</Link>
          <Link href="#pricing" className="text-sm font-[450] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Pricing</Link>
          <Link href="#about" className="text-sm font-[450] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">About</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <ThemeToggle />
          <Link
            href="#early-access"
            className={cn(
              "rounded-full bg-black text-white dark:bg-white dark:text-zinc-950 font-[450] transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm",
              isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5 text-base"
            )}
          >
            Early Access
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-900 dark:text-white z-10 p-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-2 w-full max-w-3xl bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-2xl"
          >
            <Link onClick={() => setMobileMenuOpen(false)} href="#features" className="text-sm font-medium text-zinc-300 px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">Features</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#docs" className="text-sm font-medium text-zinc-300 px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">Docs</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#pricing" className="text-sm font-medium text-zinc-300 px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">Pricing</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#early-access" className="text-sm font-bold text-zinc-950 bg-white px-4 py-3 rounded-xl text-center mt-2 hover:bg-zinc-200 transition-colors">Request Early Access</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
