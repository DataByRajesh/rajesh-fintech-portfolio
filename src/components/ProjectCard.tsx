import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

type ProjectCardProps = {
  title: string;
  summary: string;
  status: string;
  href?: string;
};

export function ProjectCard({ title, summary, status, href }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <StatusBadge label={status} />
      </div>
      <p className="leading-7 text-slate-600">{summary}</p>
      {href ? (
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
        >
          View case study
        </Link>
      ) : null}
    </article>
  );
}
