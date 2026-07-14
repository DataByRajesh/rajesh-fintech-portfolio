import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/content/skills";

export default function SkillsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Skills"
        title="Core capability areas"
        description="A practical summary of the systems and process skills reflected in the portfolio."
      />
      <ul className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
            {skill}
          </li>
        ))}
      </ul>
    </main>
  );
}
