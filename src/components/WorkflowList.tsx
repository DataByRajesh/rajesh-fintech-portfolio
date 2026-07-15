type WorkflowListProps = {
  items: string[];
};

export function WorkflowList({ items }: WorkflowListProps) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            {index + 1}
          </span>
          <span className="leading-7 text-slate-700">{item}</span>
        </li>
      ))}
    </ol>
  );
}
