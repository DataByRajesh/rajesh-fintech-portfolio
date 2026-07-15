# Rajesh Kumar Alagesan | FinTech Systems Analyst

This repository now contains a Next.js App Router portfolio foundation for Rajesh Kumar Alagesan. It is built with TypeScript, Tailwind CSS, pnpm and a static-first structure.

## Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- pnpm
- src/ directory with @/* path alias
- ESLint
- Vitest and Testing Library

## Routes

- /
- /experience
- /projects
- /projects/payguard-ie
- /projects/regpulse-ie
- /skills
- /about
- /contact

## Case studies

`/projects/payguard-ie` and `/projects/regpulse-ie` are evidence-backed case studies sourced from `src/content/caseStudies.ts` (typed by `src/types/caseStudy.ts`). See `docs/CASE_STUDY_SOURCE_AUDIT.md` for what was verified in each source repository and when, `docs/CASE_STUDY_CONTENT_STANDARD.md` for the content rules, `docs/PROJECT_LINK_VERIFICATION.md` for repository/demo-link rules, and `docs/SCREENSHOT_CAPTURE_GUIDE.md` for adding genuine screenshots.

## Professional profiles and startup work

- GitHub and LinkedIn are linked from the header, homepage, and Contact page — see `docs/PROJECT_LINK_VERIFICATION.md`.
- **AutoTime AI Ltd** (`https://www.autotimeai.com`) and its live product **AutoTime EU Apply** (`https://autotime-eu-apply.vercel.app/`) are Rajesh's independent startup work, shown in a dedicated section on the homepage, `/projects` and the Contact page — clearly separate from FIS employment and the PayGuard IE / RegPulse IE FinTech case studies. See `docs/STARTUP_AND_PRODUCT_CONTENT.md`.
- This recruiter portfolio and AutoTime's websites are deployed from separate repositories to separate Vercel projects — see `docs/PROJECT_LINK_VERIFICATION.md` for the canonical-URL rule.

## Local development

- pnpm install
- pnpm dev

## Validation

- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm build
