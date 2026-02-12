import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Code2, Bot, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Transformation Services in Dubai | SEEDRIX",
  description:
    "Explore SEEDRIX's strategy-led digital transformation services including software engineering, automation, AI, integrations, and digital growth.",
  openGraph: { url: "https://seedrix.co/services" },
};

const pillars = [
  {
    slug: "strategy-consulting",
    title: "Strategy & Consulting",
    description: "Audit, roadmap, and system planning to align technology with business outcomes.",
    icon: ClipboardList,
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    description: "Web and mobile applications, SaaS, ERP/CRM, and API design and development.",
    icon: Code2,
  },
  {
    slug: "automation-ai-data",
    title: "Automation, AI & Data",
    description: "Workflow automation, AI agents, dashboards, and integrations for operational efficiency.",
    icon: Bot,
  },
  {
    slug: "media-digital-growth",
    title: "Media, Brand & Digital Growth",
    description: "Brand systems, content strategy, and performance marketing for sustainable growth.",
    icon: Megaphone,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">
            Transformation Services Built for Business Outcomes
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            We don&apos;t sell isolated services. We design and operate systems that reduce complexity and enable
            long-term scalability.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/services/${pillar.slug}`}
                className="group block p-8 lg:p-10 rounded-2xl bg-secondary shadow-card-glow hover:bg-secondary/80 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">{pillar.title}</h2>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-apple text-center">
          <p className="body-md max-w-xl mx-auto mb-8">
            Start with a structured strategy session. Share your objectives and we&apos;ll outline next steps.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/get-started">
              Get Started
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
