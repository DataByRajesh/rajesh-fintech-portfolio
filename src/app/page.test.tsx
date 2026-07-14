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
});
