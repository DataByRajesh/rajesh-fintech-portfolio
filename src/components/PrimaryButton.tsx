import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  label: string;
};

export function PrimaryButton({ href, label }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
    >
      {label}
    </Link>
  );
}
