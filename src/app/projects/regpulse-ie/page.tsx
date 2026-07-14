import type { Metadata } from "next";
import { CaseStudyPageContent } from "@/components/CaseStudyPageContent";

export const metadata: Metadata = {
  title: "RegPulse IE case study | Rajesh Kumar Alagesan",
  description:
    "DORA-oriented operational resilience, control evidence and remediation platform for Irish and European FinTech teams.",
};

export default function RegPulseCaseStudyPage() {
  return <CaseStudyPageContent slug="regpulse-ie" />;
}
