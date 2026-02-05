import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CurveClear privacy policy: what data we collect, how we use it, and how to contact us.",
  openGraph: { url: "https://curveclear.ae/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <article className="pt-32 pb-20 container-apple max-w-3xl">
        <h1 className="headline-lg mb-12">Privacy Policy</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">What data we collect</h2>
            <p>
              We collect information you provide when you use our website forms (Get Started, Contact), including name,
              company name, email, phone, city/country, industry, company size, project objectives, budget range,
              timeline, and message content. We may also collect technical data such as IP address and browser type via
              analytics when you visit our site.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">How we use it</h2>
            <p>
              We use your data to respond to your inquiries, deliver services, and improve our website and services.
              We do not sell your personal data to third parties. We may share data with service providers (e.g.
              hosting, email) only as needed to operate our business.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Storage and protection</h2>
            <p>
              We store data on secure servers and take reasonable measures to protect it from unauthorized access,
              loss, or misuse. Data may be retained as long as necessary for the purposes above or as required by law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Your rights and contact</h2>
            <p>
              You may request access, correction, or deletion of your personal data. For any privacy-related requests
              or questions, contact us at{" "}
              <a href="mailto:info@curveclear.ae" className="text-foreground underline">
                info@curveclear.ae
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
