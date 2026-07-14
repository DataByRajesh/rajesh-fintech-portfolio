# Case study source audit

This audit records what was actually inspected in the two source repositories before any case-study content was written, so every claim published on `/projects/payguard-ie` and `/projects/regpulse-ie` can be traced back to repository evidence. Both source repositories were inspected read-only via the GitHub API (`gh api`, `gh pr list`) — nothing was committed, edited, branched or opened as a pull request in either source repository.

## PayGuard IE

- **Repository:** `DataByRajesh/payguard-ie`
- **Branch inspected:** `main`
- **Commit SHA inspected:** `90de0e7d7d3858d09196744c97f7cd13f27c809f`
- **Inspection date:** 2026-07-14
- **Documents reviewed:** `README.md`, `SPRINT1_SUMMARY.md`, `SPRINT2_SUMMARY.md`, `SPRINT3_SUMMARY.md`, `SPRINT4_SUMMARY.md`, `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`, `docs/RECONCILIATION_RULES.md`, `docs/EXCEPTION_LIFECYCLE.md`, `docs/UAT_WORKFLOW.md`, `docs/TESTING_STRATEGY.md`, `docs/SECURITY_AND_LIMITATIONS.md`, `docs/LOCAL_POSTGRES_SETUP.md`, `docs/CLOUD_DEPLOYMENT.md`, `docs/BACKUP_AND_RECOVERY.md`, `package.json`, `.github/workflows/ci.yml`
- **Open pull requests:** none (`gh pr list --repo DataByRajesh/payguard-ie --state open` returned no results)

### Completed phases supported by repository evidence

- Sprint 1: project foundation, functional Payments and Settlements areas, 12-model Prisma schema.
- Sprint 2: deterministic reconciliation engine (seven rules), `/reconciliation` and `/exceptions` pages, idempotent exception creation.
- Sprint 3: full exception investigation/resolution/approval workflow, optimistic concurrency, audit trail, UAT workspace with manual-only exception linking.
- Sprint 4: live `/reports` exports (Markdown/CSV/print HTML), real audit timeline on payment detail, `pnpm demo:reset`.
- Cloud Phase 1A/1B: PostgreSQL migration (Docker Compose locally), public Vercel Preview/Production deployment runbook, `DEMO_READ_ONLY` guard.
- Cloud Phase 2.1–2.6: real login (signed session cookies), role-based authorization (`OPS_ANALYST`/`APP_SUPPORT`/`UAT_LEAD`/`ADMIN`), authenticated audit-actor FK, real evidence-file upload (local filesystem + Vercel Blob adapters), per-user rate limiting, structured JSON logging, backup/recovery runbook.

### Deployment evidence found

- A documented, repeatable Vercel deployment runbook (`docs/CLOUD_DEPLOYMENT.md`) describing isolated Preview/Production Postgres databases, environment variables, `DEMO_READ_ONLY=true`, and a verification checklist.
- **No live demo URL is recorded anywhere in the repository.** The runbook explains how to stand the deployment up but does not state that it has been executed against a real Vercel project, and no `*.vercel.app` URL appears in any reviewed document.
- CI workflow (`.github/workflows/ci.yml`) runs Prisma validate, lint, typecheck, unit/integration tests and a production build against a real Postgres service container on every push/PR to `main`.

### Automated-test evidence found

- Vitest unit tests: reconciliation rule logic (positive/negative/boundary/missing-data), dedupe-fingerprint and run-summary aggregation, full exception-workflow domain layer, currency formatting, status-badge presentation. Sprint 4 summary records 121 Vitest unit + service-integration tests passing at that point in delivery.
- Vitest service-layer integration tests against a real disposable Postgres database (`payguard_vitest`) for optimistic concurrency, transactional audit writes and the full lifecycle path.
- Playwright E2E specs: `auth.spec.ts`, `rbac.spec.ts`, `smoke.spec.ts`, `reconciliation.spec.ts`, `exception-lifecycle.spec.ts`, `uat.spec.ts`, run against a dedicated `payguard_test` database.

### Documented limitations (repository's own words)

- No real payment rails, message queue, background jobs or multi-tenancy.
- Duplicate-payment detection is a documented heuristic (customer/amount/currency/method fingerprint within a time window), not a guaranteed idempotency check — has known false-positive and false-negative scenarios.
- No pagination/streaming in the reconciliation engine or report exports — fine at seed-data scale, not tuned for production volume.
- Sessions are stateless with no server-side revocation before expiry (only `User.isActive` gates access).
- Rate limiting is a fixed window, not sliding — allows a short burst across a window boundary.
- No per-report authorization — every logged-in user can pull every report regardless of role.
- Local Postgres has no backup story by design (disposable, reseedable); cloud relies entirely on the managed provider's own PITR, not a project-run backup job.
- No email/real-time notifications on assignment, SLA breach or rejection.

