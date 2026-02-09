/**
 * Production-ready content model for completed projects (case studies).
 * Powers /work and /work/[slug].
 *
 * How to add a new case:
 * 1. Add a new object to the workCases array below with: slug, title, industry,
 *    engagementType, context, servicesTags (from SERVICES_TAGS), systemsBuilt (5–7 items),
 *    outcomes (4–6 bullets), featured, date ("YYYY-MM"), heroLabel.
 * 2. Use a URL-safe slug (lowercase, hyphens); ensure it is unique.
 * 3. Optional: add content/work/<slug>.mdx for custom long-form body (otherwise the case fields are rendered).
 */

export const SERVICES_TAGS = [
  "Strategy",
  "Software Engineering",
  "Automation",
  "Growth",
] as const;

export type ServicesTag = (typeof SERVICES_TAGS)[number];

export interface WorkCase {
  slug: string;
  title: string;
  industry: string;
  engagementType: string;
  context: string;
  servicesTags: readonly ServicesTag[];
  systemsBuilt: readonly string[];
  outcomes: readonly string[];
  featured: boolean;
  date: string;
  heroLabel: string;
  /** Optional hero/card image path (e.g. in public/) or URL */
  image?: string | null;
  /** Optional video URL (self-hosted or YouTube/Vimeo) */
  video?: string | null;
}

