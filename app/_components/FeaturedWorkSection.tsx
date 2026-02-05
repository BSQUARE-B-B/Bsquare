"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const featured = [
  { title: "Real Estate Portfolio Platform", industry: "Real Estate", slug: "real-estate-portfolio" },
  { title: "Healthcare Patient Portal", industry: "Healthcare", slug: "healthcare-portal" },
  { title: "E-commerce Operations Stack", industry: "Retail", slug: "ecommerce-operations" },
];

export function FeaturedWorkSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="headline-lg mb-6">Selected Transformation Engagements</h2>
          <p className="body-md max-w-2xl">
            A selection of structured engagements focused on long-term business impact.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/work/${item.slug}`}
                className="block p-8 rounded-2xl bg-background hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {item.industry}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{item.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Button variant="heroOutline" size="lg" asChild>
            <Link href="/work">
              View All Work
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
