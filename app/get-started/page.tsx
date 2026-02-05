import type { Metadata } from "next";
import { GetStartedForm } from "./_components/GetStartedForm";

export const metadata: Metadata = {
  title: "Get Started with CurveClear | Strategy & System Design",
  description:
    "Start with CurveClear. Share your business context and goals — we'll respond with structured next steps within 24 business hours.",
  openGraph: { url: "https://curveclear.ae/get-started" },
};

export default function GetStartedPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-apple text-center mb-16">
          <h1 className="headline-xl mb-8">Get Started with CurveClear</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Share your objectives, constraints, and timeline. Our team will review your submission and respond with
            next steps.
          </p>
        </div>
        <div className="container-wide max-w-2xl">
          <GetStartedForm />
          <p className="mt-8 text-sm text-muted-foreground text-center">
            We review every submission carefully. You&apos;ll receive a response within 24 business hours.
          </p>
        </div>
      </section>
    </div>
  );
}
