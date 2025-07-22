// Comprehensive SEO Configuration
export const seoConfig = {
  // Site-wide settings
  site: {
    name: 'Häagen-Dazs UK',
    url: 'https://www.haagen-dazs.co.uk',
    defaultTitle: 'Häagen-Dazs - Premium Ice Cream UK',
    titleTemplate: '%s | Häagen-Dazs UK',
    defaultDescription: 'Discover Häagen-Dazs premium ice cream made with the finest ingredients. Find stores near you, explore our flavors, and indulge in extraordinary.',
    defaultImage: 'https://www.haagen-dazs.co.uk/og-image.jpg',
    locale: 'en_GB',
    twitterHandle: '@haagendazs_uk',
  },

  // International versions for hreflang
  international: {
    'en-GB': {
      url: 'https://www.haagen-dazs.co.uk',
      name: 'United Kingdom',
    },
    'en-US': {
      url: 'https://www.haagen-dazs.com',
      name: 'United States',
    },
    'fr-FR': {
      url: 'https://www.haagen-dazs.fr',
      name: 'France',
    },
    'de-DE': {
      url: 'https://www.haagen-dazs.de',
      name: 'Germany',
    },
    'es-ES': {
      url: 'https://www.haagen-dazs.es',
      name: 'Spain',
    },
    'it-IT': {
      url: 'https://www.haagen-dazs.it',
      name: 'Italy',
    },
  },

  // Page-specific metadata
  pages: {
    home: {
      title: 'Häagen-Dazs - Premium Ice Cream UK',
      description: 'Discover Häagen-Dazs premium ice cream made with the finest ingredients. Find stores near you, explore our flavors, and indulge in extraordinary.',
      keywords: ['Häagen-Dazs', 'premium ice cream', 'luxury ice cream UK', 'ice cream delivery'],
    },
    products: {
      title: 'Our Products - Ice Cream, Bars & More',
      description: 'Explore the full range of Häagen-Dazs products including ice cream tubs, bars, mini cups, non-dairy options, and ice cream cakes.',
      keywords: ['Häagen-Dazs products', 'ice cream flavours', 'ice cream bars', 'non-dairy ice cream'],
    },
    flavors: {
      title: 'Ice Cream Flavours - Classic & Specialty',
      description: 'Discover all Häagen-Dazs ice cream flavours from classic vanilla and chocolate to unique creations like salted caramel and dulce de leche.',
      keywords: ['ice cream flavours', 'Häagen-Dazs flavors', 'premium ice cream varieties'],
    },
    whereToBy: {
      title: 'Where to Buy - Store Locator',
      description: 'Find Häagen-Dazs near you. Locate our shops and retail partners across the UK using our store locator.',
      keywords: ['Häagen-Dazs near me', 'ice cream shop locations', 'where to buy Häagen-Dazs'],
    },
    about: {
      title: 'About Us - Our Story & Heritage',
      description: 'Learn about the Häagen-Dazs story, our commitment to quality, and our passion for creating extraordinary ice cream experiences.',
      keywords: ['about Häagen-Dazs', 'ice cream history', 'premium ice cream brand'],
    },
    contact: {
      title: 'Contact Us - Customer Service',
      description: 'Contact Häagen-Dazs UK customer service. Get in touch for questions about products, stores, or feedback.',
      keywords: ['contact Häagen-Dazs', 'customer service', 'ice cream enquiries'],
    },
  },

  // Schema.org organization data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Häagen-Dazs',
    alternateName: 'Haagen-Dazs',
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
      availableLanguage: ['English'],
      contactOption: 'TollFree',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
  },

  // Social media profiles
  social: {
    facebook: 'https://www.facebook.com/HaagenDazsUK',
    instagram: 'https://www.instagram.com/haagendazs_uk',
    twitter: 'https://twitter.com/haagendazs_uk',
    youtube: 'https://www.youtube.com/haagendazs',
  },

  // Rich snippet configurations
  richSnippets: {
    searchAction: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://www.haagen-dazs.co.uk',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.haagen-dazs.co.uk/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  },

  // SEO performance monitoring tags
  analytics: {
    googleAnalytics: 'G-XXXXXXXXXX',
    googleTagManager: 'GTM-XXXXXXX',
    facebookPixel: 'XXXXXXXXXXXXXXX',
  },

  // Content guidelines
  contentGuidelines: {
    titleLength: {
      min: 30,
      max: 60,
      optimal: 55,
    },
    descriptionLength: {
      min: 120,
      max: 160,
      optimal: 155,
    },
    headings: {
      h1PerPage: 1,
      useKeywords: true,
      hierarchical: true,
    },
    images: {
      requireAlt: true,
      preferWebP: true,
      lazyLoad: true,
    },
  },

  // URL structure guidelines
  urlStructure: {
    lowercase: true,
    removeStopWords: false,
    maxLength: 60,
    separator: '-',
    includeCategory: true,
  },
};