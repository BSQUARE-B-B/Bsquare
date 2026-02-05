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
      <IndustriesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
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
