import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nutrition Information - Häagen-Dazs UK',
  description: 'Explore nutrition facts, calorie counts, allergen information, and dietary options for all Häagen-Dazs ice cream flavours. Find gluten-free and non-dairy options.',
  path: '/nutrition',
});

const popularFlavors = [
  {
    name: 'Vanilla',
    servingSize: '100ml',
    calories: 251,
    fat: 17.1,
    saturatedFat: 10.3,
    carbs: 20.4,
    sugars: 19.8,
    protein: 4.3,
    salt: 0.13,
    allergens: ['Milk', 'Egg'],
  },
  {
    name: 'Belgian Chocolate',
    servingSize: '100ml',
    calories: 270,
    fat: 17.0,
    saturatedFat: 10.5,
    carbs: 24.7,
    sugars: 22.4,
    protein: 4.8,
    salt: 0.15,
    allergens: ['Milk', 'Egg', 'Soya'],
  },
  {
    name: 'Strawberries & Cream',
    servingSize: '100ml',
    calories: 236,
    fat: 14.6,
    saturatedFat: 8.8,
    carbs: 22.7,
    sugars: 21.9,
    protein: 3.6,
    salt: 0.11,
    allergens: ['Milk', 'Egg'],
  },
  {
    name: 'Cookies & Cream',
    servingSize: '100ml',
    calories: 275,
    fat: 16.5,
    saturatedFat: 9.9,
    carbs: 27.3,
    sugars: 23.1,
    protein: 4.5,
    salt: 0.18,
    allergens: ['Milk', 'Egg', 'Wheat', 'Soya'],
  },
  {
    name: 'Salted Caramel',
    servingSize: '100ml',
    calories: 280,
    fat: 17.2,
    saturatedFat: 10.6,
    carbs: 26.8,
    sugars: 25.2,
    protein: 4.1,
    salt: 0.45,
    allergens: ['Milk', 'Egg'],
  },
  {
    name: 'Macadamia Nut Brittle',
    servingSize: '100ml',
    calories: 295,
    fat: 19.2,
    saturatedFat: 10.1,
    carbs: 25.6,
    sugars: 23.8,
    protein: 4.9,
    salt: 0.20,
    allergens: ['Milk', 'Egg', 'Tree Nuts'],
  },
  {
    name: 'Pralines & Cream',
    servingSize: '100ml',
    calories: 290,
    fat: 18.5,
    saturatedFat: 10.8,
    carbs: 26.2,
    sugars: 24.5,
    protein: 4.7,
    salt: 0.16,
    allergens: ['Milk', 'Egg', 'Tree Nuts'],
  },
  {
    name: 'Mango & Raspberry',
    servingSize: '100ml',
    calories: 225,
    fat: 12.8,
    saturatedFat: 7.9,
    carbs: 24.5,
    sugars: 23.7,
    protein: 3.2,
    salt: 0.09,
    allergens: ['Milk', 'Egg'],
  },
];

const dietaryOptions = [
  {
    name: 'Non-Dairy Chocolate Salted Fudge',
    type: 'Plant-Based',
    servingSize: '100ml',
    calories: 260,
    fat: 14.5,
    saturatedFat: 8.2,
    carbs: 28.3,
    sugars: 24.6,
    protein: 3.8,
    salt: 0.35,
    allergens: ['Soya'],
    features: ['Dairy-Free', 'Vegan'],
  },
  {
    name: 'Non-Dairy Caramel Pecan',
    type: 'Plant-Based',
    servingSize: '100ml',
    calories: 270,
    fat: 15.8,
    saturatedFat: 8.9,
    carbs: 29.1,
    sugars: 25.2,
    protein: 3.5,
    salt: 0.38,
    allergens: ['Tree Nuts', 'Soya'],
    features: ['Dairy-Free', 'Vegan'],
  },
  {
    name: 'Non-Dairy Vanilla',
    type: 'Plant-Based',
    servingSize: '100ml',
    calories: 240,
    fat: 13.2,
    saturatedFat: 7.5,
    carbs: 26.8,
    sugars: 23.4,
    protein: 3.2,
    salt: 0.28,
    allergens: ['Soya'],
    features: ['Dairy-Free', 'Vegan'],
  },
  {
    name: 'Vanilla (Gluten-Free)',
    type: 'Gluten-Free',
    servingSize: '100ml',
    calories: 251,
    fat: 17.1,
    saturatedFat: 10.3,
    carbs: 20.4,
    sugars: 19.8,
    protein: 4.3,
    salt: 0.13,
    allergens: ['Milk', 'Egg'],
    features: ['Gluten-Free'],
  },
];

const allergenInfo = [
  {
    allergen: 'Milk',
    description: 'Present in all dairy-based ice creams. Check our non-dairy range for alternatives.',
    icon: '🥛',
  },
  {
    allergen: 'Eggs',
    description: 'Used in most of our ice cream recipes for richness and texture.',
    icon: '🥚',
  },
  {
    allergen: 'Nuts',
    description: 'Various tree nuts are used in specific flavours. Always check individual product labels.',
    icon: '🥜',
  },
  {
    allergen: 'Wheat/Gluten',
    description: 'Found in flavours with cookies, brownies, or cake pieces. Many flavours are naturally gluten-free.',
    icon: '🌾',
  },
  {
    allergen: 'Soya',
    description: 'May be present in chocolate varieties and all non-dairy options.',
    icon: '🌱',
  },
];

