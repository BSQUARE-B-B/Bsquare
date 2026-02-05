export const servicesData: Record<
  string,
  {
    title: string;
    intro: string;
    outcomes: { title: string; description: string }[];
    idealFor: string[];
  }
> = {
  "strategy-consulting": {
    title: "Strategy & Consulting",
    intro:
      "Strategy-led engagements start with understanding your operations, constraints, and goals. We produce audit reports, roadmaps, and system plans that align technology with business outcomes and set a clear path for implementation.",
    outcomes: [
      { title: "Operational audit", description: "Assessment of current systems, gaps, and improvement opportunities." },
      { title: "Roadmap & scope", description: "Prioritized initiatives with timelines and resource requirements." },
      { title: "System design", description: "Architecture and integration planning for scalability and governance." },
      { title: "Vendor evaluation", description: "Objective evaluation and selection support when third-party tools are needed." },
    ],
    idealFor: [
      "Organizations preparing for a major digital initiative",
      "Teams that need alignment between business and IT",
      "Leaders who want documented, repeatable processes",
    ],
  },
  "software-engineering": {
    title: "Technology & Software Engineering",
    intro:
      "We build web and mobile applications, SaaS products, and integrations with a focus on maintainability, security, and scale. From greenfield projects to legacy modernization, we follow documented engineering practices.",
    outcomes: [
      { title: "Web & mobile apps", description: "Responsive, accessible applications built with modern stacks." },
      { title: "SaaS & platforms", description: "Multi-tenant systems with clear data and access boundaries." },
      { title: "ERP/CRM integration", description: "Connections between core business systems and custom tools." },
      { title: "API design", description: "Stable, versioned APIs for internal and partner consumption." },
    ],
    idealFor: [
      "Businesses that need custom software, not only off-the-shelf",
      "Teams that value documentation and handover",
      "Organizations planning for long-term ownership",
    ],
  },
  "automation-ai-data": {
    title: "Automation, AI & Data",
    intro:
      "We implement workflow automation, AI-assisted processes, and data pipelines that reduce manual work and improve decision-making. Solutions are designed for security, auditability, and incremental rollout.",
    outcomes: [
      { title: "Workflow automation", description: "Repetitive processes automated with clear triggers and approvals." },
      { title: "AI agents & assistants", description: "Controlled use of AI for specific tasks with human oversight." },
      { title: "Dashboards & reporting", description: "Single source of truth for KPIs and operational metrics." },
      { title: "Integrations", description: "Reliable data flow between systems with error handling and logging." },
    ],
    idealFor: [
      "Operations-heavy organizations seeking efficiency gains",
      "Teams ready to adopt AI in bounded, governed ways",
      "Businesses that need better visibility into data",
    ],
  },
  "media-digital-growth": {
    title: "Media, Brand & Digital Growth",
    intro:
      "We support growth through coherent brand systems, content strategy, and performance marketing. Efforts are tied to business objectives and measured for impact, not vanity metrics.",
    outcomes: [
      { title: "Brand systems", description: "Guidelines, assets, and templates for consistent positioning." },
      { title: "Content strategy", description: "Planned content that supports funnel and retention goals." },
      { title: "Performance marketing", description: "Paid and organic channels with clear attribution and ROI focus." },
      { title: "Analytics & optimization", description: "Setup and interpretation of metrics that drive decisions." },
    ],
    idealFor: [
      "Organizations that need to scale demand generation",
      "Teams that want brand and growth aligned with product",
      "Businesses investing in measurable marketing",
    ],
  },
};
