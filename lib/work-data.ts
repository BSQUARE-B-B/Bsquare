export const workList = [
  { slug: "real-estate-portfolio", title: "Real Estate Portfolio Platform", industry: "Real Estate", services: ["Strategy", "Software"] },
  { slug: "healthcare-portal", title: "Healthcare Patient Portal", industry: "Healthcare", services: ["Software", "Automation"] },
  { slug: "ecommerce-operations", title: "E-commerce Operations Stack", industry: "Retail", services: ["Automation", "Growth"] },
];

export function getWorkBySlug(slug: string) {
  return workList.find((w) => w.slug === slug);
}
