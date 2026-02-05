import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Apply Inter via Tailwind: font-sans uses var(--font-sans) from globals + this variable

const baseUrl = "https://curveclear.ae";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "Digital Transformation & Systems Firm in Dubai | CurveClear.ae", template: "%s | CurveClear" },
  description:
    "Curveclear Digital Transformation Firm in Dubai delivering strategy, software engineering, automation, AI, and digital growth systems built for scale.",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: baseUrl,
    siteName: "CurveClear",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CurveClear — Digital Transformation & Systems Firm" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Curveclear Digital Transformation Firm",
  url: baseUrl,
  email: "info@curveclear.ae",
  telephone: ["+971544141077", "+971543178016"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
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
