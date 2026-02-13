import { MetadataRoute } from "next";
import { workList } from "@/lib/work-data";
import { insightsList } from "@/lib/insights-data";

const base = "https://seedrix.co";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicesSlugs = ["strategy-consulting", "software-engineering", "automation-ai-data", "media-digital-growth"];
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/get-started`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
  const servicePages: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const workPages: MetadataRoute.Sitemap = workList.map((w) => ({
    url: `${base}/work/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const insightPages: MetadataRoute.Sitemap = insightsList.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...servicePages, ...workPages, ...insightPages];
}
