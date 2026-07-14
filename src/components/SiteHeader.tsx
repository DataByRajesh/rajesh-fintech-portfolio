import Link from "next/link";
import { navigationItems } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
          Rajesh Kumar Alagesan
        </Link>
        <nav aria-label="Primary navigation" className="flex-1">
          <ul className="flex flex-wrap justify-end gap-3 text-sm font-medium text-slate-600 sm:gap-5">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
