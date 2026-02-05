import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { workList } from "@/lib/work-data";

export const metadata: Metadata = {
  title: "Digital Transformation Case Studies | CurveClear",
  description:
    "Explore selected digital transformation, software engineering, and automation projects delivered by CurveClear.",
  openGraph: { url: "https://curveclear.ae/work" },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">
            Work That Powers<br />
            <span className="text-muted-foreground">Modern Organizations</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            A selection of structured engagements focused on long-term business impact.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {workList.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block p-8 rounded-2xl bg-secondary hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {project.industry}
                </span>
                <h2 className="text-2xl font-semibold mt-2 mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((s) => (
                    <span key={s} className="text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium">
                  View Case Study
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
