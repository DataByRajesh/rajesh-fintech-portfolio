type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
