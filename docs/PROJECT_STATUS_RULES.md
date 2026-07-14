# Project status rules

- Keep the portfolio in a static-first, no-database, no-authentication architecture.
- Do not claim completed cloud phases or other implementation milestones that are not yet complete.
- Use portfolio concept descriptions for unfinished projects and label them as such.
- Avoid introducing unverified claims about achievements, compliance certification or leadership scope.

## Evidence-backed case studies (PayGuard IE, RegPulse IE)

PayGuard IE and RegPulse IE have moved from placeholder-only summaries to detailed, evidence-backed case studies (`/projects/payguard-ie`, `/projects/regpulse-ie`). The same discipline still applies, tightened for these two projects specifically:

- Every delivery-phase, testing, deployment or limitation claim in `src/content/caseStudies.ts` must trace to a specific document reviewed in `docs/CASE_STUDY_SOURCE_AUDIT.md` — never to memory of a previous conversation or a previous version of this portfolio.
- **To update a project status claim**: re-fetch the current `main` commit SHA of the relevant source repository, re-read the sprint/architecture/security docs that changed, update `docs/CASE_STUDY_SOURCE_AUDIT.md` with the new commit SHA and inspection date, and only then update `currentStatus`, `deliveryPhases` or `limitations` in `caseStudies.ts`. Do not advance a status claim without repeating this.
- **To prevent stale project-phase claims**: treat `sourceCommitSha` and `sourceVerificationDate` on each case study as a freshness signal. If either repository has moved on materially since that commit, the case study is due for re-audit before any further wording changes are made on top of it.
- RegPulse IE's exact legal/compliance disclaimer must never be paraphrased — see `docs/CASE_STUDY_CONTENT_STANDARD.md`.
- Neither project may claim a live demo URL, a completed production deployment, or a specific business metric unless that fact is recorded as verified in `docs/CASE_STUDY_SOURCE_AUDIT.md`.
