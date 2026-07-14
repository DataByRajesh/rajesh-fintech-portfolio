import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Contact"
        title="Contact details"
        description="Contact details are being finalised for this portfolio version."
      />
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-lg leading-8 text-slate-700">
          {profile.contactEmail ? profile.contactEmail : "Contact details being finalised"}
        </p>
      </section>
    </main>
  );
}
