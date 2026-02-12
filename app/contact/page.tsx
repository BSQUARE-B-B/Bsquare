import type { Metadata } from "next";
import { ContactForm } from "./_components/ContactForm";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "Contact SEEDRIX | Digital Transformation & Systems",
  description:
    "Contact SEEDRIX for partnerships, proposals, and general inquiries. For new projects, use the Get Started form.",
  openGraph: { url: "https://seedrix.co/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container-apple text-center">
          <h1 className="headline-xl mb-8">Contact</h1>
          <p className="body-lg max-w-2xl mx-auto">
            For new projects, please use Get Started to share your objectives and requirements. For general inquiries,
            contact us below.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-6">Quick Contact</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li>
                    <a href="mailto:info@seedrix.co" className="hover:text-foreground transition-colors">
                      info@seedrix.co
                    </a>
                  </li>
                  <li>
                    <a href="tel:+971544141077" className="hover:text-foreground transition-colors">
                      +971 54 414 1077
                    </a>
                  </li>
                  <li>
                    <a href="tel:+971543178016" className="hover:text-foreground transition-colors">
                      +971 54 317 8016
                    </a>
                  </li>
                  <li>Dubai, UAE</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <PlaceholderImage aspect="16/9" label="Dubai, UAE" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