### Unresolved or contradictory claims found during audit

- `docs/EXCEPTION_LIFECYCLE.md`'s "Known limitations" section states "Evidence is metadata-only; there is no file upload or cloud storage" — this is superseded by Cloud Phase 2.4 (documented in the README, `ARCHITECTURE.md` and `SECURITY_AND_LIMITATIONS.md`), which adds real file upload via local-filesystem and Vercel Blob adapters. Treated as a stale doc fragment; the newer Cloud Phase 2.4 evidence-upload capability is what is published, not the older "metadata-only" claim.

### URLs requiring manual verification

- None found. No live-demo URL exists in the repository to verify.

### Facts approved for portfolio publication

- Primary positioning: "Payments operations, reconciliation, exception-investigation and UAT evidence platform for Irish and European FinTech teams."
- The seven deterministic reconciliation rules, their business purpose and documented limitations.
- The exception lifecycle state machine, assignment/root-cause/resolution/approval rules, optimistic concurrency, and audit trail.
- The UAT workspace and its manual-only exception-linking rule.
- Authentication, RBAC, evidence-file upload, rate limiting and structured logging as Cloud Phase 2 capabilities.
- The three-tier test strategy (Vitest unit, Vitest service-integration, Playwright E2E) and its documented scope.
- All documented limitations listed above, published as limitations, not hidden.
- Repository URL: `https://github.com/DataByRajesh/payguard-ie`.

### Facts excluded from portfolio publication

- Any live-demo URL (none exists in the source repository).
- Any specific transaction volume, monetary figure, uptime/reliability statistic, or user count — none is documented and none is invented.
- The stale "evidence is metadata-only" limitation, superseded by later Cloud Phase 2.4 evidence.
- Any claim that this is a production banking system or connects to real payment rails.

## RegPulse IE

- **Repository:** `DataByRajesh/regpulse-ie`
- **Branch inspected:** `main`
- **Commit SHA inspected:** `9c653a828d5936334d9af345cf10a4e4c2f8aa64`
- **Inspection date:** 2026-07-14
- **Documents reviewed:** `README.md`, `docs/SPRINT_1_SCOPE.md`, `docs/SPRINT_2_SCOPE.md`, `docs/SPRINT_3_SCOPE.md`, `docs/SPRINT_4_PORTFOLIO_PACKAGING.md`, `docs/CLOUD_PHASE_1_DEPLOYMENT.md`, `docs/CLOUD_PHASE_2_HARDENING.md`, `docs/FINAL_RELEASE_CHECKLIST.md`, `docs/CONTROL_MODEL.md`, `docs/OBLIGATION_MODEL.md`, `docs/DATA_MODEL.md`, `docs/EVIDENCE_WORKFLOW.md`, `docs/CONTROL_ASSESSMENT_WORKFLOW.md`, `docs/GAP_AND_REMEDIATION_WORKFLOW.md`, `docs/ICT_INCIDENT_WORKFLOW.md`, `docs/THIRD_PARTY_RISK_WORKFLOW.md`, `docs/READINESS_MODEL.md`, `docs/SECURITY_AND_LIMITATIONS.md`, `docs/TESTING.md`, `docs/LOCAL_POSTGRES.md`, `package.json`, `.github/workflows/ci.yml`
- **Open pull requests:** none (`gh pr list --repo DataByRajesh/regpulse-ie --state open` returned no results)

### Completed phases supported by repository evidence

- Sprint 1: obligation library, control register, deterministic dashboard, read-only navigation.
- Sprint 2: evidence requests/submissions, independent review, control assessments, audit history.
- Sprint 3: compliance-gap register, remediation actions, accepted-risk workflow, ICT-incident register, third-party provider/service risk register.
- Sprint 4: management report pack (`/reports`), CSV/JSON/Markdown exports, CI quality gate, final documentation pass.
- Cloud Phase 1: PostgreSQL runtime, Prisma migrations, isolated Preview/Production Vercel deployment.
- Cloud Phase 2: portfolio-safe identity (signed session cookies), RBAC, guarded destructive-reset, mutation rate limiting, Vercel Blob-backed evidence files.

