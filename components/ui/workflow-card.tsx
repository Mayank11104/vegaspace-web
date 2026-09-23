import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface WorkflowStep {
  title: string;
  icon?: React.ReactNode;
}

import { HTMLMotionProps } from "framer-motion";

interface WorkflowCardProps extends HTMLMotionProps<"div"> {
  title: string;
  description: string;
  steps: WorkflowStep[];
  delay?: number;
}

export function WorkflowCard({ title, description, steps, delay = 0, className, ...props }: WorkflowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "group relative flex flex-col p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/40 backdrop-blur-xl overflow-hidden hover:bg-black/10 dark:hover:bg-white/5 transition-colors duration-300 cursor-default",
        className
      )}
      {...props}
    >
      <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 h-10">{description}</p>
      
      <div className="flex flex-col gap-2 mt-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/10 transition-colors">
              {step.icon && <span className="text-zinc-500">{step.icon}</span>}
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center -my-1 z-10 text-zinc-400 dark:text-zinc-600">
                <ArrowDown size={14} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}
