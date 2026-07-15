import type { CaseStudy } from "@/types/caseStudy";

export const portfolioDisclaimer =
  "Portfolio demonstration only. Synthetic data. Does not connect to real payment rails and does not submit payments automatically.";

export const regPulseLegalDisclaimer =
  "Portfolio demonstration only. It does not provide legal advice or certify regulatory compliance.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "payguard-ie",
    projectName: "PayGuard IE",
    positioning:
      "Payments operations, reconciliation, exception-investigation and UAT evidence platform for Irish and European FinTech teams.",
    roleRelevance: [
      "Financial Systems Analyst",
      "Application Analyst",
      "Business Systems Analyst",
      "Payments Analyst",
      "UAT Analyst",
      "Technical Business Analyst",
    ],
    problemContext:
      "Payments operations teams need a way to detect settlement discrepancies, investigate exceptions with a full audit trail, and provide UAT evidence before a release is signed off. PayGuard IE models this workflow end to end as a portfolio demonstration, using synthetic payment and settlement data.",
    intendedUsers: [
      "Operations analysts reviewing reconciliation results",
      "Application support analysts investigating exception cases",
      "UAT leads recording test execution evidence",
      "Administrators managing user access and roles",
    ],
    businessWorkflows: [
      "Trigger a reconciliation run and review its results against seeded payments and settlements",
      "Investigate an exception case from assignment through root-cause analysis to resolution",
      "Route a resolved exception through independent-reviewer approval before closure",
      "Record a UAT test execution and, where relevant, manually link a failure to an existing exception",
      "Export reconciliation, exception, UAT and payments/settlements reports as Markdown, CSV or print-friendly HTML",
    ],
    analystResponsibilities: [
      "Interpreting reconciliation rule output to judge severity and next action",
      "Structuring an exception investigation: assignment, typed notes, root-cause categorisation",
      "Applying independent-review discipline — the approver must differ from the resolver",
      "Recording UAT evidence and exercising judgement on whether a failure should be linked to an existing exception, since linking is always a manual decision",
      "Reading an audit trail to reconstruct exactly what happened to a case and when",
    ],
    domainCapabilities: [
      "Seven deterministic reconciliation rules: missing settlement, amount mismatch, currency mismatch, duplicate payment, delayed settlement, stuck payment, invalid status combination",
      "Idempotent exception generation — re-running reconciliation against unchanged data never creates duplicate open exceptions",
      "A five-status exception lifecycle (NEW to CLOSED) with SLA-state tracking across five states",
      "Optimistic concurrency on every exception case, preventing silently lost concurrent edits",
      "A full transactional audit history for every mutation",
      "Role-based authorization across OPS_ANALYST, APP_SUPPORT, UAT_LEAD and ADMIN roles",
    ],
    systemArchitecture: [
      "Next.js App Router application with Server Components for reads and Server Actions for every mutation — no separate backend service",
      "A consistent four-layer shape for every non-trivial feature: UI, Server Actions, an orchestration/service layer, and a persistence layer — used identically by the reconciliation engine, the exception workflow and the UAT workflow",
      "A pure domain layer (reconciliation rules, state machine, SLA calculation) with zero Prisma, React or Next.js imports, unit-tested with fixed timestamps",
      "PostgreSQL via Prisma, using the same database engine locally (Docker Compose) and in the cloud (managed Postgres), with isolated databases per environment",
      "Signed session-cookie authentication with role-based authorization checked on every mutating Server Action",
    ],
    dataAndControlConsiderations: [
      "Money is always stored as an integer minor-unit column, never a float, to avoid rounding errors",
      "Duplicate-payment detection is a documented heuristic (customer, amount, currency, method fingerprint within a time window) with known false-positive and false-negative scenarios — this is explicitly not a guaranteed idempotency check",
      "Approval requires at least one evidence record before an exception can close, and the approver must be a different user than the resolver",
      "Every exception case carries a version column so a stale concurrent update is rejected rather than silently overwritten",
      "Evidence files are stored through a local-filesystem adapter in development and a Vercel Blob adapter in the cloud demo, with a 10MB size cap and MIME allow-list",
      "Every mutating action is rate-limited per user, and every server-side error is logged as structured JSON",
    ],
    testingAndQualityEvidence: [
      "Vitest unit tests covering every reconciliation rule's positive, negative, boundary and missing-data cases, plus the full exception-workflow domain layer",
      "Vitest service-layer integration tests against a real, disposable Postgres database for optimistic concurrency and transactional audit-write behaviour",
      "Playwright end-to-end journeys covering authentication, RBAC, the reconciliation run flow, the full exception-investigation lifecycle, and the UAT record-and-link flow",
      "A GitHub Actions CI workflow that runs Prisma validation, lint, typecheck, unit/integration tests and a production build against a real Postgres service container on every push and pull request to main",
    ],
    deliveryPhases: [
      { name: "Sprint 1", summary: "Project foundation and functional Payments and Settlements areas." },
      { name: "Sprint 2", summary: "Deterministic reconciliation engine with idempotent exception creation." },
      { name: "Sprint 3", summary: "Full exception investigation, resolution and approval workflow, plus the UAT workspace." },
      { name: "Sprint 4", summary: "Live report exports, a real payment audit timeline, and one-command demo reset." },
      { name: "Cloud Phase 1", summary: "Migration to PostgreSQL and a documented Vercel deployment runbook." },
      { name: "Cloud Phase 2", summary: "Real authentication, role-based authorization, evidence-file upload, rate limiting and structured logging." },
    ],
    currentStatus:
      "All six delivery phases are represented in the repository with unit, integration and end-to-end test coverage and a passing CI workflow. No live demo URL is documented in the source repository, so the public demo link is not yet available.",
    limitations: [
      "Uses entirely synthetic seed data — no real payment rails, real customers or real transactions are involved",
      "Does not submit payments automatically and has no connection to any bank, card scheme or payment processor",
      "The seven reconciliation rules are portfolio demonstrations of deterministic rule design, not a complete fraud or transaction-monitoring control suite",
      "No pagination in the reconciliation engine or report exports — appropriate at this project's seed-data scale, not tuned for production volume",
      "Sessions are stateless with no server-side revocation before expiry beyond deactivating a user",
      "No live demo URL is currently published — the deployment runbook is documented but no public environment has been verified as live",
    ],
    portfolioDisclaimer,
    repositoryUrl: "https://github.com/DataByRajesh/payguard-ie",
    liveDemoUrl: null,
    screenshots: null,
    sourceCommitSha: "90de0e7d7d3858d09196744c97f7cd13f27c809f",
    sourceVerificationDate: "2026-07-14",
    evidenceReferences: [
      { label: "Reconciliation rules", detail: "docs/RECONCILIATION_RULES.md — seven rules, thresholds and documented limitations" },
      { label: "Exception lifecycle", detail: "docs/EXCEPTION_LIFECYCLE.md — state machine, approval and audit-trail rules" },
      { label: "UAT workflow", detail: "docs/UAT_WORKFLOW.md — manual-only exception linking" },
      { label: "Testing strategy", detail: "docs/TESTING_STRATEGY.md — three-layer test approach" },
      { label: "Security and limitations", detail: "docs/SECURITY_AND_LIMITATIONS.md — consolidated scope boundaries" },
    ],
    technologyStack: [
      "Next.js (App Router)",
      "TypeScript (strict mode)",
      "Tailwind CSS",
      "Prisma + PostgreSQL",
      "Zod",
      "Vitest",
      "Playwright",
    ],
    interviewTalkingPoints: [
      "Walk through how a reconciliation exception moves from automatic creation through investigation to independent-reviewer approval, and why direct closure is structurally impossible",
      "Explain the duplicate-payment detection heuristic and its documented false-positive/false-negative trade-offs — a good example of naming a limitation instead of hiding it",
      "Describe the idempotency strategy that prevents re-running reconciliation from creating duplicate open exceptions",
      "Discuss why evidence-file storage uses different adapters locally versus in the cloud demo, and what that trade-off means operationally",
    ],
  },
  {
    slug: "regpulse-ie",
    projectName: "RegPulse IE",
    positioning:
      "DORA-oriented operational resilience, control evidence and remediation platform for Irish and European FinTech teams.",
    roleRelevance: [
      "Financial Systems Analyst",
      "Application Analyst",
      "Business Systems Analyst",
      "Payments Analyst",
      "UAT Analyst",
      "Technical Business Analyst",
    ],
    problemContext:
      "Operational resilience teams need to track obligations, controls, evidence and remediation in one place, with independent review at every approval step. RegPulse IE models this workflow as a portfolio demonstration built around DORA-oriented concepts, using synthetic data and simplified interpretations — it is not a regulatory or legal product.",
    intendedUsers: [
      "Operational resilience analysts maintaining the obligation and control register",
      "Control owners and evidence owners submitting and tracking evidence",
      "Independent reviewers approving evidence, assessments and gap closures",
      "Technology risk managers reviewing ICT incidents and third-party risk",
    ],
    businessWorkflows: [
      "Maintain an obligation library mapped to controls with coverage levels and rationale",
      "Request evidence, submit it, and route it through independent review to approval or rejection",
      "Execute a control assessment, link approved evidence, and reach a deterministic overall result",
      "Track a compliance gap from origin through remediation actions to independent closure approval, or record an accepted-risk decision",
      "Manage an ICT-incident register from detection through closure, and a third-party provider/service risk register",
      "Generate a management report pack and export it as CSV, JSON or Markdown",
    ],
    analystResponsibilities: [
      "Interpreting obligation-to-control mappings and coverage levels",
      "Applying independent-review discipline to evidence and assessment approvals, where the reviewer must differ from the submitter",
      "Structuring a compliance-gap record with a closure summary, linked approved evidence and independent sign-off",
      "Assessing exit-plan health and concentration risk for critical third-party services",
      "Reading deterministic readiness labels rather than compliance percentages, and understanding what those labels do and do not claim",
    ],
    domainCapabilities: [
      "Obligation library and control register with explicit mapping records",
      "Evidence lifecycle from draft through requested, submitted, under review, approved or rejected, with immutable versioned submissions",
      "Control assessment lifecycle with a deterministic overall-result calculation (NOT_ASSESSED, UNSATISFACTORY, NEEDS_IMPROVEMENT, SATISFACTORY)",
      "Compliance-gap and remediation workflow with an accepted-risk path separate from closure",
      "ICT-incident register with a six-status lifecycle and mandatory closure fields",
      "Third-party provider and service risk register with criticality, concentration risk and exit-plan health indicators",
    ],
    systemArchitecture: [
      "Next.js App Router application using PostgreSQL through Prisma across local, test, Preview and Production environments",
      "Enum-like workflow values stored as text and normalised through TypeScript rule modules and Zod validation",
      "Signed, HTTP-only session cookie for portfolio-safe role simulation, with server-side RBAC on every mutating server action",
      "Evidence-file storage adapter writing to local filesystem storage in development and private Vercel Blob in the cloud",
      "Guarded destructive-reset script that refuses to run against any database that is not a recognised local RegPulse database",
    ],
    dataAndControlConsiderations: [
      "Reviewer/submitter separation is enforced on evidence approval, assessment approval and gap closure — the same person cannot review their own submission",
      "A rejection comment is mandatory whenever evidence or an assessment is rejected",
      "Gap closure requires completed or formally cancelled mandatory remediation actions, linked approved evidence, a closure summary and independent review",
      "Accepted risk is modelled as a distinct path from closure, recording reason, approver and review date",
      "Destructive reset is blocked outside local/test environments via REGPULSE_DISABLE_DESTRUCTIVE_RESET, verified refused against both Preview and Production",
      "Readiness labels (Not assessed, Action required, Partially ready, Ready for review) are explicitly deterministic internal indicators, not legal conclusions",
    ],
    testingAndQualityEvidence: [
      "Vitest coverage for evidence rules, assessment rules, gap/remediation rules, ICT-incident rules, third-party risk rules, RBAC, rate limiting and report-export formatting",
      "Playwright coverage for authenticated dashboard access, evidence rejection/resubmission/approval, assessment submission/approval, and the gap/incident/third-party journeys, signing in and switching roles where independent review is required",
      "A documented fresh-clone local quality gate (install, Prisma generate/validate, PostgreSQL startup, migrations, deterministic reset, lint, typecheck, Vitest, Playwright, build) completed and recorded in the repository",
      "A GitHub Actions workflow running the same install, Prisma, reset, lint, typecheck, Vitest, Playwright and production build path against a PostgreSQL service on every push and pull request to main",
    ],
    deliveryPhases: [
      { name: "Sprint 1", summary: "Obligation library, control register, deterministic dashboard and read-only navigation." },
      { name: "Sprint 2", summary: "Evidence requests, submissions, independent review, control assessments and audit history." },
      { name: "Sprint 3", summary: "Compliance gaps, remediation, accepted risk, ICT incidents and third-party risk." },
      { name: "Sprint 4", summary: "Management report pack, CSV/JSON/Markdown exports, CI quality gate and documentation." },
      { name: "Cloud Phase 1", summary: "PostgreSQL runtime, Prisma migrations, isolated Preview and Production Vercel deployment." },
      { name: "Cloud Phase 2", summary: "Portfolio-safe identity, RBAC, guarded reset, rate limiting and Blob-backed evidence storage." },
    ],
    currentStatus:
      "All six delivery phases are represented in the repository with unit, integration and end-to-end test coverage and a passing CI workflow. A Production deployment was verified live during the most recent source audit (2026-07-14) and is linked below.",
    limitations: [
      "Uses entirely synthetic data with simplified DORA-oriented interpretations — it does not claim complete DORA coverage",
      "Not a regulatory interpretation service and does not certify readiness or compliance",
      "Does not represent a real regulated institution's complete operating model",
      "No production SSO or enterprise identity-provider integration — session-based role simulation only",
      "No notifications, background jobs, queue workers or scheduled control attestations",
      "Report exports are operational demo exports, not formal regulatory submissions",
    ],
    portfolioDisclaimer: regPulseLegalDisclaimer,
    repositoryUrl: "https://github.com/DataByRajesh/regpulse-ie",
    liveDemoUrl: "https://regpulse-ie.vercel.app",
    screenshots: null,
    sourceCommitSha: "9c653a828d5936334d9af345cf10a4e4c2f8aa64",
    sourceVerificationDate: "2026-07-14",
    evidenceReferences: [
      { label: "Evidence workflow", detail: "docs/EVIDENCE_WORKFLOW.md — versioned submissions and review rules" },
      { label: "Control assessment workflow", detail: "docs/CONTROL_ASSESSMENT_WORKFLOW.md — deterministic overall-result logic" },
      { label: "Gap and remediation workflow", detail: "docs/GAP_AND_REMEDIATION_WORKFLOW.md — closure and accepted-risk rules" },
      { label: "Cloud Phase 1 deployment", detail: "docs/CLOUD_PHASE_1_DEPLOYMENT.md — Vercel project and deployment verification" },
      { label: "Security and limitations", detail: "docs/SECURITY_AND_LIMITATIONS.md — consolidated scope boundaries" },
    ],
    technologyStack: [
      "Next.js (App Router)",
      "TypeScript (strict mode)",
      "Tailwind CSS",
      "Prisma + PostgreSQL",
      "Vercel Blob",
      "Vitest",
      "Playwright",
    ],
    interviewTalkingPoints: [
      "Explain why the reviewer/submitter separation rule is enforced identically across evidence, assessment and gap-closure approvals",
      "Walk through the deterministic overall-result logic for a control assessment and why missing evidence forces NOT_ASSESSED rather than a passing result",
      "Discuss why accepted risk is modelled as a path distinct from closure, and what that separation protects",
      "Describe how the guarded destructive-reset script is designed to refuse to run against anything other than a recognised local database",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
