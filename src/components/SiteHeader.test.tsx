import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  it("renders primary navigation", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("includes compact GitHub and LinkedIn links with exact URLs", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: /GitHub profile/i })).toHaveAttribute(
      "href",
      "https://github.com/DataByRajesh",
    );
    expect(screen.getByRole("link", { name: /LinkedIn profile/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rajesh-kumar-alagesan/",
    );
  });

  it("uses safe external link attributes for profile links", () => {
    render(<SiteHeader />);
    const linkedin = screen.getByRole("link", { name: /LinkedIn profile/i });
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noreferrer noopener");
  });
});
