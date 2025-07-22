import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getProductsByCategory } from '@/lib/products';

// Generate metadata for SEO
export const metadata: Metadata = generatePageMetadata({
  title: 'Non-Dairy Collection | Häagen-Dazs',
  description: 'Plant-based perfection that doesn\'t compromise on taste. Discover our non-dairy ice cream made with oat milk and coconut cream.',
  path: '/products/non-dairy',
});

export default function NonDairyPage() {
  const nonDairyProducts = getProductsByCategory('non-dairy');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Products', url: 'https://www.haagen-dazs.co.uk/products' },
    { name: 'Non-Dairy', url: 'https://www.haagen-dazs.co.uk/products/non-dairy' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=1920&h=1080&fit=crop"
              alt="Non-dairy ice cream collection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset">
            <h1 className="text-responsive-4xl md:text-responsive-5xl font-bold mb-4">
              Non-Dairy Collection
            </h1>
            <p className="text-responsive-lg md:text-responsive-xl max-w-3xl mx-auto opacity-90">
              Plant-based perfection that doesn't compromise on the creamy, indulgent taste you love
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-6">
              Indulgence Without Compromise
            </h2>
            <p className="text-responsive-lg text-gray-700 mb-8">
              Our non-dairy collection proves that plant-based can be just as indulgent as traditional ice cream. 
              Made with creamy oat milk and rich coconut cream, each flavor delivers the same extraordinary 
              Häagen-Dazs experience you know and love, crafted for those who choose or need dairy-free options.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Plant-Based</h3>
                <p className="text-gray-600">Made with oat milk and coconut cream</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Same Quality</h3>
                <p className="text-gray-600">Premium ingredients, extraordinary taste</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Vegan</h3>
                <p className="text-gray-600">Suitable for vegan lifestyles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="products-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              Non-Dairy Flavors
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {nonDairyProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <Link href={`/products/non-dairy/${product.id}`}>
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          product.id === 'non-dairy-chocolate' ? '1570197788417-0e82375c9371' :
                          product.id === 'non-dairy-vanilla' ? '1559703248-dcaaec9fab78' :
                          '1559703248-dcaaec9fab78'
                        }?w=600&h=400&fit=crop`}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-haagen-gold text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Plant-Based
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-haagen-burgundy transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">Key Ingredients:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.ingredients.slice(0, 3).map((ingredient) => (
                            <span key={ingredient} className="text-xs bg-haagen-cream text-haagen-burgundy px-2 py-1 rounded-full">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">Calories:</span>
                          <span className="font-semibold ml-1">{product.nutrition.calories}</span>
                        </div>
                        <span className="text-haagen-burgundy font-semibold inline-flex items-center">
                          Learn More
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
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              The Power of Plants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-haagen-burgundy">Oat Milk Base</h3>
                  <p className="text-gray-700 mb-6">
                    We use creamy oat milk as our primary base, providing a naturally sweet and smooth 
                    foundation that rivals traditional dairy in richness and mouthfeel.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-haagen-burgundy">Coconut Cream</h3>
                  <p className="text-gray-700 mb-6">
                    Rich coconut cream adds luxurious texture and helps create the signature creaminess 
                    you expect from Häagen-Dazs, without any dairy.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-haagen-burgundy">Natural Flavors</h3>
                  <p className="text-gray-700">
                    From real vanilla beans to premium cocoa, we use the same high-quality flavor 
                    ingredients as our traditional ice creams.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&h=600&fit=crop"
                  alt="Plant-based ingredients"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-haagen-vanilla to-haagen-cream">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              Why Choose Non-Dairy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lactose-Free</h3>
                <p className="text-gray-600 text-sm">Perfect for those with lactose intolerance</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
                <p className="text-gray-600 text-sm">Lower environmental impact</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cholesterol-Free</h3>
                <p className="text-gray-600 text-sm">Naturally free from cholesterol</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-gradient-to-br from-haagen-gold to-haagen-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Same Indulgence</h3>
                <p className="text-gray-600 text-sm">All the taste, none of the dairy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-8">
              A New Way to Indulge
            </h2>
            <blockquote className="text-responsive-lg text-gray-700 italic mb-6">
              "We believe everyone deserves to experience the joy of Häagen-Dazs. Our non-dairy collection 
              was created with the same passion and attention to detail as all our products, ensuring that 
              choosing plant-based never means compromising on taste or quality."
            </blockquote>
            <p className="text-gray-600">— Häagen-Dazs Innovation Team</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-gold to-haagen-gold text-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Experience Plant-Based Perfection
            </h2>
            <p className="text-responsive-lg mb-8 opacity-90">
              Find our non-dairy collection at select retailers and discover your new favorite indulgence
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