"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MediaBlock } from "@/components/ui/media-block";
import { useMotion, useIsDesktop } from "@/lib/motion";
import type { WorkCase } from "@/app/_content/workCases";
import { SERVICES_TAGS } from "@/app/_content/workCases";

const FILTER_OPTIONS: { value: "all" | (typeof SERVICES_TAGS)[number]; label: string }[] = [
  { value: "all", label: "All" },
  { value: "Strategy", label: "Strategy" },
  { value: "Software Engineering", label: "Software" },
  { value: "Automation", label: "Automation" },
  { value: "Growth", label: "Growth" },
];

function filterCases(cases: readonly WorkCase[], filter: string): WorkCase[] {
  if (filter === "all") return [...cases];
  return cases.filter((c) => c.servicesTags.includes(filter as (typeof SERVICES_TAGS)[number]));
}

/** Cap stagger delay so mobile doesn't run long sequences. */
const MAX_STAGGER_DELAY = 0.15;

interface WorkCaseGridProps {
  cases: readonly WorkCase[];
}

export function WorkCaseGrid({ cases }: WorkCaseGridProps) {
  const [filter, setFilter] = useState<"all" | (typeof SERVICES_TAGS)[number]>("all");
  const motionVariants = useMotion();
  const isDesktop = useIsDesktop();
  const filtered = useMemo(() => filterCases(cases, filter), [cases, filter]);

  const hoverLiftProps = !motionVariants.reduced && isDesktop ? motionVariants.hoverLift : {};

  return (
    <>
      {/* Segmented control */}
      <motion.div
        className="flex flex-wrap justify-center gap-1 rounded-xl bg-secondary p-1 mb-16 md:mb-20"
        initial={motionVariants.fadeUp.initial}
        animate={motionVariants.fadeUp.animate}
        transition={motionVariants.fadeUp.transition}
      >
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setFilter(opt.value)}
            className={`min-h-[44px] min-w-[44px] rounded-lg px-4 py-2 text-sm font-medium transition-colors md:min-h-0 md:min-w-0 ${
              filter === opt.value
                ? "bg-background text-foreground shadow-[0_1px_2px_hsla(0,0%,0%,0.04)]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </motion.div>

      {/* Case blocks */}
      <div className="space-y-24 md:space-y-32">
        {filtered.length === 0 && (
          <p className="body-md text-center text-muted-foreground py-12">
            No projects match this filter.
          </p>
        )}
        {filtered.map((project, index) => {
          const mediaLeft = index % 2 === 0;
          const delay = motionVariants.reduced ? 0 : Math.min(index * 0.05, MAX_STAGGER_DELAY);
          return (
            <motion.article
              key={project.slug}
              initial={motionVariants.fadeUp.initial}
              whileInView={motionVariants.fadeUp.animate}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...motionVariants.fadeUp.transition, delay }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 md:items-start"
              {...hoverLiftProps}
            >
              {/* Media block - order first on mobile, then alternate on md+ */}
              <div className={mediaLeft ? "md:order-1" : "md:order-2"}>
                <Link href={`/work/${project.slug}`} className="block overflow-hidden rounded-2xl border border-border bg-secondary shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] md:shadow-[0_4px_12px_hsla(0,0%,0%,0.08)]">
                  <MediaBlock
                    imageUrl={project.image}
                    videoUrl={project.video}
                    aspect="16/10"
                    rounded="rounded-t-2xl rounded-b-none"
                    placeholderLabel={project.heroLabel}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>
              </div>

              {/* Text block - displacement on md+ */}
              <div
                className={`flex flex-col justify-center md:pt-10 md:translate-y-4 ${mediaLeft ? "md:order-2" : "md:order-1"}`}
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {project.industry}
                </span>
                <h2 className="headline-md mt-2 mb-4">
                  <Link href={`/work/${project.slug}`} className="hover:opacity-80 transition-opacity">
                    {project.title}
                  </Link>
                </h2>
                <p className="body-md mb-6">{project.context}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.servicesTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag === "Software Engineering" ? "Software" : tag}
                    </span>
                  ))}
                </div>
                {project.outcomes[0] && (
                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="font-medium text-foreground">Outcome: </span>
                    {project.outcomes[0]}
                  </p>
                )}
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
}
