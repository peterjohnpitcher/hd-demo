// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Häagen-Dazs',
  url: 'https://www.haagen-dazs.co.uk',
  logo: 'https://www.haagen-dazs.co.uk/logo.png',
  sameAs: [
    'https://www.facebook.com/HaagenDazsUK',
    'https://www.instagram.com/haagendazs_uk',
    'https://twitter.com/haagendazs_uk',
    'https://www.youtube.com/haagendazs',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-800-123-4567',
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
};

// Website Schema with Sitelinks Searchbox
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Häagen-Dazs UK',
  url: 'https://www.haagen-dazs.co.uk',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.haagen-dazs.co.uk/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Product Schema Generator for Ice Cream Flavors
export function generateProductSchema({
  name,
  description,
  image,
  price,
  priceCurrency = 'GBP',
  availability = 'https://schema.org/InStock',
  brand = 'Häagen-Dazs',
  category,
  nutrition,
  aggregateRating,
}: {
  name: string;
  description: string;
  image: string;
  price: string;
  priceCurrency?: string;
  availability?: string;
  brand?: string;
  category: string;
  nutrition?: {
    calories: string;
    fatContent: string;
    saturatedFatContent: string;
    carbohydrateContent: string;
    sugarContent: string;
    proteinContent: string;
    sodiumContent: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    category,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      availability,
      seller: {
        '@type': 'Organization',
        name: 'Häagen-Dazs',
      },
    },
  };

  if (nutrition) {
    schema.nutrition = {
      '@type': 'NutritionInformation',
      calories: nutrition.calories,
      fatContent: nutrition.fatContent,
      saturatedFatContent: nutrition.saturatedFatContent,
      carbohydrateContent: nutrition.carbohydrateContent,
      sugarContent: nutrition.sugarContent,
      proteinContent: nutrition.proteinContent,
      sodiumContent: nutrition.sodiumContent,
    };
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    };
  }

  return schema;
}

// Local Business Schema Generator for Store Locations
export function generateLocalBusinessSchema({
  name,
  address,
  telephone,
  openingHours,
  image,
  priceRange = '££',
  servesCuisine = 'Ice Cream',
  hasMap,
  geo,
}: {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  openingHours: string[];
  image: string;
  priceRange?: string;
  servesCuisine?: string;
  hasMap?: string;
  geo?: {
    latitude: number;
    longitude: number;
  };
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'IceCreamShop',
    name,
    image,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    telephone,
    openingHoursSpecification: openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      ...parseOpeningHours(hours),
    })),
    priceRange,
    servesCuisine,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Häagen-Dazs',
    },
  };

  if (hasMap) {
    schema.hasMap = hasMap;
  }

  if (geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    };
  }

  return schema;
}

// Helper function to parse opening hours
function parseOpeningHours(hours: string) {
  // Example: "Mo-Fr 10:00-22:00"
  const [days, time] = hours.split(' ');
  const [opens, closes] = time.split('-');
  const dayMap: Record<string, string[]> = {
    'Mo': ['Monday'],
    'Tu': ['Tuesday'],
    'We': ['Wednesday'],
    'Th': ['Thursday'],
    'Fr': ['Friday'],
    'Sa': ['Saturday'],
    'Su': ['Sunday'],
    'Mo-Fr': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'Mo-Su': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'Sa-Su': ['Saturday', 'Sunday'],
  };

  return {
    dayOfWeek: dayMap[days] || [days],
    opens,
    closes,
  };
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Recipe Schema Generator (for ice cream recipes/serving suggestions)
export function generateRecipeSchema({
  name,
  description,
  image,
  prepTime,
  cookTime,
  totalTime,
  recipeYield,
  recipeIngredient,
  recipeInstructions,
  nutrition,
  aggregateRating,
}: {
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime?: string;
  totalTime: string;
  recipeYield: string;
  recipeIngredient: string[];
  recipeInstructions: Array<{ name: string; text: string }>;
  nutrition?: {
    calories: string;
    fatContent: string;
    carbohydrateContent: string;
    proteinContent: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name,
    description,
    image,
    prepTime,
    totalTime,
    recipeYield,
    recipeIngredient,
    recipeInstructions: recipeInstructions.map((instruction, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: instruction.name,
      text: instruction.text,
    })),
    author: {
      '@type': 'Organization',
      name: 'Häagen-Dazs',
    },
  };

  if (cookTime) {
    schema.cookTime = cookTime;
  }

  if (nutrition) {
    schema.nutrition = {
      '@type': 'NutritionInformation',
      ...nutrition,
    };
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ...aggregateRating,
    };
  }

  return schema;
}