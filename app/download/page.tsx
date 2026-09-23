"use client";

import { motion } from "framer-motion";
import { Download, Terminal } from "lucide-react";

export default function DownloadPage() {
  return (
    <main className="flex flex-col w-full font-sans overflow-hidden min-h-screen pt-32 pb-20 px-4 items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center mb-16 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white"
        >
          Download UDE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg text-zinc-400"
        >
          Your unified development environment.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-xl z-10"
      >
        <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-[rgba(36,36,36,0.4)] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-400 opacity-50" />
          
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">UDE for Windows</h2>
          <p className="text-zinc-400 text-sm mb-8">Windows 10 / 11 (x64 & ARM64)</p>
          
          <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-lg mb-6">
            <Download size={20} />
            Download UDE
          </button>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/40 mb-10">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400">Demo version: v0.1.0 Preview</span>
          </div>

          <div className="w-full border-t border-black/10 dark:border-white/10 pt-8">
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-3 text-center">Install via Winget</p>
            <div className="flex items-center justify-between w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-lg p-3 font-mono text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-3">
                <Terminal size={14} className="text-zinc-500" />
                <span>winget install vegaspace</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-8 text-sm font-medium text-zinc-500">
          <span className="hover:text-zinc-300 cursor-pointer transition-colors">System Requirements</span>
          <span className="hover:text-zinc-300 cursor-pointer transition-colors">Installation Guide</span>
          <span className="hover:text-zinc-300 cursor-pointer transition-colors">Release Notes</span>
        </div>
      </motion.div>
    </main>
  );
}
