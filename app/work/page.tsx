import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { workList } from "@/lib/work-data";
import { WorkCaseGrid } from "./_components/WorkCaseGrid";

export const metadata: Metadata = {
  title: "Digital Transformation Case Studies | SEEDRIX",
  description:
    "Explore selected digital transformation, software engineering, and automation projects delivered by SEEDRIX.",
  openGraph: { url: "https://seedrix.co/work" },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">
            Work That Shapes<br />
            <span className="text-muted-foreground">Scalable Organizations</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            A selection of digital systems designed, engineered, and deployed for long-term business impact.
          </p>
        </div>
      </section>

      {/* Case blocks with filters */}
      <section className="pb-20 lg:pb-32">
        <div className="container-wide">
          <WorkCaseGrid cases={workList} />
        </div>
      </section>

      {/* CTA band */}
      <section className="section-padding bg-secondary">
        <div className="container-apple text-center">
          <h2 className="headline-lg mb-6">Build a system like this.</h2>
          <Button variant="hero" size="xl" asChild>
            <Link href="/get-started">
              Get Started
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <p className="body-md mt-6">
            Prefer email?{" "}
            <a href="mailto:info@seedrix.co" className="text-foreground underline underline-offset-2 hover:opacity-80">
              info@seedrix.co
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
