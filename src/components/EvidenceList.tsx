import type { EvidenceReference } from "@/types/caseStudy";

type EvidenceListProps = {
  items: EvidenceReference[];
  sourceCommitSha: string;
  sourceVerificationDate: string;
};

export function EvidenceList({ items, sourceCommitSha, sourceVerificationDate }: EvidenceListProps) {
  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">{item.label}</p>
            <p className="mt-1 leading-6 text-slate-600">{item.detail}</p>
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500">
        Verified against source commit{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-slate-700">
          {sourceCommitSha.slice(0, 12)}
        </code>{" "}
        on {sourceVerificationDate}.
      </p>
    </div>
  );
}