export default function NutritionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Nutrition', url: 'https://www.haagen-dazs.co.uk/nutrition' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-haagen-cream to-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1920&h=600&fit=crop"
              alt="Fresh fruits and ingredients representing our commitment to quality nutrition"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Nutrition Information
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Häagen-Dazs, we believe in complete transparency. Every scoop is crafted with the finest ingredients, 
                and we're proud to share detailed nutritional information to help you make informed choices.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="bg-white rounded-lg shadow-sm px-6 py-4">
                  <p className="text-sm text-gray-600">Made with</p>
                  <p className="text-lg font-semibold text-haagen-burgundy">Real Ingredients</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm px-6 py-4">
                  <p className="text-sm text-gray-600">No</p>
                  <p className="text-lg font-semibold text-haagen-burgundy">Artificial Flavours</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm px-6 py-4">
                  <p className="text-sm text-gray-600">Available</p>
                  <p className="text-lg font-semibold text-haagen-burgundy">Plant-Based Options</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Flavours Nutrition Table */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nutrition Facts for Popular Flavours
              </h2>
              <p className="text-lg text-gray-600">
                All values are per 100ml serving. Reference intake of an average adult (8400 kJ/2000 kcal).
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden shadow-lg rounded-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-haagen-burgundy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Flavour
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Calories
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Fat (g)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Saturated Fat (g)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Carbs (g)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Sugars (g)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Protein (g)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Salt (g)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                      Allergens
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {popularFlavors.map((flavor, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {flavor.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {flavor.calories}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {flavor.fat}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {flavor.saturatedFat}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {flavor.carbs}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {flavor.sugars}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {flavor.protein}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                        {flavor.salt}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {flavor.allergens.map((allergen, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                            >
                              {allergen}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {popularFlavors.map((flavor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{flavor.name}</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600">Calories:</span>
                      <span className="ml-2 font-medium">{flavor.calories}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Fat:</span>
                      <span className="ml-2 font-medium">{flavor.fat}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Saturated Fat:</span>
                      <span className="ml-2 font-medium">{flavor.saturatedFat}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Carbs:</span>
                      <span className="ml-2 font-medium">{flavor.carbs}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Sugars:</span>
                      <span className="ml-2 font-medium">{flavor.sugars}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Protein:</span>
                      <span className="ml-2 font-medium">{flavor.protein}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Salt:</span>
                      <span className="ml-2 font-medium">{flavor.salt}g</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-600 text-sm">Allergens:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {flavor.allergens.map((allergen, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Allergen Information Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Allergen Information
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your safety is our priority. We clearly label all allergens on our packaging. 
                Please always check the product label before consumption.
              </p>
            </div>

            <div className="relative mb-8">
              <Image
                src="https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=1200&h=300&fit=crop"
                alt="Various ingredients and allergens clearly displayed"
                width={1200}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allergenInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl" role="img" aria-label={item.allergen}>
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.allergen}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-yellow-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Important Allergen Notice</h4>
                  <p className="text-gray-700 text-sm">
                    Products may contain traces of allergens due to shared equipment. If you have severe allergies, 
                    please contact our customer service team for detailed information about specific products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dietary Options Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dietary Options
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everyone deserves extraordinary. Explore our range of gluten-free and plant-based options 
                that deliver the same indulgent Häagen-Dazs experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Gluten-Free Options */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1629385496850-a29a6ed9a61c?w=600&h=300&fit=crop"
                    alt="Gluten-free ice cream options"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    Gluten-Free Range
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Many of our classic flavours are naturally gluten-free. Look for the gluten-free symbol on packaging.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Vanilla, Strawberry, and most fruit flavours
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Belgian Chocolate (check specific varieties)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Salted Caramel and other caramel-based flavours
                    </li>
                  </ul>
                </div>
              </div>

              {/* Plant-Based Options */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&h=300&fit=crop"
                    alt="Plant-based non-dairy ice cream options"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    Plant-Based Collection
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Our non-dairy range is made with oat milk and coconut cream for a creamy, indulgent experience.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      100% plant-based and vegan-friendly
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Same creamy texture as our dairy ice cream
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Available in multiple indulgent flavours
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dietary Options Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-green-50 border-b border-green-100">
                <h3 className="text-xl font-semibold text-gray-900">
                  Nutritional Information - Dietary Options
                </h3>
              </div>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Calories
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Fat (g)
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Carbs (g)
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Features
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dietaryOptions.map((option, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {option.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            option.type === 'Plant-Based' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {option.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                          {option.calories}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                          {option.fat}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                          {option.carbs}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex flex-wrap gap-1 justify-center">
                            {option.features.map((feature, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden p-4 space-y-4">
                {dietaryOptions.map((option, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-gray-900">{option.name}</h4>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        option.type === 'Plant-Based' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {option.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm mb-3">
                      <div>
                        <span className="text-gray-600">Calories:</span>
                        <span className="ml-1 font-medium">{option.calories}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Fat:</span>
                        <span className="ml-1 font-medium">{option.fat}g</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Carbs:</span>
                        <span className="ml-1 font-medium">{option.carbs}g</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {option.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Full Nutrition Guide CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=1920&h=400&fit=crop"
              alt="Complete nutrition guide and information resources"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-haagen-burgundy-dark/90 to-haagen-burgundy/80"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Detailed Information?
            </h2>
            <p className="text-xl text-haagen-vanilla mb-8 max-w-2xl mx-auto">
              Download our complete nutrition guide with information for all products, 
              serving suggestions, and dietary recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/nutrition-guide.pdf"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Nutrition Guide
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-haagen-burgundy transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Important Information
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-haagen-burgundy mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>All nutritional values are approximate and may vary slightly between batches.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-haagen-burgundy mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Values shown are per 100ml. A typical serving size is 100-150ml.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-haagen-burgundy mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>For the most up-to-date allergen and nutritional information, always check the product packaging.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-haagen-burgundy mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Products and nutritional information may vary by country. This information is specific to the UK market.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}