import { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import StoreLocator from '@/components/StoreLocator';

export const metadata: Metadata = generatePageMetadata({
  title: 'Where to Buy - Find Häagen-Dazs Near You',
  description: 'Find Häagen-Dazs stores and retailers near you. Use our store locator to discover where to buy your favorite premium ice cream flavors.',
  path: '/where-to-buy',
});

export default function WhereToBuyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Where to Buy', url: 'https://www.haagen-dazs.co.uk/where-to-buy' },
  ]);

  // Example store for structured data (you would generate this for each actual store)
  const exampleStoreSchema = generateLocalBusinessSchema({
    name: 'Häagen-Dazs London Oxford Street',
    address: {
      streetAddress: '123 Oxford Street',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      postalCode: 'W1D 1LT',
      addressCountry: 'GB',
    },
    telephone: '+44-20-1234-5678',
    openingHours: ['Mo-Fr 10:00-22:00', 'Sa 10:00-23:00', 'Su 11:00-21:00'],
    image: 'https://www.haagen-dazs.co.uk/images/stores/oxford-street.jpg',
    geo: {
      latitude: 51.5142,
      longitude: -0.1425,
    },
    hasMap: 'https://maps.google.com/?q=Haagen-Dazs+Oxford+Street+London',
  });

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={exampleStoreSchema} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Background Image */}
        <div className="relative bg-white border-b">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1540914124281-342587941389?w=1920&h=600&fit=crop&crop=center"
              alt="Modern grocery store interior with well-lit aisles showcasing premium products"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto responsive-padding-x py-12 sm:py-16">
            <h1 id="page-heading" className="text-responsive-3xl sm:text-responsive-4xl font-bold text-gray-900 text-center mb-3 sm:mb-4">Find Häagen-Dazs Near You</h1>
            <p className="text-responsive-lg sm:text-responsive-xl text-gray-600 text-center max-w-3xl mx-auto">
              Discover where to buy your favorite Häagen-Dazs flavors. Find our shops and retail partners near you.
            </p>
          </div>
        </div>
        
        {/* Store Types Section */}
        <div className="max-w-7xl mx-auto responsive-padding-x py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Where You Can Find Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Supermarkets */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=400&fit=crop"
                  alt="Supermarket freezer aisle with ice cream products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Supermarkets</h3>
                <p className="text-gray-600">Find Häagen-Dazs in the freezer aisle of major supermarket chains across the UK.</p>
              </div>
            </div>
            
            {/* Online Shopping */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="Person shopping online on laptop with delivery boxes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Online Delivery</h3>
                <p className="text-gray-600">Order Häagen-Dazs online for delivery straight to your door from various retailers.</p>
              </div>
            </div>
            
            {/* Convenience Stores */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop"
                  alt="Small convenience store interior with refrigerated section"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Convenience Stores</h3>
                <p className="text-gray-600">Pick up your favorite flavors at local convenience stores and petrol stations.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Store Locator Section */}
        <div className="bg-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Use Our Store Locator</h2>
            <div role="region" aria-label="Store locator">
              <StoreLocator />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}