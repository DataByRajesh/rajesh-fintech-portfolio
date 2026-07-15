import { StatusBadge } from "@/components/StatusBadge";

type CaseStudyHeroProps = {
  projectName: string;
  positioning: string;
  currentStatus: string;
  roleRelevance: string[];
};

export function CaseStudyHero({ projectName, positioning, currentStatus, roleRelevance }: CaseStudyHeroProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Case study</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        {projectName}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{positioning}</p>
      <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">{currentStatus}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {roleRelevance.map((role) => (
          <StatusBadge key={role} label={role} />
        ))}
      </div>
    </section>
  );
}
