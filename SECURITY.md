# Vegaspace-Web Security Policy

This security policy applies explicitly to the `vegaspace-web` repository, which powers our marketing, documentation, and download platform.

If you are looking for the security policy regarding the core Vegaspace desktop application or IDE environment, please refer to the `vegaspace-core` repository.

## Reporting a Vulnerability
We deeply value the security community and researchers who help keep our web infrastructure safe. If you discover a vulnerability on the Vegaspace website, please report it to us directly.

**Do not file a public GitHub issue for security vulnerabilities.**

Email your findings to `security@vegaspace.dev`.

Include a clear description of the vulnerability, the URL/endpoint affected, and steps to reproduce (or a Proof of Concept). We will acknowledge your report within 24 hours and provide a timeline for remediation.

## Scope of This Repository
The `vegaspace-web` application is built on Next.js. The primary attack surfaces we monitor include:
- **Waitlist / Lead Capture APIs**: `/api/waitlist` and similar endpoints.
- **Content Delivery**: Potential Cross-Site Scripting (XSS) vectors in rendered markdown documentation or changelogs.
- **Dependency Chain**: Vulnerabilities in npm packages (React, Tailwind, Framer Motion, GSAP).
- **Routing**: Open redirect vulnerabilities on download links or authentication callbacks.

## Web Application Security Guardrails
We enforce strict web security standards at the edge and application layers to protect visitors. **All AI Agents and Developers must adhere to these guardrails when modifying the codebase.**

### 1. HTTP Security Headers & CSP
We utilize Next.js middleware to enforce a rigid Content Security Policy (CSP) and standard security headers:
- **Strict-Transport-Security (HSTS)** is enforced globally.
- **X-Frame-Options: DENY** prevents the landing page from being embedded in malicious iframes (clickjacking).
- **Content Security Policy (CSP)** restricts `script-src` exclusively to our domain and explicitly approved, privacy-respecting analytics providers. Inline scripts (`eval`) are strictly blocked.

### 2. API Route Protection & Rate Limiting
Any serverless functions or API routes (e.g., submitting an email for early access) must be rate-limited by IP at the edge to prevent spam and enumeration attacks.
- Inputs must be **strictly validated and sanitized** server-side using schema validation libraries (like Zod) before touching any database or external service.

### 3. Environment Variable Security (Agent/Dev Rule)
- **Never expose secrets to the client.** Only non-sensitive variables strictly required by the browser should be prefixed with `NEXT_PUBLIC_`.
- Private keys, database URLs, and API tokens must remain strictly server-side.

### 4. Safe Data Rendering (Agent/Dev Rule)
- When rendering user-generated content or markdown (e.g., for changelogs), always use a sanitization library or rely on React's built-in XSS protections. 
- Avoid the use of `dangerouslySetInnerHTML` unless absolutely necessary, and if used, the payload must be pre-sanitized.

### 5. Privacy & Third-Party Trackers
Developers respect privacy, and so do we.
- We do not use invasive third-party ad trackers or sell visitor data.
- Marketing tags are kept to an absolute minimum to reduce the risk of supply-chain attacks via compromised third-party JavaScript.

### 6. Secure Cookies & Sessions (Agent/Dev Rule)
- If any session or authentication cookies are introduced, they must be configured with `HttpOnly`, `Secure`, and `SameSite=Strict` flags to mitigate XSS and CSRF attacks.
