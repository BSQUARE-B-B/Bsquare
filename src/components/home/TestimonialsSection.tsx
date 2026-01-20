import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Nexus Digital transformed our online presence completely. The new website has increased our leads by 300% in just six months.",
    author: 'Sarah Al Maktoum',
    role: 'CEO',
    company: 'Emirates Luxury Properties',
    rating: 5,
  },
  {
    id: 2,
    content: "Working with Nexus was an exceptional experience. Their attention to detail and understanding of our market is unmatched.",
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
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Client Stories
          </p>
          <h2 className="headline-lg">
            Trusted by those<br />
            <span className="text-muted-foreground">who demand excellence.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 lg:p-10 rounded-2xl bg-background transition-all duration-500 hover:shadow-apple-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
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
