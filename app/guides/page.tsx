import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';

// Generate metadata for the guides page
export const metadata: Metadata = generatePageMetadata({
  title: 'Ice Cream Guides & Resources | Häagen-Dazs',
  description: 'Explore our collection of guides including ice cream pairings, serving suggestions, and dessert inspiration. Learn how to create extraordinary moments with Häagen-Dazs.',
  path: '/guides',
  image: 'https://www.haagen-dazs.co.uk/images/guides-hero.jpg',
});

// Guide data structure
interface Guide {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  readTime: string;
}

// Available guides
const guides: Guide[] = [
  {
    id: 'ice-cream-pairings',
    title: 'The Art of Ice Cream Pairing',
    description: 'Discover perfect combinations of wine, coffee, cocktails, and desserts with our premium ice cream.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop',
    link: '/guides/ice-cream-pairings',
    category: 'Pairing Guide',
    readTime: '8 min read'
  },
  // Future guides can be added here
];

export default function GuidesPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Guides', url: 'https://www.haagen-dazs.co.uk/guides' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[30vh] sm:h-[40vh] lg:h-[50vh] overflow-hidden" aria-labelledby="hero-heading">
          <Image
            src="https://images.unsplash.com/photo-1488900128323-21503983a07e?w=1920&h=1080&fit=crop"
            alt="Ice cream guides and resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Ice Cream Guides & Resources
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                Expert tips and inspiration to elevate your ice cream experience
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Guides</li>
            </ol>
          </div>
        </nav>

        {/* Introduction Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Discover the World of Häagen-Dazs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From pairing suggestions to serving tips, our guides help you create memorable moments 
              with every scoop. Explore our collection of expert advice and inspiration.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="guides-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="guides-heading" className="sr-only">Available Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {guides.map((guide) => (
                <article
                  key={guide.id}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <Link 
                    href={guide.link}
                    className="block focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:ring-offset-2"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-haagen-burgundy text-white rounded-full text-xs font-semibold">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-haagen-burgundy transition-colors">
                          {guide.title}
                        </h3>
                        <span className="text-sm text-gray-500">{guide.readTime}</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {guide.description}
                      </p>
                      
                      <div className="flex items-center text-haagen-burgundy font-semibold group-hover:text-haagen-burgundy-dark">
                        <span>Read Guide</span>
                        <svg 
                          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-12 sm:py-16 bg-haagen-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
              More Guides Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center opacity-75">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Seasonal Flavor Guide</h3>
                <p className="text-gray-500 text-sm">
                  Discover which flavors are perfect for each season
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center opacity-75">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Hosting Guide</h3>
                <p className="text-gray-500 text-sm">
                  Tips for creating the perfect ice cream social
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center opacity-75">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Recipe Collection</h3>
                <p className="text-gray-500 text-sm">
                  Creative recipes using Häagen-Dazs ice cream
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-burgundy-light text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Ice Cream Journey
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Explore our flavors and find the perfect ice cream for any occasion
            </p>
            <Link
              href="/flavors"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-haagen-cream transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
            >
              Browse Flavors
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}