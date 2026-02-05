import { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    content: "BSquare transformed our online presence completely. The new website has increased our leads by 300% in just six months.",
    author: 'Sarah Al Maktoum',
    role: 'CEO',
    company: 'Emirates Luxury Properties',
    rating: 5,
  },
  {
    id: 2,
    content: "Working with BSquare was an exceptional experience. Their attention to detail and understanding of our market is unmatched.",
    author: 'Ahmed Hassan',
    role: 'Marketing Director',
    company: 'Gulf Health Connect',
    rating: 5,
  },
  {
    id: 3,
    content: "The team delivered beyond our expectations. Our e-commerce revenue doubled within the first quarter of launch.",
    author: 'Fatima Al Rashid',
    role: 'Founder',
    company: 'Souq Al Bahar',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 50,
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

      // Cards stagger animation with 3D effect
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.from(cards, {
          y: 100,
          opacity: 0,
          rotationX: 15,
          transformPerspective: 1000,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Stars animation
      const stars = cardsRef.current?.querySelectorAll('.star-rating');
      if (stars) {
        stars.forEach((starContainer) => {
          const starIcons = starContainer.querySelectorAll('svg');
          gsap.from(starIcons, {
            scale: 0,
            rotation: 180,
            duration: 0.4,
            stagger: 0.08,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: starContainer,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
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
            Client Stories
          </p>
          <h2 className="headline-lg">
            Trusted by those<br />
            <span className="text-muted-foreground">who demand excellence.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card p-8 lg:p-10 rounded-2xl bg-background transition-all duration-500 hover:shadow-apple-lg"
            >
              {/* Stars */}
              <div className="star-rating flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
