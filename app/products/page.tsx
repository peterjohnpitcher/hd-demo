import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getProductsByCategory, Product } from '@/lib/products';
import { getProductReviews, getAverageRating, getTotalReviews } from '@/lib/reviews';
import ReviewStars from '@/components/ReviewStars';

// Generate metadata for SEO
export const metadata: Metadata = generatePageMetadata({
  title: 'Our Products | Häagen-Dazs',
  description: 'Explore our premium collection of ice creams, bars, mini cups, and non-dairy desserts. Crafted with the finest ingredients for extraordinary moments.',
  path: '/products',
});

// Product category data with Unsplash images
const categories = [
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    description: 'Indulge in our signature ice cream collection, crafted with the finest ingredients from around the world.',
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=800&h=600&fit=crop',
    link: '/products/ice-cream',
    color: 'from-haagen-burgundy to-haagen-burgundy-light',
  },
  {
    id: 'bars',
    name: 'Bars & Sticks',
    description: 'Premium ice cream bars dipped in rich Belgian chocolate and covered with delicious toppings.',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&h=600&fit=crop',
    link: '/products/bars',
    color: 'from-haagen-gold to-haagen-gold-light',
  },
  {
    id: 'mini-cups',
    name: 'Mini Cups',
    description: 'Perfectly portioned mini cups for guilt-free indulgence anytime, anywhere.',
    image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=800&h=600&fit=crop',
    link: '/products/mini-cups',
    color: 'from-haagen-vanilla to-haagen-cream',
  },
  {
    id: 'non-dairy',
    name: 'Non-Dairy',
    description: 'Plant-based perfection that doesn\'t compromise on the creamy, indulgent taste you love.',
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=800&h=600&fit=crop',
    link: '/products/non-dairy',
    color: 'from-haagen-chocolate to-haagen-burgundy-dark',
  },
];

// Featured products data
const featuredProducts = [
  {
    id: 'belgian-chocolate',
    name: 'Belgian Chocolate',
    category: 'Ice Cream',
    description: 'Rich, velvety chocolate ice cream crafted with the finest Belgian chocolate.',
    image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&h=400&fit=crop',
    link: '/flavors/belgian-chocolate',
  },
  {
    id: 'vanilla-almond-bar',
    name: 'Vanilla Almond Bar',
    category: 'Bars & Sticks',
    description: 'Creamy vanilla ice cream dipped in milk chocolate and covered with roasted almonds.',
    image: 'https://images.unsplash.com/photo-1629385697077-f8fd27320618?w=600&h=400&fit=crop',
    link: '/products/bars/vanilla-almond-bar',
  },
  {
    id: 'strawberry-mini',
    name: 'Strawberry Mini Cup',
    category: 'Mini Cups',
    description: 'Sweet strawberry ice cream in a perfectly portioned mini cup.',
    image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=600&h=400&fit=crop',
    link: '/products/mini-cups/strawberry-mini',
  },
  {
    id: 'non-dairy-chocolate',
    name: 'Non-Dairy Chocolate Fudge',
    category: 'Non-Dairy',
    description: 'Decadent plant-based chocolate fudge that doesn\'t compromise on taste.',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=400&fit=crop',
    link: '/products/non-dairy/chocolate-fudge',
  },
];

export default function ProductsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Products', url: 'https://www.haagen-dazs.co.uk/products' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1920&h=1080&fit=crop"
              alt="Assortment of Häagen-Dazs products"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset">
            <h1 className="text-responsive-4xl md:text-responsive-5xl font-bold mb-4 sm:mb-6">
              Our Products
            </h1>
            <p className="text-responsive-lg md:text-responsive-xl max-w-3xl mx-auto mb-8 opacity-90">
              From classic ice cream tubs to innovative bars and non-dairy options, 
              discover the perfect treat for every moment
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="categories-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-4">
              Explore Our Collections
            </h2>
            <p className="text-responsive-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
              Each product is crafted with care and the finest ingredients to deliver an extraordinary experience
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.link}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-64 sm:h-72 md:h-80">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`}></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{category.name}</h3>
                    <p className="text-base sm:text-lg opacity-90 mb-4">{category.description}</p>
                    <div className="flex items-center text-white font-semibold">
                      <span className="mr-2">Explore Collection</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="featured-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-4">
              Featured Products
            </h2>
            <p className="text-responsive-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
              Discover our most beloved creations, chosen by ice cream lovers worldwide
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => {
                const productReviews = getProductReviews(product.id);
                const rating = getAverageRating(productReviews);
                const reviewCount = getTotalReviews(productReviews);
                
                return (
                  <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                    <Link href={product.link}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-haagen-burgundy transition-colors">
                          {product.name}
                        </h3>
                        {rating > 0 && (
                          <div className="mb-3">
                            <ReviewStars rating={rating} size="sm" showNumber={true} reviewCount={reviewCount} />
                          </div>
                        )}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <span className="text-haagen-burgundy font-semibold inline-flex items-center">
                          Learn More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality Promise Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-haagen-cream to-haagen-vanilla" aria-labelledby="quality-heading">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 id="quality-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold mb-6">
              Our Quality Promise
            </h2>
            <p className="text-responsive-lg text-gray-700 mb-8">
              Every Häagen-Dazs product is made with only the finest ingredients. 
              We use real cream, milk, eggs, and sugar, combined with carefully selected 
              flavors from around the world. No artificial flavors, no preservatives, 
              just pure indulgence in every bite.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Ingredients</h3>
                <p className="text-gray-600">Only the finest ingredients from trusted sources worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Crafted with Passion</h3>
                <p className="text-gray-600">Each flavor is carefully crafted to deliver extraordinary taste</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Perfect for Any Occasion</h3>
                <p className="text-gray-600">From personal treats to special celebrations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-burgundy-light text-white" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x text-center">
            <h2 id="cta-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Ready to Indulge?
            </h2>
            <p className="text-responsive-lg sm:text-responsive-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Find your nearest store and treat yourself to the extraordinary taste of Häagen-Dazs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/where-to-buy"
                className="inline-flex items-center btn-responsive bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-haagen-cream transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
              >
                Find a Store
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
              <Link
                href="/flavors"
                className="inline-flex items-center btn-responsive bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-haagen-burgundy transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
              >
                Explore All Flavors
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}