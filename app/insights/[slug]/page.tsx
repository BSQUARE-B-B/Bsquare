import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getInsightBySlug, insightsList } from "@/lib/insights-data";
import { getInsightContent } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { GlowDivider } from "@/components/ui/glow-divider";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return insightsList.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: "Insight | SEEDRIX" };
  return {
    title: `${insight.title} | SEEDRIX`,
    description: "Strategy-led insights on digital transformation, automation, and software scalability.",
    openGraph: { url: `https://seedrix.co/insights/${slug}` },
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
      { "@type": "ListItem", position: 1, name: "Insights", item: "https://seedrix.co/insights" },
      { "@type": "ListItem", position: 2, name: insight.title, item: `https://seedrix.co/insights/${slug}` },
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
        </div>

        <div className="container-wide mb-12">
          <PlaceholderImage src={insight.image} aspect="21/9" sizes="100vw" />
        </div>

        <div className="container-apple">
          {mdxSource ? (
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => <Link href={href ?? "#"}>{children}</Link>,
                }}
              >
                {mdxSource}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-muted-foreground">Content for this insight is being prepared.</p>
          )}

          <GlowDivider className="mt-12" />
          <div className="pt-8 flex flex-wrap gap-4">
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
