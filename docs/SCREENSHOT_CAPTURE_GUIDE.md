# Screenshot capture guide

This is the procedure for adding genuine screenshots to the PayGuard IE and RegPulse IE case studies. It exists to prevent broken images, mock screenshots, and AI-generated UI images from ever entering the portfolio.

## Rules

- Only capture screenshots from a real, running instance of the project — a local dev server you have built and run yourself, or a verified live deployment recorded in `docs/CASE_STUDY_SOURCE_AUDIT.md`.
- Never use an AI image generator, a mock-up tool, or a screenshot from an unrelated system.
- Never commit a screenshot that reveals a real secret, credential, or non-synthetic personal data — both projects are seeded with synthetic data only, so this should not occur if screenshots are taken from a properly seeded environment, but check before committing regardless.

## Directories and naming

- PayGuard IE: `public/projects/payguard-ie/` — see the README in that directory for the exact expected file names (`dashboard.webp`, `reconciliation-run.webp`, `exception-investigation.webp`, `uat-workspace.webp`, `reports.webp`).
- RegPulse IE: `public/projects/regpulse-ie/` — see the README in that directory (`dashboard.webp`, `control-register.webp`, `evidence-review.webp`, `remediation-workflow.webp`, `management-report.webp`).
- Use `.webp` for file size. Use the exact lowercase, hyphenated names listed in each README so they match what `src/content/caseStudies.ts` will reference.

## Adding a screenshot end to end

1. Run the source project locally (or open the verified live deployment) and navigate to the screen you want to capture.
2. Save the capture as `.webp` under the correct `public/projects/<slug>/` directory, using one of the approved file names.
3. In `src/content/caseStudies.ts`, add an entry to that case study's `screenshots` array:

   ```ts
   screenshots: [
     { fileName: "dashboard.webp", altText: "PayGuard IE dashboard showing live exception and reconciliation stat tiles" },
   ],
   ```

4. Write `altText` that describes what is genuinely shown — do not describe a feature the screenshot doesn't actually demonstrate.
5. Run `pnpm dev` and open the relevant `/projects/<slug>` route to confirm the image renders with no broken image icon and no leftover "Verified screenshot pending" placeholder for that slot.
6. Run `pnpm test` and `pnpm build` to confirm nothing else regressed.

## What happens with no screenshots

`ScreenshotPlaceholder` (`src/components/ScreenshotPlaceholder.tsx`) renders a professional "Verified screenshot pending" panel whenever a case study's `screenshots` field is `null` or empty — this is intentional and must stay the default until genuine screenshots are added. Do not replace this placeholder with a fake or generic stock image.
