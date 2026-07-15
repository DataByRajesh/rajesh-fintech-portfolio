import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { VentureCard } from "@/components/VentureCard";
import { projectDisclaimer, projects } from "@/content/projects";
import { ventures } from "@/content/ventures";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Projects"
        title="FinTech systems case studies"
        description="Evidence-backed case studies covering payments reconciliation, exception investigation, UAT and operational resilience."
      />
      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{projectDisclaimer}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            summary={project.summary}
            status={project.status}
            href={project.href}
          />
        ))}
      </div>

      <SectionHeading
        eyebrow="Startup product"
        title="Independent startup work"
        description="Separate from the FinTech case studies above — independent product work through AutoTime AI Ltd."
      />
      <div className="grid gap-6">
        {ventures.map((venture) => (
          <VentureCard key={venture.name} venture={venture} />
        ))}
      </div>
    </main>
  );
}
