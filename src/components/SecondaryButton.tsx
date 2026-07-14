import Link from "next/link";

type SecondaryButtonProps = {
  href: string;
  label: string;
};

export function SecondaryButton({ href, label }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
    >
      {label}
    </Link>
  );
}
