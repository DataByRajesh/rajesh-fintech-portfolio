export type VentureStatus = "verified" | "under-verification";

export type ProductStatus = "live" | "preview" | "under-verification";

export type VentureProduct = {
  name: string;
  description: string;
  productUrl: string | null;
  status: ProductStatus;
  evidenceNote: string;
  disclaimer?: string;
};

export type Venture = {
  name: string;
  relationship: string;
  description: string;
  websiteUrl: string | null;
  websiteStatus: VentureStatus;
  products: VentureProduct[];
};
