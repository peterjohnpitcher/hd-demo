import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata = {
  alternates: {
    canonical: 'https://www.haagen-dazs.co.uk',
  },
};

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
  ]);
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:h-[70vh] flex items-center justify-center py-12 sm:py-16 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=1920&h=1080&fit=crop"
            alt="Delicious ice cream background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-haagen-cream/90 to-haagen-vanilla/90"></div>
        </div>
        <div className="relative text-center px-4 safe-area-inset">
          <h1 id="hero-heading" className="text-responsive-4xl md:text-responsive-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Indulge in Extraordinary
          </h1>
          <p className="text-responsive-lg md:text-responsive-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover the world of Häagen-Dazs, where every scoop is crafted with the finest ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/flavors"
              className="btn-responsive bg-haagen-burgundy text-white font-semibold rounded-lg hover:bg-haagen-burgundy-dark transition-colors inline-block focus:ring-2 focus:ring-haagen-burgundy focus:ring-offset-2"
              aria-label="Explore our ice cream flavors"
            >
              Explore Flavors
            </a>
            <a
              href="/where-to-buy"
              className="btn-responsive bg-white text-haagen-burgundy font-semibold rounded-lg border-2 border-haagen-burgundy hover:bg-haagen-cream transition-colors inline-block focus:ring-2 focus:ring-haagen-burgundy focus:ring-offset-2"
              aria-label="Find Häagen-Dazs stores near you"
            >
              Find a Store
            </a>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">What are you looking for?</h2>
          <SearchBar 
            className="w-full"
            placeholder="Search for flavors, stores, or information..."
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto responsive-padding-x">
          <h2 id="features-heading" className="sr-only">Why Choose Häagen-Dazs</h2>
          <div className="grid-responsive">
            <div className="text-center">
              <div className="bg-haagen-vanilla rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-responsive-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-responsive-base text-gray-600">
                Made with only the finest ingredients from around the world
              </p>
            </div>
            <div className="text-center">
              <div className="bg-haagen-vanilla rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-responsive-xl font-semibold mb-2">Global Flavors</h3>
              <p className="text-responsive-base text-gray-600">
                Inspired by cultures and tastes from every corner of the globe
              </p>
            </div>
            <div className="text-center">
              <div className="bg-haagen-vanilla rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-responsive-xl font-semibold mb-2">Perfect Gifts</h3>
              <p className="text-responsive-base text-gray-600">
                Custom cakes and gift sets for every special occasion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto responsive-padding-x">
          <h2 id="featured-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-8 sm:mb-12">
            Featured Flavors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=600&h=400&fit=crop"
                  alt="Vanilla ice cream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Belgian Chocolate</h3>
                <p className="text-gray-600 mb-4">Rich, velvety chocolate made with the finest Belgian cocoa</p>
                <a href="/flavors/belgian-chocolate" className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark">
                  Learn More →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&h=400&fit=crop"
                  alt="Strawberry ice cream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Strawberry & Cream</h3>
                <p className="text-gray-600 mb-4">Fresh strawberries swirled with sweet cream</p>
                <a href="/flavors/strawberry-cream" className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark">
                  Learn More →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop"
                  alt="Salted caramel ice cream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Salted Caramel</h3>
                <p className="text-gray-600 mb-4">Buttery caramel with a hint of sea salt</p>
                <a href="/flavors/salted-caramel" className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto responsive-padding-x">
          <h2 id="testimonials-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-responsive-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            Hear from ice cream lovers who have discovered their perfect moment of indulgence
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard
              author="Emma Thompson"
              rating={5}
              comment="This is hands down the best vanilla ice cream I've ever had. The Madagascar vanilla beans give it such a rich, authentic flavor."
              flavor="Vanilla"
              location="London, UK"
            />
            <TestimonialCard
              author="Michael Roberts"
              rating={5}
              comment="If you love chocolate, this is paradise. Rich, decadent, and not too sweet. The Belgian chocolate really makes a difference."
              flavor="Belgian Chocolate"
              location="Edinburgh, UK"
            />
            <TestimonialCard
              author="Charlotte Davis"
              rating={5}
              comment="The salt and caramel balance is absolutely perfect. Not too sweet, not too salty. Sophisticated and delicious!"
              flavor="Salted Caramel"
              location="Oxford, UK"
            />
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/flavors"
              className="inline-flex items-center px-6 py-3 border-2 border-haagen-burgundy text-haagen-burgundy font-semibold rounded-lg hover:bg-haagen-burgundy hover:text-white transition-colors"
            >
              Discover All Flavors
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-gold text-white" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto responsive-padding-x text-center">
          <h2 id="cta-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
            Find Häagen-Dazs Near You
          </h2>
          <p className="text-responsive-lg sm:text-responsive-xl mb-6 sm:mb-8 opacity-90">
            Locate our shops and retailers to enjoy your favorite flavors today
          </p>
          <a
            href="/where-to-buy"
            className="inline-flex items-center btn-responsive bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
            aria-label="Find stores that sell Häagen-Dazs products"
          >
            Store Locator
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
    </>
  );
}