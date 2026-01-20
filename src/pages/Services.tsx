import { Link } from 'react-router-dom';
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
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technology. From corporate sites to complex web applications, we deliver scalable, high-performance solutions.',
    features: ['Custom Websites', 'Web Applications', 'CMS Development', 'API Integration'],
    link: '/services/web-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, beautiful digital experiences. We combine research, strategy, and creativity to design products people love.',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping'],
    link: '/services/ui-ux-design',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive growth. From social media to paid advertising, we help you reach and engage your target audience effectively.',
    features: ['Social Media Marketing', 'Google Ads', 'Meta Ads', 'Content Marketing'],
    link: '/services/digital-marketing',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Data-driven optimization to improve visibility and drive qualified traffic. We help you rank higher and convert better with technical and strategic SEO.',
    features: ['Technical SEO', 'Local SEO', 'Content Strategy', 'Analytics'],
    link: '/services/seo',
  },
  {
    icon: Sparkles,
    title: 'Branding & Identity',
    description: 'Memorable brand identities that tell your story. We create visual systems that communicate your values and connect with your audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    link: '/services/branding',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Scalable online stores designed to maximize conversions. We build shopping experiences that turn browsers into buyers.',
    features: ['Shopify Development', 'WooCommerce', 'Custom E-commerce', 'Payment Integration'],
    link: '/services/e-commerce',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container-apple text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h1 className="headline-xl mb-8">
              Everything you need<br />
              <span className="text-muted-foreground">to succeed digitally.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business goals. 
              From concept to launch and beyond.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-20 lg:pb-32">
          <div className="container-wide">
            <div className="space-y-6">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  to={service.link}
                  className={cn(
                    'group block p-8 lg:p-12 rounded-2xl bg-secondary',
                    'transition-all duration-500 ease-apple',
                    'hover:bg-foreground hover:text-background'
                  )}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-6 lg:w-1/3">
                      <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center group-hover:bg-background/10 transition-colors">
                        <service.icon className="w-6 h-6 text-foreground group-hover:text-background" />
                      </div>
                      <h2 className="text-2xl font-semibold">{service.title}</h2>
                    </div>

                    {/* Description */}
                    <p className="lg:w-1/3 text-muted-foreground group-hover:text-background/70 transition-colors">
                      {service.description}
                    </p>

                    {/* Features & Arrow */}
                    <div className="lg:w-1/3 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs rounded-full bg-background/10 group-hover:bg-background/20 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-background/20 transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary">
          <div className="container-apple text-center">
            <h2 className="headline-lg mb-6">
              Not sure what you need?
            </h2>
            <p className="body-md max-w-xl mx-auto mb-10">
              Let's discuss your goals and find the perfect solution for your business.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
