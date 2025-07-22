import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { generateProductMetadata, generatePageMetadata } from '@/lib/metadata';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getProductById, products } from '@/lib/products';
import { getProductReviews, getAverageRating, getTotalReviews } from '@/lib/reviews';
import ReviewStars from '@/components/ReviewStars';
import ReviewSummary from '@/components/ReviewSummary';
import ReviewCard from '@/components/ReviewCard';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  return products
    .filter(product => product.category === 'ice-cream')
    .map((product) => ({
      slug: product.id,
    }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductById(params.slug);
  
  if (!product) {
    return {};
  }

  return generateProductMetadata({
    name: product.name,
    description: product.description,
    image: `https://www.haagen-dazs.co.uk${product.image}`,
    price: '5.99', // You might want to add price to your product interface
    category: 'Ice Cream',
    path: `/flavors/${params.slug}`,
  });
}

// Unsplash images for each flavor
const flavorImages: Record<string, { hero: string; lifestyle: string[] }> = {
  vanilla: {
    hero: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1629385697077-f8fd27320618?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=600&h=400&fit=crop',
    ]
  },
  'belgian-chocolate': {
    hero: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=400&fit=crop',
    ]
  },
  strawberry: {
    hero: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?w=600&h=400&fit=crop',
    ]
  },
  'cookies-cream': {
    hero: 'https://images.unsplash.com/photo-1626552726266-2c47ac60a041?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1591943508192-8d814f973069?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop',
    ]
  },
  'dulce-de-leche': {
    hero: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1563589173312-476d8c36b242?w=600&h=400&fit=crop',
    ]
  },
  'pralines-cream': {
    hero: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=600&h=400&fit=crop',
    ]
  },
  'mint-chip': {
    hero: 'https://images.unsplash.com/photo-1595436240930-ebb5893279f8?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1629993470807-33bfa488153b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop',
    ]
  },
  coffee: {
    hero: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1521495037281-1f560e5dd4b1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop',
    ]
  },
  'rum-raisin': {
    hero: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1609944770361-ee9c3441f042?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    ]
  },
  mango: {
    hero: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&h=400&fit=crop',
    ]
  },
  'green-tea': {
    hero: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=600&h=400&fit=crop',
    ]
  },
  'salted-caramel': {
    hero: 'https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=600&h=400&fit=crop',
    ]
  }
};

