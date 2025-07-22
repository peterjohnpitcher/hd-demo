import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { products } from '@/lib/products';

// Generate metadata for the flavors page
export const metadata: Metadata = generatePageMetadata({
  title: 'Our Flavors | Häagen-Dazs Ice Cream Collection',
  description: 'Explore the extraordinary collection of Häagen-Dazs ice cream flavors. From classic vanilla to exotic green tea, discover premium ice cream crafted with the finest ingredients.',
  path: '/flavors',
  image: 'https://www.haagen-dazs.co.uk/images/flavors-hero.jpg',
});

export default function FlavorsPage() {
  // Filter only ice cream products
  const iceCreamFlavors = products.filter(product => product.category === 'ice-cream');
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Flavors', url: 'https://www.haagen-dazs.co.uk/flavors' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden" aria-labelledby="hero-heading">
          <Image
            src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=1920&h=1080&fit=crop"
            alt="Colorful ice cream scoops"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                Our Flavors
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
                Discover our extraordinary collection of ice cream flavors, each crafted with passion and the finest ingredients from around the world
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
              <li className="text-gray-900 font-medium" aria-current="page">Flavors</li>
            </ol>
          </div>
        </nav>

        {/* Introduction Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              A Flavor for Every Moment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since 1960, we've been creating extraordinary ice cream experiences. Each flavor tells a story of 
              dedication to quality and the pursuit of perfection.
            </p>
          </div>
        </section>

        {/* Flavors Grid */}
        <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="flavors-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="flavors-heading" className="sr-only">Ice Cream Flavors</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {iceCreamFlavors.map((flavor) => (
                <article
                  key={flavor.id}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <Link 
                    href={`/flavors/${flavor.id}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:ring-offset-2"
                  >
                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                      <Image
                        src={getFlavorImage(flavor.id)}
                        alt={`${flavor.name} ice cream`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {!flavor.available && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Coming Soon</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-haagen-burgundy transition-colors">
                        {flavor.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                        {flavor.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {flavor.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-haagen-cream text-haagen-burgundy rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Call to Action */}
                      <div className="mt-4 flex items-center text-haagen-burgundy font-semibold group-hover:text-haagen-burgundy-dark">
                        <span>Learn More</span>
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

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-burgundy-light text-white" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Indulge?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Find your favorite Häagen-Dazs flavors at a store near you
            </p>
            <Link
              href="/where-to-buy"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-haagen-cream transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
            >
              Find a Store
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-12 sm:py-16 bg-haagen-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-gray-600">
                  Every flavor is carefully crafted with passion and attention to detail
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Inspiration</h3>
                <p className="text-gray-600">
                  Flavors inspired by the finest ingredients from around the world
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  We never compromise on quality, using only the best ingredients
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Helper function to get appropriate Unsplash images for each flavor
function getFlavorImage(flavorId: string): string {
  const flavorImages: Record<string, string> = {
    'vanilla': 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=400&fit=crop',
    'belgian-chocolate': 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=400&fit=crop',
    'strawberry': 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&h=400&fit=crop',
    'cookies-cream': 'https://images.unsplash.com/photo-1626552726266-2c47ac60a041?w=600&h=400&fit=crop',
    'dulce-de-leche': 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop',
    'pralines-cream': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
    'mint-chip': 'https://images.unsplash.com/photo-1595436240930-ebb5893279f8?w=600&h=400&fit=crop',
    'coffee': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
    'rum-raisin': 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&h=400&fit=crop',
    'mango': 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=400&fit=crop',
    'green-tea': 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?w=600&h=400&fit=crop',
    'salted-caramel': 'https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=600&h=400&fit=crop',
  };
  
  // Return specific image or fallback to generic ice cream image
  return flavorImages[flavorId] || 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=600&h=400&fit=crop';
}