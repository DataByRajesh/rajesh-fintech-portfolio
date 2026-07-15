import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/about";
import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="About"
        title="Positioning"
        description="A concise professional profile for recruiter review and portfolio browsing."
      />
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-lg leading-8 text-slate-700">{profile.heroSummary}</p>
        <div className="mt-6 space-y-4">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <SectionHeading eyebrow="Independent work" title={about.independentProductHeading} />
        <p className="mt-4 leading-7 text-slate-600">{about.independentProductNote}</p>
      </section>
    </main>
  );
}
