"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const reduceMotion = { opacity: 1, y: 0 };

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="container-apple relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dubai-based · Global Delivery
          </motion.p>
          <motion.h1
            className="headline-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Digital Transformation &<br />
            <span className="text-muted-foreground">Systems Built for Scale</span>
          </motion.h1>
          <motion.p
            className="body-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We design, engineer, and operate digital systems that modernize operations, automate workflows, and enable
            long-term scalability.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link href="/get-started">
                Get Started
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
