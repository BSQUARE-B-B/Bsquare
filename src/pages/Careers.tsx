import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
  { title: 'Competitive Salary', description: 'Market-leading compensation packages' },
  { title: 'Health Insurance', description: 'Comprehensive medical coverage for you and family' },
  { title: 'Flexible Work', description: 'Hybrid work model with remote options' },
  { title: 'Learning Budget', description: 'Annual allowance for courses and conferences' },
  { title: 'Team Events', description: 'Regular team outings and social activities' },
  { title: 'Career Growth', description: 'Clear progression paths and mentorship' },
];

const openings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    description: 'Build exceptional user interfaces using React and modern web technologies.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Dubai, UAE',
    type: 'Full-time',
    description: 'Create beautiful, user-centered designs for web and mobile applications.',
  },
  {
    id: 3,
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    description: 'Lead digital marketing campaigns across social, search, and email channels.',
  },
  {
    id: 4,
    title: 'Project Manager',
    department: 'Operations',
    location: 'Dubai, UAE',
    type: 'Full-time',
    description: 'Manage client projects and ensure on-time, on-budget delivery.',
  },
  {
    id: 5,
    title: 'Content Strategist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop content strategies that drive engagement and conversions.',
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
          <div className="container-apple text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Careers
            </p>
            <h1 className="headline-xl mb-8">
              Build the future<br />
              <span className="text-muted-foreground">with us.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Join a team of passionate creators, strategists, and technologists 
              shaping the digital landscape of the UAE.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="headline-md mb-6">Our Culture</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    At BSquare, we believe great work happens when talented 
                    people come together in an environment that fosters creativity, 
                    collaboration, and growth.
                  </p>
                  <p className="leading-relaxed">
                    We're a diverse team of designers, developers, marketers, and 
                    strategists united by our passion for creating exceptional digital 
                    experiences. We celebrate different perspectives and believe that 
                    our diversity makes us stronger.
                  </p>
                  <p className="leading-relaxed">
                    Whether you're working from our Dubai office, Abu Dhabi hub, or 
                    remotely, you'll be part of a supportive team that values work-life 
                    balance and continuous learning.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[4/5] rounded-2xl bg-secondary" />
                <div className="aspect-[4/5] rounded-2xl bg-secondary mt-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="headline-md mb-6">Why Join Us</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We invest in our people because they're our greatest asset.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-8 rounded-2xl bg-background"
                >
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="headline-md mb-6">Open Positions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find your next role and help us shape the future of digital in the UAE.
              </p>
            </div>
            <div className="space-y-4">
              {openings.map((job) => (
                <Link
                  key={job.id}
                  to={`/careers/${job.id}`}
                  className={cn(
                    'group block p-6 lg:p-8 rounded-2xl bg-secondary',
                    'transition-all duration-300 hover:bg-foreground hover:text-background'
                  )}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-muted-foreground group-hover:text-background/70 mb-4 lg:mb-0">
                        {job.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-background/70">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-background/70">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-background/70">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-background/20 transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Open Application CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-apple text-center">
            <h2 className="headline-lg mb-6">
              Don't see a fit?
            </h2>
            <p className="text-xl text-background/70 max-w-xl mx-auto mb-10">
              We're always looking for talented individuals. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
              Submit Open Application
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
