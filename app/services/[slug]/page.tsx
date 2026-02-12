import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";

const slugs = ["strategy-consulting", "software-engineering", "automation-ai-data", "media-digital-growth"];

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service | SEEDRIX" };
  return {
    title: `${service.title} for Scalable Businesses | SEEDRIX`,
    description: `SEEDRIX delivers ${service.title.toLowerCase()} solutions designed for operational efficiency, system stability, and business scalability.`,
    openGraph: { url: `https://seedrix.co/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Services", item: "https://seedrix.co/services" },
      { "@type": "ListItem", position: 2, name: service.title, item: `https://seedrix.co/services/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container-apple">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Services
          </Link>
          <h1 className="headline-xl mb-8">{service.title} for Scalable Organizations</h1>
          <p className="body-lg max-w-2xl">{service.intro}</p>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container-wide">
          <h2 className="headline-md mb-8">What We Deliver</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {service.outcomes.map((outcome, i) => (
              <div key={i} className="p-8 rounded-2xl bg-secondary shadow-card-glow">
                <h3 className="text-xl font-semibold mb-2">{outcome.title}</h3>
                <p className="text-muted-foreground">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32 bg-secondary">
        <div className="container-wide">
          <h2 className="headline-md mb-6">Ideal For</h2>
          <ul className="space-y-3">
            {service.idealFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container-wide">
          <h2 className="headline-md mb-6">Engagement Model</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="p-6 rounded-2xl bg-secondary shadow-card-glow">
              <span className="text-sm font-medium text-muted-foreground">1</span>
              <h3 className="text-lg font-semibold mt-2">Assessment</h3>
              <p className="text-muted-foreground text-sm mt-1">Structured discovery and scope definition.</p>
            </li>
            <li className="p-6 rounded-2xl bg-secondary shadow-card-glow">
              <span className="text-sm font-medium text-muted-foreground">2</span>
              <h3 className="text-lg font-semibold mt-2">Implementation</h3>
              <p className="text-muted-foreground text-sm mt-1">Phased delivery with clear milestones.</p>
            </li>
            <li className="p-6 rounded-2xl bg-secondary shadow-card-glow">
              <span className="text-sm font-medium text-muted-foreground">3</span>
              <h3 className="text-lg font-semibold mt-2">Retainer</h3>
              <p className="text-muted-foreground text-sm mt-1">Ongoing optimization and support.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-apple text-center">
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
