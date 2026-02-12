"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="section-padding">
      <div className="container-apple text-center">
        <motion.h2
          className="headline-xl mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Build Systems That Scale?
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="hero" size="xl" asChild>
            <Link href="/get-started">
              Get Started
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </motion.div>
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer email? <a href="mailto:info@seedrix.co" className="underline hover:text-foreground">info@seedrix.co</a>
        </p>
      </div>
    </section>
  );
}
