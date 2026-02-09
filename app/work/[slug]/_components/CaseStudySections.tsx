"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMotion } from "@/lib/motion";
import type { WorkCase } from "@/app/_content/workCases";
import { SERVICES_TAGS } from "@/app/_content/workCases";

const PILLARS: { id: (typeof SERVICES_TAGS)[number]; title: string; description: string }[] = [
  { id: "Strategy", title: "Strategy", description: "Scope, milestones, and governance defined with the client." },
  { id: "Software Engineering", title: "Software Engineering", description: "Custom software and integrations built for reliability and scale." },
  { id: "Automation", title: "Automation", description: "Workflows and data pipelines to reduce manual work and errors." },
  { id: "Growth", title: "Growth", description: "Digital growth, lead routing, and conversion optimization." },
];

interface CaseStudySectionsProps {
  caseStudy: WorkCase;
}

export function CaseStudySections({ caseStudy }: CaseStudySectionsProps) {
  const m = useMotion();

  return (
    <div className="container-apple space-y-20 lg:space-y-28">
      <motion.section
        initial={m.fadeUp.initial}
        whileInView={m.fadeUp.animate}
        viewport={{ once: true, margin: "-24px" }}
        transition={m.fadeUp.transition}
      >
        <h2 className="headline-md mb-6">The Challenge</h2>
        <p className="body-md max-w-2xl">{caseStudy.context}</p>
      </motion.section>

      <hr className="border-border" />

      <motion.section
        initial={m.fadeUp.initial}
        whileInView={m.fadeUp.animate}
        viewport={{ once: true, margin: "-24px" }}
        transition={m.fadeUp.transition}
      >
        <h2 className="headline-md mb-10">Our System Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PILLARS.map((pillar) => {
            const included = caseStudy.servicesTags.includes(pillar.id);
            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border border-border bg-secondary p-6 ${included ? "ring-1 ring-foreground/5" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold tracking-tight">{pillar.title}</h3>
                  {included && (
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Included</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      <hr className="border-border" />

      <motion.section
        initial={m.fadeUp.initial}
        whileInView={m.fadeUp.animate}
        viewport={{ once: true, margin: "-24px" }}
        transition={m.fadeUp.transition}
      >
        <h2 className="headline-md mb-10">What We Built</h2>
        <p className="body-md max-w-2xl mb-10">System modules delivered in this engagement.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudy.systemsBuilt.map((item, i) => (
            <li key={i} className="rounded-xl border border-border bg-secondary px-5 py-4 text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </motion.section>

      <hr className="border-border" />

      <motion.section
        initial={m.fadeUp.initial}
        whileInView={m.fadeUp.animate}
        viewport={{ once: true, margin: "-24px" }}
        transition={m.fadeUp.transition}
      >
        <h2 className="headline-md mb-6">Results & Impact</h2>
        <ul className="space-y-3 max-w-2xl">
          {caseStudy.outcomes.map((item, i) => (
            <li key={i} className="flex gap-3 body-md">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
              {item}
            </li>
          ))}
        </ul>
      </motion.section>

      <hr className="border-border" />

      <motion.section
        initial={m.fadeUp.initial}
        whileInView={m.fadeUp.animate}
        viewport={{ once: true, margin: "-24px" }}
        transition={m.fadeUp.transition}
      >
        <h2 className="headline-md mb-6">Next Phase</h2>
        <p className="body-md max-w-2xl">
          We continue to support this engagement on a retainer basis for optimization, new features, and scaling.
          Ongoing work is aligned to the same system approach and milestones.
        </p>
      </motion.section>

      <motion.section
        className="pt-8 pb-4"
        initial={m.fadeUp.initial}
        whileInView={m.fadeUp.animate}
        viewport={{ once: true, margin: "-24px" }}
        transition={m.fadeUp.transition}
      >
        <h2 className="headline-lg mb-8">Build a System Like This</h2>
        <Button variant="hero" size="lg" asChild>
          <Link href="/get-started">
            Get Started
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </Button>
        <p className="body-md mt-8">
          Prefer email?{" "}
          <a href="mailto:info@curveclear.ae" className="text-foreground underline underline-offset-2 hover:opacity-80">
            info@curveclear.ae
          </a>
          {" · "}
          <a href="tel:+971544141077" className="text-foreground underline underline-offset-2 hover:opacity-80">
            +971 54 414 1077
          </a>
          {" · "}
          <a href="tel:+971543178016" className="text-foreground underline underline-offset-2 hover:opacity-80">
            +971 54 317 8016
          </a>
        </p>
      </motion.section>
    </div>
  );
}
