import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/content/skills";

export default function SkillsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Skills"
        title="Core capability areas"
        description="A practical summary of the systems and process skills reflected in the portfolio."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <section key={category.category} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{category.category}</h3>
            <ul className="mt-4 space-y-2">
              {category.items.map((item) => (
                <li key={item} className="min-w-0 break-words rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
