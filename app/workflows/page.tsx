"use client";

import { motion } from "framer-motion";
import { WorkflowCard } from "@/components/ui/workflow-card";
import { Lightbulb, Code2, Bot, GitCommit, Play, FileWarning, Search, Server, Cloud, Activity, LineChart, Layers, LayoutTemplate, PenTool, BookOpen, User } from "lucide-react";

export default function WorkflowsPage() {
  return (
    <main className="flex flex-col w-full font-sans overflow-hidden min-h-screen pt-32 pb-20 px-4">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center mb-20 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white"
        >
          Workflows, not tool switching.
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full z-10">
        
        <WorkflowCard 
          delay={0.1}
          title="Build"
          description="Start from an idea and turn it into working software."
          steps={[
            { title: "Idea", icon: <Lightbulb size={16} /> },
            { title: "Code", icon: <Code2 size={16} /> },
            { title: "AI Assistance", icon: <Bot size={16} /> },
            { title: "Git", icon: <GitCommit size={16} /> },
            { title: "Build", icon: <Play size={16} /> },
          ]}
        />

        <WorkflowCard 
          delay={0.2}
          title="Debug"
          description="Understand failures across code, CI/CD, infra, and logs."
          steps={[
            { title: "Failure", icon: <FileWarning size={16} /> },
            { title: "Collect Context", icon: <Search size={16} /> },
            { title: "Logs", icon: <Terminal size={16} /> },
            { title: "CI/CD", icon: <Server size={16} /> },
            { title: "Root Cause", icon: <Bot size={16} /> },
          ]}
        />

        <WorkflowCard 
          delay={0.3}
          title="Deploy"
          description="Move from code to deployment through a connected flow."
          steps={[
            { title: "Code", icon: <Code2 size={16} /> },
            { title: "Build", icon: <Play size={16} /> },
            { title: "Containerize", icon: <Layers size={16} /> },
            { title: "Infrastructure", icon: <Server size={16} /> },
            { title: "Deploy", icon: <Cloud size={16} /> },
          ]}
        />

        <WorkflowCard 
          delay={0.4}
          title="Monitor"
          description="Understand what is happening after deployment."
          steps={[
            { title: "Application", icon: <LayoutTemplate size={16} /> },
            { title: "Metrics", icon: <LineChart size={16} /> },
            { title: "Logs", icon: <Terminal size={16} /> },
            { title: "Signals", icon: <Activity size={16} /> },
            { title: "Action", icon: <Bot size={16} /> },
          ]}
        />

        <WorkflowCard 
          delay={0.5}
          title="Design"
          description="Create and reason about architecture before implementation."
          steps={[
            { title: "Requirements", icon: <FileWarning size={16} /> },
            { title: "Architecture", icon: <Layers size={16} /> },
            { title: "Components", icon: <LayoutTemplate size={16} /> },
            { title: "Implementation", icon: <PenTool size={16} /> },
          ]}
        />

        <WorkflowCard 
          delay={0.6}
          title="Learn"
          description="Learn, practice, and build in the same environment."
          steps={[
            { title: "Learn", icon: <BookOpen size={16} /> },
            { title: "Practice", icon: <Code2 size={16} /> },
            { title: "Build", icon: <Play size={16} /> },
            { title: "Understand", icon: <Bot size={16} /> },
            { title: "Apply", icon: <User size={16} /> },
          ]}
        />

      </div>
    </main>
  );
}

function Terminal(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
}
