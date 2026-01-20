import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Emirates Luxury Properties',
    category: 'Real Estate',
    description: 'A premium property portal for Dubai\'s exclusive real estate market.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    link: '/work/emirates-luxury',
  },
  {
    id: 2,
    title: 'Souq Al Bahar',
    category: 'E-commerce',
    description: 'Modern e-commerce platform for traditional Arabian goods.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    link: '/work/souq-al-bahar',
  },
  {
    id: 3,
    title: 'Gulf Health Connect',
    category: 'Healthcare',
    description: 'Digital healthcare platform connecting patients with specialists.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    link: '/work/gulf-health',
  },
  {
    id: 4,
    title: 'Desert Rose Finance',
    category: 'Fintech',
    description: 'Innovative banking app for the modern UAE investor.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: '/work/desert-rose',
  },
];

export const ProjectsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Featured Work
            </p>
            <h2 className="headline-lg">
              Crafted with<br />
              <span className="text-muted-foreground">precision.</span>
            </h2>
          </div>
          <Link to="/work">
            <Button variant="heroOutline" size="lg">
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className={cn(
                'group relative overflow-hidden rounded-2xl bg-background',
                'transition-all duration-500 ease-apple',
                'hover:shadow-apple-xl'
              )}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-medium text-primary-foreground/70 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-primary-foreground mt-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 mt-2 max-w-md">
                  {project.description}
                </p>
              </div>

              {/* Static Label */}
              <div className="absolute bottom-0 left-0 right-0 p-8 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">
                  {project.title}
                </h3>
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
  );
};
