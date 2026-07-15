type ArchitectureSummaryProps = {
  items: string[];
  technologyStack: string[];
};

export function ArchitectureSummary({ items, technologyStack }: ArchitectureSummaryProps) {
  return (
    <div className="space-y-6">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 leading-7 text-slate-700">
            {item}
          </li>
        ))}
      </ul>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Technology stack</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologyStack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
