import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: profile.metadataTitle,
  description: profile.metadataDescription,
  ...(profile.portfolioUrl
    ? {
        metadataBase: new URL(profile.portfolioUrl),
        alternates: { canonical: profile.portfolioUrl },
        openGraph: {
          title: profile.metadataTitle,
          description: profile.metadataDescription,
          url: profile.portfolioUrl,
          siteName: profile.metadataTitle,
          type: "website",
        },
      }
    : {}),
};
