"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Structured approach from day one. Deliverables were documented and on time.",
    role: "Operations Director",
    org: "Regional Healthcare Group",
  },
  {
    quote: "They understood our need for governance and scalability, not just a one-off build.",
    role: "CTO",
    org: "Logistics Company",
  },
  {
    quote: "Clear scope, clear communication. The retainer model works for us.",
    role: "Founder",
    org: "B2B SaaS",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.h2
          className="headline-lg mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Organizations That Value Structure
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="p-8 rounded-2xl bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-muted-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm">
                <span className="font-medium">{t.role}</span>, {t.org}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
