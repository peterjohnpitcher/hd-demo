import { generateBreadcrumbSchema, organizationSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Our Story & Values | Häagen-Dazs UK',
  description: 'Discover the Häagen-Dazs story. Learn about our commitment to crafting extraordinary ice cream with the finest ingredients since 1960.',
  keywords: 'Häagen-Dazs history, ice cream story, brand values, quality commitment, premium ice cream UK',
  openGraph: {
    title: 'About Häagen-Dazs | Our Story & Values',
    description: 'From humble beginnings to global excellence. Discover how we craft extraordinary ice cream with passion and the finest ingredients.',
    url: 'https://www.haagen-dazs.co.uk/about',
    images: [
      {
        url: 'https://www.haagen-dazs.co.uk/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Häagen-Dazs Brand Story',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.haagen-dazs.co.uk/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'About Us', url: 'https://www.haagen-dazs.co.uk/about' },
  ]);

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Häagen-Dazs',
      foundingDate: '1960',
      founder: {
        '@type': 'Person',
        name: 'Reuben and Rose Mattus',
      },
      description: 'Häagen-Dazs is dedicated to crafting the world\'s finest ice cream using only the highest quality ingredients.',
    },
  };

  const timelineEvents = [
    {
      year: '1960',
      title: 'The Beginning',
      description: 'Reuben and Rose Mattus create Häagen-Dazs in the Bronx, New York, with a vision to craft the world\'s finest ice cream.',
      image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&h=600&fit=crop',
    },
    {
      year: '1976',
      title: 'First Shop Opens',
      description: 'The first Häagen-Dazs shop opens in Brooklyn Heights, New York, bringing our premium ice cream directly to customers.',
      image: 'https://images.unsplash.com/photo-1578761502019-a71351b3958e?w=800&h=600&fit=crop',
    },
    {
      year: '1983',
      title: 'Global Expansion',
      description: 'Häagen-Dazs begins its international journey, sharing extraordinary ice cream with the world.',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&h=600&fit=crop',
    },
    {
      year: 'Today',
      title: 'Continued Excellence',
      description: 'We continue our founders\' legacy, creating innovative flavors while maintaining our commitment to quality.',
      image: 'https://images.unsplash.com/photo-1629385098265-79cb009c1d0c?w=800&h=600&fit=crop',
    },
  ];

  const values = [
    {
      title: 'Passion for Excellence',
      description: 'Every scoop reflects our unwavering dedication to creating extraordinary ice cream experiences.',
      icon: (
        <svg className="w-12 h-12 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Artisan Craftsmanship',
      description: 'We honor traditional ice cream making methods while embracing innovation to create unique flavors.',
      icon: (
        <svg className="w-12 h-12 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Sustainable Sourcing',
      description: 'We partner with farmers and suppliers who share our commitment to responsible, sustainable practices.',
      icon: (
        <svg className="w-12 h-12 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Customer Delight',
      description: 'Your joy is our inspiration. We strive to exceed expectations with every product we create.',
      icon: (
        <svg className="w-12 h-12 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={organizationSchema} />
      <StructuredData data={aboutSchema} />
      
      <div className="min-h-screen">
        {/* Hero Section with Brand Story */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=1920&h=1080&fit=crop"
              alt="Luxury ice cream creation process"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-responsive-4xl md:text-responsive-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-responsive-lg md:text-responsive-xl mb-8 leading-relaxed">
              Since 1960, Häagen-Dazs has been dedicated to crafting the world's finest ice cream. 
              What began as a vision in the Bronx has become a global symbol of indulgence and quality.
            </p>
            <div className="inline-flex items-center gap-2 text-responsive-base">
              <span className="font-semibold">Est. 1960</span>
              <span className="mx-2">•</span>
              <span>Crafting Excellence for Over 60 Years</span>
            </div>
          </div>
        </section>

        {/* History Section with Timeline */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="history-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="history-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-4 text-gray-900">
              Our Journey Through Time
            </h2>
            <p className="text-responsive-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              From humble beginnings to becoming the world's most beloved premium ice cream brand
            </p>
            
            <div className="space-y-16 md:space-y-20">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={event.image}
                        alt={`Häagen-Dazs ${event.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="inline-block bg-haagen-burgundy text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                      {event.year}
                    </div>
                    <h3 className="text-responsive-2xl font-bold mb-4 text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-responsive-base text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 sm:py-20 bg-gray-50" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="values-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-responsive-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              The principles that guide every decision we make and every product we create
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-responsive-xl font-bold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-responsive-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="quality-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="quality-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold mb-6 text-gray-900">
                  Our Commitment to Quality
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-responsive-xl font-semibold mb-3 text-gray-900">
                      Finest Ingredients
                    </h3>
                    <p className="text-responsive-base text-gray-600 leading-relaxed">
                      We search the world for the best ingredients - Belgian chocolate, 
                      vanilla from Madagascar, strawberries from Poland. No artificial 
                      flavors, no compromise on quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-responsive-xl font-semibold mb-3 text-gray-900">
                      Careful Craftsmanship
                    </h3>
                    <p className="text-responsive-base text-gray-600 leading-relaxed">
                      Each batch is made with meticulous attention to detail. We blend 
                      our ingredients slowly and carefully to achieve the perfect texture 
                      and taste in every scoop.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-responsive-xl font-semibold mb-3 text-gray-900">
                      Innovation with Tradition
                    </h3>
                    <p className="text-responsive-base text-gray-600 leading-relaxed">
                      While we honor traditional ice cream making methods, we continuously 
                      innovate to bring you new, exciting flavors that surprise and delight.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516043827470-d52bc543c438?w=800&h=1200&fit=crop"
                  alt="Premium ice cream ingredients and craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-haagen-burgundy to-haagen-gold text-white" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 id="cta-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold mb-6">
              Experience the Häagen-Dazs Difference
            </h2>
            <p className="text-responsive-lg sm:text-responsive-xl mb-8 opacity-90">
              Discover why discerning ice cream lovers around the world choose Häagen-Dazs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/flavors"
                className="inline-flex items-center justify-center btn-responsive bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-haagen-cream transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
                aria-label="Explore our ice cream flavors"
              >
                Explore Our Flavors
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/where-to-buy"
                className="inline-flex items-center justify-center btn-responsive bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
                aria-label="Find Häagen-Dazs stores near you"
              >
                Find a Store Near You
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}