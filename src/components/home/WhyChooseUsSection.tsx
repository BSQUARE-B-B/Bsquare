import { useRef, useEffect } from 'react';
import { MapPin, Target, Layers, HandCoins, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: MapPin,
    title: 'UAE Market Expertise',
    description: 'Deep understanding of the Gulf region market dynamics and consumer behavior.',
  },
  {
    icon: Target,
    title: 'Conversion-Driven Design',
    description: 'Every pixel is purposeful, designed to turn visitors into loyal customers.',
  },
  {
    icon: Layers,
    title: 'Scalable Technology',
    description: 'Future-proof solutions that grow seamlessly with your business needs.',
  },
  {
    icon: HandCoins,
    title: 'Transparent Pricing',
    description: 'Clear, upfront costs with no hidden fees. Know exactly what you invest.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnerships',
    description: 'We build relationships, not just projects. Your success is our success.',
  },
];

export const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with slide and fade
      gsap.from(headerRef.current?.children || [], {
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Cards animation with stagger from left
      const cards = gridRef.current?.querySelectorAll('.reason-card');
      if (cards) {
        gsap.from(cards, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Icon animation on each card
      const icons = gridRef.current?.querySelectorAll('.reason-icon');
      if (icons) {
        gsap.from(icons, {
          scale: 0,
          rotation: -180,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 70%',
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
        <div ref={headerRef} className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Why Choose Us
          </p>
          <h2 className="headline-lg mb-6">
            Built on trust,<br />
            <span className="text-muted-foreground">driven by results.</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="reason-card group"
            >
              {/* Icon */}
              <div className="reason-icon w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <reason.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
