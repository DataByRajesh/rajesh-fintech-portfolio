import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Venture } from "@/types/venture";
import { VentureCard } from "./VentureCard";

const verifiedVenture: Venture = {
  name: "AutoTime AI Ltd",
  relationship: "Founder & CEO",
  description: "Independent startup work.",
  websiteUrl: "https://www.autotimeai.com",
  websiteStatus: "verified",
  products: [
    {
      name: "AutoTime EU Apply",
      description: "A job-search workflow product.",
      productUrl: "https://autotime-eu-apply.vercel.app/",
      status: "live",
      evidenceNote: "Verified before publication.",
      disclaimer: "Product guidance is informational and does not constitute immigration or legal advice.",
    },
  ],
};

const unverifiedVenture: Venture = {
  ...verifiedVenture,
  websiteUrl: "https://www.autotimeai.com",
  websiteStatus: "under-verification",
  products: [
    {
      name: "Example Product",
      description: "Not yet verified.",
      productUrl: null,
      status: "under-verification",
      evidenceNote: "Awaiting verification.",
    },
  ],
};

describe("VentureCard", () => {
  it("renders venture name, relationship and description", () => {
    render(<VentureCard venture={verifiedVenture} />);
    expect(screen.getByText("AutoTime AI Ltd")).toBeInTheDocument();
    expect(screen.getByText("Founder & CEO")).toBeInTheDocument();
    expect(screen.getByText("Independent startup work.")).toBeInTheDocument();
  });

  it("renders a safe external link for a verified website", () => {
    render(<VentureCard venture={verifiedVenture} />);
    const link = screen.getByRole("link", { name: "Open the AutoTime AI Ltd startup website" });
    expect(link).toHaveAttribute("href", "https://www.autotimeai.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("renders the product disclaimer when present", () => {
    render(<VentureCard venture={verifiedVenture} />);
    expect(
      screen.getByText("Product guidance is informational and does not constitute immigration or legal advice."),
    ).toBeInTheDocument();
  });

  it("does not render a broken link for an unverified website", () => {
    render(<VentureCard venture={unverifiedVenture} />);
    expect(screen.getByText("Startup website under verification")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /startup website/i })).not.toBeInTheDocument();
  });

  it("does not render a broken link for an unverified product", () => {
    render(<VentureCard venture={unverifiedVenture} />);
    expect(screen.getByText("Product link under verification")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /live product/i })).not.toBeInTheDocument();
  });
});
