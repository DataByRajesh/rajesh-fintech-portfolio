export type DeliveryPhase = {
  name: string;
  summary: string;
};

export type EvidenceReference = {
  label: string;
  detail: string;
};

export type CaseStudyScreenshot = {
  fileName: string;
  altText: string;
};

export type CaseStudy = {
  slug: string;
  projectName: string;
  positioning: string;
  roleRelevance: string[];
  problemContext: string;
  intendedUsers: string[];
  businessWorkflows: string[];
  analystResponsibilities: string[];
  domainCapabilities: string[];
  systemArchitecture: string[];
  dataAndControlConsiderations: string[];
  testingAndQualityEvidence: string[];
  deliveryPhases: DeliveryPhase[];
  currentStatus: string;
  limitations: string[];
  portfolioDisclaimer: string;
  repositoryUrl: string;
  liveDemoUrl: string | null;
  screenshots: CaseStudyScreenshot[] | null;
  sourceCommitSha: string;
  sourceVerificationDate: string;
  evidenceReferences: EvidenceReference[];
  technologyStack: string[];
  interviewTalkingPoints: string[];
};
