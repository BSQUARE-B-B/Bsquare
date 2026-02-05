import { useParams, Link, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Monitor,
  Palette,
  TrendingUp,
  Sparkles,
  Search,
  ShoppingCart,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceIcons = {
  Monitor,
  Palette,
  TrendingUp,
  Sparkles,
  Search,
  ShoppingCart,
} as const;

const servicesBySlug: Record<
  string,
  {
    title: string;
    description: string;
    icon: keyof typeof serviceIcons;
    features: { title: string; description: string }[];
  }
> = {
  'web-development': {
    title: 'Web Development',
    description:
      'Custom websites and web applications built with cutting-edge technology. From corporate sites to complex web applications, we deliver scalable, high-performance solutions.',
    icon: 'Monitor',
    features: [
      {
        title: 'Custom Websites',
        description:
          'Tailored websites that reflect your brand and meet your exact requirements. We build responsive, fast, and accessible sites that work across all devices.',
      },
      {
        title: 'Web Applications',
        description:
          'Complex web applications with modern frameworks. From dashboards to SaaS products, we deliver scalable architecture and smooth user experiences.',
      },
      {
        title: 'CMS Development',
        description:
          'Content management systems that empower your team. We implement headless or traditional CMS solutions so you can update content with ease.',
      },
      {
        title: 'API Integration',
        description:
          'Seamless connections between your website and third-party services. We design and integrate APIs for payments, CRM, analytics, and more.',
      },
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description:
      'User-centered design that creates intuitive, beautiful digital experiences. We combine research, strategy, and creativity to design products people love.',
    icon: 'Palette',
    features: [
      {
        title: 'User Research',
        description:
          'We start by understanding your users. Through interviews, surveys, and analytics, we uncover needs and behaviors that drive design decisions.',
      },
      {
        title: 'Wireframing',
        description:
          'Clear, structured blueprints for your product. We map user flows and screen layouts before a single pixel is designed, saving time and reducing rework.',
      },
      {
        title: 'Visual Design',
        description:
          'Polished interfaces that align with your brand. We create cohesive visual systems including typography, color, and components that scale.',
      },
      {
        title: 'Prototyping',
        description:
          'Interactive prototypes that feel real. Test flows and get stakeholder buy-in before development begins, reducing risk and accelerating launch.',
      },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description:
      'Strategic campaigns that drive growth. From social media to paid advertising, we help you reach and engage your target audience effectively.',
    icon: 'TrendingUp',
    features: [
      {
        title: 'Social Media Marketing',
        description:
          'Brand presence and engagement across the right platforms. We create content and community strategies that build awareness and loyalty.',
      },
      {
        title: 'Google Ads',
        description:
          'Search and display campaigns that capture intent. We optimize for quality leads and conversions while controlling cost and measuring ROI.',
      },
      {
        title: 'Meta Ads',
        description:
          'Facebook and Instagram advertising that reaches your audience. We run targeted campaigns for awareness, consideration, and conversion.',
      },
      {
        title: 'Content Marketing',
        description:
          'Content that attracts and converts. From blog strategy to email sequences, we align content with your funnel and business goals.',
      },
    ],
  },
  seo: {
    title: 'SEO & Performance',
    description:
      'Data-driven optimization to improve visibility and drive qualified traffic. We help you rank higher and convert better with technical and strategic SEO.',
    icon: 'Search',
    features: [
      {
        title: 'Technical SEO',
        description:
          'Site health, speed, and crawlability. We fix indexing issues, improve Core Web Vitals, and ensure search engines can understand and rank your site.',
      },
      {
        title: 'Local SEO',
        description:
          'Visibility in local search and maps. We optimize your presence for “near me” queries and local pack rankings in the UAE and beyond.',
      },
      {
        title: 'Content Strategy',
        description:
          'Keyword research and content that ranks. We plan topics and optimize existing pages to capture demand and support your business goals.',
      },
      {
        title: 'Analytics',
        description:
          'Clear reporting and actionable insights. We set up tracking, dashboards, and regular reviews so you know what’s working and what to improve.',
      },
    ],
  },
  branding: {
    title: 'Branding & Identity',
    description:
      'Memorable brand identities that tell your story. We create visual systems that communicate your values and connect with your audience.',
    icon: 'Sparkles',
    features: [
      {
        title: 'Logo Design',
        description:
          'Distinctive logos that work at any size. We develop concepts that capture your essence and remain recognizable across touchpoints.',
      },
      {
        title: 'Brand Guidelines',
        description:
          'Consistent application of your brand. We document logo usage, typography, color, and tone so your team and partners stay on brand.',
      },
      {
        title: 'Visual Identity',
        description:
          'A full visual system beyond the logo. We define typography, color palettes, imagery style, and graphic elements that scale across channels.',
      },
      {
        title: 'Brand Strategy',
        description:
          'Positioning and messaging that differentiate you. We help clarify your story, audience, and value proposition before we design.',
      },
    ],
  },
  'e-commerce': {
    title: 'E-commerce Solutions',
    description:
      'Scalable online stores designed to maximize conversions. We build shopping experiences that turn browsers into buyers.',
    icon: 'ShoppingCart',
    features: [
      {
        title: 'Shopify Development',
        description:
          'Custom Shopify stores that sell. We build and customize themes, apps, and checkout flows to match your brand and maximize sales.',
      },
      {
        title: 'WooCommerce',
        description:
          'Flexible e-commerce on WordPress. We create WooCommerce stores with the plugins and integrations you need for growth and operations.',
      },
      {
        title: 'Custom E-commerce',
        description:
          'Bespoke platforms when off-the-shelf isn’t enough. We design and build custom storefronts and back-office tools for complex requirements.',
      },
      {
        title: 'Payment Integration',
        description:
          'Secure, smooth checkout and multiple payment methods. We integrate gateways and options that suit your region and customer preferences.',
      },
    ],
  },
};

const validSlugs = Object.keys(servicesBySlug);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !validSlugs.includes(slug)) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesBySlug[slug];
  const IconComponent = serviceIcons[service.icon];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container-apple">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Service
              </p>
            </div>
            <h1 className="headline-xl mb-8">{service.title}</h1>
            <p className="body-lg max-w-2xl">{service.description}</p>
          </div>
        </section>

        {/* Sub-sections (features) */}
        <section className="pb-20 lg:pb-32">
          <div className="container-wide">
            <div className="grid gap-6 md:grid-cols-2">
              {service.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    'p-8 lg:p-10 rounded-2xl bg-secondary',
                    'transition-all duration-300 hover:shadow-apple-md'
                  )}
                >
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="headline-md mt-2 mb-4">{feature.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-apple text-center">
            <h2 className="headline-lg mb-6">
              Ready to get started with {service.title}?
            </h2>
            <p className="body-md max-w-xl mx-auto mb-10">
              Tell us about your project and we'll outline the best approach for your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="heroOutline" size="xl">
                  See Our Work
                  <ArrowUpRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
