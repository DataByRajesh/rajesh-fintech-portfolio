import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperiencePage from "./page";

describe("Experience page", () => {
  it("renders", () => {
    render(<ExperiencePage />);
    expect(screen.getByRole("heading", { level: 2, name: "Professional focus" })).toBeInTheDocument();
  });

  it("mentions FIS experience and education", () => {
    render(<ExperiencePage />);
    expect(screen.getAllByText(/FIS/).length).toBeGreaterThan(0);
    expect(screen.getByText("MSc Big Data Technologies")).toBeInTheDocument();
    expect(screen.getByText("BSc Computer Science")).toBeInTheDocument();
  });

  it("does not mention AutoTime as part of FIS employment", () => {
    const { container } = render(<ExperiencePage />);
    const text = container.textContent ?? "";
    expect(text.toLowerCase()).not.toContain("autotime");
  });

  it("does not publish confidential, immigration or financial details", () => {
    const { container } = render(<ExperiencePage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/visa/i);
    expect(text).not.toMatch(/immigration status/i);
    expect(text).not.toMatch(/salary/i);
    expect(text).not.toMatch(/\bdate of birth\b/i);
  });
});
