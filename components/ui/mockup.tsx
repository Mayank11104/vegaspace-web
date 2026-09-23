import React from "react";
import { cn } from "@/lib/utils";

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  type?: "ide" | "terminal" | "browser";
}

export function Mockup({ children, className, title, type = "ide", ...props }: MockupProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-black/10 dark:border-white/10 bg-zinc-100/80 dark:bg-black/50 shadow-2xl overflow-hidden backdrop-blur-3xl flex flex-col",
        className
      )}
      {...props}
    >
      <div className="flex items-center px-4 py-2 bg-black/5 dark:bg-white/5 border-b border-black/5 dark:border-white/5 h-10 shrink-0">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
        </div>
        {title && (
          <div className="flex-1 text-center text-xs font-mono text-zinc-500 dark:text-zinc-400 absolute inset-x-0 pointer-events-none">
            {title}
          </div>
        )}
      </div>
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}

export function MockupSidebar({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-64 border-r border-black/10 dark:border-white/5 bg-black/5 dark:bg-black/20 shrink-0 flex flex-col", className)}>
      {children}
    </div>
  );
}

export function MockupEditor({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1 bg-transparent p-4 font-mono text-xs overflow-auto", className)}>
      {children}
    </div>
  );
}
