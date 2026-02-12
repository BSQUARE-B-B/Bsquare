import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "About SEEDRIX | Digital Transformation Firm Dubai",
  description:
    "SEEDRIX Digital Transformation Firm operates as a systems-led partner focused on governance, stability, and scalable delivery.",
  openGraph: { url: "https://seedrix.co/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">
            Built to Deliver<br />
            <span className="text-muted-foreground">Clarity, Structure, and Scale</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            We operate as a systems-led partner. Governance, documentation, and predictable delivery are at the core of
            how we work.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-md mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  SEEDRIX was founded on the belief that sustainable digital transformation requires systems, not
                  shortcuts. We focus on strategy-led engagements, documented execution, and long-term partnerships.
                </p>
                <p className="leading-relaxed">
                  We work with organizations that value structure: clear scope, transparent pricing, and outcomes tied
                  to business goals. Our clients span real estate, healthcare, retail, professional services, logistics,
                  and funded startups.
                </p>
              </div>
            </div>
            <PlaceholderImage aspect="4/5" label="SEEDRIX" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="headline-md mb-8">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background shadow-card-glow">
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To be the partner of choice for organizations that want digital systems built for governance, scale,
                and long-term value.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-background shadow-card-glow">
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To deliver strategy-led digital transformation through disciplined execution, documentation, and
                retainer-based partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="headline-md mb-8">Our Values</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Discipline", "Documentation", "Predictable delivery", "Long-term value"].map((value) => (
              <li key={value}>
                <h3 className="text-lg font-semibold">{value}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="headline-md mb-6">Location</h2>
          <p className="text-muted-foreground text-lg">Dubai, UAE</p>
        </div>
      </section>

      <section className="section-padding">
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
