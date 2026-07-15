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

## Professional profile and startup content

- `src/content/profile.ts` is the only source of truth for `socialLinks` (GitHub, LinkedIn) and `portfolioUrl`. Do not hardcode these links separately in page components.
- `src/content/ventures.ts` (typed by `src/types/venture.ts`) is the only source of truth for AutoTime AI Ltd and AutoTime EU Apply. `Founder & CEO` may only ever appear as a venture's `relationship` field — never as Rajesh's primary or supporting title.
- `src/content/about.ts` and `src/content/experience.ts` hold the About/Experience page copy; `src/content/skills.ts` holds categorised skills (`skillCategories`). Keep this typed content as the source of truth rather than hardcoding prose in page components.
- See `docs/STARTUP_AND_PRODUCT_CONTENT.md` for the full rules on separating startup content from FIS employment and FinTech case-study content, and `docs/PROJECT_LINK_VERIFICATION.md` for how each external link was verified.
- See `docs/PREVIOUS_PORTFOLIO_REFERENCE_AUDIT.md` for the source-authority order used when reconciling content against the previous Firebase Studio portfolio, and what was and wasn't accessible there.
