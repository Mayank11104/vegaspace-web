"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Lock, ShieldCheck, EyeOff, Server, Fingerprint } from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="flex flex-col w-full font-sans overflow-hidden min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white"
        >
          Security & Privacy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg text-zinc-400"
        >
          Built for enterprises. Designed for privacy.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto w-full z-10">
        <BentoGrid>
          <BentoCard delay={0.1} className="p-8 md:col-span-2">
            <Lock size={24} className="text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Secrets exposed to AI: <span className="text-emerald-400">Never</span></h3>
            <p className="text-zinc-400 text-sm max-w-lg">UDE runs a local semantic engine that automatically scrubs environment variables, connection strings, and certificates before any context is sent to the AI orchestration layer.</p>
          </BentoCard>

          <BentoCard delay={0.2} className="p-8">
            <ShieldCheck size={24} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Destructive Action: <span className="text-blue-400">Requires Approval</span></h3>
            <p className="text-zinc-400 text-sm">Terraform applies, production deployments, and database migrations are always gated by a physical human approval step.</p>
          </BentoCard>

          <BentoCard delay={0.3} className="p-8">
            <Server size={24} className="text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Local Development Model</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Your code stays on your machine. UDE orchestrates local docker engines and language servers without requiring cloud sync.</p>
          </BentoCard>

          <BentoCard delay={0.4} className="p-8 md:col-span-2 bg-gradient-to-br from-zinc-100 dark:from-[rgba(36,36,36,0.4)] to-zinc-50 dark:to-black">
            <Fingerprint size={24} className="text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Developer Control: <span className="text-purple-400">Always</span></h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-lg">We believe developers should have absolute sovereignty over their environments. Workspace telemetry is strictly opt-in, and audit logs are available directly in the terminal.</p>
          </BentoCard>
        </BentoGrid>
      </div>
    </main>
  );
}
