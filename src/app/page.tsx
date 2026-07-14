import { PrimaryButton } from "@/components/PrimaryButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SecondaryButton } from "@/components/SecondaryButton";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/content/profile";
import { projectDisclaimer, projects } from "@/content/projects";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-16 sm:px-8 lg:px-12">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">FinTech Systems Analyst</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-slate-700">{profile.supportingTitle}</p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{profile.heroSummary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton href="/experience" label="View experience" />
          <SecondaryButton href="/projects" label="Review projects" />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Target roles"
          title="Relevant opportunities"
          description="This portfolio is positioned for systems analysis and payments-focused roles without over-claiming leadership scope."
        />
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {profile.targetRoles.map((role) => (
            <li key={role} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {role}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Featured projects"
          title="Portfolio concepts"
          description="Structured placeholders that reflect the current portfolio direction without claiming completed delivery phases."
        />
        <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{projectDisclaimer}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
      </section>
    </main>
  );
}
