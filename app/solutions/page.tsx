import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { solutionsData } from "@/lib/solutions-data";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "Industry-Specific Digital Solutions | CurveClear",
  description:
    "CurveClear delivers tailored digital transformation solutions for real estate, healthcare, retail, professional services, logistics, and startups.",
  openGraph: { url: "https://curveclear.ae/solutions" },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">
            Industry Expertise.<br />
            <span className="text-muted-foreground">System-Driven Solutions.</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            We understand the unique challenges of your industry. Our solutions are designed to drive operational
            efficiency and long-term scalability.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-12">
            {solutionsData.map((solution) => (
              <article
                key={solution.id}
                id={solution.id}
                className="rounded-2xl bg-secondary scroll-mt-24 overflow-hidden"
              >
                <PlaceholderImage
                  aspect="21/9"
                  rounded="rounded-t-2xl rounded-b-none"
                  label={solution.title}
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="border-0 border-b border-border"
                />
                <div className="p-8 lg:p-12">
                <h2 className="headline-md mb-6">{solution.title}</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Key challenges
                    </h3>
                    <ul className="space-y-2">
                      {solution.challenges.map((c) => (
                        <li key={c} className="text-muted-foreground">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Systems we build
                    </h3>
                    <ul className="space-y-2">
                      {solution.systems.map((s) => (
                        <li key={s} className="text-muted-foreground">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {solution.outcomes.map((o) => (
                        <li key={o} className="text-muted-foreground">
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="hero" size="sm" asChild>
                    <Link href="/get-started">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
