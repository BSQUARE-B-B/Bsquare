import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Real Estate', 'E-commerce', 'Healthcare', 'Corporate', 'Fintech'];

const projects = [
  {
    id: 1,
    title: 'Emirates Luxury Properties',
    category: 'Real Estate',
    description: 'A premium property portal showcasing Dubai\'s most exclusive real estate listings.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    services: ['Web Development', 'UI/UX Design'],
    link: '/work/emirates-luxury',
  },
  {
    id: 2,
    title: 'Souq Al Bahar',
    category: 'E-commerce',
    description: 'Modern e-commerce platform bringing traditional Arabian crafts to the world.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    services: ['E-commerce', 'Digital Marketing'],
    link: '/work/souq-al-bahar',
  },
  {
    id: 3,
    title: 'Gulf Health Connect',
    category: 'Healthcare',
    description: 'Digital healthcare platform connecting patients with specialists across the UAE.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    services: ['Web Development', 'UI/UX Design'],
    link: '/work/gulf-health',
  },
  {
    id: 4,
    title: 'Desert Rose Finance',
    category: 'Fintech',
    description: 'Innovative banking app designed for the modern UAE investor.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    services: ['UI/UX Design', 'Branding'],
    link: '/work/desert-rose',
  },
  {
    id: 5,
    title: 'Al Rashid Holdings',
    category: 'Corporate',
    description: 'Corporate website for one of UAE\'s leading investment groups.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    services: ['Web Development', 'Branding'],
    link: '/work/al-rashid',
  },
  {
    id: 6,
    title: 'Palm View Residences',
    category: 'Real Estate',
    description: 'Luxury residential development marketing website with virtual tours.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    services: ['Web Development', 'Digital Marketing'],
    link: '/work/palm-view',
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container-apple text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h1 className="headline-xl mb-8">
              Crafted with<br />
              <span className="text-muted-foreground">precision & purpose.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Explore our portfolio of digital experiences created for ambitious 
              brands across the UAE and beyond.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-12">
          <div className="container-wide">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                    activeCategory === category
                      ? 'bg-foreground text-background'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 lg:pb-32">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={project.link}
                  className={cn(
                    'group relative overflow-hidden rounded-2xl bg-secondary',
                    'transition-all duration-500 ease-apple',
                    'hover:shadow-apple-xl'
                  )}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      {project.services.map((service, i) => (
                        <span key={service} className="text-xs text-muted-foreground">
                          {service}{i < project.services.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-apple text-center">
            <h2 className="headline-lg mb-6">
              Have a project in mind?
            </h2>
            <p className="body-md max-w-xl mx-auto mb-10">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
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

export default Work;
