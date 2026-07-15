import { StatusBadge } from "@/components/StatusBadge";
import type { Venture } from "@/types/venture";

type VentureCardProps = {
  venture: Venture;
};

const websiteStatusLabel: Record<Venture["websiteStatus"], string> = {
  verified: "Website verified",
  "under-verification": "Website under verification",
};

const productStatusLabel: Record<Venture["products"][number]["status"], string> = {
  live: "Live product",
  preview: "Preview",
  "under-verification": "Under verification",
};

export function VentureCard({ venture }: VentureCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{venture.name}</h3>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{venture.relationship}</p>
        </div>
        <StatusBadge label={websiteStatusLabel[venture.websiteStatus]} />
      </div>

      <p className="mt-4 min-w-0 break-words leading-7 text-slate-600">{venture.description}</p>

      <div className="mt-4">
        {venture.websiteUrl && venture.websiteStatus === "verified" ? (
          <a
            href={venture.websiteUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open the ${venture.name} startup website`}
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
          >
            Visit website
          </a>
        ) : (
          <p className="text-sm text-slate-500">Startup website under verification</p>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {venture.products.map((product) => (
          <div key={product.name} className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-semibold text-slate-900">{product.name}</p>
              <StatusBadge label={productStatusLabel[product.status]} />
            </div>
            <p className="mt-2 min-w-0 break-words leading-6 text-slate-600">{product.description}</p>
            <p className="mt-2 text-xs text-slate-500">{product.evidenceNote}</p>
            {product.disclaimer ? <p className="mt-2 text-xs italic text-slate-500">{product.disclaimer}</p> : null}
            <div className="mt-3">
              {product.productUrl && product.status === "live" ? (
                <a
                  href={product.productUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open the ${product.name} live product`}
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                >
                  View live product
                </a>
              ) : (
                <p className="text-sm text-slate-500">Product link under verification</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
