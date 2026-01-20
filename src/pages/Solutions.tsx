import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, Building2, ShoppingBag, Heart, Briefcase, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const solutions = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Digital solutions that showcase properties beautifully and convert leads effectively. Virtual tours, IDX integration, and CRM systems.',
    challenges: ['Property visibility', 'Lead generation', 'Virtual viewings'],
    link: '/solutions/real-estate',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Scalable online stores designed to maximize conversions. From boutique shops to enterprise marketplaces.',
    challenges: ['Cart abandonment', 'User experience', 'Payment integration'],
    link: '/solutions/e-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Patient-centric digital platforms that improve care delivery. Telemedicine, appointment systems, and health portals.',
    challenges: ['Patient engagement', 'Appointment scheduling', 'HIPAA compliance'],
    link: '/solutions/healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
  },
  {
    icon: Briefcase,
    title: 'Corporate',
    description: 'Professional digital presence for established enterprises. Investor relations, annual reports, and corporate communications.',
    challenges: ['Brand consistency', 'Stakeholder communication', 'Global reach'],
    link: '/solutions/corporate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Launch-ready digital products for ambitious startups. MVP development, pitch decks, and growth hacking.',
    challenges: ['Speed to market', 'Scalability', 'User acquisition'],
    link: '/solutions/startups',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
          <div className="container-apple text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Solutions
            </p>
            <h1 className="headline-xl mb-8">
              Industry expertise,<br />
              <span className="text-muted-foreground">tailored solutions.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              We understand the unique challenges of your industry. Our specialized 
              solutions are designed to drive real results.
            </p>
          </div>
        </section>

        {/* Solutions List */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <Link
                  key={solution.title}
                  to={solution.link}
                  className={cn(
                    'group block rounded-2xl overflow-hidden bg-secondary',
                    'transition-all duration-500 ease-apple',
                    'hover:shadow-apple-xl'
                  )}
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className={cn(
                      'aspect-[4/3] lg:aspect-auto overflow-hidden',
                      index % 2 === 1 && 'lg:order-2'
                    )}>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6">
                        <solution.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-semibold mb-4">{solution.title}</h2>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {solution.description}
                      </p>
                      
                      <div className="mb-8">
                        <p className="text-sm font-medium mb-3">Key Challenges We Solve:</p>
                        <div className="flex flex-wrap gap-2">
                          {solution.challenges.map((challenge) => (
                            <span
                              key={challenge}
                              className="px-3 py-1 text-sm rounded-full bg-background"
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
                        Explore Solution
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-apple text-center">
            <h2 className="headline-lg mb-6">
              Don't see your industry?
            </h2>
            <p className="text-xl text-background/70 max-w-xl mx-auto mb-10">
              We love new challenges. Let's discuss how we can help your unique business.
            </p>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="xl" 
                className="border-background text-background hover:bg-background hover:text-foreground"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
