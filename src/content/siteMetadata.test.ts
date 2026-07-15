import { describe, expect, it } from "vitest";
import { metadata } from "./siteMetadata";

describe("site metadata", () => {
  it("uses the exact Production URL as metadataBase and canonical", () => {
    expect(metadata.metadataBase?.toString()).toBe("https://rajesh-fintech-portfolio.vercel.app/");
    const alternates = metadata.alternates as { canonical?: string } | undefined;
    expect(alternates?.canonical).toBe("https://rajesh-fintech-portfolio.vercel.app");
  });

  it("uses the exact Production URL in Open Graph metadata", () => {
    const openGraph = metadata.openGraph as { url?: string } | undefined;
    expect(openGraph?.url).toBe("https://rajesh-fintech-portfolio.vercel.app");
  });

  it("does not use a Preview, AutoTime, or Firebase URL as canonical metadata", () => {
    const text = JSON.stringify(metadata);
    expect(text).not.toMatch(/-[a-z0-9]{9,}-rajs-projects/);
    expect(text).not.toContain("autotimeai.com");
    expect(text).not.toContain("autotime-eu-apply");
    expect(text).not.toContain("studio.firebase.google.com");
  });
});
