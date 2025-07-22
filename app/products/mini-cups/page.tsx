import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getProductsByCategory } from '@/lib/products';

// Generate metadata for SEO
export const metadata: Metadata = generatePageMetadata({
  title: 'Mini Cups Collection | Häagen-Dazs',
  description: 'Perfectly portioned mini cups for guilt-free indulgence. Enjoy your favorite Häagen-Dazs flavors in convenient single-serve sizes.',
  path: '/products/mini-cups',
});

export default function MiniCupsPage() {
  const miniCups = getProductsByCategory('mini-cups');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Products', url: 'https://www.haagen-dazs.co.uk/products' },
    { name: 'Mini Cups', url: 'https://www.haagen-dazs.co.uk/products/mini-cups' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=1920&h=1080&fit=crop"
              alt="Mini cups collection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset">
            <h1 className="text-responsive-4xl md:text-responsive-5xl font-bold mb-4">
              Mini Cups Collection
            </h1>
            <p className="text-responsive-lg md:text-responsive-xl max-w-3xl mx-auto opacity-90">
              Perfectly portioned mini cups for guilt-free indulgence anytime, anywhere
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-6">
              Small Size, Big Flavor
            </h2>
            <p className="text-responsive-lg text-gray-700 mb-8">
              Our mini cups deliver the same extraordinary Häagen-Dazs experience in a perfectly 
              portioned size. Ideal for satisfying your sweet cravings without overindulging, 
              each mini cup contains the same premium ingredients and careful craftsmanship as our full-size offerings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Perfect Portions</h3>
                <p className="text-gray-600">Just the right amount for a satisfying treat</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">On-the-Go</h3>
                <p className="text-gray-600">Convenient size for enjoying anywhere</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Same Quality</h3>
                <p className="text-gray-600">Premium ingredients in every mini cup</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="products-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              Mini Cup Flavors
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {miniCups.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <Link href={`/products/mini-cups/${product.id}`}>
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          product.id === 'vanilla-mini' ? '1570197788417-0e82375c9371' :
                          product.id === 'chocolate-mini' ? '1560008581-09826d1de69e' :
                          '1516559828984-fb3b99548b21'
                        }?w=600&h=400&fit=crop`}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-haagen-burgundy text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.nutrition.calories} cal
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-haagen-burgundy transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-wrap gap-2">
                          {product.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-haagen-cream text-haagen-burgundy px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-haagen-burgundy font-semibold inline-flex items-center">
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-16 bg-gradient-to-r from-haagen-vanilla to-haagen-cream rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Why Choose Mini Cups?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                    <svg className="w-12 h-12 text-haagen-burgundy mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Portion Control</h4>
                  <p className="text-sm text-gray-600">Enjoy without overindulging</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                    <svg className="w-12 h-12 text-haagen-burgundy mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Quick Treat</h4>
                  <p className="text-sm text-gray-600">Perfect for busy lifestyles</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                    <svg className="w-12 h-12 text-haagen-burgundy mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Great for Sharing</h4>
                  <p className="text-sm text-gray-600">Individual servings for everyone</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                    <svg className="w-12 h-12 text-haagen-burgundy mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Instagram-Worthy</h4>
                  <p className="text-sm text-gray-600">Cute and photogenic treats</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              Perfect for Every Occasion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop"
                  alt="Party desserts"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Parties & Gatherings</h3>
                  <p className="text-sm opacity-90">Individual servings make hosting easy</p>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=600&h=400&fit=crop"
                  alt="Office treats"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Office Treats</h3>
                  <p className="text-sm opacity-90">Perfect afternoon pick-me-up</p>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=400&fit=crop"
                  alt="Personal indulgence"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Me-Time Moments</h3>
                  <p className="text-sm opacity-90">Your personal treat, your way</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-burgundy-dark text-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Small Cups, Big Happiness
            </h2>
            <p className="text-responsive-lg mb-8 opacity-90">
              Find our mini cups at your favorite retailer and enjoy perfectly portioned indulgence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/where-to-buy"
                className="inline-flex items-center btn-responsive bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Find a Store
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center btn-responsive bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-haagen-burgundy transition-colors"
              >
                All Products
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}