export const workCases: readonly WorkCase[] = [
  {
    slug: "centralized-operations-management",
    title: "Centralized Operations Management System",
    industry: "Enterprise Operations",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "A regional enterprise needed a single system to oversee operations, reporting, and approvals across multiple business units.",
    servicesTags: ["Strategy", "Software Engineering", "Automation"],
    systemsBuilt: [
      "Unified operations dashboard",
      "Approval and workflow engine",
      "Role-based access and permissions",
      "Reporting and export pipelines",
      "Audit trail and compliance logs",
      "Integration layer for legacy systems",
    ],
    outcomes: [
      "Single source of truth for operations and approvals.",
      "Reduced manual handoffs and duplicate data entry.",
      "Clear visibility for leadership on status and bottlenecks.",
      "Foundation for future automation and scaling.",
    ],
    featured: true,
    date: "2025-01",
    heroLabel: "Operations Management",
  },
  {
    slug: "property-client-pipeline-platform",
    title: "Property & Client Pipeline Platform",
    industry: "Real Estate",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "A real estate operator required a structured platform to manage properties, client pipeline, and deal stages from lead to close.",
    servicesTags: ["Strategy", "Software Engineering", "Growth"],
    systemsBuilt: [
      "Property and listing management",
      "Client and lead pipeline with stages",
      "Document and checklist workflows",
      "Reporting for pipeline and conversion",
      "Secure client portal for documents",
    ],
    outcomes: [
      "Pipeline and deal stages visible across the team.",
      "Consistent process for onboarding and closing.",
      "Fewer missed follow-ups and lost leads.",
      "Easier handover between sales and operations.",
    ],
    featured: true,
    date: "2025-02",
    heroLabel: "Property & Pipeline",
  },
  {
    slug: "digital-patient-interaction-layer",
    title: "Digital Patient Interaction Layer",
    industry: "Healthcare",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "A healthcare provider sought a secure digital layer for patient communication, scheduling, and consent without replacing core clinical systems.",
    servicesTags: ["Strategy", "Software Engineering", "Automation"],
    systemsBuilt: [
      "Patient-facing scheduling and reminders",
      "Secure messaging and document exchange",
      "Consent and preference capture",
      "Integration with existing EMR and calendars",
      "Audit and retention for compliance",
    ],
    outcomes: [
      "Patients can book and manage interactions in one place.",
      "Staff spend less time on phone and manual scheduling.",
      "Consent and communications documented for compliance.",
      "Ready for future extensions (e.g. telehealth, forms).",
    ],
    featured: true,
    date: "2025-03",
    heroLabel: "Patient Interaction",
  },
  {
    slug: "secure-approval-reporting-workflow",
    title: "Secure Approval & Reporting Workflow Platform",
    industry: "Financial Services",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "A financial services firm needed a controlled platform for multi-level approvals, reporting, and audit trails aligned with regulatory expectations.",
    servicesTags: ["Strategy", "Software Engineering", "Automation"],
    systemsBuilt: [
      "Configurable approval chains and rules",
      "Secure document and submission handling",
      "Reporting and dashboards with export",
      "Full audit trail and retention",
      "Access control and segregation of duties",
    ],
    outcomes: [
      "Approvals and exceptions tracked end-to-end.",
      "Reporting and audit evidence available on demand.",
      "Consistent controls across teams and products.",
      "Reduced reliance on email and spreadsheets for approvals.",
    ],
    featured: false,
    date: "2025-04",
    heroLabel: "Approval & Reporting",
  },
  {
    slug: "ecommerce-modernization-checkout",
    title: "E-commerce Modernization & Checkout Optimization",
    industry: "Retail",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "A retailer wanted to modernize its online store and checkout flow to improve conversion and support new payment and fulfillment options.",
    servicesTags: ["Strategy", "Software Engineering", "Growth"],
    systemsBuilt: [
      "Refined checkout and payment flow",
      "Integration with payment and tax providers",
      "Inventory and order sync for fulfillment",
      "Basic analytics for funnel and conversion",
      "Mobile-responsive storefront updates",
    ],
    outcomes: [
      "Checkout steps reduced and abandonment lowered.",
      "Unified view of orders and fulfillment status.",
      "Easier to add new payment and delivery options.",
      "Clearer picture of conversion and drop-off.",
    ],
    featured: false,
    date: "2025-05",
    heroLabel: "E-commerce & Checkout",
  },
  {
    slug: "multi-branch-booking-dispatch",
    title: "Multi-branch Service Booking & Dispatch System",
    industry: "Services / Logistics",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "A multi-branch service business needed a single system for customer bookings, technician dispatch, and branch-level scheduling.",
    servicesTags: ["Strategy", "Software Engineering", "Automation"],
    systemsBuilt: [
      "Customer booking and self-service",
      "Branch and resource scheduling",
      "Dispatch and job assignment rules",
      "Status updates and notifications",
      "Reporting by branch, resource, and service type",
    ],
    outcomes: [
      "Customers can book and see status without calling.",
      "Branches and central ops share one schedule.",
      "Dispatch and capacity visible across locations.",
      "Fewer double-bookings and missed appointments.",
    ],
    featured: false,
    date: "2025-06",
    heroLabel: "Booking & Dispatch",
  },
  {
    slug: "internal-analytics-executive-dashboard",
    title: "Internal Analytics & Executive Dashboard Suite",
    industry: "Enterprise",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "An enterprise required internal analytics and executive dashboards fed from multiple sources, with controlled access and refresh.",
    servicesTags: ["Strategy", "Software Engineering", "Automation"],
    systemsBuilt: [
      "Data pipelines from key operational systems",
      "Executive dashboards with KPIs and trends",
      "Drill-down and filtered views by segment",
      "Scheduled refresh and alerts",
      "Access control and usage logging",
    ],
    outcomes: [
      "Leadership has a single place for key metrics.",
      "Data refreshed on a schedule instead of manual exports.",
      "Segments and filters support deeper analysis.",
      "Reduced time spent on ad hoc report building.",
    ],
    featured: false,
    date: "2025-07",
    heroLabel: "Analytics & Dashboards",
  },
  {
    slug: "automation-rollout-crm-lead-routing",
    title: "Automation Rollout for CRM + Lead Routing",
    industry: "Growth Ops",
    engagementType: "Strategy → Build → Ongoing Support",
    context:
      "A growth team wanted to automate lead capture, routing, and CRM updates so sales could focus on qualified opportunities.",
    servicesTags: ["Strategy", "Automation", "Growth"],
    systemsBuilt: [
      "Lead capture and form-to-CRM flow",
      "Routing rules by source, segment, and region",
      "CRM field updates and task creation",
      "Slack/email notifications for new leads",
      "Simple reporting on lead volume and response time",
    ],
    outcomes: [
      "New leads reach the right owner without manual assignment.",
      "CRM stays up to date from first touch.",
      "Response time and follow-up are easier to track.",
      "Capacity to handle higher lead volume without adding headcount.",
    ],
    featured: false,
    date: "2025-08",
    heroLabel: "CRM & Lead Routing",
  },
];

export function getWorkCaseBySlug(slug: string): WorkCase | undefined {
  return workCases.find((c) => c.slug === slug);
}

export function getFeaturedWorkCases(): readonly WorkCase[] {
  return workCases.filter((c) => c.featured);
}
