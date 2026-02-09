import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroSection } from "./_components/HeroSection";
import { FrameworkSection } from "./_components/FrameworkSection";
import { HowWeWorkSection } from "./_components/HowWeWorkSection";
import { FeaturedWorkSection } from "./_components/FeaturedWorkSection";
import { IndustriesSection } from "./_components/IndustriesSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { FinalCTASection } from "./_components/FinalCTASection";

export const metadata: Metadata = {
  title: "Digital Transformation & Systems Firm in Dubai | CurveClear.ae",
  description:
    "Curveclear Digital Transformation Firm in Dubai delivering strategy, software engineering, automation, AI, and digital growth systems built for scale.",
  openGraph: {
    title: "Digital Transformation & Systems Firm in Dubai | CurveClear.ae",
    description:
      "Curveclear Digital Transformation Firm in Dubai delivering strategy, software engineering, automation, AI, and digital growth systems built for scale.",
    url: "https://curveclear.ae",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CredibilityStrip />
      <FrameworkSection />
      <HowWeWorkSection />
      <FeaturedWorkSection />
      <PortfolioTeaser />
      <IndustriesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}

function PortfolioTeaser() {
  return (
    <section className="section-padding border-y border-border bg-secondary/30">
      <div className="container-apple text-center">
        <h2 className="headline-lg mb-4">Portfolio & Brand Work</h2>
        <p className="body-md max-w-xl mx-auto mb-8">
          Logos, screenshots, and videos from selected projects.
        </p>
        <Button variant="heroOutline" size="lg" asChild>
          <Link href="/portfolio">
            View Portfolio
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function CredibilityStrip() {
  const bullets = [
    "Strategy-led engagements",
    "Enterprise-grade governance",
    "Secure, documented execution",
    "Retainer-based partnerships",
  ];
  return (
    <section className="border-y border-border bg-secondary/50 py-6">
      <div className="container-wide">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          {bullets.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
