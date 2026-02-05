"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  "Discovery & Qualification",
  "Strategy & Scope Definition",
  "Execution & Delivery",
  "Optimization & Retainer Support",
];

export function HowWeWorkSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.h2
          className="headline-lg mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How We Work
        </motion.h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.li
              key={step}
              className="relative pl-8 border-l-2 border-border last:border-0 lg:last:border-l-2 lg:border-l-2"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Step {i + 1}</span>
              <p className="mt-1 font-semibold">{step}</p>
            </motion.li>
          ))}
        </ol>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="hero" size="lg" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
