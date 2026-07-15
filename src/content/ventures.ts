import type { Venture } from "@/types/venture";

export const ventures: Venture[] = [
  {
    name: "AutoTime AI Ltd",
    relationship: "Founder & CEO",
    description:
      "Independent startup work focused on practical AI products and workflow automation, separate from FIS employment and the PayGuard IE / RegPulse IE FinTech case studies.",
    websiteUrl: "https://www.autotimeai.com",
    websiteStatus: "verified",
    products: [
      {
        name: "AutoTime EU Apply",
        description:
          "A European job-search workflow product designed to help candidates evaluate role fit, work-right considerations and application effort before applying.",
        productUrl: "https://autotime-eu-apply.vercel.app/",
        status: "live",
        evidenceNote: "Public product deployment verified before portfolio publication.",
        disclaimer: "Product guidance is informational and does not constitute immigration or legal advice.",
      },
    ],
  },
];
