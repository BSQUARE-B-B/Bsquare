import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-apple">
        <div className="text-center">
          {/* Headline */}
          <h2 className="headline-xl mb-8">
            Let's build something<br />
            <span className="text-muted-foreground">exceptional.</span>
          </h2>

          {/* Description */}
          <p className="body-lg max-w-2xl mx-auto mb-12">
            Ready to transform your digital presence? Let's discuss how we can 
            help your business grow in the UAE market and beyond.
          </p>

          {/* CTAs */}
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
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
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
