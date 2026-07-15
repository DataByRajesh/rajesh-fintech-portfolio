export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Payments and reconciliation",
    items: [
      "Payment and settlement lifecycle interpretation",
      "Deterministic reconciliation rule design and severity triage",
      "Exception dedupe and idempotency handling",
    ],
  },
  {
    category: "Financial systems analysis",
    items: [
      "Enterprise banking-software experience at FIS",
      "Requirements interpretation for financial-services workflows",
      "Systems analysis across payments and operational-control domains",
    ],
  },
  {
    category: "UAT and application quality",
    items: [
      "UAT test case design and execution recording",
      "Manual exception-to-defect linking judgement",
      "Release-readiness assessment from aggregate test results",
    ],
  },
  {
    category: "SQL and data validation",
    items: ["SQL-based data validation and investigation", "Relational data-model review"],
  },
  {
    category: "Exception and incident workflows",
    items: [
      "Exception lifecycle design: assignment, root cause, resolution, approval",
      "Independent-review and audit-trail discipline",
    ],
  },
  {
    category: "Operational controls and evidence",
    items: ["Control-evidence collection and review workflows", "Compliance-gap and remediation tracking"],
  },
  {
    category: "Agile, Scrum and Jira",
    items: ["Iterative, sprint-based delivery", "Backlog and ticket-based workflow tracking"],
  },
  {
    category: "Next.js and TypeScript",
    items: ["Next.js App Router with TypeScript strict mode", "Server Components and Server Actions"],
  },
  {
    category: "PostgreSQL and Prisma",
    items: ["PostgreSQL schema design and migrations via Prisma", "Relational data modelling for audit and workflow state"],
  },
  {
    category: "Testing and quality gates",
    items: ["Unit, integration and end-to-end test strategy", "CI quality gates: lint, typecheck, test, build"],
  },
  {
    category: "Documentation and stakeholder communication",
    items: [
      "Technical documentation for recruiter and engineering audiences",
      "Clear articulation of scope, limitations and evidence",
    ],
  },
];
