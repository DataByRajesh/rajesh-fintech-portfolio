import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RegPulseCaseStudyPage from "./page";

describe("RegPulse IE case study page", () => {
  it("renders", () => {
    render(<RegPulseCaseStudyPage />);
    expect(screen.getByRole("heading", { level: 1, name: "RegPulse IE" })).toBeInTheDocument();
  });

  it("displays operational-resilience and control-evidence content", () => {
    render(<RegPulseCaseStudyPage />);
    expect(screen.getAllByText(/operational resilience/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/control/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/evidence/i).length).toBeGreaterThan(0);
  });

  it("renders the exact legal/compliance disclaimer", () => {
    render(<RegPulseCaseStudyPage />);
    expect(
      screen.getAllByText(
        "Portfolio demonstration only. It does not provide legal advice or certify regulatory compliance.",
      ).length,
    ).toBeGreaterThan(0);
  });

  it("displays limitations", () => {
    render(<RegPulseCaseStudyPage />);
    expect(screen.getByText("Verified status and limitations")).toBeInTheDocument();
    expect(screen.getByText(/does not claim complete DORA coverage/i)).toBeInTheDocument();
  });

  it("links to the verified GitHub repository", () => {
    render(<RegPulseCaseStudyPage />);
    const repoLink = screen.getByRole("link", { name: "https://github.com/DataByRajesh/regpulse-ie" });
    expect(repoLink).toHaveAttribute("href", "https://github.com/DataByRajesh/regpulse-ie");
  });

  it("renders the verified live demo link without a broken anchor", () => {
    render(<RegPulseCaseStudyPage />);
    const demoLink = screen.getByRole("link", { name: "https://regpulse-ie.vercel.app" });
    expect(demoLink).toHaveAttribute("href", "https://regpulse-ie.vercel.app");
  });

  it("does not render a broken image element when screenshots are missing", () => {
    render(<RegPulseCaseStudyPage />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Verified screenshot pending")).toBeInTheDocument();
  });

  it("does not use unsupported leadership or overclaiming language", () => {
    const { container } = render(<RegPulseCaseStudyPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/transformed the bank/i);
    expect(text).not.toMatch(/led enterprise strategy/i);
    expect(text).not.toMatch(/guarantees compliance/i);
    expect(text).not.toMatch(/production-grade banking platform/i);
    expect(text).not.toMatch(/saved millions/i);
    expect(text).not.toMatch(/processed millions of payments/i);
  });

  it("does not display fake metrics or fake contact addresses", () => {
    const { container } = render(<RegPulseCaseStudyPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/@regpulse-ie\.com/i);
    expect(text).not.toMatch(/\d+% compliant/i);
    expect(text).not.toMatch(/\d+,\d{3}\+? (users|customers|institutions)/i);
  });
});
