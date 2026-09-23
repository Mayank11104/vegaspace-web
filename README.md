# Vegaspace Web

Vegaspace is a unified developer workspace bridging IDE, terminal, and DevOps pipelines. This repository contains the Next.js frontend, utilizing Tailwind CSS v4, Framer Motion for high-performance animations, and `next-themes` for robust light/dark mode handling.

## The Landing Page & Design Architecture

During the initial phase of development on the `dev/Navbar` branch, we focused on establishing a premium, hyper-dynamic "Studio / SaaS" aesthetic. The core of this aesthetic relies on a strict **60-30-10 Color System** combined with a "Pass-Through Glassmorphism Parallax" effect, where the background elements are fixed to the viewport and the glass UI slides over them.

### The Final 60-30-10 Color System

**Dark Mode (Deep Space OLED)**
- **60% (Base)**: Deep Space Black (`#0E0E0E`), locked `fixed` to the viewport.
- **30% (Surface)**: Premium Frosted Glass (`rgba(36, 36, 36, 0.4)`) heavily blurred (`backdrop-blur-3xl`), upgraded with a physical SVG noise texture overlay (`mix-blend-overlay`) and an Apple-style inner inset rim light to prevent flat CSS rendering.
- **10% (Accent)**: A deeply atmospheric and high-end finish. We use **Sage Dew** (`rgba(216,234,215,0.2)`) for the massive ambient environment glows. The primary "Vegaspace" text gradient utilizes a highly dynamic **Oxidized Copper / Amber** shift (`#FB923C` -> `#F59E0B` -> `#A7F3D0`) for a premium metallic punch.

**Light Mode (Peach Whisper Latte)**
- **60% (Base)**: A warm, ultra-light **Peach Whisper** mesh gradient (`#FFFBFA` to `#FDEEE1`).
- **30% (Surface)**: Crystal Clear Pass-Through Glass (`transparent` background with `backdrop-blur-3xl` and a 30% white inner rim light). This forces the Peach Whisper gradient to become the physical color of the frosted glass.
- **10% (Accent)**: Clean white environmental glows paired with a highly dynamic, 3-stop **Coffee Bean** text gradient (`#D27D2D` -> `#8B4513` -> `#2D211B`), providing rich, creamy contrast against the peach canvas.

### Final Typography Stack
- **Primary (Sans-Serif)**: `Plus Jakarta Sans` — applied globally for a smooth, premium SaaS geometric structure.
- **Monospace**: `Roboto Mono` to keep the geometric x-height consistent across terminal and UI outputs.
- **Accent (Cursive)**: `Caveat` — applied to bridge-words like *"with"* to add a playful, legible handwriting contrast to the engineered UI.

## Getting Started

First, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
