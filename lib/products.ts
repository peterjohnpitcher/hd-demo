export interface Product {
  id: string;
  name: string;
  category: 'ice-cream' | 'bars' | 'mini-cups' | 'non-dairy' | 'cakes';
  description: string;
  image: string;
  ingredients: string[];
  nutrition: {
    calories: number;
    fat: number;
    sugar: number;
    protein: number;
  };
  flavors?: string[];
  tags: string[];
  available: boolean;
}

export const products: Product[] = [
  {
    id: 'vanilla',
    name: 'Vanilla',
    category: 'ice-cream',
    description: 'Our signature vanilla ice cream is the essence of elegance and simplicity. Made with real vanilla beans from Madagascar.',
    image: '/images/products/vanilla.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Egg Yolks', 'Vanilla Extract'],
    nutrition: {
      calories: 250,
      fat: 17,
      sugar: 19,
      protein: 4
    },
    tags: ['classic', 'vanilla', 'madagascar', 'signature'],
    available: true
  },
  {
    id: 'belgian-chocolate',
    name: 'Belgian Chocolate',
    category: 'ice-cream',
    description: 'Rich, velvety chocolate ice cream crafted with the finest Belgian chocolate for an indulgent experience.',
    image: '/images/products/belgian-chocolate.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Belgian Chocolate', 'Cocoa', 'Egg Yolks'],
    nutrition: {
      calories: 270,
      fat: 18,
      sugar: 21,
      protein: 5
    },
    tags: ['chocolate', 'belgian', 'rich', 'indulgent'],
    available: true
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'ice-cream',
    description: 'Made with sun-ripened strawberries for a sweet, fruity flavor that captures the essence of summer.',
    image: '/images/products/strawberry.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Strawberries', 'Cane Sugar', 'Egg Yolks'],
    nutrition: {
      calories: 240,
      fat: 15,
      sugar: 20,
      protein: 4
    },
    tags: ['fruit', 'strawberry', 'summer', 'fresh'],
    available: true
  },
  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    category: 'ice-cream',
    description: 'Smooth vanilla ice cream loaded with chunks of chocolate cookies for the perfect cookies and cream experience.',
    image: '/images/products/cookies-cream.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Chocolate Cookies', 'Egg Yolks', 'Vanilla Extract'],
    nutrition: {
      calories: 280,
      fat: 17,
      sugar: 23,
      protein: 4
    },
    tags: ['cookies', 'vanilla', 'chocolate', 'chunks'],
    available: true
  },
  {
    id: 'dulce-de-leche',
    name: 'Dulce de Leche',
    category: 'ice-cream',
    description: 'Creamy caramel ice cream swirled with thick ribbons of golden dulce de leche sauce.',
    image: '/images/products/dulce-de-leche.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Dulce de Leche', 'Egg Yolks'],
    nutrition: {
      calories: 290,
      fat: 17,
      sugar: 28,
      protein: 5
    },
    tags: ['caramel', 'dulce de leche', 'swirl', 'latin'],
    available: true
  },
  {
    id: 'vanilla-almond-bar',
    name: 'Vanilla Milk Chocolate Almond Bar',
    category: 'bars',
    description: 'Creamy vanilla ice cream dipped in rich milk chocolate and covered with roasted almonds.',
    image: '/images/products/vanilla-almond-bar.jpg',
    ingredients: ['Vanilla Ice Cream', 'Milk Chocolate', 'Roasted Almonds'],
    nutrition: {
      calories: 310,
      fat: 22,
      sugar: 21,
      protein: 5
    },
    tags: ['bar', 'vanilla', 'chocolate', 'almonds', 'classic'],
    available: true
  },
  {
    id: 'coffee-almond-bar',
    name: 'Coffee Almond Crunch Bar',
    category: 'bars',
    description: 'Bold coffee ice cream covered in crunchy milk chocolate and almond pieces.',
    image: '/images/products/coffee-almond-bar.jpg',
    ingredients: ['Coffee Ice Cream', 'Milk Chocolate', 'Almond Pieces'],
    nutrition: {
      calories: 300,
      fat: 21,
      sugar: 20,
      protein: 5
    },
    tags: ['bar', 'coffee', 'chocolate', 'almonds', 'crunch'],
    available: true
  },
  {
    id: 'vanilla-mini',
    name: 'Vanilla Mini Cup',
    category: 'mini-cups',
    description: 'Our classic vanilla in a perfectly portioned mini cup for guilt-free indulgence.',
    image: '/images/products/vanilla-mini.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Egg Yolks', 'Vanilla Extract'],
    nutrition: {
      calories: 170,
      fat: 11,
      sugar: 13,
      protein: 3
    },
    tags: ['mini', 'vanilla', 'portion-control', 'single-serve'],
    available: true
  },
  {
    id: 'chocolate-mini',
    name: 'Belgian Chocolate Mini Cup',
    category: 'mini-cups',
    description: 'Rich Belgian chocolate in a convenient mini cup size.',
    image: '/images/products/chocolate-mini.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Belgian Chocolate', 'Cocoa', 'Egg Yolks'],
    nutrition: {
      calories: 180,
      fat: 12,
      sugar: 14,
      protein: 3
    },
    tags: ['mini', 'chocolate', 'belgian', 'single-serve'],
    available: true
  },
  {
    id: 'non-dairy-chocolate',
    name: 'Non-Dairy Chocolate Fudge',
    category: 'non-dairy',
    description: 'Decadent plant-based chocolate fudge ice cream that doesn\'t compromise on taste.',
    image: '/images/products/non-dairy-chocolate.jpg',
    ingredients: ['Oat Milk', 'Coconut Cream', 'Cane Sugar', 'Cocoa', 'Chocolate Fudge'],
    nutrition: {
      calories: 260,
      fat: 16,
      sugar: 22,
      protein: 3
    },
    tags: ['non-dairy', 'vegan', 'chocolate', 'plant-based', 'oat-milk'],
    available: true
  },
  {
    id: 'non-dairy-vanilla',
    name: 'Non-Dairy Vanilla Bean',
    category: 'non-dairy',
    description: 'Smooth plant-based vanilla ice cream made with real vanilla beans.',
    image: '/images/products/non-dairy-vanilla.jpg',
    ingredients: ['Oat Milk', 'Coconut Cream', 'Cane Sugar', 'Vanilla Beans'],
    nutrition: {
      calories: 240,
      fat: 15,
      sugar: 20,
      protein: 2
    },
    tags: ['non-dairy', 'vegan', 'vanilla', 'plant-based', 'oat-milk'],
    available: true
  },
  {
    id: 'ice-cream-cake',
    name: 'Celebration Ice Cream Cake',
    category: 'cakes',
    description: 'Layers of vanilla and chocolate ice cream with fudge and cookie crumbles, perfect for special occasions.',
    image: '/images/products/ice-cream-cake.jpg',
    ingredients: ['Vanilla Ice Cream', 'Chocolate Ice Cream', 'Chocolate Fudge', 'Cookie Crumbles', 'Whipped Cream'],
    nutrition: {
      calories: 350,
      fat: 20,
      sugar: 30,
      protein: 6
    },
    flavors: ['Vanilla & Chocolate', 'Strawberry & Vanilla', 'Cookies & Cream'],
    tags: ['cake', 'celebration', 'party', 'layers', 'custom'],
    available: true
  },
  {
    id: 'pralines-cream',
    name: 'Pralines & Cream',
    category: 'ice-cream',
    description: 'Vanilla ice cream with praline-coated pecans and a caramel swirl.',
    image: '/images/products/pralines-cream.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Praline Pecans', 'Caramel', 'Egg Yolks'],
    nutrition: {
      calories: 280,
      fat: 18,
      sugar: 24,
      protein: 4
    },
    tags: ['praline', 'pecans', 'caramel', 'southern', 'nuts'],
    available: true
  },
  {
    id: 'mint-chip',
    name: 'Mint Chip',
    category: 'ice-cream',
    description: 'Cool mint ice cream studded with rich chocolate chips for a refreshing treat.',
    image: '/images/products/mint-chip.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Peppermint Extract', 'Chocolate Chips', 'Egg Yolks'],
    nutrition: {
      calories: 260,
      fat: 17,
      sugar: 22,
      protein: 4
    },
    tags: ['mint', 'chocolate chips', 'refreshing', 'cool'],
    available: true
  },
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'ice-cream',
    description: 'Rich coffee ice cream made with real Brazilian coffee for true coffee lovers.',
    image: '/images/products/coffee.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Brazilian Coffee', 'Egg Yolks'],
    nutrition: {
      calories: 250,
      fat: 16,
      sugar: 20,
      protein: 4
    },
    tags: ['coffee', 'brazilian', 'caffeine', 'bold'],
    available: true
  },
  {
    id: 'rum-raisin',
    name: 'Rum Raisin',
    category: 'ice-cream',
    description: 'Sophisticated rum-infused ice cream with plump raisins soaked in rum.',
    image: '/images/products/rum-raisin.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Rum-Soaked Raisins', 'Rum Extract', 'Egg Yolks'],
    nutrition: {
      calories: 260,
      fat: 15,
      sugar: 25,
      protein: 4
    },
    tags: ['rum', 'raisins', 'sophisticated', 'adult', 'classic'],
    available: true
  },
  {
    id: 'mango',
    name: 'Mango',
    category: 'ice-cream',
    description: 'Tropical mango ice cream bursting with the flavor of ripe Alphonso mangoes.',
    image: '/images/products/mango.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Mango Puree', 'Cane Sugar', 'Egg Yolks'],
    nutrition: {
      calories: 230,
      fat: 14,
      sugar: 22,
      protein: 3
    },
    tags: ['mango', 'tropical', 'fruit', 'alphonso', 'summer'],
    available: true
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    category: 'ice-cream',
    description: 'Delicate green tea ice cream made with premium Japanese matcha.',
    image: '/images/products/green-tea.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Matcha Green Tea', 'Egg Yolks'],
    nutrition: {
      calories: 240,
      fat: 15,
      sugar: 19,
      protein: 4
    },
    tags: ['green tea', 'matcha', 'japanese', 'unique', 'tea'],
    available: true
  },
  {
    id: 'salted-caramel',
    name: 'Salted Caramel',
    category: 'ice-cream',
    description: 'Creamy caramel ice cream with a hint of sea salt and ribbons of caramel sauce.',
    image: '/images/products/salted-caramel.jpg',
    ingredients: ['Cream', 'Skim Milk', 'Cane Sugar', 'Caramel', 'Sea Salt', 'Egg Yolks'],
    nutrition: {
      calories: 280,
      fat: 17,
      sugar: 26,
      protein: 4
    },
    tags: ['salted caramel', 'sea salt', 'sweet and salty', 'trendy'],
    available: true
  },
  {
    id: 'raspberry-sorbet-bar',
    name: 'Raspberry Sorbet Bar',
    category: 'bars',
    description: 'Tangy raspberry sorbet covered in dark chocolate for a refreshing treat.',
    image: '/images/products/raspberry-sorbet-bar.jpg',
    ingredients: ['Raspberry Sorbet', 'Dark Chocolate'],
    nutrition: {
      calories: 220,
      fat: 12,
      sugar: 24,
      protein: 2
    },
    tags: ['bar', 'raspberry', 'sorbet', 'dark chocolate', 'fruit'],
    available: true
  }
];

// Helper function to search products
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase().trim();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    product.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerQuery))
  );
}

// Helper function to get products by category
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(product => product.category === category);
}

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Helper function to get available products
export function getAvailableProducts(): Product[] {
  return products.filter(product => product.available);
}

// Helper function to get product suggestions based on tags
export function getProductSuggestions(productId: string, limit: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.available)
    .map(p => ({
      product: p,
      score: p.tags.filter(tag => product.tags.includes(tag)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.product);
}