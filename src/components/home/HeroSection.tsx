import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplashCursor from '@/components/effects/SplashCursor';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate elements in sequence
      tl.from(eyebrowRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
      .from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
      }, '-=0.4')
      .from(subheadingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from(ctaRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      }, '-=0.4')
      .from(statsRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.3')
      .from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.8,
      }, '-=0.2');

      // Parallax effect on scroll
      gsap.to(headlineRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Fade out on scroll
      gsap.to(sectionRef.current, {
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '60% top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fluid Cursor Effect */}
      <SplashCursor />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="container-apple relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            UAE's Premier Digital Agency
          </div>

          {/* Main Headline */}
          <h1 ref={headlineRef} className="headline-xl mb-8">
            We design, build &<br />
            <span className="text-muted-foreground">grow digital experiences.</span>
          </h1>

          {/* Subheading */}
          <p ref={subheadingRef} className="body-lg max-w-2xl mx-auto mb-12">
            Transform your business with cutting-edge web solutions and strategic digital marketing. 
            Trusted by leading brands across Dubai and Abu Dhabi.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="heroOutline" size="xl">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div ref={statsRef} className="mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-semibold">150+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-semibold">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-semibold">8+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-semibold">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Team Experts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};
