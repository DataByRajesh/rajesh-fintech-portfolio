import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/SiteHeader";
import HomePage from "./page";

describe("portfolio home page", () => {
  it("renders the name and title", () => {
    render(<HomePage />);
    expect(screen.getByText("Rajesh Kumar Alagesan")).toBeInTheDocument();
    expect(screen.getByText("FinTech Systems Analyst")).toBeInTheDocument();
  });

  it("renders featured project placeholders", () => {
    render(<HomePage />);
    expect(screen.getByText("PayGuard IE")).toBeInTheDocument();
    expect(screen.getByText("RegPulse IE")).toBeInTheDocument();
  });

  it("renders the navigation", () => {
    render(
      <div>
        <SiteHeader />
        <HomePage />
      </div>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the disclaimer", () => {
    render(<HomePage />);
    expect(screen.getByText(/Portfolio demonstration only/i)).toBeInTheDocument();
  });

  it("renders View GitHub and View LinkedIn actions", () => {
    render(<HomePage />);
    expect(screen.getByText("View GitHub")).toBeInTheDocument();
    expect(screen.getByText("View LinkedIn")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub profile/i })).toHaveAttribute(
      "href",
      "https://github.com/DataByRajesh",
    );
    expect(screen.getByRole("link", { name: /LinkedIn profile/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rajesh-kumar-alagesan/",
    );
  });

  it("renders the startup and independent product work section", () => {
    render(<HomePage />);
    expect(screen.getByText("AutoTime AI Ltd")).toBeInTheDocument();
    expect(screen.getByText("AutoTime EU Apply")).toBeInTheDocument();
  });

  it("only shows Founder & CEO within the AutoTime AI venture context", () => {
    render(<HomePage />);
    const occurrences = screen.getAllByText("Founder & CEO");
    expect(occurrences).toHaveLength(1);
    const ventureCard = occurrences[0].closest("article");
    expect(ventureCard?.textContent).toContain("AutoTime AI Ltd");
  });

  it("presents AutoTime as separate from FIS employment", () => {
    const { container } = render(<HomePage />);
    const text = container.textContent ?? "";
    expect(text).toMatch(/separate from FIS employment/i);
    expect(text).not.toMatch(/AutoTime AI Ltd is FIS employment/i);
  });

  it("does not show Firebase Studio as a featured project", () => {
    const { container } = render(<HomePage />);
    const text = container.textContent ?? "";
    expect(text.toLowerCase()).not.toContain("firebase");
  });

  it("does not display unsupported metrics, fake contact details or unrelated content", () => {
    const { container } = render(<HomePage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/\d+[,\d]*\+?\s*(users|customers|clients)/i);
    expect(text.toLowerCase()).not.toContain("construction");
    expect(text.toLowerCase()).not.toContain("instagram");
    expect(text).not.toMatch(/\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/);
    expect(text).not.toMatch(/[\w.-]+@[\w.-]+\.\w+/);
  });

  it("keeps portfolioUrl null before Production deployment", () => {
    render(<HomePage />);
    expect(screen.queryByText("rajesh-fintech-portfolio.vercel.app")).not.toBeInTheDocument();
  });
});
