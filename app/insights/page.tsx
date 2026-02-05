import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { insightsList } from "@/lib/insights-data";

export const metadata: Metadata = {
  title: "Digital Transformation Insights & Analysis | CurveClear",
  description:
    "Strategy-led insights on automation, AI adoption, software scalability, and digital transformation for modern businesses.",
  openGraph: { url: "https://curveclear.ae/insights" },
};

const categories = ["Transformation", "Automation", "Engineering", "Growth"];

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">
            Insights &<br />
            <span className="text-muted-foreground">Analysis</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Strategy-led insights on automation, AI adoption, software scalability, and digital transformation.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsList.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block p-6 rounded-2xl bg-secondary hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {insight.category}
                </span>
                <h2 className="text-xl font-semibold mt-2 mb-2">{insight.title}</h2>
                <time className="text-sm text-muted-foreground">{new Date(insight.date).toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" })}</time>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium">
                  Read
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-apple text-center">
          <Button variant="hero" size="xl" asChild>
            <Link href="/get-started">
              Get Started
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
