import Image from "next/image";
import type { CaseStudyScreenshot } from "@/types/caseStudy";

type ScreenshotPlaceholderProps = {
  projectSlug: string;
  projectName: string;
  screenshots: CaseStudyScreenshot[] | null;
};

export function ScreenshotPlaceholder({ projectSlug, projectName, screenshots }: ScreenshotPlaceholderProps) {
  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Verified screenshot pending</p>
        <p className="max-w-md text-sm leading-6 text-slate-500">
          Genuine {projectName} screenshots have not yet been captured and reviewed for this portfolio. This section
          will be updated once verified images are added.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {screenshots.map((screenshot) => (
        <div key={screenshot.fileName} className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src={`/projects/${projectSlug}/${screenshot.fileName}`}
            alt={screenshot.altText}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
