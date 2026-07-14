import { StatusBadge } from "@/components/StatusBadge";

type ProjectCardProps = {
  title: string;
  summary: string;
  status: string;
};

export function ProjectCard({ title, summary, status }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <StatusBadge label={status} />
      </div>
      <p className="leading-7 text-slate-600">{summary}</p>
    </article>
  );
}
