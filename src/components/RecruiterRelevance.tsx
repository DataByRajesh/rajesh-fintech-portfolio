type RecruiterRelevanceProps = {
  roleRelevance: string[];
  interviewTalkingPoints: string[];
};

export function RecruiterRelevance({ roleRelevance, interviewTalkingPoints }: RecruiterRelevanceProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Relevant roles</p>
        <ul className="mt-3 space-y-2">
          {roleRelevance.map((role) => (
            <li key={role} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
              {role}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Interview discussion points</p>
        <ul className="mt-3 space-y-2">
          {interviewTalkingPoints.map((point) => (
            <li key={point} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 leading-6 text-slate-700">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
