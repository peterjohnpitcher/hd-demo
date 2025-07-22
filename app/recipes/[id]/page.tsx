import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getRecipeById, recipes, categoryInfo } from '@/lib/recipes';
import { getProductById } from '@/lib/products';

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const recipe = getRecipeById(params.id);
  
  if (!recipe) {
    return generatePageMetadata({
      title: 'Recipe Not Found | Häagen-Dazs',
      description: 'The recipe you are looking for could not be found.',
      path: `/recipes/${params.id}`,
    });
  }

  return generatePageMetadata({
    title: `${recipe.title} | Häagen-Dazs Recipes`,
    description: recipe.description,
    path: `/recipes/${recipe.id}`,
  });
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = getRecipeById(params.id);

  if (!recipe) {
    notFound();
  }

  // Get flavor products
  const flavorProducts = recipe.flavorIds
    .map(id => getProductById(id))
    .filter(Boolean);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Ice Cream Recipes', url: 'https://www.haagen-dazs.co.uk/recipes' },
    { name: recipe.title, url: `https://www.haagen-dazs.co.uk/recipes/${recipe.id}` },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                {categoryInfo[recipe.category].icon} {categoryInfo[recipe.category].name}
              </span>
            </div>
            <h1 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              {recipe.title}
            </h1>
            <p className="text-responsive-lg opacity-90 mb-6">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{recipe.prepTime} minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  recipe.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty} difficulty
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recipe Content */}
              <div className="lg:col-span-2">
                {/* Recipe Steps Placeholder */}
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">How to Make {recipe.title}</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 mb-4">
                      This delicious recipe combines premium Häagen-Dazs ice cream with quality ingredients to create an extraordinary dessert.
                    </p>
                    <h3 className="text-xl font-semibold mb-3">Instructions</h3>
                    <ol className="space-y-3">
                      <li>Begin by letting the Häagen-Dazs ice cream soften slightly at room temperature for 5-10 minutes.</li>
                      <li>Prepare your other ingredients and tools while the ice cream softens.</li>
                      <li>Follow the specific recipe steps for your chosen dessert.</li>
                      <li>Work quickly to prevent melting and maintain the best texture.</li>
                      <li>Serve immediately or freeze until ready to serve.</li>
                    </ol>
                    <div className="mt-6 p-4 bg-haagen-cream rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Pro Tip:</strong> For best results, use high-quality ingredients and work in a cool environment. Keep your serving dishes chilled for optimal presentation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dietary Information */}
                {recipe.dietaryTags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Dietary Information</h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.dietaryTags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Featured Flavors */}
                <div className="bg-gradient-to-br from-haagen-cream to-haagen-vanilla rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Häagen-Dazs Flavors Used</h3>
                  <div className="space-y-4">
                    {flavorProducts.map((product) => 
                      product ? (
                        <Link
                          key={product.id}
                          href={`/flavors/${product.id}`}
                          className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h4 className="font-semibold text-haagen-burgundy mb-1">{product.name}</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Recipe Quick Facts</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Prep Time:</dt>
                      <dd className="font-semibold">{recipe.prepTime} minutes</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Servings:</dt>
                      <dd className="font-semibold">{recipe.servings} people</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Difficulty:</dt>
                      <dd className="font-semibold capitalize">{recipe.difficulty}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Category:</dt>
                      <dd className="font-semibold">{categoryInfo[recipe.category].name}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-burgundy-light text-white">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 className="text-responsive-3xl font-bold mb-4">
              Ready to Create This Recipe?
            </h2>
            <p className="text-responsive-lg mb-8 opacity-90">
              Find the Häagen-Dazs flavors you need at a store near you
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
                href="/recipes"
                className="inline-flex items-center btn-responsive bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-haagen-burgundy transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-haagen-burgundy"
              >
                Browse More Recipes
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