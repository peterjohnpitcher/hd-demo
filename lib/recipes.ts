// Recipe types
export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: 'ice-cream-cakes' | 'ice-cream-sandwiches' | 'milkshakes-floats' | 'sundaes-parfaits' | 'no-bake';
  image: string;
  prepTime: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  flavorIds: string[]; // IDs of Häagen-Dazs flavors used
  dietaryTags: string[]; // gluten-free, vegan, etc.
  featured?: boolean;
}

// Recipe data
export const recipes: Recipe[] = [
  // Ice Cream Cakes
  {
    id: 'birthday-celebration-cake',
    title: 'Birthday Celebration Ice Cream Cake',
    description: 'Layer vanilla and chocolate ice cream with cookie crumbles and hot fudge for the ultimate birthday treat.',
    category: 'ice-cream-cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
    prepTime: 45,
    difficulty: 'medium',
    servings: 12,
    flavorIds: ['vanilla', 'belgian-chocolate'],
    dietaryTags: [],
    featured: true,
  },
  {
    id: 'strawberry-shortcake-ice-cream-cake',
    title: 'Strawberry Shortcake Ice Cream Cake',
    description: 'Fresh strawberries, vanilla ice cream, and fluffy sponge cake create this summer favorite.',
    category: 'ice-cream-cakes',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop',
    prepTime: 60,
    difficulty: 'medium',
    servings: 10,
    flavorIds: ['vanilla', 'strawberry'],
    dietaryTags: [],
  },
  {
    id: 'chocolate-fudge-brownie-cake',
    title: 'Chocolate Fudge Brownie Ice Cream Cake',
    description: 'Decadent chocolate ice cream layered with brownies and rich fudge sauce.',
    category: 'ice-cream-cakes',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop',
    prepTime: 90,
    difficulty: 'hard',
    servings: 16,
    flavorIds: ['belgian-chocolate'],
    dietaryTags: [],
  },

  // Ice Cream Sandwiches
  {
    id: 'classic-chocolate-chip-sandwich',
    title: 'Classic Chocolate Chip Cookie Ice Cream Sandwich',
    description: 'Homemade chocolate chip cookies filled with vanilla ice cream for a nostalgic treat.',
    category: 'ice-cream-sandwiches',
    image: 'https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?w=800&h=600&fit=crop',
    prepTime: 30,
    difficulty: 'easy',
    servings: 6,
    flavorIds: ['vanilla', 'cookies-cream'],
    dietaryTags: [],
    featured: true,
  },
  {
    id: 'macaron-ice-cream-sandwich',
    title: 'French Macaron Ice Cream Sandwich',
    description: 'Delicate macarons filled with premium ice cream for an elegant dessert.',
    category: 'ice-cream-sandwiches',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&h=600&fit=crop',
    prepTime: 120,
    difficulty: 'hard',
    servings: 8,
    flavorIds: ['raspberry-sorbet-bar', 'vanilla'],
    dietaryTags: ['gluten-free'],
  },
  {
    id: 'brownie-ice-cream-sandwich',
    title: 'Fudge Brownie Ice Cream Sandwich',
    description: 'Rich brownies sandwiching coffee ice cream for the ultimate indulgence.',
    category: 'ice-cream-sandwiches',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
    prepTime: 45,
    difficulty: 'medium',
    servings: 8,
    flavorIds: ['coffee', 'belgian-chocolate'],
    dietaryTags: [],
  },

  // Milkshakes and Floats
  {
    id: 'classic-vanilla-milkshake',
    title: 'Classic Vanilla Bean Milkshake',
    description: 'Thick and creamy vanilla milkshake topped with whipped cream and a cherry.',
    category: 'milkshakes-floats',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop',
    prepTime: 5,
    difficulty: 'easy',
    servings: 2,
    flavorIds: ['vanilla'],
    dietaryTags: [],
  },
  {
    id: 'salted-caramel-coffee-float',
    title: 'Salted Caramel Coffee Float',
    description: 'Cold brew coffee with salted caramel ice cream for a sophisticated treat.',
    category: 'milkshakes-floats',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&h=600&fit=crop',
    prepTime: 10,
    difficulty: 'easy',
    servings: 2,
    flavorIds: ['salted-caramel', 'coffee'],
    dietaryTags: [],
    featured: true,
  },
  {
    id: 'tropical-mango-smoothie',
    title: 'Tropical Mango Ice Cream Smoothie',
    description: 'Blend mango ice cream with fresh fruit for a refreshing tropical smoothie.',
    category: 'milkshakes-floats',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=800&h=600&fit=crop',
    prepTime: 5,
    difficulty: 'easy',
    servings: 2,
    flavorIds: ['mango'],
    dietaryTags: [],
  },

  // Sundaes and Parfaits
  {
    id: 'hot-fudge-sundae',
    title: 'Classic Hot Fudge Sundae',
    description: 'Vanilla ice cream drizzled with hot fudge, topped with whipped cream and a cherry.',
    category: 'sundaes-parfaits',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop',
    prepTime: 10,
    difficulty: 'easy',
    servings: 1,
    flavorIds: ['vanilla'],
    dietaryTags: [],
  },
  {
    id: 'berry-parfait',
    title: 'Mixed Berry Ice Cream Parfait',
    description: 'Layers of strawberry ice cream, fresh berries, and granola for a healthy indulgence.',
    category: 'sundaes-parfaits',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop',
    prepTime: 15,
    difficulty: 'easy',
    servings: 4,
    flavorIds: ['strawberry', 'vanilla'],
    dietaryTags: [],
    featured: true,
  },
  {
    id: 'caramel-pecan-sundae',
    title: 'Caramel Pecan Praline Sundae',
    description: 'Pralines & cream ice cream with caramel sauce and toasted pecans.',
    category: 'sundaes-parfaits',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&h=600&fit=crop',
    prepTime: 15,
    difficulty: 'easy',
    servings: 2,
    flavorIds: ['pralines-cream', 'dulce-de-leche'],
    dietaryTags: [],
  },

  // No-Bake Desserts
  {
    id: 'ice-cream-pie',
    title: 'No-Bake Mint Chocolate Ice Cream Pie',
    description: 'Oreo crust filled with mint chip ice cream and topped with chocolate ganache.',
    category: 'no-bake',
    image: 'https://images.unsplash.com/photo-1548865710-186bfabb5477?w=800&h=600&fit=crop',
    prepTime: 30,
    difficulty: 'easy',
    servings: 8,
    flavorIds: ['mint-chip'],
    dietaryTags: [],
  },
  {
    id: 'ice-cream-tiramisu',
    title: 'Coffee Ice Cream Tiramisu',
    description: 'Classic tiramisu made easier with coffee ice cream and ladyfinger cookies.',
    category: 'no-bake',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop',
    prepTime: 40,
    difficulty: 'medium',
    servings: 6,
    flavorIds: ['coffee'],
    dietaryTags: [],
    featured: true,
  },
  {
    id: 'ice-cream-trifle',
    title: 'Summer Berry Ice Cream Trifle',
    description: 'Layers of vanilla ice cream, fresh berries, and pound cake in a beautiful trifle.',
    category: 'no-bake',
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=800&h=600&fit=crop',
    prepTime: 25,
    difficulty: 'easy',
    servings: 10,
    flavorIds: ['vanilla', 'strawberry'],
    dietaryTags: [],
  },

  // Additional recipes for variety
  {
    id: 'green-tea-affogato',
    title: 'Green Tea Ice Cream Affogato',
    description: 'Japanese-inspired dessert with green tea ice cream and hot espresso.',
    category: 'sundaes-parfaits',
    image: 'https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?w=800&h=600&fit=crop',
    prepTime: 5,
    difficulty: 'easy',
    servings: 1,
    flavorIds: ['green-tea'],
    dietaryTags: [],
  },
  {
    id: 'vegan-chocolate-shake',
    title: 'Vegan Chocolate Fudge Shake',
    description: 'Creamy non-dairy chocolate shake made with oat milk and topped with coconut whipped cream.',
    category: 'milkshakes-floats',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop',
    prepTime: 5,
    difficulty: 'easy',
    servings: 2,
    flavorIds: ['non-dairy-chocolate'],
    dietaryTags: ['vegan', 'dairy-free'],
  },
  {
    id: 'rum-raisin-bread-pudding',
    title: 'Rum Raisin Ice Cream Bread Pudding',
    description: 'Warm bread pudding served with a scoop of rum raisin ice cream.',
    category: 'no-bake',
    image: 'https://images.unsplash.com/photo-1550951957-3ab761159b1f?w=800&h=600&fit=crop',
    prepTime: 20,
    difficulty: 'medium',
    servings: 8,
    flavorIds: ['rum-raisin'],
    dietaryTags: [],
  },
];

