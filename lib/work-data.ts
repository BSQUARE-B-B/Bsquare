/**
 * Work (case studies) data API. Source of truth: app/_content/workCases.ts
 */
import {
  workCases,
  getWorkCaseBySlug as getCaseBySlug,
  getFeaturedWorkCases as getFeatured,
  type WorkCase,
} from "@/app/_content/workCases";

/** All completed project cases for /work listing and sitemap */
export const workList: readonly WorkCase[] = workCases;

/** Get a single case by slug for /work/[slug] */
export function getWorkBySlug(slug: string): WorkCase | undefined {
  return getCaseBySlug(slug);
}

/** Featured cases for home page FeaturedWorkSection */
export function getFeaturedWorkCases(): readonly WorkCase[] {
  return getFeatured();
}
