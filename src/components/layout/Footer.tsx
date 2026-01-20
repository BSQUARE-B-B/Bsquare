import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'SEO & Performance', path: '/services/seo' },
    { name: 'Branding', path: '/services/branding' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/work' },
    { name: 'Careers', path: '/careers' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ],
  solutions: [
    { name: 'Real Estate', path: '/solutions/real-estate' },
    { name: 'E-commerce', path: '/solutions/e-commerce' },
    { name: 'Healthcare', path: '/solutions/healthcare' },
    { name: 'Corporate', path: '/solutions/corporate' },
    { name: 'Startups', path: '/solutions/startups' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Nexus Digital
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium digital experiences for forward-thinking brands in the UAE and beyond.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-apple-md transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block">Dubai Office</span>
                <span className="block">Business Bay, Dubai, UAE</span>
              </li>
              <li>
                <span className="block">Abu Dhabi Office</span>
                <span className="block">Al Maryah Island, Abu Dhabi</span>
              </li>
              <li className="pt-2">
                <a href="mailto:hello@nexusdigital.ae" className="hover:text-foreground transition-colors">
                  hello@nexusdigital.ae
                </a>
              </li>
              <li>
                <a href="tel:+97141234567" className="hover:text-foreground transition-colors">
                  +971 4 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Nexus Digital. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
