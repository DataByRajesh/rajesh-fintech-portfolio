# Startup and product content

This documents how AutoTime AI Ltd and AutoTime EU Apply are represented in the portfolio, and the rules that keep them clearly separate from FIS employment and the PayGuard IE / RegPulse IE FinTech case studies.

## Storage

- **Professional links** live in `src/content/profile.ts` (`profile.socialLinks.github`, `profile.socialLinks.linkedin`, `profile.portfolioUrl`).
- **Venture content** lives in `src/types/venture.ts` (the `Venture`/`VentureProduct` types) and `src/content/ventures.ts` (the single `ventures` array). This is the only source of truth for AutoTime AI Ltd and its products — page components read from it rather than hardcoding startup wording.

## Separation of FIS and startup work

Founder & CEO is a field on the `Venture` object (`relationship: "Founder & CEO"`) and is only ever rendered inside a `VentureCard` or the Contact page's Startup section — it never appears as Rajesh's primary title or anywhere in the hero, About page positioning, or Experience page. `docs/CONTENT_GUIDE.md` and the primary/supporting title fields in `profile.ts` are the source of truth for the recruiter-facing positioning (`FinTech Systems Analyst`), and startup content must never replace or blend with it. The About page's "Independent product work" section and the homepage's "Startup & independent product work" section both explicitly state the AutoTime AI work is separate from FIS employment and the FinTech case studies.

## Website and product verification status

`Venture.websiteStatus` and `VentureProduct.status` are typed enums (`"verified" | "under-verification"` and `"live" | "preview" | "under-verification"` respectively) — not booleans — so a link can be represented as unverified without being deleted from the content model. `docs/PROJECT_LINK_VERIFICATION.md` documents the exact verification steps and current status for both AutoTime AI (`https://www.autotimeai.com`, verified) and AutoTime EU Apply (`https://autotime-eu-apply.vercel.app/`, live).

Components (`VentureCard`, the Contact page's Startup section, `SiteFooter`) always check the status field before rendering a clickable anchor. When a website or product is `under-verification`, the UI renders "Startup website under verification" or "Product link under verification" as plain text — never a link pointing at an unverified or guessed URL.

## Prohibited startup metrics and claims

AutoTime AI Ltd and AutoTime EU Apply content must never claim:

- guaranteed employment, interviews, or sponsorship outcomes;
- legal or immigration advice, or authoritative immigration decisions;
- automatic job applications, unless directly verified in the product itself;
- paying customers, a specific user count, or funding;
- successful job outcomes attributable to the product;
- enterprise readiness.

`src/content/profile.test.ts` and `src/app/page.test.tsx` include regression tests scanning venture content for these patterns (user/customer counts, funding/revenue language, outcome guarantees).

## Why the portfolio and AutoTime deployments remain separate

The recruiter portfolio (`DataByRajesh/rajesh-fintech-portfolio`) is deployed to its own dedicated Vercel project. AutoTime AI's website and AutoTime EU Apply are deployed from their own separate source repositories and Vercel projects. No AutoTime project ID, environment variable, domain, or deployment configuration is reused by the portfolio project, and `profile.portfolioUrl` is never set to an AutoTime domain — see `docs/PROJECT_LINK_VERIFICATION.md` for the exact canonical-URL rule.

## Why `portfolioUrl` remains null initially

`profile.portfolioUrl` starts as `null` because the portfolio's own Production URL does not exist until the dedicated Vercel project is created and deployed. It is set to the exact, verified Production URL only after that deployment is live and manually verified — never to a Preview URL, an AutoTime URL, or a guessed Vercel URL. See `docs/PROJECT_LINK_VERIFICATION.md`.
