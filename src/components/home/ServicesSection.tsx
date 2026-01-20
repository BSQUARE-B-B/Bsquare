import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Palette, 
  TrendingUp, 
  Sparkles, 
  Search, 
  ShoppingCart,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technology for optimal performance.',
    link: '/services/web-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, beautiful digital experiences that convert.',
    link: '/services/ui-ux-design',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic campaigns across social, search, and email to grow your brand presence.',
    link: '/services/digital-marketing',
  },
  {
    icon: Sparkles,
    title: 'Branding',
    description: 'Memorable brand identities that tell your story and connect with your audience.',
    link: '/services/branding',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Data-driven optimization to improve visibility and drive qualified traffic.',
    link: '/services/seo',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Scalable online stores designed to maximize conversions and customer lifetime value.',
    link: '/services/e-commerce',
  },
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Cards stagger animation
      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.from(cards, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="headline-lg mb-6">
            Full-service digital<br />
            <span className="text-muted-foreground">excellence.</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive digital solutions 
            that drive measurable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className={cn(
                'service-card group relative p-8 lg:p-10 rounded-2xl bg-background',
                'transition-all duration-500 ease-apple',
                'hover:shadow-apple-lg hover:-translate-y-1'
              )}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link Indicator */}
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Learn More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-border transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
