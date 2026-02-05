import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Strategy & Consulting", path: "/services/strategy-consulting" },
    { name: "Software Engineering", path: "/services/software-engineering" },
    { name: "Automation, AI & Data", path: "/services/automation-ai-data" },
    { name: "Media, Brand & Digital Growth", path: "/services/media-digital-growth" },
  ],
  solutions: [
    { name: "Real Estate & Construction", path: "/solutions#real-estate" },
    { name: "Healthcare & Clinics", path: "/solutions#healthcare" },
    { name: "Retail & E-commerce", path: "/solutions#retail" },
    { name: "Professional Services", path: "/solutions#professional-services" },
    { name: "Logistics & Operations", path: "/solutions#logistics" },
    { name: "Funded Startups & SMEs", path: "/solutions#startups" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
    { name: "Get Started", path: "/get-started" },
  ],
};

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              CurveClear
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Curveclear Digital Transformation Firm
            </p>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Digital transformation, software engineering, automation, and growth systems — built for scale.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@curveclear.ae" className="hover:text-foreground transition-colors">
                  info@curveclear.ae
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
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Curveclear Digital Transformation Firm. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
