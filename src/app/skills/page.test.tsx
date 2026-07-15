import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsPage from "./page";

describe("Skills page", () => {
  it("renders", () => {
    render(<SkillsPage />);
    expect(screen.getByRole("heading", { level: 2, name: "Core capability areas" })).toBeInTheDocument();
  });

  it("renders skill categories including payments and technology stack areas", () => {
    render(<SkillsPage />);
    expect(screen.getByText("Payments and reconciliation")).toBeInTheDocument();
    expect(screen.getByText("Next.js and TypeScript")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL and Prisma")).toBeInTheDocument();
  });

  it("does not publish percentage skill bars", () => {
    const { container } = render(<SkillsPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/\d{1,3}%/);
  });
});
