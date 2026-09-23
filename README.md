# Vegaspace Web

Vegaspace is a unified developer workspace bridging IDE, terminal, and DevOps pipelines. This repository contains the Next.js frontend, utilizing Tailwind CSS v4, Framer Motion for high-performance animations, and `next-themes` for robust light/dark mode handling.

## The Landing Page & Design Journey

During the initial phase of development on the `dev/Navbar` branch, we focused on establishing a premium "Studio / Apple" aesthetic with a highly dynamic Floating Pill Navbar and an Orbital Hero Section.

### What We Tested
1. **The Floating Pill Navbar**: Built a dynamic island navigation pattern that spans wide at the top of the page, and shrinks into a frosted glass pill when scrolled down.
2. **Multiple Light Mode Themes**: We built a playground iterating through three distinct light mode styles before landing on our final design:
   - *Option 1 (The Studio Look)*: Mist Gray base, Pure White cards.
   - *Option 2 (The Clinical Look)*: Pure White base, Mist Gray cards.
   - *Option 3 (The Apple Look)*: Stepped grays with Pure Black accents.
3. **Dark Mode Bases**: We extensively tested 60% base colors for Dark Mode:
   - *Charcoal Ink (`#242424`)*: Looked good, but lacked contrast.
   - *Midnight Navy (`#18202F`)*: Too colorful, distracted from the tech aesthetic.
   - *Soft Black (`#211F1D`)*: Warmer, but still lacked punch.
   - *Pure Black (`#000000`)*: High contrast, but felt flat and harsh.
   - ***Final Choice: Deep Space Black (`#0E0E0E`)***: The ultimate OLED Studio black, providing immense depth without being overly harsh.
4. **Pass-Through Glassmorphism Parallax**: We fixed the background elements (the canvas, the glow, and the rings) to the viewport while wrapping the scrolling content in a higher z-index. The dashboard mockup uses `rgba(36,36,36,0.4)` with `backdrop-blur-3xl`, allowing the fixed background elements to slide cleanly underneath and blur dynamically as you scroll.
5. **Typography Refinements**: After initially trying Vercel's `Geist` and Google's `Roboto Flex`, we pivoted entirely to **Plus Jakarta Sans** as the primary `font-sans` to inject a smooth, geometric, and highly legible SaaS aesthetic into the Navbar, buttons, and all smaller UI text.

### The Final 60-30-10 Color System
We adopted a strict 60-30-10 rule for visual hierarchy and maximum impact.

**Dark Mode (Deep Space OLED)**
- **60% (Base)**: Deep Space Black (`#0E0E0E`), locked `fixed` to the viewport.
- **30% (Surface)**: Frosted Glass (`rgba(36, 36, 36, 0.4)`) with heavy blurring (`backdrop-blur-3xl`) to create the pass-through parallax effect.
- **10% (Accent)**: A stripped-back, high-end technical feel. We removed the floating purple/fuchsia icons and replaced the ambient background glow with Cool Silver (`#AAB2BD`). The primary "Vegaspace" text gradient is an icy radiant blue (`#D8E2FF` to `#A7B7E7`).

**Light Mode (The Apple/Studio Hybrid)**
- **60% (Base)**: Mist Gray (`#DCE1E6`)
- **30% (Surface)**: Pure White (`#FFFFFF`) for the dashboard mockup so it pops aggressively off the canvas.
- **10% (Accent)**: Pure Black (`#000000`) for the primary CTA, creating ultimate visual restraint.

### Final Typography Stack
- **Primary (Sans-Serif)**: `Plus Jakarta Sans` — applied globally for a smooth, premium SaaS geometric structure.
- **Monospace**: `Roboto Mono` to keep the geometric x-height consistent across terminal and UI outputs.
- **Accent (Cursive)**: `Caveat` — applied to bridge-words like *"with"* to add a playful, 5-star legible handwriting contrast to the engineered UI.

## Getting Started

First, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
