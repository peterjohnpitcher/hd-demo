import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import StoreLocator from '@/components/StoreLocator'
import StoreLocatorMobile from '@/components/StoreLocatorMobile'
import StructuredData from '@/components/StructuredData'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Find Häagen-Dazs Locations | Store Locator',
  description: 'Discover Häagen-Dazs shops and retail locations near you. Find our premium ice cream at stores, restaurants, and specialty shops across the UK.',
  path: '/locations',
  image: '/images/og-locations.jpg'
})

const locationsStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Häagen-Dazs Store Locator",
  "description": "Find Häagen-Dazs locations near you",
  "url": "https://haagen-dazs.co.uk/locations"
}

export default function LocationsPage() {
  return (
    <>
      <StructuredData data={locationsStructuredData} />
      
      <main className="min-h-screen bg-gradient-to-b from-haagen-cream/50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-haagen-cream to-haagen-gold/20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Find Häagen-Dazs Near You
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover our shops and retail locations across the UK. Experience our premium ice cream at a location convenient to you.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative h-64 sm:h-96">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop"
            alt="Häagen-Dazs store interior with ice cream display"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Store Locator Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Use Our Store Locator
              </h2>
              <p className="text-lg text-gray-600">
                Enter your location to find the nearest Häagen-Dazs shops and retailers
              </p>
            </div>
            
            {/* Desktop Store Locator */}
            <div className="hidden md:block">
              <StoreLocator />
            </div>
            
            {/* Mobile Store Locator */}
            <div className="md:hidden">
              <StoreLocatorMobile />
            </div>
          </div>
        </section>

        {/* Store Types Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Where to Find Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Häagen-Dazs Shops */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&h=300&fit=crop"
                    alt="Häagen-Dazs boutique shop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Häagen-Dazs Shops
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Visit our boutique shops for the full Häagen-Dazs experience. Enjoy our complete range of flavors, sundaes, and special creations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Full flavor selection</li>
                    <li>• Freshly made sundaes</li>
                    <li>• Take-home pints</li>
                    <li>• Seasonal specials</li>
                  </ul>
                </div>
              </div>

              {/* Supermarkets */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=300&fit=crop"
                    alt="Supermarket freezer aisle"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Supermarkets
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Find our pints and mini cups at major supermarket chains across the UK. Perfect for enjoying at home.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tesco</li>
                    <li>• Sainsbury's</li>
                    <li>• Waitrose</li>
                    <li>• ASDA</li>
                  </ul>
                </div>
              </div>

              {/* Restaurants & Cafes */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop"
                    alt="Restaurant dessert service"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Restaurants & Cafes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Many restaurants and cafes serve Häagen-Dazs as their premium dessert option. Ask for us by name!
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fine dining restaurants</li>
                    <li>• Hotels & resorts</li>
                    <li>• Cinema chains</li>
                    <li>• Specialty dessert shops</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find a Location Near You?
            </h2>
            <p className="text-xl text-haagen-cream mb-8">
              Explore our online retailers or contact us for more information about Häagen-Dazs availability in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/where-to-buy"
                className="bg-white text-haagen-burgundy px-8 py-3 rounded-full font-semibold hover:bg-haagen-cream transition-colors"
              >
                Shop Online
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-haagen-burgundy transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}