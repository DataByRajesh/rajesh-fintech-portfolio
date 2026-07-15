import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./page";

describe("About page", () => {
  it("renders", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { level: 2, name: "Positioning" })).toBeInTheDocument();
  });

  it("mentions FIS enterprise banking-software experience and portfolio evidence", () => {
    render(<AboutPage />);
    expect(screen.getAllByText(/FIS/).length).toBeGreaterThan(0);
    expect(screen.getByText(/PayGuard IE and RegPulse IE/)).toBeInTheDocument();
  });

  it("renders an independent product work section separate from FIS", () => {
    render(<AboutPage />);
    expect(screen.getByText("Independent product work")).toBeInTheDocument();
    expect(screen.getByText(/AutoTime AI Ltd/)).toBeInTheDocument();
  });

  it("does not use unsupported overclaiming language", () => {
    const { container } = render(<AboutPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/visionary leader/i);
    expect(text).not.toMatch(/serial entrepreneur/i);
    expect(text).not.toMatch(/world-class innovator/i);
    expect(text).not.toMatch(/passionate technology enthusiast/i);
    expect(text).not.toMatch(/expert in everything/i);
  });

  it("does not display an address or date of birth", () => {
    const { container } = render(<AboutPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/\bdate of birth\b/i);
    expect(text).not.toMatch(/\b\d{1,4}\s+\w+\s+(street|road|avenue|lane)\b/i);
  });
});
