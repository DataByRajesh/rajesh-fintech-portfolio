import { SectionHeading } from "@/components/SectionHeading";
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
      </section>
    </main>
  );
}
