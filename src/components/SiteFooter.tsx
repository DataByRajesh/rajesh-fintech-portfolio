import { SocialProfileLinks } from "@/components/SocialProfileLinks";
import { ventures } from "@/content/ventures";

export function SiteFooter() {
  const autoTimeAi = ventures.find((venture) => venture.name === "AutoTime AI Ltd");
  const showAutoTimeAiLink = autoTimeAi?.websiteUrl && autoTimeAi.websiteStatus === "verified";

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 sm:px-8 lg:px-12">
        <p>Rajesh Kumar Alagesan | FinTech Systems Analyst</p>
        <p>Portfolio demonstration only. It does not provide legal advice or certify regulatory compliance.</p>
        <div className="flex flex-wrap items-center gap-3">
          <SocialProfileLinks variant="compact" />
          {showAutoTimeAiLink ? (
            <a
              href={autoTimeAi.websiteUrl ?? undefined}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open the AutoTime AI startup website"
              className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              AutoTime AI
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
