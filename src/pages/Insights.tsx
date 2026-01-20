import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Digital Marketing', 'Web Development', 'UI/UX', 'SEO'];

const articles = [
  {
    id: 1,
    title: 'The Future of E-commerce in the UAE: Trends for 2024',
    excerpt: 'Discover the key trends shaping online retail in the Gulf region and how to stay ahead.',
    category: 'Digital Marketing',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Why Your Website Speed Matters More Than Ever',
    excerpt: 'Core Web Vitals and page speed optimization strategies for better conversions.',
    category: 'Web Development',
    date: 'Jan 10, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Designing for Arabic-Speaking Users: Best Practices',
    excerpt: 'RTL design considerations and cultural nuances for the Middle East market.',
    category: 'UI/UX',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Local SEO Strategies for UAE Businesses',
    excerpt: 'How to dominate local search results in Dubai, Abu Dhabi, and beyond.',
    category: 'SEO',
    date: 'Dec 28, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'The Psychology of Conversion-Driven Design',
    excerpt: 'How to design websites that understand and influence user behavior.',
    category: 'UI/UX',
    date: 'Dec 20, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 6,
    title: 'Social Media Marketing in the Gulf: A Complete Guide',
    excerpt: 'Platform strategies and content tips for reaching UAE consumers.',
    category: 'Digital Marketing',
    date: 'Dec 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    featured: false,
  },
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = filteredArticles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container-apple text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Insights
            </p>
            <h1 className="headline-xl mb-8">
              Ideas &<br />
              <span className="text-muted-foreground">perspectives.</span>
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Thoughts on digital strategy, design, and technology from our team of experts.
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

        {/* Featured Article */}
        {featuredArticle && (
          <section className="pb-12">
            <div className="container-wide">
              <Link
                to={`/insights/${featuredArticle.id}`}
                className="group block rounded-2xl overflow-hidden bg-secondary transition-all duration-500 hover:shadow-apple-xl"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-background">
                        {featuredArticle.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {featuredArticle.date}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4 group-hover:text-muted-foreground transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-2 font-medium">
                      Read Article
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="pb-20 lg:pb-32">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/insights/${article.id}`}
                  className="group block rounded-2xl overflow-hidden bg-secondary transition-all duration-500 hover:shadow-apple-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
