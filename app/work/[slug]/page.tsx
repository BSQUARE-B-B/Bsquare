import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWorkBySlug, workList } from "@/lib/work-data";
import { MediaBlock } from "@/components/ui/media-block";
import { CaseStudySections } from "./_components/CaseStudySections";

export async function generateStaticParams() {
  return workList.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getWorkBySlug(slug);
  if (!caseStudy) return { title: "Case Study | SEEDRIX" };
  return {
    title: `${caseStudy.title} Case Study | SEEDRIX`,
    description: `${caseStudy.context} Industry: ${caseStudy.industry}.`,
    openGraph: { url: `https://seedrix.co/work/${slug}` },
  };
}

function formatDate(dateStr: string): string {
  const [y, m] = dateStr.split("-");
  const d = new Date(parseInt(y, 10), parseInt(m, 10) - 1);
  return d.toLocaleDateString("en-AE", { month: "long", year: "numeric" });
}

export default async function WorkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getWorkBySlug(slug);
  if (!caseStudy) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Work", item: "https://seedrix.co/work" },
      {
        "@type": "ListItem",
        position: 2,
        name: caseStudy.title,
        item: `https://seedrix.co/work/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article>
        {/* Hero */}
        <header className="pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="container-apple">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Work
            </Link>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              {caseStudy.industry}
            </span>
            <h1 className="headline-xl mt-2 mb-8">{caseStudy.title}</h1>
            <p className="body-lg max-w-2xl">{caseStudy.context}</p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span>{caseStudy.engagementType}</span>
              <span>{formatDate(caseStudy.date)}</span>
            </div>
          </div>
        </header>

        {/* Hero media */}
        <div className="container-wide mb-20 lg:mb-28">
          <MediaBlock
            imageUrl={caseStudy.image}
            videoUrl={caseStudy.video}
            aspect="21/9"
            sizes="100vw"
            placeholderLabel={caseStudy.heroLabel}
          />
        </div>

        {/* Sections (client: minimal motion) */}
        <CaseStudySections caseStudy={caseStudy} />
      </article>
    </div>
  );
}
