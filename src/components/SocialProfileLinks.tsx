import { profile } from "@/content/profile";

type SocialProfileLinksProps = {
  variant?: "compact" | "full";
  className?: string;
};

const linkDefinitions = [
  {
    key: "github" as const,
    label: "GitHub",
    fullLabel: "View GitHub",
    ariaLabel: `Open ${profile.name}’s GitHub profile`,
  },
  {
    key: "linkedin" as const,
    label: "LinkedIn",
    fullLabel: "View LinkedIn",
    ariaLabel: `Open ${profile.name}’s LinkedIn profile`,
  },
];

export function SocialProfileLinks({ variant = "compact", className }: SocialProfileLinksProps) {
  const links = linkDefinitions
    .map((definition) => ({ ...definition, href: profile.socialLinks[definition.key] }))
    .filter((definition): definition is typeof definition & { href: string } => Boolean(definition.href));

  if (links.length === 0) {
    return null;
  }

  const isFull = variant === "full";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={link.ariaLabel}
          className={
            isFull
              ? "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              : "inline-flex items-center rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
          }
        >
          {isFull ? link.fullLabel : link.label}
        </a>
      ))}
    </div>
  );
}
