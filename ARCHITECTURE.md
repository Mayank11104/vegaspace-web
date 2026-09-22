# Vegaspace-Web Architecture & Folder Structure

To maintain a high-performance, easy-to-debug, and highly scalable codebase, `vegaspace-web` strictly follows a **Feature-Driven Architecture** (inspired by Feature-Sliced Design).

All contributors must adhere to this structure when adding new pages or features.

## The Structure

```text
vegaspace-web/
├── app/                      # 1. ROUTING ONLY (No heavy business logic here)
│   ├── (marketing)/          # Route group for landing pages
│   │   ├── page.tsx          # Landing page (imports from features/landing)
│   │   └── layout.tsx
│   ├── api/                  # API endpoints
│   │   └── waitlist/route.ts
│   ├── globals.css
│   └── layout.tsx            # Global Root layout
│
├── features/                 # 2. FEATURE MODULES (The core of the app)
│   ├── landing/              # Everything related to the main landing page
│   │   ├── components/       # e.g., HeroSection, FeatureGrid, InteractiveMockup
│   │   ├── hooks/            # e.g., useScrollScrub()
│   │   └── types.ts
│   │
│   ├── waitlist/             # Everything related to early-access capture
│   │   ├── components/       # e.g., WaitlistForm, SuccessToast
│   │   ├── actions.ts        # Server actions for submitting emails
│   │   ├── schema.ts         # Zod validation schema
│   │   └── api.ts            # Client-side API fetchers
│   │
│   └── docs/                 # Everything related to documentation rendering
│       ├── components/       # e.g., Sidebar, CodeBlock, MdxRenderer
│       └── utils.ts
│
├── components/               # 3. SHARED / DUMB UI (Design System)
│   ├── ui/                   # Primitive elements (Buttons, Inputs, Modals)
│   ├── theme-provider.tsx    # Theme toggler context
│   └── icons.tsx             # Shared SVGs
│
├── lib/                      # 4. GLOBAL UTILITIES
│   ├── utils.ts              # e.g., tailwind merge (cn) function
│   ├── constants.ts          # Global static data (social links, config)
│   └── rate-limit.ts         # Security utilities
│
└── types/                    # 5. GLOBAL TYPES
    └── index.d.ts            # Types used across multiple features
```

## Architectural Rules

1. **Self-Contained Features**: If you are building a new feature (like `waitlist`), all its components, API calls, and logic must live inside `features/waitlist/`. Do not scatter them across the global `components` folder.
2. **Thin Route Files**: Files inside the `app/` directory should act purely as entry points. They should import components from the `features/` directory and render them. No complex state or business logic should live inside `app/page.tsx`.
3. **Shared UI**: The `components/ui/` folder is reserved strictly for generic, reusable design system pieces (like a generic `<Button />` or `<Input />`). These components should not contain feature-specific business logic.
4. **Strict Boundaries**: A feature module should rarely import from another feature module. If two features need the same code, that code belongs in `components/`, `lib/`, or `types/`.
