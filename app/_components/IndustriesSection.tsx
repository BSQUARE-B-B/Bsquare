"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const industries = [
  "Real Estate & Construction",
  "Healthcare & Clinics",
  "Retail & E-commerce",
  "Professional Services",
  "Logistics & Operations",
  "Funded Startups & SMEs",
];

export function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.h2
          className="headline-lg mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Industries We Serve
        </motion.h2>
        <ul className="flex flex-wrap gap-3 justify-center mb-12">
          {industries.map((name, i) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <span className="inline-block px-5 py-2.5 rounded-full bg-secondary text-sm text-muted-foreground">
                {name}
              </span>
            </motion.li>
          ))}
        </ul>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Button variant="hero" size="lg" asChild>
            <Link href="/solutions">Explore Solutions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
