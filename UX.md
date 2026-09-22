Vegaspace-Web UX Architecture & Laws
This document defines the strict User Experience (UX) principles, cognitive laws, and interaction standards required to build vegaspace-web. Because the target audience consists of elite developers and power users, the UX must prioritize transparency, speed, and high information density over aggressive marketing tactics.

1. Core UX Laws for Developer Tools
Jakob’s Law (Familiarity): Developers spend their lives in IDEs and terminals. The landing page must borrow mental models from these environments. Use sidebars for deep navigation, segmented controls instead of dropdowns for OS selection, and syntax-highlighted code blocks for instructions.

The Doherty Threshold (Performance): Productivity requires system response times under 400ms. All hover states, menu expansions, and tab switches must resolve within 150ms–300ms. If an interaction feels floaty or delayed, developers will subconsciously judge the Vegaspace software as sluggish.

Hick’s Law (Decision Fatigue): Minimize choices in the Hero section. A user should only have two obvious paths: a primary CTA (Download / Early Access) and a secondary CTA (Read Docs / View GitHub).

Aesthetic-Usability Effect: A highly engineered, precise UI signals that the underlying code is robust. Pixel-perfect alignment, consistent 1px borders, and disciplined typography directly build trust in the product's capability.

2. Layout & Cognitive Density
Pro-Density Typography: Adopt a base font size of 14px (using a highly legible sans-serif like Geist or Inter) instead of the standard 16px. This mimics the dense, data-rich environment of a workspace or dashboard.

The 60-30-10 Attention Rule:

60% (Base/Background): Pure structural space. Absorbs light, reduces eye strain, and provides an infinite canvas.

30% (Surfaces): Elevated cards, Bento boxes, and borders used strictly to group related information.

10% (Action): The single accent color. Reserved exclusively for semantic meaning—active states, focus rings, primary buttons, and syntax highlights. Never use it for arbitrary decoration.

Demo-First Hierarchy: Do not force users to scroll through walls of text to understand the product. The Hero section must lead with a high-fidelity, interactive product mockup that immediately proves the "Unified Workspace" thesis visually.

3. Motion & Interaction Standards
Scroll-Scrubbed Storytelling: Utilize the "Linear/Antigravity" scroll effect for the primary product demo. The UI mockup should load slightly scaled down (e.g., scale(0.85)) and expand to full width (scale(1)) seamlessly as the user scrolls. This physically draws the user into the software.

Hardware-Accelerated Micro-interactions: Use a strict, snappy easing curve (e.g., cubic-bezier(0.4, 0, 0.2, 1)) for all state changes.

Hover Dimming (Reverse Focus): Instead of making hovered elements brighter, dim the surrounding inactive elements to 0.7 opacity. This creates a focused, flashlight-like effect that feels highly technical.

4. Conversion & Trust Patterns (No "Fake Doors")
Honest CTAs: Developers despise bait-and-switch tactics. If the software is in Private Beta, the button must explicitly say "Request Early Access," not "Download Now."

Frictionless Onboarding: If capturing emails for a waitlist, use a single inline input field with instant keyboard Enter submission. Do not redirect to a multi-page form.

Fitts’s Law & Contextual Actions: Ensure primary CTAs are large, easily clickable, and repeated contextually. Include a one-click copyable terminal command (winget install vegaspace) directly below the main download button.

5. Accessibility & Keyboard Navigation (A11y)
Keyboard-First Routing: Developers navigate the web using their keyboards. Every interactive element (buttons, links, form fields) must be accessible via the Tab key.

Explicit Focus Rings: Implement a crisp, high-contrast focus state (using the 10% accent color) for all focusable elements. Never use outline: none without providing a custom visual indicator.

WCAG 2.2 AA Contrast: Ensure all primary text (headings, body copy) maintains a minimum contrast ratio of 4.5:1 against the dark background. Muted text (timestamps, secondary labels) must not drop below 3:1.