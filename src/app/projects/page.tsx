import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projectDisclaimer, projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Projects"
        title="Featured portfolio concepts"
        description="Structured placeholders that reflect the current portfolio direction without claiming completed delivery phases."
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
    </main>
  );
}
