export interface InsightItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  /** Optional card/hero image path or URL */
  image?: string | null;
}

export const insightsList: InsightItem[] = [
  { slug: "automation-governance", title: "Automation with Governance", category: "Automation", date: "2024-01-15" },
  { slug: "scalable-software", title: "Building Scalable Software Systems", category: "Engineering", date: "2024-01-10" },
  { slug: "transformation-roadmap", title: "From Strategy to Transformation Roadmap", category: "Transformation", date: "2024-01-05" },
];

export function getInsightBySlug(slug: string): InsightItem | undefined {
  return insightsList.find((i) => i.slug === slug);
}
