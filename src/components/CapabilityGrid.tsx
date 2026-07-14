type CapabilityGridProps = {
  items: string[];
};

export function CapabilityGrid({ items }: CapabilityGridProps) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 leading-7 text-slate-700">
          {item}
        </li>
      ))}
    </ul>
  );
}
