type LimitationsPanelProps = {
  items: string[];
  disclaimer: string;
};

export function LimitationsPanel({ items, disclaimer }: LimitationsPanelProps) {
  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 leading-7 text-amber-900">
            {item}
          </li>
        ))}
      </ul>
      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium text-amber-900">
        {disclaimer}
      </p>
    </div>
  );
}
