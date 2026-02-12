"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Code2, Bot, Megaphone } from "lucide-react";

const pillars = [
  { icon: ClipboardList, title: "Strategy & Consulting" },
  { icon: Code2, title: "Technology & Software Engineering" },
  { icon: Bot, title: "Automation, AI & Data" },
  { icon: Megaphone, title: "Media, Brand & Digital Growth" },
];

export function FrameworkSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="headline-lg mb-6">Our Transformation Framework</h2>
          <p className="body-md max-w-2xl mx-auto">
            SEEDRIX operates on a disciplined four-pillar model designed for clarity, stability, and scale.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="p-8 rounded-2xl bg-background shadow-card-glow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="hero" size="lg" asChild>
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
