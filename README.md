# Argument.Ai
Adversarial stress-testing for legal arguments. Fictional product; AI output is a reasoning aid, not legal advice.

    npm install && npm run dev

- Stack: Next.js 15 (App Router), Tailwind v4, GSAP + ScrollTrigger, Lenis, Motion, React Three Fiber.
- Analysis is mocked in `lib/analysis.ts` + `lib/mock-data.ts`. Replace `runAnalysis()` with a real API call; the UI needs no changes.
- 3D (`components/3d`) renders on desktop only; mobile and reduced-motion get a static fallback.
