import type { ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";

type CaseStudySectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function CaseStudySection({ eyebrow, title, description, children }: CaseStudySectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-6">{children}</div>
    </section>
  );
}
