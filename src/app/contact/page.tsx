import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/content/profile";
import { ventures } from "@/content/ventures";

export default function ContactPage() {
  const autoTimeAi = ventures.find((venture) => venture.name === "AutoTime AI Ltd");
  const autoTimeEuApply = autoTimeAi?.products.find((product) => product.name === "AutoTime EU Apply");

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Contact"
        title="Contact details"
        description="Contact details are being finalised for this portfolio version."
      />
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-lg leading-8 text-slate-700">
          {profile.contactEmail ? profile.contactEmail : "Contact details being finalised"}
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <SectionHeading eyebrow="Professional profiles" title="Where to find more" />
        <ul className="mt-6 space-y-3">
          {profile.socialLinks.github ? (
            <li className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${profile.name}’s GitHub profile`}
                className="font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                GitHub
              </a>
              <span className="text-slate-600"> — View repositories and technical portfolio</span>
            </li>
          ) : null}
          {profile.socialLinks.linkedin ? (
            <li className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${profile.name}’s LinkedIn profile`}
                className="font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                LinkedIn
              </a>
              <span className="text-slate-600"> — View professional experience and connect</span>
            </li>
          ) : null}
        </ul>
      </section>

      {autoTimeAi ? (
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <SectionHeading eyebrow="Startup" title="AutoTime AI" />
          <ul className="mt-6 space-y-3">
            <li className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3">
              {autoTimeAi.websiteUrl && autoTimeAi.websiteStatus === "verified" ? (
                <a
                  href={autoTimeAi.websiteUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open the AutoTime AI startup website"
                  className="font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                >
                  Visit AutoTime AI
                </a>
              ) : (
                <span className="text-slate-500">Startup website under verification</span>
              )}
            </li>
            {autoTimeEuApply ? (
              <li className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3">
                {autoTimeEuApply.productUrl && autoTimeEuApply.status === "live" ? (
                  <a
                    href={autoTimeEuApply.productUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Open the ${autoTimeEuApply.name} live product`}
                    className="font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                  >
                    Open AutoTime EU Apply
                  </a>
                ) : (
                  <span className="text-slate-500">Product link under verification</span>
                )}
              </li>
            ) : null}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
