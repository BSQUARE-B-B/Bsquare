import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const baseUrl = "https://seedrix.co";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: { icon: "/images/Seedrix%20Black.png", apple: "/images/Seedrix%20Black.png" },
  title: { default: "Digital Transformation & Systems Firm in Dubai | SEEDRIX.co", template: "%s | SEEDRIX" },
  description:
    "SEEDRIX Digital Transformation Firm in Dubai delivering strategy, software engineering, automation, AI, and digital growth systems built for scale.",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: baseUrl,
    siteName: "SEEDRIX",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEEDRIX — Digital Transformation & Systems Firm" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "SEEDRIX Digital Transformation Firm",
  url: baseUrl,
  email: "info@seedrix.co",
  telephone: ["+971544141077", "+971543178016"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
