export type EducationEntry = {
  qualification: string;
  detail: string;
};

export const experience = {
  summary:
    "Approximately three years of enterprise banking and FinTech software experience at FIS, spanning systems analysis, payments-adjacent workflows, SQL-based investigation, UAT coordination and control-evidence work in financial-services contexts.",
  focusAreas: [
    "Payments and financial-systems workflows",
    "SQL-based data validation and investigation",
    "UAT coordination and test evidence",
    "Operational controls and audit evidence",
  ],
  education: [
    {
      qualification: "MSc Big Data Technologies",
      detail: "Postgraduate study completed in the United Kingdom.",
    },
    {
      qualification: "BSc Computer Science",
      detail: "Undergraduate degree completed in 2018.",
    },
  ] satisfies EducationEntry[],
};
