import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for staggered entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      tl.from(headlineRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      .from(descriptionRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.7')
      .from(ctaRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      }, '-=0.5')
      .from(contactRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.3');
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container-apple">
        <div className="text-center">
          {/* Headline */}
          <h2 ref={headlineRef} className="headline-xl mb-10">
            Let's build something<br />
            <span className="text-muted-foreground">exceptional.</span>
          </h2>

          {/* Description */}
          <p ref={descriptionRef} className="body-lg max-w-2xl mx-auto mb-12">
            Ready to transform your digital presence? Let's discuss how we can 
            help your business grow in the UAE market and beyond.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="heroOutline" size="xl">
                See Our Work
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <a 
              href="mailto:hello@nexusdigital.ae" 
              className="hover:text-foreground transition-colors"
            >
              hello@nexusdigital.ae
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="tel:+97141234567"
              className="hover:text-foreground transition-colors"
            >
              +971 4 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
