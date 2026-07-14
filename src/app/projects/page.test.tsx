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
});
