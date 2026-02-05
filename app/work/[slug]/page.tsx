import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWorkBySlug, workList } from "@/lib/work-data";
import { getWorkContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return workList.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Case Study | CurveClear" };
  return {
    title: `${work.title} Digital Transformation Case Study | CurveClear`,
    description: `How CurveClear delivered structured strategy, engineering, and automation outcomes for ${work.industry}.`,
    openGraph: { url: `https://curveclear.ae/work/${slug}` },
  };
}

export default async function WorkSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const mdxSource = await getWorkContent(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Work", item: "https://curveclear.ae/work" },
      { "@type": "ListItem", position: 2, name: work.title, item: `https://curveclear.ae/work/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="pt-32 pb-20">
        <div className="container-apple">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Work
          </Link>
          <header className="mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              {work.industry}
            </span>
            <h1 className="headline-xl mt-2">{work.title}</h1>
          </header>

          {mdxSource ? (
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <MDXRemote source={mdxSource} />
            </div>
          ) : (
            <div className="space-y-12">
              <section>
                <h2 className="headline-md mb-4">The Challenge</h2>
                <p className="text-muted-foreground">
                  The client needed a structured approach to modernize operations and improve scalability across their
                  {work.industry.toLowerCase()} operations.
                </p>
              </section>
              <section>
                <h2 className="headline-md mb-4">Our System Approach</h2>
                <p className="text-muted-foreground">
                  We applied our four-pillar framework: strategy and consulting, software engineering, automation and
                  data, and digital growth — with clear milestones and documentation at each stage.
                </p>
              </section>
              <section>
                <h2 className="headline-md mb-4">Results & Impact</h2>
                <p className="text-muted-foreground">
                  The engagement delivered measurable improvements in efficiency, visibility, and readiness for
                  scale. We continue to support the client on a retainer basis for optimization and new phases.
                </p>
              </section>
            </div>
          )}

          <section className="mt-16 pt-12 border-t border-border">
            <Button variant="hero" size="lg" asChild>
              <Link href="/get-started">
                Get Started
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </section>
        </div>
      </article>
    </div>
  );
}
