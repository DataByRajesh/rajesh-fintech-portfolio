import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsPage from "./page";

describe("projects index page", () => {
  it("renders both featured projects", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("PayGuard IE")).toBeInTheDocument();
    expect(screen.getByText("RegPulse IE")).toBeInTheDocument();
  });

  it("links each project card to its detailed case study", () => {
    render(<ProjectsPage />);
    const caseStudyLinks = screen.getAllByRole("link", { name: /view case study/i });
    const hrefs = caseStudyLinks.map((link) => link.getAttribute("href"));
    expect(hrefs).toContain("/projects/payguard-ie");
    expect(hrefs).toContain("/projects/regpulse-ie");
  });

  it("renders FinTech systems case studies and Startup product as separate sections", () => {
    render(<ProjectsPage />);
    expect(screen.getByRole("heading", { level: 2, name: "FinTech systems case studies" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Independent startup work" })).toBeInTheDocument();
    expect(screen.getByText("AutoTime AI Ltd")).toBeInTheDocument();
    expect(screen.getByText("AutoTime EU Apply")).toBeInTheDocument();
  });

  it("does not present AutoTime EU Apply as a banking, payments or DORA project", () => {
    const { container } = render(<ProjectsPage />);
    const text = container.textContent ?? "";
    const autoTimeIndex = text.indexOf("AutoTime EU Apply");
    const nearbyText = text.slice(autoTimeIndex, autoTimeIndex + 400).toLowerCase();
    expect(nearbyText).not.toContain("dora");
    expect(nearbyText).not.toContain("banking");
  });

  it("keeps PayGuard and RegPulse listed before the startup section", () => {
    const { container } = render(<ProjectsPage />);
    const text = container.textContent ?? "";
    const payGuardIndex = text.indexOf("PayGuard IE");
    const startupHeadingIndex = text.indexOf("Independent startup work");
    expect(payGuardIndex).toBeGreaterThan(-1);
    expect(startupHeadingIndex).toBeGreaterThan(payGuardIndex);
  });
});
