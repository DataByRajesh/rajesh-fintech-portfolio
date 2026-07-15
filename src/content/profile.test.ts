import { describe, expect, it } from "vitest";
import { profile } from "./profile";
import { ventures } from "./ventures";

describe("profile content", () => {
  it("keeps the approved primary and supporting titles", () => {
    expect(profile.primaryTitle).toBe("FinTech Systems Analyst");
    expect(profile.supportingTitle).toBe("Payments, Reconciliation, UAT and Operational Controls");
  });

  it("uses the exact GitHub and LinkedIn URLs", () => {
    expect(profile.socialLinks.github).toBe("https://github.com/DataByRajesh");
    expect(profile.socialLinks.linkedin).toBe("https://www.linkedin.com/in/rajesh-kumar-alagesan/");
  });

  it("keeps portfolioUrl null before Production deployment", () => {
    expect(profile.portfolioUrl).toBeNull();
  });

  it("does not reference AutoTime domains in metadata", () => {
    expect(profile.metadataTitle.toLowerCase()).not.toContain("autotime");
    expect(profile.metadataDescription.toLowerCase()).not.toContain("autotime");
  });
});

describe("venture content", () => {
  it("uses the exact AutoTime AI startup URL", () => {
    const autoTimeAi = ventures.find((venture) => venture.name === "AutoTime AI Ltd");
    expect(autoTimeAi?.websiteUrl).toBe("https://www.autotimeai.com");
  });

  it("uses the exact AutoTime EU Apply product URL", () => {
    const autoTimeAi = ventures.find((venture) => venture.name === "AutoTime AI Ltd");
    const product = autoTimeAi?.products.find((p) => p.name === "AutoTime EU Apply");
    expect(product?.productUrl).toBe("https://autotime-eu-apply.vercel.app/");
  });

  it("keeps Founder & CEO scoped to the AutoTime AI venture relationship field", () => {
    const autoTimeAi = ventures.find((venture) => venture.name === "AutoTime AI Ltd");
    expect(autoTimeAi?.relationship).toBe("Founder & CEO");
  });

  it("does not publish unsupported metrics in venture descriptions", () => {
    const text = JSON.stringify(ventures).toLowerCase();
    expect(text).not.toMatch(/\d+[,\d]*\+?\s*(users|customers|clients)/);
    expect(text).not.toMatch(/funding|revenue|acquired|paying customers/);
    expect(text).not.toMatch(/guarantee[ds]?\s+(employment|interview|sponsorship)/);
  });
});
