# Content guide

This portfolio is intentionally static-first and uses typed content modules under src/content as the source of truth.

## Core positioning
- Name: Rajesh Kumar Alagesan
- Primary title: FinTech Systems Analyst
- Supporting title: Payments, Reconciliation, UAT and Operational Controls

## Content rules
- Do not invent confidential FIS details, client names, metrics or leadership responsibilities.
- Keep project descriptions high level and clearly marked as portfolio concepts.
- Use null for the contact email until the details are finalised.

## Case-study content

PayGuard IE and RegPulse IE have detailed case studies at `/projects/payguard-ie` and `/projects/regpulse-ie`, sourced from `src/content/caseStudies.ts` (typed by `src/types/caseStudy.ts`). See `docs/CASE_STUDY_CONTENT_STANDARD.md` for the full content standard, `docs/CASE_STUDY_SOURCE_AUDIT.md` for what was verified in each source repository, `docs/PROJECT_LINK_VERIFICATION.md` for repository/demo-link rules, and `docs/SCREENSHOT_CAPTURE_GUIDE.md` for adding genuine screenshots. The `/projects` index summaries in `src/content/projects.ts` should stay in sync with the positioning lines in `caseStudies.ts` — do not let them drift into different wording.