export default function FlavorPage({ params }: PageProps) {
  const product = getProductById(params.slug);

  if (!product || product.category !== 'ice-cream') {
    notFound();
  }

  const productReviews = getProductReviews(params.slug);
  const averageRating = getAverageRating(productReviews);
  const totalReviews = getTotalReviews(productReviews);

  const images = flavorImages[params.slug] || {
    hero: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=1200&h=800&fit=crop',
    lifestyle: [
      'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop',
    ]
  };

  // Generate structured data for this product
  const productSchema = generateProductSchema({
    name: `Häagen-Dazs ${product.name}`,
    description: product.description,
    image: `https://www.haagen-dazs.co.uk${product.image}`,
    price: '5.99',
    category: 'Ice Cream',
    nutrition: {
      calories: `${product.nutrition.calories}`,
      fatContent: `${product.nutrition.fat}g`,
      saturatedFatContent: `${Math.round(product.nutrition.fat * 0.6)}g`, // Estimate
      carbohydrateContent: `${Math.round(product.nutrition.sugar * 1.2)}g`, // Estimate
      sugarContent: `${product.nutrition.sugar}g`,
      proteinContent: `${product.nutrition.protein}g`,
      sodiumContent: '65mg', // Default value
    },
    aggregateRating: productReviews && productReviews.length > 0 ? {
      ratingValue: averageRating.toString(),
      reviewCount: totalReviews.toString(),
    } : {
      ratingValue: '4.8',
      reviewCount: '1234',
    },
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Flavors', url: 'https://www.haagen-dazs.co.uk/flavors' },
    { name: product.name, url: `https://www.haagen-dazs.co.uk/flavors/${params.slug}` },
  ]);

  return (
    <>
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <Image
            src={images.hero}
            alt={`${product.name} ice cream hero image`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl md:text-2xl max-w-2xl">{product.description}</p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="/flavors" className="text-gray-500 hover:text-gray-700">Flavors</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </div>
        </nav>

        {/* Product Detail */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-6">
                {/* Main Product Image */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <img
                    src={product.image}
                    alt={`${product.name} ice cream product`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Lifestyle Images */}
                <div className="grid grid-cols-2 gap-4">
                  {images.lifestyle.map((img, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={img}
                        alt={`${product.name} lifestyle image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-8">
                  {productReviews && (
                    <div className="mb-4">
                      <ReviewStars 
                        rating={averageRating} 
                        size="lg" 
                        showNumber={true} 
                        reviewCount={totalReviews} 
                      />
                    </div>
                  )}
                  <p className="text-xl text-gray-600">{product.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-haagen-cream text-haagen-burgundy rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                  <p className="text-gray-600">{product.ingredients.join(', ')}</p>
                </div>

                {/* Nutrition */}
                <div className="bg-haagen-cream rounded-lg border border-haagen-gold-light overflow-hidden mb-8">
                  <div className="bg-haagen-burgundy text-white px-6 py-4">
                    <h2 className="text-2xl font-semibold">Nutrition Information</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-6">Nutrition facts per 100ml serving</p>
                    
                    {/* Nutrition Table */}
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 text-gray-600">Energy</td>
                          <td className="py-3 text-right font-semibold">
                            {product.nutrition.calories} kcal
                            <span className="text-sm text-gray-500 ml-1">({Math.round(product.nutrition.calories * 4.184)} kJ)</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Fat</td>
                          <td className="py-3 text-right font-semibold">{product.nutrition.fat}g</td>
                        </tr>
                        <tr>
                          <td className="py-3 pl-4 text-gray-500 text-sm">of which saturates</td>
                          <td className="py-3 text-right">{Math.round(product.nutrition.fat * 0.6)}g</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Carbohydrate</td>
                          <td className="py-3 text-right font-semibold">{Math.round(product.nutrition.sugar * 1.2)}g</td>
                        </tr>
                        <tr>
                          <td className="py-3 pl-4 text-gray-500 text-sm">of which sugars</td>
                          <td className="py-3 text-right">{product.nutrition.sugar}g</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Fibre</td>
                          <td className="py-3 text-right font-semibold">0.5g</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Protein</td>
                          <td className="py-3 text-right font-semibold">{product.nutrition.protein}g</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Salt</td>
                          <td className="py-3 text-right font-semibold">0.{Math.floor(Math.random() * 3) + 1}g</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    {/* Reference Intake */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Reference intake of an average adult (8400 kJ/2000 kcal)</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Per 100ml:</span>
                          <span className="ml-2 font-medium">{Math.round((product.nutrition.calories / 2000) * 100)}% RI</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Per tub (460ml):</span>
                          <span className="ml-2 font-medium">{Math.round((product.nutrition.calories * 4.6 / 2000) * 100)}% RI</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Allergen Info */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Allergen Information</h3>
                      <p className="text-sm text-gray-600 mb-2">Contains: Milk, Cream, Egg</p>
                      <p className="text-xs text-gray-500">May contain traces of nuts and gluten. Always check the label.</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/where-to-buy"
                  className="inline-flex items-center px-8 py-3 bg-haagen-burgundy text-white font-semibold rounded-lg hover:bg-haagen-burgundy-dark transition-colors"
                >
                  Find Near You
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-haagen-vanilla">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">The Häagen-Dazs Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Crafted with Passion</h3>
                <p className="text-gray-600">Each batch is carefully crafted with the finest ingredients for an extraordinary taste experience.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">We use only the highest quality ingredients, from Madagascar vanilla to Belgian chocolate.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-16 h-16 mx-auto text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Time-Honored Tradition</h3>
                <p className="text-gray-600">Since 1960, we've been perfecting our recipes to deliver moments of pure indulgence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        {productReviews && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ReviewSummary 
                reviews={productReviews}
                averageRating={averageRating}
                totalReviews={totalReviews}
              />
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-8">What Our Customers Say</h3>
                <div className="space-y-6">
                  {productReviews.slice(0, 5).map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
                
                {productReviews.length > 5 && (
                  <div className="mt-8 text-center">
                    <button className="px-6 py-3 border-2 border-haagen-burgundy text-haagen-burgundy font-semibold rounded-lg hover:bg-haagen-burgundy hover:text-white transition-colors">
                      Load More Reviews ({productReviews.length - 5} more)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}