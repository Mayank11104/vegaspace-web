# Vegaspace UDE (Unified Developer Environment) - Frontend Prototype

Vegaspace is an AI-powered development environment designed to bring coding, AI assistance, development tools, DevOps workflows, architecture, and learning into one connected developer workspace.

This repository contains the high-fidelity Next.js frontend prototype built to design and evaluate the **website UX, information architecture, navigation, and visual system**.

## Tech Stack
- **Framework**: Next.js 15+ (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (High-performance SVG drawing & scroll animations)
- **Theming**: `next-themes` (Robust light/dark mode handling)

## Project Structure & Routing

The prototype features a fully interconnected routing system, complete with a global navigation bar and optimized page transitions.

- `/` - Homepage (Hero Section, Product Overview, Intro Animation)
- `/architecture` - Architecture Overview
- `/docs` - Documentation & Getting Started
- `/download` - Download UDE (Mockups & OS Detection logic)
- `/features` - Core Features (AI, Code Workspace, Terminal, Docker, CI/CD)
- `/security` - Security & Privacy policies
- `/workflows` - Workflow Guides (Build, Debug, Deploy, Monitor, Design, Learn)

## The Design Architecture (60-30-10 System)

We established a premium, hyper-dynamic "Studio / SaaS" aesthetic. The core of this aesthetic relies on a strict **60-30-10 Color System** combined with a "Pass-Through Glassmorphism Parallax" effect. This is handled globally across all pages via the `<GlobalBackground />` component.

### Dark Mode (Deep Space OLED)
- **60% (Base)**: Deep Space Black (`#0E0E0E`), locked `fixed` to the viewport.
- **30% (Surface)**: Premium Frosted Glass (`rgba(36, 36, 36, 0.4)`) heavily blurred (`backdrop-blur-3xl`), upgraded with a physical SVG noise texture overlay (`mix-blend-overlay`) and an Apple-style inner inset rim light to prevent flat CSS rendering.
- **10% (Accent)**: A deeply atmospheric and high-end finish. We use **Sage Dew** (`rgba(216,234,215,0.2)`) for the massive ambient environment glows. The primary "Vegaspace" text gradient utilizes a highly dynamic **Oxidized Copper / Amber** shift (`#FB923C` -> `#F59E0B` -> `#A7F3D0`) for a premium metallic punch.

### Light Mode (Peach Whisper Latte)
- **60% (Base)**: A warm, ultra-light **Peach Whisper** mesh gradient (`#FFFBFA` to `#FDEEE1`).
- **30% (Surface)**: Crystal Clear Pass-Through Glass (`transparent` background with `backdrop-blur-3xl` and a 30% white inner rim light). This forces the Peach Whisper gradient to become the physical color of the frosted glass.
- **10% (Accent)**: Clean white environmental glows paired with a highly dynamic, 3-stop **Coffee Bean** text gradient (`#D27D2D` -> `#8B4513` -> `#2D211B`), providing rich, creamy contrast against the peach canvas.

## Typography Stack

We leverage `next/font/google` in `app/layout.tsx` to automatically optimize and serve our fonts with zero layout shift:

- **Primary (Sans-Serif)**: `Plus Jakarta Sans` — applied globally for a smooth, premium SaaS geometric structure.
- **Monospace**: `Roboto Mono` — used to keep the geometric x-height consistent across terminal elements, command blocks, and code UI outputs.
- **Accent (Cursive)**: `Caveat` — applied to bridge-words (like *"with"* in the hero section) to add a playful, legible handwriting contrast to the engineered UI.

## Local Development

Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

*(Note: For production performance testing without HMR WebSockets, run `npm run build && npm start`)*
