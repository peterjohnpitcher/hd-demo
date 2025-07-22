import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getProductsByCategory } from '@/lib/products';

// Generate metadata for SEO
export const metadata: Metadata = generatePageMetadata({
  title: 'Bars & Sticks Collection | Häagen-Dazs',
  description: 'Premium ice cream bars dipped in rich Belgian chocolate and covered with delicious toppings. The perfect on-the-go indulgence.',
  path: '/products/bars',
});

export default function BarsPage() {
  const bars = getProductsByCategory('bars');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Products', url: 'https://www.haagen-dazs.co.uk/products' },
    { name: 'Bars & Sticks', url: 'https://www.haagen-dazs.co.uk/products/bars' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1488900128323-21503983a07e?w=1920&h=1080&fit=crop"
              alt="Premium ice cream bars collection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset">
            <h1 className="text-responsive-4xl md:text-responsive-5xl font-bold mb-4">
              Bars & Sticks Collection
            </h1>
            <p className="text-responsive-lg md:text-responsive-xl max-w-3xl mx-auto opacity-90">
              Premium ice cream bars dipped in rich Belgian chocolate and covered with delicious toppings
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-6">
              Indulgence on a Stick
            </h2>
            <p className="text-responsive-lg text-gray-700 mb-8">
              Our ice cream bars combine the creamy richness of Häagen-Dazs ice cream with the decadent 
              pleasure of Belgian chocolate. Each bar is carefully crafted to deliver the perfect balance 
              of flavors and textures in every bite.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Belgian Chocolate</h3>
                <p className="text-gray-600">Dipped in the finest Belgian chocolate coating</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Toppings</h3>
                <p className="text-gray-600">Roasted almonds and delicious additions</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Perfect Portion</h3>
                <p className="text-gray-600">Ideal size for on-the-go indulgence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="products-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              Our Bar Collection
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {bars.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <Link href={`/products/bars/${product.id}`}>
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          product.id === 'vanilla-almond-bar' ? '1629385697077-f8fd27320618' :
                          product.id === 'coffee-almond-bar' ? '1488900128323-21503983a07e' :
                          product.id === 'raspberry-sorbet-bar' ? '1559124313-c3efac980d77' :
                          '1488900128323-21503983a07e'
                        }?w=600&h=400&fit=crop`}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Calories</span>
                          <span className="font-semibold">{product.nutrition.calories}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-haagen-vanilla rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Perfect for Any Moment</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Whether you're enjoying a sunny afternoon in the park or treating yourself after dinner, 
                our ice cream bars deliver the perfect balance of creamy ice cream and rich chocolate 
                in every bite. Each bar is individually wrapped for freshness and convenience.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              What Makes Our Bars Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565661834013-d196ca46e14e?w=800&h=600&fit=crop"
                  alt="Ice cream bar production"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-haagen-cream rounded-full flex items-center justify-center mr-4">
                    <span className="text-haagen-burgundy font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Ice Cream Core</h3>
                    <p className="text-gray-600">
                      Each bar starts with our signature ice cream, made with real cream and the finest ingredients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-haagen-cream rounded-full flex items-center justify-center mr-4">
                    <span className="text-haagen-burgundy font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Belgian Chocolate Coating</h3>
                    <p className="text-gray-600">
                      Dipped in rich Belgian chocolate that creates the perfect crisp shell around our creamy ice cream.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-haagen-cream rounded-full flex items-center justify-center mr-4">
                    <span className="text-haagen-burgundy font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Delicious Toppings</h3>
                    <p className="text-gray-600">
                      Finished with carefully selected toppings like roasted almonds for added texture and flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-gold to-haagen-gold text-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Ready for a Bar Experience?
            </h2>
            <p className="text-responsive-lg mb-8 opacity-90">
              Find our premium ice cream bars at your nearest retailer
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