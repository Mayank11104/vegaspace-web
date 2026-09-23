"use client";

import { useTheme } from "next-themes";
import { HeroSection } from "@/features/landing/components/hero-section";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main className="min-h-screen bg-[#242424]" />;
  }

  return (
    <main className="flex flex-col w-full font-sans transition-colors duration-500">
      <HeroSection />
    </main>
  );
}