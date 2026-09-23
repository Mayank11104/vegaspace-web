"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="flex w-full font-sans overflow-hidden min-h-screen pt-24 px-4 max-w-7xl mx-auto">
      
      {/* Left Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col gap-6 pt-8 pr-6 border-r border-black/5 dark:border-white/5 h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Getting Started</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-900 dark:text-white font-medium">Introduction</span>
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Installation</span>
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Quick Start</span>
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">First Project</span>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Core Concepts</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Workspace</span>
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Roles</span>
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">AI Assistant</span>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Guides</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Build a Project</span>
            <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Debug a Deployment</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-12 pt-8 pb-32 overflow-y-auto">
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8 font-mono">
          <span>Docs</span> <ChevronRight size={12} /> <span>Getting Started</span> <ChevronRight size={12} /> <span className="text-zinc-900 dark:text-zinc-300">Introduction</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Introduction</h1>
          <p className="text-lg text-zinc-900 dark:text-zinc-300 mb-8">What is Vegaspace?</p>
          
          <div className="prose dark:prose-invert prose-zinc max-w-none">
            <p>Vegaspace is an AI-orchestrated unified workspace designed to bring all your development workflows into one connected environment.</p>
            
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mt-12 mb-4 border-b border-black/10 dark:border-white/10 pb-2">Why Vegaspace exists</h2>
            <p>Modern software development requires jumping between editors, terminals, docker dashboards, and cloud consoles. Vegaspace bridges these environments into one hyper-fast system so you never lose context.</p>

            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mt-12 mb-4 border-b border-black/10 dark:border-white/10 pb-2">Core concepts</h2>
            <ul>
              <li><strong>Workspace:</strong> Your fully integrated IDE, terminal, and deployment environment.</li>
              <li><strong>Context Engine:</strong> AI that understands your repository, logs, and architecture.</li>
              <li><strong>Workflows:</strong> Automated, integrated paths for building and deploying.</li>
            </ul>
          </div>

          <div className="flex justify-between items-center mt-20 pt-8 border-t border-black/10 dark:border-white/10">
            <div />
            <Link href="#" className="flex flex-col text-right group">
              <span className="text-xs text-zinc-500 mb-1">Next</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-orange-400 transition-colors">Installation →</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Sidebar */}
      <aside className="hidden lg:flex w-48 shrink-0 flex-col pt-8 pl-6 h-[calc(100vh-6rem)] sticky top-24">
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">On this page</h4>
        <div className="flex flex-col gap-2 text-xs text-zinc-600 dark:text-zinc-400 border-l border-black/10 dark:border-white/10 pl-3">
          <span className="text-zinc-900 dark:text-white font-medium cursor-pointer -ml-[13px] pl-3 border-l-2 border-[#D27D2D] dark:border-[#FDBA74]">What is Vegaspace?</span>
          <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Why Vegaspace exists</span>
          <span className="hover:text-zinc-900 dark:text-zinc-300 cursor-pointer">Core concepts</span>
        </div>
      </aside>

    </main>
  );
}
