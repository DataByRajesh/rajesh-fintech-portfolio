import type { Metadata } from "next";
import { CaseStudyPageContent } from "@/components/CaseStudyPageContent";

export const metadata: Metadata = {
  title: "PayGuard IE case study | Rajesh Kumar Alagesan",
  description:
    "Payments operations, reconciliation, exception-investigation and UAT evidence platform for Irish and European FinTech teams.",
};

export default function PayGuardCaseStudyPage() {
  return <CaseStudyPageContent slug="payguard-ie" />;
}
