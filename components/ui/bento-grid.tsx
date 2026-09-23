import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import { HTMLMotionProps } from "framer-motion";

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function BentoCard({ className, children, delay = 0, ...props }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.01 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-zinc-100/50 dark:bg-[rgba(36,36,36,0.4)] backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
}
