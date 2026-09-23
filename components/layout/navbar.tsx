"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const NAV_ITEMS = [
  {
    title: "Product",
    description: "What UDE is",
    items: [
      { name: "Overview", href: "/#overview" },
      { name: "Why UDE", href: "/#why-ude" },
      { name: "AI-Native Development", href: "/#ai" },
      { name: "Role-Based Workspaces", href: "/#roles" },
      { name: "Architecture", href: "/architecture" },
      { name: "Security & Privacy", href: "/security" },
    ],
  },
  {
    title: "Features",
    description: "What UDE can do",
    items: [
      { name: "Code Workspace", href: "/features#code" },
      { name: "AI Assistant", href: "/features#ai" },
      { name: "Integrated Terminal", href: "/features#terminal" },
      { name: "Docker", href: "/features#docker" },
      { name: "CI/CD", href: "/features#cicd" },
      { name: "Terraform", href: "/features#terraform" },
      { name: "Monitoring", href: "/features#monitoring" },
      { name: "Architecture Builder", href: "/features#architecture-builder" },
      { name: "Learning Workspace", href: "/features#learning" },
    ],
  },
  {
    title: "Workflows",
    description: "What you accomplish with UDE",
    items: [
      { name: "Build", href: "/workflows#build" },
      { name: "Debug", href: "/workflows#debug" },
      { name: "Deploy", href: "/workflows#deploy" },
      { name: "Monitor", href: "/workflows#monitor" },
      { name: "Design", href: "/workflows#design" },
      { name: "Learn", href: "/workflows#learn" },
    ],
  },
  {
    title: "Docs",
    description: "How you use UDE",
    items: [
      { name: "Getting Started", href: "/docs#getting-started" },
      { name: "Core Concepts", href: "/docs#core-concepts" },
      { name: "Guides", href: "/docs#guides" },
      { name: "Reference", href: "/docs#reference" },
    ],
  },
];

function NavItem({ item }: { item: typeof NAV_ITEMS[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Delay prevents fragile hover state
  };

  const toggleOpen = (e: React.MouseEvent) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1.5 text-sm font-[450] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-md"
      >
        {item.title}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-2xl shadow-xl p-3 z-50"
          >
            <div className="mb-2 px-3 pb-3 border-b border-zinc-100 dark:border-white/5">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{item.description}</p>
            </div>
            <div className="flex flex-col">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ item, setIsMenuOpen }: { item: typeof NAV_ITEMS[0], setIsMenuOpen: (v: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border-b border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/5 rounded-xl transition-colors"
      >
        {item.title}
        <ChevronDown
          size={16}
          className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col px-2 pb-2"
          >
            {item.items.map((subItem) => (
              <Link
                key={subItem.name}
                onClick={() => setIsMenuOpen(false)}
                href={subItem.href}
                className="text-sm font-medium text-zinc-400 px-4 py-2 hover:text-zinc-200 hover:bg-white/5 rounded-xl transition-colors"
              >
                {subItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
        <Link href="/" className="flex items-center gap-2 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-full">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center transition-colors">
            <span className="text-white dark:text-black font-[450] text-xl leading-none">V</span>
          </div>
          <span className={cn(
            "font-[450] text-zinc-900 dark:text-white transition-all duration-300",
            isScrolled ? "text-lg" : "text-xl"
          )}>Vegaspace</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 h-full">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <ThemeToggle />
          <Link
            href="/download"
            className={cn(
              "rounded-full bg-black text-white dark:bg-white dark:text-zinc-950 font-[450] transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white",
              isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5 text-base"
            )}
          >
            Download
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-900 dark:text-white z-10 p-2 ml-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Mobile Menu"
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
            className="pointer-events-auto mt-2 w-full max-w-3xl bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col gap-1 md:hidden shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.title} item={item} setIsMenuOpen={setMobileMenuOpen} />
            ))}
            <Link onClick={() => setMobileMenuOpen(false)} href="/download" className="text-sm font-bold text-zinc-950 bg-white px-4 py-3 rounded-xl text-center mt-3 hover:bg-zinc-200 transition-colors">
              Download UDE
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
