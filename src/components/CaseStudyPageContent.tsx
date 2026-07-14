import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureSummary } from "@/components/ArchitectureSummary";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudySection } from "@/components/CaseStudySection";
import { DeliveryTimeline } from "@/components/DeliveryTimeline";
import { EvidenceList } from "@/components/EvidenceList";
import { LimitationsPanel } from "@/components/LimitationsPanel";
import { PrimaryButton } from "@/components/PrimaryButton";
import { RecruiterRelevance } from "@/components/RecruiterRelevance";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import { WorkflowList } from "@/components/WorkflowList";
import { getCaseStudyBySlug } from "@/content/caseStudies";

type CaseStudyPageContentProps = {
  slug: string;
};

export function CaseStudyPageContent({ slug }: CaseStudyPageContentProps) {
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
      <CaseStudyHero
        projectName={caseStudy.projectName}
        positioning={caseStudy.positioning}
        currentStatus={caseStudy.currentStatus}
        roleRelevance={caseStudy.roleRelevance}
      />

      <CaseStudySection eyebrow="Overview" title="Business problem" description={caseStudy.problemContext}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Intended users</p>
          <ul className="mt-3 space-y-2">
            {caseStudy.intendedUsers.map((user) => (
              <li key={user} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                {user}
              </li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow="Workflows" title="Core business workflows">
        <WorkflowList items={caseStudy.businessWorkflows} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Analyst evidence" title="Analyst capabilities demonstrated">
        <CapabilityGrid items={caseStudy.analystResponsibilities} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Domain" title="Domain capabilities">
        <CapabilityGrid items={caseStudy.domainCapabilities} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Architecture" title="System architecture overview">
        <ArchitectureSummary items={caseStudy.systemArchitecture} technologyStack={caseStudy.technologyStack} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Controls" title="Data and control design">
        <CapabilityGrid items={caseStudy.dataAndControlConsiderations} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Quality" title="Testing and quality approach">
        <CapabilityGrid items={caseStudy.testingAndQualityEvidence} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Delivery" title="Delivery journey">
        <DeliveryTimeline phases={caseStudy.deliveryPhases} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Honesty" title="Verified status and limitations">
        <LimitationsPanel items={caseStudy.limitations} disclaimer={caseStudy.portfolioDisclaimer} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Recruiter relevance" title="Why this matters for the role">
        <RecruiterRelevance roleRelevance={caseStudy.roleRelevance} interviewTalkingPoints={caseStudy.interviewTalkingPoints} />
      </CaseStudySection>

      <CaseStudySection eyebrow="Evidence" title="Source evidence">
        <EvidenceList
          items={caseStudy.evidenceReferences}
          sourceCommitSha={caseStudy.sourceCommitSha}
          sourceVerificationDate={caseStudy.sourceVerificationDate}
        />
      </CaseStudySection>

      <CaseStudySection eyebrow="Screenshots" title="Verified screenshots">
        <ScreenshotPlaceholder
          projectSlug={caseStudy.slug}
          projectName={caseStudy.projectName}
          screenshots={caseStudy.screenshots}
        />
      </CaseStudySection>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Links</p>
            <p className="mt-2 break-words text-slate-700">
              Repository:{" "}
              <a
                href={caseStudy.repositoryUrl}
                className="break-words font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900"
              >
                {caseStudy.repositoryUrl}
              </a>
            </p>
            <p className="mt-2 break-words text-slate-700">
              {caseStudy.liveDemoUrl ? (
                <>
                  Live demo:{" "}
                  <a
                    href={caseStudy.liveDemoUrl}
                    className="break-words font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900"
                  >
                    {caseStudy.liveDemoUrl}
                  </a>
                </>
              ) : (
                "Public demo link under verification"
              )}
            </p>
          </div>
          <PrimaryButton href="/projects" label="Back to all projects" />
        </div>
      </section>

      <p className="text-xs text-slate-400">
        <Link href="/contact" className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500">
          Contact
        </Link>{" "}
        for more detail on this project.
      </p>
    </main>
  );
}
