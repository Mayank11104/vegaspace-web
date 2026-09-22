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
3. **Typography Experimentation**: We started with Vercel's default `Geist` fonts, tested `Plus Jakarta Sans` for a wider SaaS feel, and ultimately locked in `Roboto Flex` (the open-source Google Sans Flex) to achieve a highly engineered, sharp but smooth UI. We experimented with `Instrument Serif` for accents, before pivoting to `Caveat` for a more organic, handwriting-style highlight.

### The Final 60-30-10 Color System
We adopted a strict 60-30-10 rule for visual hierarchy and maximum impact.

**Dark Mode (Charcoal Ink)**
- **60% (Base)**: Charcoal Ink (`#242424`)
- **30% (Surface)**: Frosted Charcoal (`rgba(36, 36, 36, 0.6)`) and pure white borders at 5-10% opacity.
- **10% (Accent)**: Stone Gray (`#8D8A84`) for muted text, stark white for primary typography, and a massive background radial glow (Purple to Indigo).

**Light Mode (The Apple/Studio Hybrid)**
- **60% (Base)**: Mist Gray (`#DCE1E6`)
- **30% (Surface)**: Pure White (`#FFFFFF`) for the dashboard mockup so it pops aggressively off the canvas.
- **10% (Accent)**: Pure Black (`#000000`) for the primary CTA, creating ultimate visual restraint.

### Final Typography Stack
- **Primary (Sans-Serif)**: `Roboto Flex` (Weight `450` specifically used in the Navbar to soften the sharpness and emulate Google Sans Flex perfectly).
- **Monospace**: `Roboto Mono` to keep the geometric x-height consistent across terminal and UI outputs.
- **Accent (Cursive)**: `Caveat` — applied to bridge-words like *"with"* to add a playful, 5-star legible handwriting contrast to the engineered UI.

## Getting Started

First, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
