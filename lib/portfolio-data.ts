/**
 * Portfolio / Brands: logos, screenshots, and videos per brand.
 * Paths are relative to public/ (e.g. /images/portfolio/logo.png).
 * Use placeholders when an asset is missing.
 */

export interface PortfolioBrand {
  id: string;
  name: string;
  /** Logo path (e.g. /images/portfolio/acme-logo.png) */
  logo?: string | null;
  /** Screenshot paths for grid */
  screenshots: readonly string[];
  /** Video URLs (self-hosted path or YouTube/Vimeo) */
  videos: readonly string[];
}

export const portfolioBrands: readonly PortfolioBrand[] = [
  {
    id: "brand-1",
    name: "Enterprise Client",
    logo: null,
    screenshots: [],
    videos: [],
  },
  {
    id: "brand-2",
    name: "Retail Platform",
    logo: null,
    screenshots: [],
    videos: [],
  },
  {
    id: "brand-3",
    name: "Healthcare Portal",
    logo: null,
    screenshots: [],
    videos: [],
  },
];

export function getPortfolioBrandById(id: string): PortfolioBrand | undefined {
  return portfolioBrands.find((b) => b.id === id);
}
