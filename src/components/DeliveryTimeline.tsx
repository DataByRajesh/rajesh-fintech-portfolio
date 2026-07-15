import type { DeliveryPhase } from "@/types/caseStudy";

type DeliveryTimelineProps = {
  phases: DeliveryPhase[];
};

export function DeliveryTimeline({ phases }: DeliveryTimelineProps) {
  return (
    <ol className="space-y-4 border-l-2 border-slate-200 pl-6">
      {phases.map((phase) => (
        <li key={phase.name} className="relative">
          <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-slate-900" />
          <p className="text-sm font-semibold text-slate-900">{phase.name}</p>
          <p className="mt-1 leading-7 text-slate-600">{phase.summary}</p>
        </li>
      ))}
    </ol>
  );
}
