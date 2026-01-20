const industries = [
  'Real Estate',
  'Healthcare',
  'Retail & E-commerce',
  'Corporate',
  'Startups',
  'Hospitality',
  'Finance',
  'Education',
];

// Placeholder logos - in production these would be actual client logos
const clientLogos = [
  { name: 'Company 1', placeholder: true },
  { name: 'Company 2', placeholder: true },
  { name: 'Company 3', placeholder: true },
  { name: 'Company 4', placeholder: true },
  { name: 'Company 5', placeholder: true },
  { name: 'Company 6', placeholder: true },
];

export const ClientsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Trusted By Industry Leaders
          </p>
          <h2 className="headline-md">
            Partnering with ambitious brands.
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-16 px-4"
            >
              <div className="w-full h-8 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground font-medium">
                Logo
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