// Category metadata
export const categoryInfo = {
  'ice-cream-cakes': {
    name: 'Ice Cream Cakes',
    description: 'Spectacular cakes perfect for celebrations and special occasions',
    icon: '🎂',
  },
  'ice-cream-sandwiches': {
    name: 'Ice Cream Sandwiches',
    description: 'Handheld treats combining cookies, brownies, and ice cream',
    icon: '🍪',
  },
  'milkshakes-floats': {
    name: 'Milkshakes & Floats',
    description: 'Refreshing drinks and shakes for any time of day',
    icon: '🥤',
  },
  'sundaes-parfaits': {
    name: 'Sundaes & Parfaits',
    description: 'Classic sundaes and layered parfaits with toppings galore',
    icon: '🍨',
  },
  'no-bake': {
    name: 'No-Bake Desserts',
    description: 'Easy desserts that require no oven, just your freezer',
    icon: '🧊',
  },
};

// Helper function to search recipes
export function searchRecipes(query: string): Recipe[] {
  const lowerQuery = query.toLowerCase().trim();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowerQuery) ||
    recipe.description.toLowerCase().includes(lowerQuery) ||
    recipe.category.toLowerCase().includes(lowerQuery) ||
    recipe.dietaryTags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    recipe.flavorIds.some(id => id.toLowerCase().includes(lowerQuery))
  );
}

// Helper function to get recipes by category
export function getRecipesByCategory(category: Recipe['category']): Recipe[] {
  return recipes.filter(recipe => recipe.category === category);
}

// Helper function to get recipe by ID
export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

// Helper function to get featured recipes
export function getFeaturedRecipes(): Recipe[] {
  return recipes.filter(recipe => recipe.featured);
}

// Helper function to get recipes by difficulty
export function getRecipesByDifficulty(difficulty: Recipe['difficulty']): Recipe[] {
  return recipes.filter(recipe => recipe.difficulty === difficulty);
}

// Helper function to get quick recipes (15 minutes or less)
export function getQuickRecipes(): Recipe[] {
  return recipes.filter(recipe => recipe.prepTime <= 15);
}

// Helper function to get recipes by dietary tag
export function getRecipesByDietaryTag(tag: string): Recipe[] {
  return recipes.filter(recipe => recipe.dietaryTags.includes(tag));
}

// Helper function to get recipes using a specific flavor
export function getRecipesByFlavor(flavorId: string): Recipe[] {
  return recipes.filter(recipe => recipe.flavorIds.includes(flavorId));
}