### Deployment evidence found

- `docs/CLOUD_PHASE_1_DEPLOYMENT.md` records a specific, dated deployment: Vercel project `regpulse-ie`, isolated Preview/Production Neon Postgres databases, migration `0001_init` applied to both (2026-07-13), seed verification counts, and production smoke tests returning `200` for `/` and `/dashboard`.
- **Production URL documented:** `https://regpulse-ie.vercel.app`. Fetched directly during this audit (2026-07-14): the page loads successfully, shows the RegPulse IE role-selection/demo workspace with the "portfolio demonstration... does not provide legal advice or certify regulatory compliance" disclaimer visible, and exposes no secrets, credentials or destructive controls. Approved as the verified live-demo link.
- A Preview URL is also documented (`https://regpulse-n5m1adpwv-rajs-projects-6830d68b.vercel.app` at time of writing) but is explicitly stated to sit behind Vercel account SSO protection — excluded from publication as a private/protected URL, per the link-safety rule against exposing private Preview URLs.
- CI workflow (`.github/workflows/ci.yml`) runs install, Prisma generate/migrate, deterministic reset, lint, typecheck, Vitest, Playwright and production build against a real Postgres service container on every push/PR to `main`.

### Automated-test evidence found

- Vitest coverage: filters, dashboard metrics, evidence rules, assessment rules, gap/remediation rules, ICT-incident rules, third-party risk rules, RBAC, rate limiting, and Sprint 4 report-export formatting.
- Playwright coverage: authenticated dashboard access, evidence rejection/resubmission/approval, control-detail integration, assessment submission/approval, queue filters, Sprint 3 gap/incident/third-party journeys, Sprint 4 report exports — signing in through the Phase 2 identity page and switching roles where independent review is required.
- `docs/TESTING.md` records a fresh-clone local gate completed outside OneDrive with install, Prisma generate/validate, PostgreSQL startup, migrations, deterministic reset, lint, typecheck, Vitest, Playwright and build all passing.

### Documented limitations (repository's own words)

- No production SSO or enterprise identity-provider integration — session-based role simulation only.
- No notifications, background jobs, queue workers or scheduled control attestations.
- No real regulated-institution data — all scenarios are deterministic synthetic examples.
- DORA-oriented labels and workflow rules are explicitly simplified for portfolio review and do not claim complete DORA coverage.
- Report exports are operational demo exports, not formal regulatory submissions.
- Readiness labels ("Not assessed" / "Action required" / "Partially ready" / "Ready for review") are stated to be internal deterministic indicators, not legal conclusions or certification claims.

### Unresolved or contradictory claims found during audit

- None found. RegPulse IE's documentation is internally consistent between the README, sprint scope docs and cloud-phase runbooks — no stale or superseded claims were identified.

### URLs requiring manual verification

- Production URL `https://regpulse-ie.vercel.app` was fetched and verified as part of this audit (see above) — no further manual verification required unless the deployment changes.
- The documented Preview URL is intentionally excluded from publication (protected by Vercel SSO) and requires no further action.

### Facts approved for portfolio publication

- Primary positioning: "DORA-oriented operational resilience, control evidence and remediation platform for Irish and European FinTech teams."
- The obligation library, control register, evidence request/review, control-assessment, compliance-gap/remediation, accepted-risk, ICT-incident and third-party risk workflows as documented.
- The management report pack and CSV/JSON/Markdown export capability.
- PostgreSQL runtime, Prisma migrations, identity/RBAC, guarded destructive reset, mutation rate limiting and evidence-file storage (filesystem locally, Vercel Blob in cloud).
- CI quality gate scope (install, Prisma generate/migrate, deterministic reset, lint, typecheck, Vitest, Playwright, build).
- The verified live-demo Production URL: `https://regpulse-ie.vercel.app`.
- The exact required disclaimer: "Portfolio demonstration only. It does not provide legal advice or certify regulatory compliance."
- All documented limitations listed above, published as limitations, not hidden.
- Repository URL: `https://github.com/DataByRajesh/regpulse-ie`.

### Facts excluded from portfolio publication

- The protected Preview URL (SSO-gated, not a public link).
- Any specific compliance percentage, certification claim, or regulatory-approval statement — the repository explicitly disclaims these.
- Any specific user count, incident-response-time statistic, or third-party risk metric beyond what is structurally documented (seed counts used for verification, not portfolio marketing claims).
- Any claim that RegPulse IE represents a real regulated institution's complete operating model.
