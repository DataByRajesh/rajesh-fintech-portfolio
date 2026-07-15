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

Additional coverage for professional profiles, startup content and content-integrity protections (`src/content/profile.test.ts`, `src/components/SiteHeader.test.tsx`, `src/components/SiteFooter.test.tsx`, `src/components/VentureCard.test.tsx`, `src/app/about/page.test.tsx`, `src/app/experience/page.test.tsx`, `src/app/skills/page.test.tsx`, `src/app/contact/page.test.tsx`, and additions to `src/app/page.test.tsx` / `src/app/projects/page.test.tsx`):

- GitHub and LinkedIn render with the exact approved URLs and safe external-link attributes (`target="_blank"`, `rel="noreferrer noopener"`), and the raw URL is never displayed as visible link text.
- `Founder & CEO` renders only inside the AutoTime AI venture context, never as Rajesh's primary title.
- AutoTime AI Ltd and AutoTime EU Apply render with their exact verified URLs, and an unverified website/product status renders plain text instead of a broken link.
- No unsupported startup metric (user counts, funding, guaranteed outcomes) appears.
- `profile.portfolioUrl` stays `null` until the Production-URL-recording phase.
- Firebase Studio is never shown as a featured project, and no Firebase/Vercel secret, fake phone number, fake address, or unrelated third-party content appears anywhere in rendered output.
