'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import { getProductsByCategory, Product } from '@/lib/products';
import { Recipe, recipes, categoryInfo } from '@/lib/recipes';

export default function RecipesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTime, setSelectedTime] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all Häagen-Dazs products for flavor reference
  const allProducts = useMemo(() => {
    const products: Product[] = [];
    ['ice-cream', 'bars', 'mini-cups', 'non-dairy'].forEach(category => {
      products.push(...getProductsByCategory(category as any));
    });
    return products;
  }, []);

  // Get unique dietary tags
  const dietaryOptions = useMemo(() => {
    const tags = new Set<string>();
    recipes.forEach(recipe => {
      recipe.dietaryTags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter recipes
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // Category filter
      if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && recipe.difficulty !== selectedDifficulty) {
        return false;
      }

      // Time filter
      if (selectedTime !== 'all') {
        if (selectedTime === 'quick' && recipe.prepTime > 15) return false;
        if (selectedTime === 'medium' && (recipe.prepTime <= 15 || recipe.prepTime > 45)) return false;
        if (selectedTime === 'long' && recipe.prepTime <= 45) return false;
      }

      // Dietary filter
      if (selectedDietary !== 'all' && !recipe.dietaryTags.includes(selectedDietary)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = recipe.title.toLowerCase().includes(query);
        const matchesDescription = recipe.description.toLowerCase().includes(query);
        const matchesFlavor = recipe.flavorIds.some(id => 
          allProducts.find(p => p.id === id)?.name.toLowerCase().includes(query)
        );
        return matchesTitle || matchesDescription || matchesFlavor;
      }

      return true;
    });
  }, [selectedCategory, selectedDifficulty, selectedTime, selectedDietary, searchQuery, allProducts]);

  // Get featured recipes
  const featuredRecipes = recipes.filter(recipe => recipe.featured);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Ice Cream Recipes', url: 'https://www.haagen-dazs.co.uk/recipes' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1560008581-09826d1de69e?w=1920&h=1080&fit=crop"
              alt="Ice cream desserts and recipes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          <div className="relative text-center text-white px-4 safe-area-inset">
            <h1 className="text-responsive-4xl md:text-responsive-5xl font-bold mb-4 sm:mb-6">
              Ice Cream Recipes
            </h1>
            <p className="text-responsive-lg md:text-responsive-xl max-w-3xl mx-auto mb-8 opacity-90">
              Create extraordinary desserts with Häagen-Dazs ice cream. From elegant cakes to refreshing floats, discover recipes for every occasion.
            </p>
          </div>
        </section>

        {/* Featured Recipes Carousel */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="featured-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold text-center mb-8">
              Featured Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredRecipes.slice(0, 3).map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.id}`}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-4 mb-2 text-sm">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {recipe.prepTime} min
                        </span>
                        <span className="capitalize">{recipe.difficulty}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{recipe.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b" aria-labelledby="filters-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="filters-heading" className="sr-only">Recipe Filters</h2>
            
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Category Filter */}
              <div className="relative">
                <label htmlFor="category" className="sr-only">Category</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {Object.entries(categoryInfo).map(([key, info]) => (
                    <option key={key} value={key}>{info.name}</option>
                  ))}
                </select>
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Difficulty Filter */}
              <div className="relative">
                <label htmlFor="difficulty" className="sr-only">Difficulty</label>
                <select
                  id="difficulty"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:border-transparent"
                >
                  <option value="all">All Difficulties</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Time Filter */}
              <div className="relative">
                <label htmlFor="time" className="sr-only">Prep Time</label>
                <select
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:border-transparent"
                >
                  <option value="all">Any Time</option>
                  <option value="quick">Quick (≤15 min)</option>
                  <option value="medium">Medium (15-45 min)</option>
                  <option value="long">Long (&gt;45 min)</option>
                </select>
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dietary Filter */}
              {dietaryOptions.length > 0 && (
                <div className="relative">
                  <label htmlFor="dietary" className="sr-only">Dietary Needs</label>
                  <select
                    id="dietary"
                    value={selectedDietary}
                    onChange={(e) => setSelectedDietary(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:border-transparent"
                  >
                    <option value="all">All Diets</option>
                    {dietaryOptions.map(option => (
                      <option key={option} value={option}>
                        {option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recipe Grid */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="recipes-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x">
            <h2 id="recipes-heading" className="sr-only">All Recipes</h2>
            
            {filteredRecipes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No recipes found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                    setSelectedTime('all');
                    setSelectedDietary('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-haagen-burgundy font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRecipes.map((recipe) => {
                  // Get flavor names
                  const flavors = recipe.flavorIds
                    .map(id => allProducts.find(p => p.id === id)?.name)
                    .filter(Boolean);

                  return (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                      <Link href={`/recipes/${recipe.id}`}>
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                              {categoryInfo[recipe.category].icon} {categoryInfo[recipe.category].name}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-haagen-burgundy transition-colors line-clamp-2">
                            {recipe.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {recipe.description}
                          </p>
                          
                          {/* Recipe metadata */}
                          <div className="flex flex-wrap gap-2 mb-3 text-sm">
                            <span className="flex items-center gap-1 text-gray-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {recipe.prepTime} min
                            </span>
                            <span className="flex items-center gap-1 text-gray-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              {recipe.servings} servings
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              recipe.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                              recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {recipe.difficulty}
                            </span>
                          </div>

                          {/* Flavors used */}
                          {flavors.length > 0 && (
                            <div className="mb-4">
                              <p className="text-xs font-semibold text-gray-700 mb-1">Häagen-Dazs Flavors:</p>
                              <div className="flex flex-wrap gap-1">
                                {flavors.map((flavor, index) => (
                                  <span key={index} className="text-xs bg-haagen-cream text-haagen-burgundy px-2 py-1 rounded">
                                    {flavor}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Dietary tags */}
                          {recipe.dietaryTags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {recipe.dietaryTags.map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <span className="text-haagen-burgundy font-semibold inline-flex items-center">
                            View Recipe
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
            )}
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-haagen-cream to-haagen-vanilla" aria-labelledby="tips-heading">
          <div className="max-w-4xl mx-auto responsive-padding-x text-center">
            <h2 id="tips-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold mb-6">
              Recipe Tips & Tricks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Let Ice Cream Soften</h3>
                <p className="text-gray-600">Allow ice cream to soften for 5-10 minutes before using for easier scooping and mixing.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Use Quality Ingredients</h3>
                <p className="text-gray-600">Premium Häagen-Dazs ice cream paired with fresh ingredients creates the best desserts.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Work Quickly</h3>
                <p className="text-gray-600">When making frozen desserts, work quickly to prevent melting and maintain texture.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Creative</h3>
                <p className="text-gray-600">Mix and match flavors to create your own unique dessert combinations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-burgundy-light text-white" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto responsive-padding-x text-center">
            <h2 id="cta-heading" className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Ready to Create Something Delicious?
            </h2>
            <p className="text-responsive-lg sm:text-responsive-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Stock up on your favorite Häagen-Dazs flavors and start creating these amazing desserts today
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
                Explore Flavors
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