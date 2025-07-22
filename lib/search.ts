import { Product, searchProducts } from './products';
import { Store, searchStores } from './stores';
import { Recipe, searchRecipes } from './recipes';

export type SearchResultType = 'product' | 'store' | 'page' | 'recipe';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
  score: number;
}

export interface PageContent {
  id: string;
  title: string;
  description: string;
  url: string;
  content: string;
  keywords: string[];
}

// Static page content for searching
const pageContents: PageContent[] = [
  {
    id: 'home',
    title: 'Häagen-Dazs - Premium Ice Cream',
    description: 'Discover Häagen-Dazs premium ice cream made with the finest ingredients.',
    url: '/',
    content: 'Welcome to Häagen-Dazs. Explore our premium ice cream flavors, find stores near you, and indulge in extraordinary.',
    keywords: ['home', 'premium', 'ice cream', 'luxury', 'häagen-dazs']
  },
  {
    id: 'about',
    title: 'About Häagen-Dazs',
    description: 'Learn about our story, heritage, and commitment to quality.',
    url: '/about',
    content: 'Since 1960, Häagen-Dazs has been committed to making the finest ice cream using only the highest quality ingredients.',
    keywords: ['about', 'history', 'heritage', 'quality', 'story', 'commitment']
  },
  {
    id: 'where-to-buy',
    title: 'Where to Buy - Store Locator',
    description: 'Find Häagen-Dazs stores and retailers near you.',
    url: '/where-to-buy',
    content: 'Locate Häagen-Dazs shops and retail partners. Find stores by location, get directions, and check store hours.',
    keywords: ['store locator', 'where to buy', 'find stores', 'locations', 'retailers']
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with Häagen-Dazs customer service.',
    url: '/contact',
    content: 'Contact Häagen-Dazs for questions, feedback, or customer support. We\'re here to help.',
    keywords: ['contact', 'customer service', 'support', 'feedback', 'help']
  },
  {
    id: 'nutrition',
    title: 'Nutrition Information',
    description: 'View nutritional information for all Häagen-Dazs products.',
    url: '/nutrition',
    content: 'Find detailed nutrition facts, ingredients, and allergen information for all Häagen-Dazs ice cream products.',
    keywords: ['nutrition', 'ingredients', 'calories', 'allergens', 'dietary']
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description: 'Our commitment to sustainable practices and responsible sourcing.',
    url: '/sustainability',
    content: 'Learn about Häagen-Dazs sustainability initiatives, responsible sourcing, and environmental commitments.',
    keywords: ['sustainability', 'environment', 'responsible', 'sourcing', 'eco-friendly']
  },
  {
    id: 'recipes',
    title: 'Ice Cream Recipes',
    description: 'Discover delicious ice cream recipes including cakes, sandwiches, milkshakes, sundaes, and no-bake desserts.',
    url: '/recipes',
    content: 'Create extraordinary desserts with Häagen-Dazs ice cream. Find recipes for ice cream cakes, sandwiches, milkshakes, floats, sundaes, parfaits, and no-bake treats.',
    keywords: ['recipes', 'ice cream recipes', 'desserts', 'cakes', 'sundaes', 'milkshakes', 'sandwiches', 'no-bake']
  }
];

// Search through all content
export function searchAll(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];
  
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase().trim();
  
  // Search products
  const productResults = searchProducts(query);
  productResults.forEach(product => {
    let score = 0;
    if (product.name.toLowerCase().includes(lowerQuery)) score += 10;
    if (product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 5;
    if (product.description.toLowerCase().includes(lowerQuery)) score += 3;
    if (product.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))) score += 2;
    
    results.push({
      id: product.id,
      type: 'product',
      title: product.name,
      description: product.description,
      url: `/products/${product.id}`,
      image: product.image,
      category: product.category,
      score
    });
  });
  
  // Search stores
  const storeResults = searchStores(query);
  storeResults.forEach(store => {
    let score = 0;
    if (store.name.toLowerCase().includes(lowerQuery)) score += 8;
    if (store.address.city.toLowerCase().includes(lowerQuery)) score += 6;
    if (store.address.state.toLowerCase().includes(lowerQuery)) score += 4;
    if (store.availableProducts.some(p => p.toLowerCase().includes(lowerQuery))) score += 2;
    
    results.push({
      id: store.id,
      type: 'store',
      title: store.name,
      description: `${store.address.street}, ${store.address.city}, ${store.address.state}`,
      url: `/stores/${store.id}`,
      category: store.type,
      score
    });
  });
  
  // Search recipes
  const recipeResults = searchRecipes(query);
  recipeResults.forEach(recipe => {
    let score = 0;
    if (recipe.title.toLowerCase().includes(lowerQuery)) score += 10;
    if (recipe.category.toLowerCase().includes(lowerQuery)) score += 5;
    if (recipe.description.toLowerCase().includes(lowerQuery)) score += 3;
    if (recipe.dietaryTags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 4;
    if (recipe.difficulty.toLowerCase() === lowerQuery) score += 2;
    
    results.push({
      id: recipe.id,
      type: 'recipe',
      title: recipe.title,
      description: recipe.description,
      url: `/recipes/${recipe.id}`,
      image: recipe.image,
      category: recipe.category,
      score
    });
  });
  
  // Search page content
  pageContents.forEach(page => {
    let score = 0;
    if (page.title.toLowerCase().includes(lowerQuery)) score += 8;
    if (page.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))) score += 5;
    if (page.description.toLowerCase().includes(lowerQuery)) score += 3;
    if (page.content.toLowerCase().includes(lowerQuery)) score += 2;
    
    if (score > 0) {
      results.push({
        id: page.id,
        type: 'page',
        title: page.title,
        description: page.description,
        url: page.url,
        score
      });
    }
  });
  
  // Sort by score (highest first)
  return results.sort((a, b) => b.score - a.score);
}

// Get search suggestions (for autocomplete)
export function getSearchSuggestions(query: string, limit: number = 5): SearchResult[] {
  const results = searchAll(query);
  return results.slice(0, limit);
}

// Get popular searches
export function getPopularSearches(): string[] {
  return [
    'vanilla',
    'chocolate',
    'stores near me',
    'non-dairy',
    'mini cups',
    'ice cream bars',
    'nutrition info',
    'new flavors',
    'ice cream cake',
    'milkshake recipes',
    'sundae recipes'
  ];
}

// Search analytics event
export interface SearchAnalytics {
  query: string;
  resultsCount: number;
  clickedResult?: SearchResult;
  timestamp: number;
}

// Track search analytics (in real app, this would send to analytics service)
export function trackSearch(analytics: SearchAnalytics): void {
  // In production, send to analytics service
  console.log('Search tracked:', analytics);
  
  // For now, just store in localStorage for recent searches
  const recentSearches = getRecentSearches();
  if (analytics.query && !recentSearches.includes(analytics.query)) {
    recentSearches.unshift(analytics.query);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches.slice(0, 10)));
  }
}

// Get recent searches from localStorage
export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('recentSearches');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Clear recent searches
export function clearRecentSearches(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('recentSearches');
  }
}

// Filter options for search results
export interface SearchFilters {
  types?: SearchResultType[];
  categories?: string[];
}

// Apply filters to search results
export function applySearchFilters(results: SearchResult[], filters: SearchFilters): SearchResult[] {
  let filtered = [...results];
  
  if (filters.types && filters.types.length > 0) {
    filtered = filtered.filter(result => filters.types!.includes(result.type));
  }
  
  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter(result => 
      result.category && filters.categories!.includes(result.category)
    );
  }
  
  return filtered;
}