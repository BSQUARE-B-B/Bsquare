import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    title: 'Excellence',
    description: 'We pursue excellence in every pixel, every line of code, and every strategy we develop.',
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of trends, embracing new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    title: 'Transparency',
    description: 'We believe in open communication, honest pricing, and clear expectations from day one.',
  },
  {
    title: 'Partnership',
    description: 'We see ourselves as an extension of your team, invested in your long-term success.',
  },
];

const team = [
  { name: 'Mohammed Al Rashid', role: 'Founder & CEO', initials: 'MR' },
  { name: 'Sara Ahmed', role: 'Creative Director', initials: 'SA' },
  { name: 'James Wilson', role: 'Technical Director', initials: 'JW' },
  { name: 'Fatima Hassan', role: 'Head of Marketing', initials: 'FH' },
  { name: 'Omar Khalil', role: 'Lead Developer', initials: 'OK' },
  { name: 'Priya Sharma', role: 'UX Lead', initials: 'PS' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
          <div className="container-apple text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="headline-xl mb-8">
              Designing the future<br />
              <span className="text-muted-foreground">of digital in the UAE.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              We're a team of strategists, designers, and developers passionate about 
              creating exceptional digital experiences for forward-thinking brands.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="headline-md mb-6">Our Story</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Founded in 2016, BSquare began with a simple mission: to bring 
                    world-class digital experiences to businesses in the UAE and beyond.
                  </p>
                  <p className="leading-relaxed">
                    What started as a small web development studio has grown into a 
                    full-service digital agency, serving clients across real estate, 
                    healthcare, e-commerce, and corporate sectors.
                  </p>
                  <p className="leading-relaxed">
                    Today, we're proud to be trusted by over 50 ambitious brands, from 
                    startups to established enterprises, all united by their desire to 
                    stand out in an increasingly digital world.
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

        {/* Mission & Vision */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12 rounded-2xl bg-background">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses in the UAE and beyond with innovative digital 
                  solutions that drive growth, enhance user experiences, and create 
                  lasting impact in the digital landscape.
                </p>
              </div>
              <div className="p-10 lg:p-12 rounded-2xl bg-background">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted digital partner in the Middle East, known for 
                  our unwavering commitment to quality, innovation, and client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-16">
              <h2 className="headline-md mb-6">Our Values</h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="headline-md mb-6">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A diverse team of experts united by a passion for digital excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="aspect-square rounded-2xl bg-background flex items-center justify-center mb-4">
                    <span className="text-2xl font-semibold text-muted-foreground">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="headline-md mb-6">Our Offices</h2>
              <p className="text-muted-foreground text-lg">
                Strategically located in the UAE's key business hubs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12 rounded-2xl bg-secondary">
                <h3 className="text-xl font-semibold mb-4">Dubai</h3>
                <p className="text-muted-foreground mb-2">Business Bay Tower, Floor 15</p>
                <p className="text-muted-foreground mb-2">Dubai, United Arab Emirates</p>
                <p className="text-muted-foreground">+971 4 123 4567</p>
              </div>
              <div className="p-10 lg:p-12 rounded-2xl bg-secondary">
                <h3 className="text-xl font-semibold mb-4">Abu Dhabi</h3>
                <p className="text-muted-foreground mb-2">Al Maryah Island, Tower 3</p>
                <p className="text-muted-foreground mb-2">Abu Dhabi, United Arab Emirates</p>
                <p className="text-muted-foreground">+971 2 987 6543</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-apple text-center">
            <h2 className="headline-lg mb-6">
              Ready to work together?
            </h2>
            <p className="text-xl text-background/70 max-w-xl mx-auto mb-10">
              Let's discuss how we can help transform your digital presence.
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

export default About;
