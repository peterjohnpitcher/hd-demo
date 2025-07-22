'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';

// Pairing data structure
interface Pairing {
  id: string;
  category: 'wine' | 'coffee' | 'cocktail' | 'food';
  name: string;
  description: string;
  bestWith: string[];
  notes: string;
  image: string;
}

// Comprehensive pairing data
const pairings: Pairing[] = [
  // Wine Pairings
  {
    id: 'port-chocolate',
    category: 'wine',
    name: 'Ruby Port & Belgian Chocolate',
    description: 'The rich sweetness of Ruby Port complements the deep cocoa notes beautifully',
    bestWith: ['belgian-chocolate', 'dulce-de-leche'],
    notes: 'Serve the port slightly chilled for best results',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop'
  },
  {
    id: 'riesling-fruit',
    category: 'wine',
    name: 'Riesling & Fruit Sorbets',
    description: 'The bright acidity of Riesling enhances fruity ice cream flavors',
    bestWith: ['strawberry', 'mango', 'raspberry-sorbet'],
    notes: 'Choose a late harvest Riesling for extra sweetness',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&h=400&fit=crop'
  },
  {
    id: 'moscato-vanilla',
    category: 'wine',
    name: 'Moscato d\'Asti & Vanilla',
    description: 'Light, sweet Moscato pairs perfectly with creamy vanilla ice cream',
    bestWith: ['vanilla', 'pralines-cream'],
    notes: 'The bubbles cleanse the palate between bites',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&h=400&fit=crop'
  },
  {
    id: 'sherry-caramel',
    category: 'wine',
    name: 'Pedro Ximénez Sherry & Caramel',
    description: 'Ultra-sweet sherry matches the intensity of caramel flavors',
    bestWith: ['salted-caramel', 'dulce-de-leche'],
    notes: 'Drizzle a little sherry over the ice cream for an affogato-style treat',
    image: 'https://images.unsplash.com/photo-1569163995394-989a0f7e4ff7?w=600&h=400&fit=crop'
  },
  {
    id: 'champagne-sorbet',
    category: 'wine',
    name: 'Champagne & Lemon Sorbet',
    description: 'The effervescence of champagne lifts citrus sorbets to new heights',
    bestWith: ['lemon-sorbet', 'raspberry-sorbet'],
    notes: 'Create a sophisticated palate cleanser between courses',
    image: 'https://images.unsplash.com/photo-1549194388-f61be84a6e9e?w=600&h=400&fit=crop'
  },

  // Coffee Pairings
  {
    id: 'espresso-vanilla',
    category: 'coffee',
    name: 'Espresso & Vanilla',
    description: 'Classic affogato - hot espresso poured over vanilla ice cream',
    bestWith: ['vanilla', 'pralines-cream'],
    notes: 'Use a double shot for the perfect balance',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop'
  },
  {
    id: 'cappuccino-chocolate',
    category: 'coffee',
    name: 'Cappuccino & Chocolate',
    description: 'Frothy milk and espresso enhance chocolate\'s complexity',
    bestWith: ['belgian-chocolate', 'coffee'],
    notes: 'Dust with cocoa powder for extra indulgence',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop'
  },
  {
    id: 'cold-brew-caramel',
    category: 'coffee',
    name: 'Cold Brew & Salted Caramel',
    description: 'Smooth cold brew coffee complements buttery caramel notes',
    bestWith: ['salted-caramel', 'dulce-de-leche'],
    notes: 'Add a pinch of sea salt to enhance the pairing',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop'
  },
  {
    id: 'turkish-coffee-pistachio',
    category: 'coffee',
    name: 'Turkish Coffee & Pistachio',
    description: 'Cardamom-spiced coffee pairs wonderfully with nutty flavors',
    bestWith: ['pistachio', 'pralines-cream'],
    notes: 'The slight bitterness balances sweet, nutty ice cream',
    image: 'https://images.unsplash.com/photo-1578899335107-1ba3e6191e60?w=600&h=400&fit=crop'
  },

  // Cocktail Pairings
  {
    id: 'rum-coconut',
    category: 'cocktail',
    name: 'Dark Rum & Coconut',
    description: 'Transport yourself to the tropics with this island-inspired pairing',
    bestWith: ['coconut', 'rum-raisin'],
    notes: 'Garnish with toasted coconut flakes',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop'
  },
  {
    id: 'amaretto-vanilla',
    category: 'cocktail',
    name: 'Amaretto & Vanilla',
    description: 'Almond liqueur adds warmth and complexity to vanilla',
    bestWith: ['vanilla', 'pralines-cream'],
    notes: 'Float the amaretto on top for a beautiful presentation',
    image: 'https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?w=600&h=400&fit=crop'
  },
  {
    id: 'baileys-chocolate',
    category: 'cocktail',
    name: 'Baileys & Chocolate',
    description: 'Irish cream liqueur creates the ultimate adult dessert',
    bestWith: ['belgian-chocolate', 'coffee'],
    notes: 'Drizzle over ice cream or blend for a boozy milkshake',
    image: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=600&h=400&fit=crop'
  },
  {
    id: 'limoncello-sorbet',
    category: 'cocktail',
    name: 'Limoncello & Lemon Sorbet',
    description: 'Italian liqueur intensifies bright citrus flavors',
    bestWith: ['lemon-sorbet', 'raspberry-sorbet'],
    notes: 'Serve in frozen glasses for extra refreshment',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop'
  },

  // Food Pairings
  {
    id: 'brownie-vanilla',
    category: 'food',
    name: 'Warm Brownie & Vanilla',
    description: 'The ultimate comfort dessert - fudgy brownie with creamy vanilla',
    bestWith: ['vanilla', 'belgian-chocolate'],
    notes: 'Serve the brownie warm for melting perfection',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop'
  },
  {
    id: 'apple-pie-cinnamon',
    category: 'food',
    name: 'Apple Pie & Cinnamon Ice Cream',
    description: 'Classic American pairing - warm spiced apples with cool cream',
    bestWith: ['vanilla', 'pralines-cream', 'dulce-de-leche'],
    notes: 'A drizzle of caramel sauce completes the experience',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&h=400&fit=crop'
  },
  {
    id: 'waffle-strawberry',
    category: 'food',
    name: 'Belgian Waffle & Strawberry',
    description: 'Crispy waffles topped with fresh strawberry ice cream',
    bestWith: ['strawberry', 'vanilla'],
    notes: 'Add fresh berries and whipped cream for the full experience',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&h=400&fit=crop'
  },
  {
    id: 'crepe-chocolate',
    category: 'food',
    name: 'Crêpes & Chocolate Hazelnut',
    description: 'Thin French pancakes filled with rich chocolate ice cream',
    bestWith: ['belgian-chocolate', 'pralines-cream'],
    notes: 'Flambé with Grand Marnier for a show-stopping dessert',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&h=400&fit=crop'
  },
  {
    id: 'biscotti-coffee',
    category: 'food',
    name: 'Almond Biscotti & Coffee Ice Cream',
    description: 'Crunchy Italian cookies complement smooth coffee ice cream',
    bestWith: ['coffee', 'vanilla'],
    notes: 'The texture contrast makes this pairing special',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop'
  }
];

