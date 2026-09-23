# Intro Loader Optimization Strategy

This document outlines the final optimization steps for `IntroLoader.tsx`. These steps should be implemented **after** the entire landing page and website structure is completed. 

The loader currently functions flawlessly as a visual entry point (playing a 3-second SVG path-tracing animation). However, to make it a true premium asset, we must use those 3 seconds to perform heavy lifting in the background before the site is revealed.

## 1. Scroll Locking (Critical UX)
Currently, a user can scroll their mouse while the loader is playing, moving the invisible page underneath. When the loader vanishes, the user might be halfway down the page, ruining the Hero section reveal.

**Implementation Plan:**
- When `IntroLoader` mounts, add `overflow: hidden` to `document.body`.
- When the 3-second timer finishes and `isLoading` becomes false, remove the lock so the user can scroll.

## 2. Asset Preloading
The Hero section will likely contain heavy assets (e.g., high-res mockups, video backgrounds, or WebGL textures). We want the browser to aggressively fetch these during the 3 seconds the loader is visible.

**Implementation Plan:**
- Create an array of critical asset URLs (images/videos).
- Inside the `IntroLoader` `useEffect`, loop through the array and trigger native browser preloading (e.g., `const img = new Image(); img.src = url;`).
- This ensures the Hero section is perfectly crisp the exact millisecond the loader disappears.

## 3. Masking Layout Shifts
Framer Motion needs a split second to measure the height and width of DOM elements (for things like sticky navbars or scroll animations). 
- **Action:** No extra code required. Simply ensuring the loader completely covers the viewport for 3 seconds gives React and Framer Motion the exact time they need to hydrate the DOM, attach event listeners, and perform layout calculations without the user seeing the elements "snap" into place.

## 4. Initial Data Fetching (Optional)
If Vegaspace requires live data (like GitHub stars, latest commits, or auth state) on the landing page:
- **Implementation Plan:** Trigger the API fetch requests in the background alongside the loader timer. By the time the loader exits, the data will be ready to inject into the React components without needing a secondary loading spinner.

---

### When to Implement
Do **NOT** implement these optimizations while building the core layout of the landing page, as it will make debugging scroll and layout issues difficult. 
Implement these steps as the **final polish** phase before deployment.
