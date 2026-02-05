import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getInsightBySlug, insightsList } from "@/lib/insights-data";
import { getInsightContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return insightsList.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: "Insight | CurveClear" };
  return {
    title: `${insight.title} | CurveClear`,
    description: "Strategy-led insights on digital transformation, automation, and software scalability.",
    openGraph: { url: `https://curveclear.ae/insights/${slug}` },
  };
}

export default async function InsightSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const mdxSource = await getInsightContent(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Insights", item: "https://curveclear.ae/insights" },
      { "@type": "ListItem", position: 2, name: insight.title, item: `https://curveclear.ae/insights/${slug}` },
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
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Insights
          </Link>
          <header className="mb-12">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              {insight.category}
            </span>
            <h1 className="headline-xl mt-2">{insight.title}</h1>
            <time className="text-muted-foreground">
              {new Date(insight.date).toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </header>

          {mdxSource ? (
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <MDXRemote source={mdxSource} />
            </div>
          ) : (
            <p className="text-muted-foreground">Content for this insight is being prepared.</p>
          )}

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
            <Button variant="hero" size="sm" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button variant="heroOutline" size="sm" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
