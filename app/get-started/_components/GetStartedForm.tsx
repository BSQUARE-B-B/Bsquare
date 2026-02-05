"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const industries = [
  "Real Estate & Construction",
  "Healthcare & Clinics",
  "Retail & E-commerce",
  "Professional Services",
  "Logistics & Operations",
  "Funded Startups & SMEs",
  "Other",
];

const companySizes = ["1–10", "11–50", "51–200", "201–500", "500+"];

const objectives = [
  "Strategy & roadmap",
  "Software development",
  "Automation & AI",
  "Digital growth & marketing",
  "Integration & data",
  "Other",
];

const budgetOptions = [
  "Not sure yet",
  "Under 10k AED/month",
  "10k–25k AED/month",
  "25k–50k AED/month",
  "50k–100k AED/month",
  "100k+ AED/month",
];

const timelineOptions = ["ASAP", "Within 1 month", "1–3 months", "3–6 months", "6+ months"];

export function GetStartedForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      full_name: formData.get("full_name") as string,
      company_name: formData.get("company_name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      city_country: (formData.get("city_country") as string) || undefined,
      industry: (formData.get("industry") as string) || undefined,
      company_size: (formData.get("company_size") as string) || undefined,
      primary_objective: formData.getAll("primary_objective") as string[],
      estimated_budget: (formData.get("estimated_budget") as string) || undefined,
      timeline: (formData.get("timeline") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again or email info@curveclear.ae.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <p className="text-lg text-muted-foreground text-center py-12">
        Thank you. We&apos;ll respond with next steps within 24 business hours.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="full_name">Full Name</Label>
          <Input id="full_name" name="full_name" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="company_name">Company Name</Label>
          <Input id="company_name" name="company_name" required className="mt-2" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Business Email</Label>
          <Input id="email" name="email" type="email" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+971 50 123 4567" className="mt-2" />
        </div>
      </div>
      <div>
        <Label htmlFor="city_country">City / Country</Label>
        <Input id="city_country" name="city_country" placeholder="e.g. Dubai, UAE" className="mt-2" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
<div>
        <Label htmlFor="industry">Industry</Label>
          <select
            id="industry"
            name="industry"
            required
            className="mt-2 flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select industry</option>
            {industries.map((i) => (
              <option key={i} value={i.replace(/\s+/g, "-").toLowerCase()}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="company_size">Company Size</Label>
          <select
            id="company_size"
            name="company_size"
            className="mt-2 flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select size</option>
            {companySizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <Label>Primary Objective (select all that apply)</Label>
        <div className="mt-2 flex flex-wrap gap-3">
          {objectives.map((obj) => (
            <label key={obj} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="primary_objective" value={obj} className="rounded border-input" />
              <span className="text-sm">{obj}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="estimated_budget">Estimated Monthly Budget</Label>
        <select
          id="estimated_budget"
          name="estimated_budget"
          required
          className="mt-2 flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="">Select budget</option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="timeline">Timeline</Label>
        <select
          id="timeline"
          name="timeline"
          className="mt-2 flex h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="">Select timeline</option>
          {timelineOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Objectives, constraints, timeline..." className="mt-2 min-h-[120px]" />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Submitting..." : "Get Started"}
      </Button>
    </form>
  );
}
