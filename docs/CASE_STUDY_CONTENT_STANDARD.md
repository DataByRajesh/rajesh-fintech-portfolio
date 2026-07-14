# Case study content standard

This is the standard for writing and maintaining PayGuard IE and RegPulse IE case-study content in `src/content/caseStudies.ts`, typed by `src/types/caseStudy.ts`.

## Source of truth

- `src/content/caseStudies.ts` is the single source of truth for case-study wording. Page components (`src/components/CaseStudyPageContent.tsx` and the two route files under `src/app/projects/`) render this data — they must not hardcode case-study prose.
- Every fact in `caseStudies.ts` must trace back to `docs/CASE_STUDY_SOURCE_AUDIT.md`, which records what was actually inspected in the source repositories and when.

## How source claims were verified

Each case study carries `sourceCommitSha` and `sourceVerificationDate`, matching the commit inspected in `docs/CASE_STUDY_SOURCE_AUDIT.md` for that repository. A claim only belongs in `caseStudies.ts` if it appears in a reviewed source document (README, sprint summary, architecture/workflow doc, `package.json`, CI workflow, or a directly fetched and verified live URL) — not from memory or assumption.

## Which wording requires evidence

Anything describing:

- what the system does (workflows, rules, lifecycle states);
- what has been delivered (sprint/phase claims);
- what is tested (unit/integration/E2E scope);
- what is deployed (live URLs, environment separation);
- what is limited or out of scope;

...must be backed by a specific source document recorded in the audit. Generic positioning statements (the one-line summary) are the two lines already approved in `docs/CONTENT_GUIDE.md` and must be reused verbatim, not reworded per page.

## Language rules

Use: "designed", "implemented", "modelled", "demonstrates", "portfolio evidence", "synthetic workflow", "verified in the repository".

Avoid: "transformed the bank", "led enterprise strategy", "guarantees compliance", "production-grade banking platform", "saved millions", "processed millions of payments", or any claim that Rajesh personally performed every enterprise role represented in a synthetic workflow.

Never publish: FIS client names or confidential employer details, real transaction/customer data, unsupported business metrics, fake testimonials, fake user counts, fake performance or reliability numbers, or claims that either project is legally compliant (RegPulse IE in particular must always carry its exact disclaimer — see below).

## The RegPulse disclaimer is exact, not paraphrased

RegPulse IE's `portfolioDisclaimer` field must always read exactly:

> Portfolio demonstration only. It does not provide legal advice or certify regulatory compliance.

Tests in `src/app/projects/regpulse-ie/page.test.tsx` assert this exact string renders. Do not paraphrase it, even for brevity.

## How to update project statuses

See `docs/PROJECT_STATUS_RULES.md` for the full rules. In short: before changing `currentStatus`, `deliveryPhases`, or `limitations` for either case study, re-run the source audit (re-fetch the current `main` commit SHA and re-read the relevant docs) and update `docs/CASE_STUDY_SOURCE_AUDIT.md` first. Never advance a status claim based on memory of a previous audit.

## How to update repository or demo links

See `docs/PROJECT_LINK_VERIFICATION.md`.

## How to add screenshots safely

See `docs/SCREENSHOT_CAPTURE_GUIDE.md`.
