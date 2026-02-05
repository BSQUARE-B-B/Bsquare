import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const services = [
  'Web Development',
  'UI/UX Design',
  'Digital Marketing',
  'SEO & Performance',
  'Branding',
  'E-commerce',
  'Other',
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container-apple text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="headline-xl mb-8">
              Let's start a<br />
              <span className="text-muted-foreground">conversation.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch and let's 
              discuss how we can help your business grow.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20 lg:pb-32">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        placeholder="Your name" 
                        required 
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input 
                        type="tel" 
                        placeholder="+971 50 123 4567" 
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input 
                        placeholder="Your company" 
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <Select>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      required
                      className="min-h-[160px] rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <div className="space-y-12">
                  {/* Quick Contact */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Quick Contact</h2>
                    <div className="space-y-4">
                      <a 
                        href="mailto:hello@nexusdigital.ae"
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Email</div>
                          <div className="font-medium">hello@nexusdigital.ae</div>
                        </div>
                      </a>
                      <a 
                        href="tel:+97141234567"
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Phone</div>
                          <div className="font-medium">+971 4 123 4567</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Offices */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Dubai</div>
                          <div className="text-muted-foreground">
                            Business Bay Tower, Floor 15<br />
                            Dubai, United Arab Emirates
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Abu Dhabi</div>
                          <div className="text-muted-foreground">
                            Al Maryah Island, Tower 3<br />
                            Abu Dhabi, United Arab Emirates
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="aspect-video rounded-2xl bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground">Map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
