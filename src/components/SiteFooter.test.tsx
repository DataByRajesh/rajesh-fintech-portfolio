import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("links to GitHub and LinkedIn with exact URLs", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: /GitHub profile/i })).toHaveAttribute(
      "href",
      "https://github.com/DataByRajesh",
    );
    expect(screen.getByRole("link", { name: /LinkedIn profile/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rajesh-kumar-alagesan/",
    );
  });

  it("uses safe external link attributes", () => {
    render(<SiteFooter />);
    const github = screen.getByRole("link", { name: /GitHub profile/i });
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("does not display the raw GitHub URL as visible link text", () => {
    render(<SiteFooter />);
    expect(screen.queryByText("https://github.com/DataByRajesh")).not.toBeInTheDocument();
  });

  it("includes one compact AutoTime AI link when verified", () => {
    render(<SiteFooter />);
    const autoTimeLink = screen.getByRole("link", { name: /AutoTime AI startup website/i });
    expect(autoTimeLink).toHaveAttribute("href", "https://www.autotimeai.com");
    expect(autoTimeLink).toHaveAttribute("target", "_blank");
  });

  it("retains the exact RegPulse-style portfolio disclaimer", () => {
    render(<SiteFooter />);
    expect(
      screen.getByText("Portfolio demonstration only. It does not provide legal advice or certify regulatory compliance."),
    ).toBeInTheDocument();
  });
});
