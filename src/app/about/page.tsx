import { SectionHeading } from "@/components/SectionHeading";
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
      </section>
    </main>
  );
}
