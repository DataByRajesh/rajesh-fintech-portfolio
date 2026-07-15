# Project link verification

This is the procedure for adding or changing a repository or live-demo link on a case study. Repository and demo links live in `src/content/caseStudies.ts` (`repositoryUrl`, `liveDemoUrl`).

## Repository links

Add a repository link only after confirming:

- it is accessible (`gh repo view <owner>/<repo>` succeeds);
- it is the intended public project repository, not a fork or an unrelated project.

Currently verified:

- PayGuard IE: `https://github.com/DataByRajesh/payguard-ie`
- RegPulse IE: `https://github.com/DataByRajesh/regpulse-ie`

## Live-demo links

A `liveDemoUrl` may be set to a real URL only when **all** of the following hold:

1. The URL is found in current project documentation (not invented, not guessed from a naming convention).
2. The URL loads successfully when fetched directly.
3. It is clearly the correct environment for that project (branding, content and disclaimer match).
4. It is not a private/protected Preview URL, and no sensitive query parameter is exposed in it.
5. The page does not reveal secrets, credentials, or unsafe destructive controls.

If any condition fails, `liveDemoUrl` must be `null`. The UI (`CaseStudyPageContent`) renders "Public demo link under verification" whenever `liveDemoUrl` is `null` — never invent or guess a URL to fill this gap.

### Current status

- **PayGuard IE**: `liveDemoUrl` is `null`. No live-demo URL exists anywhere in the source repository's documentation as of the audit recorded in `docs/CASE_STUDY_SOURCE_AUDIT.md`.
- **RegPulse IE**: `liveDemoUrl` is `"https://regpulse-ie.vercel.app"`. This is the documented Production URL (`docs/CLOUD_PHASE_1_DEPLOYMENT.md` in the source repository) and was fetched directly during the audit — it loads successfully, shows the correct RegPulse IE demo workspace with its disclaimer, and exposes no secrets or destructive controls. The corresponding Preview URL is intentionally excluded because it sits behind Vercel account SSO and is not a public link.

## Re-verifying an existing link

Links can go stale (a deployment can be torn down, a repository can be renamed or made private). Before relying on an existing `liveDemoUrl` in future work:

1. Re-fetch the URL and confirm it still loads and still shows the correct project.
2. If it no longer resolves, or now shows something else, set `liveDemoUrl` back to `null` immediately rather than leaving a stale or broken link live.
3. Record the re-verification date and outcome in `docs/CASE_STUDY_SOURCE_AUDIT.md`.

## What this prevents

- Broken anchors on `/projects/payguard-ie` and `/projects/regpulse-ie`.
- Leaking a protected Preview URL that isn't meant to be public.
- Publishing a URL that has never actually been confirmed to belong to the intended project.
