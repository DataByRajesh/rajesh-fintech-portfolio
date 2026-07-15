# PayGuard IE screenshots

This directory holds genuine PayGuard IE screenshots only. Do not add AI-generated UI images, mock screenshots from unrelated systems, or screenshots of any other project.

## Naming convention

Use lowercase, hyphenated `.webp` files matching the names referenced in `src/content/caseStudies.ts`:

- `dashboard.webp`
- `reconciliation-run.webp`
- `exception-investigation.webp`
- `uat-workspace.webp`
- `reports.webp`

## Adding a screenshot

1. Capture the screenshot from a real, running instance of PayGuard IE (local or a verified deployment) — never from a mock-up.
2. Save it as `.webp` under this directory using one of the names above.
3. Add a matching entry to the `screenshots` array for the `payguard-ie` case study in `src/content/caseStudies.ts`, including descriptive `altText`.
4. Confirm the image renders correctly on `/projects/payguard-ie` and that no broken image or placeholder state remains for that slot.

Until a screenshot is added here, the case study page shows a "Verified screenshot pending" placeholder instead of a broken image.
