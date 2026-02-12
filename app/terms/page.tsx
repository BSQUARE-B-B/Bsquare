import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SEEDRIX terms and conditions: scope, payment, IP, liability, and governing law.",
  openGraph: { url: "https://seedrix.co/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <article className="pt-32 pb-20 container-apple max-w-3xl">
        <h1 className="headline-lg mb-12">Terms & Conditions</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Scope</h2>
            <p>
              These terms apply to your use of the SEEDRIX website and to any engagement you enter into with
              SEEDRIX Digital Transformation Firm (“SEEDRIX”). Specific projects are governed by separate
              agreements that define scope, deliverables, timelines, and payment terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Payment terms</h2>
            <p>
              Payment terms are set out in the relevant project or retainer agreement. Invoices are typically due within
              the period specified in that agreement. Late payment may result in suspension of work or termination in
              accordance with the agreement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Intellectual property</h2>
            <p>
              Unless otherwise agreed in writing, intellectual property in deliverables created by SEEDRIX for a
              client will be assigned or licensed to the client as set out in the project agreement. Pre-existing
              materials, tools, and methodologies remain the property of SEEDRIX.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, SEEDRIX’s liability under or in connection with these terms
              or any engagement is limited to the fees paid by the client for the relevant engagement in the twelve
              months preceding the claim. We are not liable for indirect, consequential, or punitive damages.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Governing law and jurisdiction</h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the
              exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </section>
          <section>
            <p className="mt-8">
              For questions about these terms, contact{" "}
              <a href="mailto:info@seedrix.co" className="text-foreground underline">
                info@seedrix.co
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
