import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Reusable animation configurations
export const animations = {
  fadeUp: {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
  fadeIn: {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  },
  slideLeft: {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
  slideRight: {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
  scale: {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  animation: keyof typeof animations = 'fadeUp',
  options?: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    toggleActions?: string;
    stagger?: number;
    delay?: number;
  }
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        ...animations[animation],
        delay: options?.delay || 0,
        scrollTrigger: {
          trigger: element,
          start: options?.start || 'top 85%',
          end: options?.end || 'bottom 20%',
          toggleActions: options?.toggleActions || 'play none none none',
          scrub: options?.scrub || false,
        },
      });
    });

    return () => ctx.revert();
  }, [animation, options]);

  return elementRef;
};

// Hook for staggered children animations
export const useStaggerAnimation = (
  selector: string,
  animation: keyof typeof animations = 'fadeUp',
  options?: {
    start?: string;
    stagger?: number;
    delay?: number;
  }
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const elements = container.querySelectorAll(selector);
      
      gsap.from(elements, {
        ...animations[animation],
        delay: options?.delay || 0,
        stagger: options?.stagger || 0.1,
        scrollTrigger: {
          trigger: container,
          start: options?.start || 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, container);

    return () => ctx.revert();
  }, [selector, animation, options]);

  return containerRef;
};

// Hook for parallax effect
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return elementRef;
};

// Hook for text reveal animation
export const useTextReveal = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // Split text into words if needed
      gsap.from(element, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return elementRef;
};

// Hook for horizontal scroll section
export const useHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scroller.scrollWidth - container.offsetWidth;
      
      gsap.to(scroller, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return { containerRef, scrollerRef };
};

// Initialize GSAP with smooth defaults
gsap.defaults({
  ease: 'power3.out',
  duration: 1,
});

// Refresh ScrollTrigger on route changes
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
