# Testing

Use the following commands for local validation:

- pnpm install
- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm build

The test suite covers the core portfolio content and navigation requirements, plus dedicated coverage for the PayGuard IE and RegPulse IE case-study routes (`src/app/projects/payguard-ie/page.test.tsx`, `src/app/projects/regpulse-ie/page.test.tsx`, `src/app/projects/page.test.tsx`):

- Both case-study routes render.
- PayGuard IE content covers reconciliation and UAT; RegPulse IE content covers operational resilience and control evidence.
- RegPulse IE's exact legal/compliance disclaimer renders.
- Both case studies display their limitations.
- Repository links point at the verified GitHub repositories.
- A null demo URL renders "Public demo link under verification" rather than a broken anchor.
- Missing screenshots render the "Verified screenshot pending" placeholder rather than a broken image element.
- No unsupported leadership language, fake metrics or fake contact addresses appear.
- Navigation between the `/projects` index and each detailed case study works in both directions.
