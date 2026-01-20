import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  'Real Estate',
  'Healthcare',
  'Retail & E-commerce',
  'Corporate',
  'Startups',
  'Hospitality',
  'Finance',
  'Education',
];

// Placeholder logos - in production these would be actual client logos
const clientLogos = [
  { name: 'Company 1', placeholder: true },
  { name: 'Company 2', placeholder: true },
  { name: 'Company 3', placeholder: true },
  { name: 'Company 4', placeholder: true },
  { name: 'Company 5', placeholder: true },
  { name: 'Company 6', placeholder: true },
];

export const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Logo items with fade and slide
      const logos = logosRef.current?.querySelectorAll('.logo-item');
      if (logos) {
        gsap.from(logos, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Industry tags with wave effect
      const tags = industriesRef.current?.querySelectorAll('.industry-tag');
      if (tags) {
        gsap.from(tags, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          stagger: {
            each: 0.06,
            from: 'center',
          },
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: industriesRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Trusted By Industry Leaders
          </p>
          <h2 className="headline-md">
            Partnering with ambitious brands.
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="logo-item flex items-center justify-center h-16 px-4"
            >
              <div className="w-full h-8 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground font-medium">
                Logo
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div ref={industriesRef} className="flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="industry-tag px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
