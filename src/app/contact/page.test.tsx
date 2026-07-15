import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "./page";

describe("Contact page", () => {
  it("renders", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 2, name: "Contact details" })).toBeInTheDocument();
  });

  it("renders a Professional profiles section with exact GitHub and LinkedIn links", () => {
    render(<ContactPage />);
    expect(screen.getByText("Professional profiles")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub profile/i })).toHaveAttribute(
      "href",
      "https://github.com/DataByRajesh",
    );
    expect(screen.getByRole("link", { name: /LinkedIn profile/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rajesh-kumar-alagesan/",
    );
    expect(screen.getByText(/View repositories and technical portfolio/)).toBeInTheDocument();
    expect(screen.getByText(/View professional experience and connect/)).toBeInTheDocument();
  });

  it("renders a Startup section with the verified AutoTime AI link and AutoTime EU Apply link", () => {
    render(<ContactPage />);
    expect(screen.getByText("Startup")).toBeInTheDocument();
    expect(screen.getByText("Visit AutoTime AI")).toBeInTheDocument();
    expect(screen.getByText("Open AutoTime EU Apply")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /AutoTime AI startup website/i })).toHaveAttribute(
      "href",
      "https://www.autotimeai.com",
    );
    expect(screen.getByRole("link", { name: /AutoTime EU Apply live product/i })).toHaveAttribute(
      "href",
      "https://autotime-eu-apply.vercel.app/",
    );
  });

  it("keeps public email nullable", () => {
    render(<ContactPage />);
    expect(screen.getByText("Contact details being finalised")).toBeInTheDocument();
  });

  it("does not display a phone number or home address", () => {
    const { container } = render(<ContactPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/);
    expect(text).not.toMatch(/\b\d{1,4}\s+\w+\s+(street|road|avenue|lane)\b/i);
  });
});
