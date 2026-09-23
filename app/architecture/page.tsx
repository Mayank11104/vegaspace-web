"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <main className="flex flex-col w-full font-sans overflow-hidden min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white"
        >
          How UDE works
        </motion.h1>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center w-full z-10 relative">
        <div className="absolute inset-0 w-px bg-white/10 left-1/2 -translate-x-1/2 -z-10" />

        <ArchCard title="UDE Workspace" desc="The central interface where developers interact." delay={0.1} />
        <ArchArrow delay={0.2} />
        <ArchCard title="Context Layer" desc="AI and State engines that understand project structure and intent." delay={0.3} border="border-orange-500/30 dark:border-orange-500/30" bg="bg-orange-500/10 dark:bg-orange-500/5" />
        <ArchArrow delay={0.4} />
        <ArchCard title="Workflow Layer" desc="Orchestrator for builds, deployments, and testing." delay={0.5} />
        <ArchArrow delay={0.6} />
        <ArchCard title="Tool Integrations" desc="Adapters for native environments and cloud providers." delay={0.7} />
        <ArchArrow delay={0.8} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 mt-4"
        >
          {["Docker", "Git", "CI/CD", "Terraform", "Monitoring", "Cloud"].map(tool => (
            <div key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-zinc-400">
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

function ArchCard({ title, desc, delay, border = "border-black/10 dark:border-white/10", bg = "bg-black/5 dark:bg-[rgba(36,36,36,0.4)]" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={`w-full p-6 rounded-2xl border ${border} ${bg} backdrop-blur-3xl shadow-xl text-center`}
    >
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
    </motion.div>
  );
}

function ArchArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="py-4 text-zinc-600"
    >
      <ArrowDown size={20} />
    </motion.div>
  );
}
