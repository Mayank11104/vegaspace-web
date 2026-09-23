"use client";

import { useTheme } from "next-themes";
import { HeroSection } from "@/features/landing/components/hero-section";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mockup, MockupSidebar, MockupEditor } from "@/components/ui/mockup";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Terminal, Code2, Search, Database, Layers, Code, Bot, User } from "lucide-react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main className="min-h-screen" />;
  }

  return (
    <main className="flex flex-col w-full font-sans transition-colors duration-500 overflow-hidden">
      <HeroSection />

      {/* 2. WHY UDE */}
      <section id="why-ude" className="py-32 px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">Stop switching between tools.<br/>Start working in context.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Vegaspace eliminates the friction of jumping between your editor, terminal, CI dashboard, and cloud logs.</p>
        </div>

        <BentoGrid>
          <BentoCard delay={0.1} className="md:col-span-2 p-8">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Traditional Workflow</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-zinc-500">
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md">IDE</span> →
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md">Terminal</span> →
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md">Git</span> →
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md">Docker</span> →
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md">CI/CD</span> →
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md">Cloud</span> →
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-md">Logs</span>
            </div>
            <div className="mt-8 border-t border-black/10 dark:border-white/10 pt-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">UDE Workflow</h3>
              <div className="flex items-center gap-4 text-sm font-mono">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-400/10 text-orange-200 border border-orange-500/30 rounded-md">UDE Workspace</span>
                <span className="text-zinc-500">→</span>
                <span className="text-zinc-700 dark:text-zinc-300">Connected Development Workflow</span>
              </div>
            </div>
          </BentoCard>
          
          <BentoCard delay={0.2} className="p-8 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Demo Benefits</h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Less context switching</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Better project context</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Faster troubleshooting</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> AI-assisted development</li>
            </ul>
          </BentoCard>
        </BentoGrid>
      </section>

      {/* 3. AI-NATIVE */}
      <section id="ai" className="py-32 px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">AI that understands the development context.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">UDE doesn't just read your code. It understands your CI logs, Docker configuration, and project architecture to diagnose issues.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
                <Search size={20} className="text-blue-400 mb-3" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Explain Code</h4>
              </div>
              <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
                <Terminal size={20} className="text-red-400 mb-3" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Analyze Errors</h4>
              </div>
              <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
                <Layers size={20} className="text-purple-400 mb-3" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Diagnose CI/CD</h4>
              </div>
              <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl">
                <Database size={20} className="text-emerald-400 mb-3" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">Suggest Actions</h4>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <Mockup title="UDE AI Assistant" className="h-[400px]">
              <div className="flex flex-col h-full p-4 gap-4 overflow-y-auto">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center shrink-0"><User size={12} /></div>
                  <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-3 rounded-lg rounded-tl-none text-sm text-zinc-700 dark:text-zinc-300">
                    Why did my deployment fail?
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0"><Bot size={12} /></div>
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="bg-black/5 dark:bg-white/5 border border-orange-500/20 p-3 rounded-lg rounded-tl-none text-sm text-zinc-700 dark:text-zinc-300">
                      I found a failing CI step related to the container build. The Docker image build failed after the dependency installation step.
                    </div>
                    
                    <div className="text-xs font-semibold text-zinc-500 uppercase">Context Used</div>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                      <span className="px-2 py-1 bg-black/40 border border-white/5 rounded flex items-center gap-1"><Terminal size={10}/> CI logs</span>
                      <span className="px-2 py-1 bg-black/40 border border-white/5 rounded flex items-center gap-1"><Layers size={10}/> Dockerfile</span>
                      <span className="px-2 py-1 bg-black/40 border border-white/5 rounded flex items-center gap-1"><Code size={10}/> package.json</span>
                    </div>
                  </div>
                </div>
              </div>
            </Mockup>
          </div>
        </div>
      </section>

      {/* 4. ROLE-BASED */}
      <section id="roles" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">Your workspace,<br/>adapted to how you build.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BentoCard delay={0.1} className="p-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Beginner Developer</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6 flex-wrap">
                Learn → Code → Run → Debug
              </div>
              <div className="mt-auto pt-4 border-t border-white/5 text-sm text-zinc-600 dark:text-zinc-400">Simplified UI, learning mode, automated environment setup.</div>
            </BentoCard>

            <BentoCard delay={0.2} className="p-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Full-Stack Developer</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6 flex-wrap">
                Frontend → API → DB → Deploy
              </div>
              <div className="mt-auto pt-4 border-t border-white/5 text-sm text-zinc-600 dark:text-zinc-400">Integrated database viewer, API client, and terminal multiplexer.</div>
            </BentoCard>

            <BentoCard delay={0.3} className="p-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">DevOps Engineer</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6 flex-wrap">
                Containers → CI/CD → Infra → Monitor
              </div>
              <div className="mt-auto pt-4 border-t border-white/5 text-sm text-zinc-600 dark:text-zinc-400">Docker dashboard, Terraform state inspector, live cluster logs.</div>
            </BentoCard>

            <BentoCard delay={0.4} className="p-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">AI/ML Developer</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6 flex-wrap">
                Models → Experiments → Compute
              </div>
              <div className="mt-auto pt-4 border-t border-white/5 text-sm text-zinc-600 dark:text-zinc-400">Jupyter integration, remote GPU compute orchestration.</div>
            </BentoCard>
          </div>
        </div>
      </section>

    </main>
  );
}
