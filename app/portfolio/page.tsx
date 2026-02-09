import type { Metadata } from "next";
import Link from "next/link";
import { portfolioBrands } from "@/lib/portfolio-data";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { MediaBlock } from "@/components/ui/media-block";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | CurveClear",
  description:
    "Logos, screenshots, and videos from selected brand and digital transformation projects.",
  openGraph: { url: "https://curveclear.ae/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">
            Portfolio &<br />
            <span className="text-muted-foreground">Brand Work</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Logos, screenshots, and videos from selected projects and brand engagements.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container-wide space-y-24 lg:space-y-32">
          {portfolioBrands.map((brand) => (
            <article
              key={brand.id}
              className="rounded-2xl border border-border bg-secondary overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <h2 className="headline-md mb-8">{brand.name}</h2>

                {/* Logo */}
                <div className="mb-10">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                    Logo
                  </p>
                  {brand.logo ? (
                    <div className="relative h-24 w-48 rounded-xl border border-border bg-background overflow-hidden">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ) : (
                    <div className="h-24 w-48 rounded-xl border border-border bg-background flex items-center justify-center text-xs text-muted-foreground">
                      Placeholder
                    </div>
                  )}
                </div>

                {/* Screenshots grid */}
                <div className="mb-10">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                    Screenshots
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {brand.screenshots.length > 0 ? (
                      brand.screenshots.map((src, i) => (
                        <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border">
                          <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
                        </div>
                      ))
                    ) : (
                      [1, 2, 3, 4].map((i) => (
                        <PlaceholderImage
                          key={i}
                          aspect="16/10"
                          rounded="rounded-xl"
                          sizes="25vw"
                        />
                      ))
                    )}
                  </div>
                </div>

                {/* Videos */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                    Videos
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {brand.videos.length > 0 ? (
                      brand.videos.map((url, i) => (
                        <MediaBlock
                          key={i}
                          videoUrl={url}
                          aspect="16/9"
                          className="rounded-xl"
                        />
                      ))
                    ) : (
                      <MediaBlock
                        aspect="16/9"
                        placeholderLabel="Video placeholder"
                        className="rounded-xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-apple text-center">
          <Button variant="hero" size="xl" asChild>
            <Link href="/get-started">
              Start a Project
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
