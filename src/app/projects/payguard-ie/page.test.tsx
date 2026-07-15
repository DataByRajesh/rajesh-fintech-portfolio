import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PayGuardCaseStudyPage from "./page";

describe("PayGuard IE case study page", () => {
  it("renders", () => {
    render(<PayGuardCaseStudyPage />);
    expect(screen.getByRole("heading", { level: 1, name: "PayGuard IE" })).toBeInTheDocument();
  });

  it("displays reconciliation and UAT content", () => {
    render(<PayGuardCaseStudyPage />);
    expect(screen.getAllByText(/reconciliation/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/UAT/i).length).toBeGreaterThan(0);
  });

  it("displays limitations", () => {
    render(<PayGuardCaseStudyPage />);
    expect(screen.getByText("Verified status and limitations")).toBeInTheDocument();
    expect(screen.getByText(/synthetic seed data/i)).toBeInTheDocument();
  });

  it("links back to the projects index", () => {
    render(<PayGuardCaseStudyPage />);
    expect(screen.getByRole("link", { name: "Back to all projects" })).toHaveAttribute("href", "/projects");
  });

  it("links to the verified GitHub repository", () => {
    render(<PayGuardCaseStudyPage />);
    const repoLink = screen.getByRole("link", { name: "https://github.com/DataByRajesh/payguard-ie" });
    expect(repoLink).toHaveAttribute("href", "https://github.com/DataByRajesh/payguard-ie");
  });

  it("does not render a broken anchor for the null demo URL", () => {
    render(<PayGuardCaseStudyPage />);
    expect(screen.getByText("Public demo link under verification")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /vercel\.app/i })).not.toBeInTheDocument();
  });

  it("does not render a broken image element when screenshots are missing", () => {
    render(<PayGuardCaseStudyPage />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Verified screenshot pending")).toBeInTheDocument();
  });

  it("does not use unsupported leadership or overclaiming language", () => {
    const { container } = render(<PayGuardCaseStudyPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/transformed the bank/i);
    expect(text).not.toMatch(/led enterprise strategy/i);
    expect(text).not.toMatch(/guarantees compliance/i);
    expect(text).not.toMatch(/production-grade banking platform/i);
    expect(text).not.toMatch(/saved millions/i);
    expect(text).not.toMatch(/processed millions of payments/i);
  });

  it("does not display fake metrics or fake contact addresses", () => {
    const { container } = render(<PayGuardCaseStudyPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/@payguard-ie\.com/i);
    expect(text).not.toMatch(/\d+% uptime/i);
    expect(text).not.toMatch(/\d+,\d{3}\+? (users|customers|transactions)/i);
  });
});
