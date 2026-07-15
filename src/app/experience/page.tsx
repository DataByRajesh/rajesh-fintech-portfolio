import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";

export default function ExperiencePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Experience"
        title="Professional focus"
        description="Experience spanning enterprise banking software environments, operational controls, and practical fintech-facing platforms."
      />
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-lg leading-8 text-slate-700">
          {profile.name} has experience across systems analysis, payments operations support, UAT coordination, and control evidence work in financial services contexts.
        </p>
        <p className="mt-4 leading-7 text-slate-600">{experience.summary}</p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {experience.focusAreas.map((area) => (
            <li key={area} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <ul className="mt-6 space-y-3">
          {experience.education.map((entry) => (
            <li key={entry.qualification} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="font-semibold text-slate-900">{entry.qualification}</p>
              <p className="mt-1 leading-6 text-slate-600">{entry.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
