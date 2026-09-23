"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Code2, Terminal, Container, GitBranch, Shield, Activity, Share2, GraduationCap, LayoutTemplate } from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="flex flex-col w-full font-sans overflow-hidden min-h-screen pt-32 pb-20 px-4">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(216,234,215,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center mb-20 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white"
        >
          Everything you need.<br/>One developer workspace.
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20 w-full z-10">
        {/* DEVELOP */}
        <section>
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6 px-4">Develop</h2>
          <BentoGrid>
            <BentoCard delay={0.1} className="p-8">
              <Code2 size={24} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Code Workspace</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Write and navigate your project without leaving your workspace. Fully integrated with your language servers.</p>
            </BentoCard>
            <BentoCard delay={0.2} className="p-8">
              <Shield size={24} className="text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">AI Assistant</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Understand code, errors, and development context natively integrated into your IDE.</p>
            </BentoCard>
            <BentoCard delay={0.3} className="p-8">
              <Terminal size={24} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Integrated Terminal</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Run local development commands directly inside UDE with intelligent history.</p>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* BUILD & DEPLOY */}
        <section>
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6 px-4">Build & Deploy</h2>
          <BentoGrid>
            <BentoCard delay={0.1} className="p-8 md:col-span-2">
              <Container size={24} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Docker</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md">Build and manage container workflows directly from the editor without switching to the CLI.</p>
            </BentoCard>
            <BentoCard delay={0.2} className="p-8">
              <GitBranch size={24} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">CI/CD</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Understand pipeline status and failures in real-time.</p>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* OBSERVE */}
        <section>
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6 px-4">Observe & Debug</h2>
          <BentoGrid>
            <BentoCard delay={0.1} className="p-8">
              <Activity size={24} className="text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Monitoring</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">See relevant application and infrastructure signals overlaid on your code.</p>
            </BentoCard>
            <BentoCard delay={0.2} className="p-8 md:col-span-2">
              <Share2 size={24} className="text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Terraform</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md">Inspect infrastructure changes and workflows before they affect production environments.</p>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* DESIGN & LEARN */}
        <section>
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500 mb-6 px-4">Design & Learn</h2>
          <BentoGrid>
            <BentoCard delay={0.1} className="p-8 md:col-span-2">
              <LayoutTemplate size={24} className="text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Architecture Builder</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md">Design systems before implementing them with interactive, linked component diagrams.</p>
            </BentoCard>
            <BentoCard delay={0.2} className="p-8">
              <GraduationCap size={24} className="text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Learning Workspace</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Learn concepts while working on real projects in a safe environment.</p>
            </BentoCard>
          </BentoGrid>
        </section>
      </div>
    </main>
  );
}
