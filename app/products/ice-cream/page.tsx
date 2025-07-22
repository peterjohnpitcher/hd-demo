import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getProductsByCategory } from '@/lib/products';

// Generate metadata for SEO
export const metadata: Metadata = generatePageMetadata({
  title: 'Ice Cream Collection | Häagen-Dazs',
  description: 'Discover our premium ice cream collection. From classic vanilla to exotic flavors, each crafted with the finest ingredients for an extraordinary experience.',
  path: '/products/ice-cream',
});

export default function IceCreamPage() {
  const iceCreams = getProductsByCategory('ice-cream');
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Products', url: 'https://www.haagen-dazs.co.uk/products' },
    { name: 'Ice Cream', url: 'https://www.haagen-dazs.co.uk/products/ice-cream' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=1920&h=1080&fit=crop"
              alt="Premium ice cream collection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset">
            <h1 className="text-responsive-4xl md:text-responsive-5xl font-bold mb-4">
              Ice Cream Collection
            </h1>
            <p className="text-responsive-lg md:text-responsive-xl max-w-3xl mx-auto opacity-90">
              Indulge in our signature ice cream collection, crafted with the finest ingredients from around the world
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-6">
              The Art of Ice Cream Making
            </h2>
            <p className="text-responsive-lg text-gray-700 mb-8">
              Since 1960, we've been perfecting the art of ice cream making. Each flavor in our collection 
              is a testament to our commitment to quality, using only real cream, milk, eggs, and sugar, 
              combined with carefully selected ingredients from the world's finest sources.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-burgundy to-haagen-burgundy-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Only the finest ingredients make it into our ice cream</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-burgundy to-haagen-burgundy-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Unique Flavors</h3>
                <p className="text-gray-600">From classic to exotic, discover your perfect flavor</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-haagen-burgundy to-haagen-burgundy-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-gray-600">Every batch is crafted with passion and care</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="products-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-12">
              Our Ice Cream Flavors
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {iceCreams.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <Link href={`/flavors/${product.id}`}>
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          product.id === 'vanilla' ? '1570197788417-0e82375c9371' :
                          product.id === 'belgian-chocolate' ? '1560008581-09826d1de69e' :
                          product.id === 'strawberry' ? '1633933358116-a27b902fad35' :
                          product.id === 'cookies-cream' ? '1629385697077-f8fd27320618' :
                          product.id === 'dulce-de-leche' ? '1559703248-dcaaec9fab78' :
                          product.id === 'pralines-cream' ? '1516559828984-fb3b99548b21' :
                          product.id === 'mint-chip' ? '1497034825429-62d13a3c74fd' :
                          product.id === 'coffee' ? '1579954115563-e72a1e7c6e6f' :
                          product.id === 'rum-raisin' ? '1563805042-7684c019e1c4' :
                          product.id === 'mango' ? '1559703248-dcaaec9fab78' :
                          product.id === 'green-tea' ? '1567206563064-6f60f40a2b57' :
                          product.id === 'salted-caramel' ? '1516559828984-fb3b99548b21' :
                          '1567206563064-6f60f40a2b57'
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
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {product.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-burgundy-dark text-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Find Your Favorite Flavor
            </h2>
            <p className="text-responsive-lg mb-8 opacity-90">
              Visit your nearest store and experience the extraordinary taste of Häagen-Dazs ice cream
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