// Available ice cream flavors for pairing
const iceCreamFlavors = [
  { id: 'vanilla', name: 'Vanilla', color: 'bg-yellow-50' },
  { id: 'belgian-chocolate', name: 'Belgian Chocolate', color: 'bg-amber-100' },
  { id: 'strawberry', name: 'Strawberry', color: 'bg-pink-50' },
  { id: 'salted-caramel', name: 'Salted Caramel', color: 'bg-amber-50' },
  { id: 'dulce-de-leche', name: 'Dulce de Leche', color: 'bg-orange-50' },
  { id: 'coffee', name: 'Coffee', color: 'bg-amber-100' },
  { id: 'pralines-cream', name: 'Pralines & Cream', color: 'bg-yellow-100' },
  { id: 'rum-raisin', name: 'Rum Raisin', color: 'bg-purple-50' },
  { id: 'mango', name: 'Mango', color: 'bg-orange-100' },
  { id: 'mint-chip', name: 'Mint Chip', color: 'bg-green-50' },
  { id: 'cookies-cream', name: 'Cookies & Cream', color: 'bg-gray-100' },
  { id: 'green-tea', name: 'Green Tea', color: 'bg-green-100' }
];

export default function IceCreamPairingsClient() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wine' | 'coffee' | 'cocktail' | 'food'>('all');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');

  // Filter pairings based on selection
  const filteredPairings = pairings.filter(pairing => {
    const categoryMatch = selectedCategory === 'all' || pairing.category === selectedCategory;
    const flavorMatch = !selectedFlavor || pairing.bestWith.includes(selectedFlavor);
    return categoryMatch && flavorMatch;
  });

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'Guides', url: 'https://www.haagen-dazs.co.uk/guides' },
    { name: 'Ice Cream Pairings', url: 'https://www.haagen-dazs.co.uk/guides/ice-cream-pairings' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden" aria-labelledby="hero-heading">
          <Image
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1920&h=1080&fit=crop"
            alt="Elegant ice cream and wine pairing setup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-5xl mx-auto">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                The Art of Ice Cream Pairing
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Discover perfect combinations of wine, coffee, cocktails, and desserts with our premium ice cream
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pairing-guide"
                  className="px-8 py-4 bg-haagen-burgundy text-white font-semibold rounded-lg hover:bg-haagen-burgundy-dark transition-colors"
                  aria-label="Explore pairing suggestions"
                >
                  Explore Pairings
                </a>
                <a
                  href="/flavors"
                  className="px-8 py-4 bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="View our ice cream flavors"
                >
                  View Flavors
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li>
                <Link href="/guides" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Guides
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Ice Cream Pairings</li>
            </ol>
          </div>
        </nav>

        {/* Introduction Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Elevate Your Dessert Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Just as a sommelier pairs wine with food, we've curated the perfect companions for our ice cream. 
                From sophisticated wine pairings to comforting dessert combinations, discover how to create 
                memorable moments with every scoop.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="bg-haagen-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Wine Pairings</h3>
                  <p className="text-sm text-gray-600 mt-1">Sophisticated combinations</p>
                </div>
                <div>
                  <div className="bg-haagen-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M17 12a5 5 0 11-10 0 5 5 0 0110 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Coffee Matches</h3>
                  <p className="text-sm text-gray-600 mt-1">Perfect affogatos & more</p>
                </div>
                <div>
                  <div className="bg-haagen-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Cocktail Creations</h3>
                  <p className="text-sm text-gray-600 mt-1">Adult dessert drinks</p>
                </div>
                <div>
                  <div className="bg-haagen-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546V11a2 2 0 012-2h14a2 2 0 012 2v4.546z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Dessert Duos</h3>
                  <p className="text-sm text-gray-600 mt-1">Classic combinations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Pairing Guide */}
        <section id="pairing-guide" className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
              Find Your Perfect Pairing
            </h2>
            
            {/* Filters */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-haagen-burgundy text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedCategory('wine')}
                      className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        selectedCategory === 'wine'
                          ? 'bg-haagen-burgundy text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Wine
                    </button>
                    <button
                      onClick={() => setSelectedCategory('coffee')}
                      className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        selectedCategory === 'coffee'
                          ? 'bg-haagen-burgundy text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Coffee
                    </button>
                    <button
                      onClick={() => setSelectedCategory('cocktail')}
                      className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        selectedCategory === 'cocktail'
                          ? 'bg-haagen-burgundy text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Cocktails
                    </button>
                    <button
                      onClick={() => setSelectedCategory('food')}
                      className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        selectedCategory === 'food'
                          ? 'bg-haagen-burgundy text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Food
                    </button>
                  </div>
                </div>
                
                {/* Flavor Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Ice Cream Flavor
                  </label>
                  <select
                    value={selectedFlavor}
                    onChange={(e) => setSelectedFlavor(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-haagen-burgundy focus:border-transparent"
                  >
                    <option value="">All Flavors</option>
                    {iceCreamFlavors.map(flavor => (
                      <option key={flavor.id} value={flavor.id}>
                        {flavor.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Pairing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPairings.map((pairing) => (
                <article
                  key={pairing.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pairing.image}
                      alt={pairing.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        pairing.category === 'wine' ? 'bg-purple-600' :
                        pairing.category === 'coffee' ? 'bg-amber-700' :
                        pairing.category === 'cocktail' ? 'bg-pink-600' :
                        'bg-green-600'
                      }`}>
                        {pairing.category.charAt(0).toUpperCase() + pairing.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {pairing.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {pairing.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Best with:</p>
                      <div className="flex flex-wrap gap-2">
                        {pairing.bestWith.map((flavorId) => {
                          const flavor = iceCreamFlavors.find(f => f.id === flavorId);
                          return flavor ? (
                            <span
                              key={flavorId}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${flavor.color} text-gray-800`}
                            >
                              {flavor.name}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 italic">
                        {pairing.notes}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPairings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No pairings found for your selection. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Expert Tips Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Expert Pairing Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-haagen-cream rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperature Matters</h3>
                <p className="text-gray-600">
                  Let ice cream soften slightly before pairing with wine or spirits. The ideal temperature 
                  allows flavors to meld beautifully without the cold numbing your palate.
                </p>
              </div>
              
              <div className="bg-haagen-cream rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Balance is Key</h3>
                <p className="text-gray-600">
                  Match intensity levels - delicate sorbets with light wines, rich chocolate ice creams 
                  with bold ports or espresso. Avoid overwhelming subtle flavors.
                </p>
              </div>
              
              <div className="bg-haagen-cream rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contrast & Complement</h3>
                <p className="text-gray-600">
                  Use acidity to cut through richness, or enhance similar flavor notes. A tart wine can 
                  refresh after creamy ice cream, while nutty liqueurs amplify praline flavors.
                </p>
              </div>
              
              <div className="bg-haagen-cream rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Serving Suggestions</h3>
                <p className="text-gray-600">
                  Present pairings in elegant glassware. Use small portions to appreciate each element. 
                  Alternate sips and bites for the full experience.
                </p>
              </div>
              
              <div className="bg-haagen-cream rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Pairings</h3>
                <p className="text-gray-600">
                  Match pairings to the season - refreshing sorbets with prosecco in summer, warm brownies 
                  with vanilla in winter. Let the weather guide your choices.
                </p>
              </div>
              
              <div className="bg-haagen-cream rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Presentations</h3>
                <p className="text-gray-600">
                  Float a scoop in champagne for an elegant dessert, or create ice cream sandwiches with 
                  premium cookies. Presentation enhances the experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Pairing Recipes */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Signature Pairing Recipes
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=400&fit=crop"
                    alt="Classic Affogato"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Classic Affogato</h3>
                  <p className="text-gray-600 mb-4">
                    The perfect marriage of hot espresso and cold vanilla ice cream
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Ingredients:</strong></p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>2 scoops Häagen-Dazs Vanilla</li>
                      <li>1 shot (30ml) hot espresso</li>
                      <li>Optional: 1 tsp amaretto liqueur</li>
                      <li>Dark chocolate shavings for garnish</li>
                    </ul>
                    <p className="mt-3"><strong>Method:</strong></p>
                    <p className="text-gray-600">
                      Place ice cream in a chilled glass. Pour hot espresso over the top. 
                      Add amaretto if desired. Garnish with chocolate shavings and serve immediately.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=400&fit=crop"
                    alt="Port Wine Float"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Decadent Port Float</h3>
                  <p className="text-gray-600 mb-4">
                    Ruby port meets Belgian chocolate for ultimate indulgence
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Ingredients:</strong></p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>2 scoops Häagen-Dazs Belgian Chocolate</li>
                      <li>3 oz chilled Ruby Port</li>
                      <li>Fresh raspberries</li>
                      <li>Mint sprig for garnish</li>
                    </ul>
                    <p className="mt-3"><strong>Method:</strong></p>
                    <p className="text-gray-600">
                      In a wine glass, add chocolate ice cream. Slowly pour port over the back 
                      of a spoon to create layers. Top with raspberries and mint. Serve with a spoon and straw.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-haagen-burgundy to-haagen-gold text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Create Your Perfect Pairing?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Explore our full range of flavors and start your pairing journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/flavors"
                className="inline-flex items-center px-8 py-4 bg-white text-haagen-burgundy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore All Flavors
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/where-to-buy"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-haagen-burgundy transition-colors"
              >
                Find a Store
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}