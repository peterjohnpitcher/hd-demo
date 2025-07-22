import { Metadata } from 'next';

// Base site configuration
export const siteConfig = {
  name: 'Häagen-Dazs',
  description: 'Discover Häagen-Dazs premium ice cream made with the finest ingredients. Find stores near you, explore our flavors, and indulge in extraordinary.',
  url: 'https://www.haagen-dazs.co.uk',
  ogImage: 'https://www.haagen-dazs.co.uk/og-image.jpg',
  locale: 'en_GB',
  alternateLocales: ['en_US', 'fr_FR', 'de_DE', 'es_ES', 'it_IT'],
};

// Default metadata configuration
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Premium Ice Cream UK`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Häagen-Dazs',
    'premium ice cream',
    'luxury ice cream',
    'ice cream UK',
    'gourmet desserts',
    'ice cream flavours',
    'ice cream shops UK',
    'luxury desserts',
    'artisan ice cream',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Häagen-Dazs Premium Ice Cream',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@haagendazs_uk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-GB': 'https://www.haagen-dazs.co.uk',
      'en-US': 'https://www.haagen-dazs.com',
      'fr-FR': 'https://www.haagen-dazs.fr',
      'de-DE': 'https://www.haagen-dazs.de',
      'es-ES': 'https://www.haagen-dazs.es',
      'it-IT': 'https://www.haagen-dazs.it',
    },
  },
};

// Page-specific metadata generators
export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Product metadata generator for ice cream flavors
export function generateProductMetadata({
  name,
  description,
  image,
  price,
  category,
  path,
}: {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  path: string;
}): Metadata {
  const title = `${name} - ${category}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 1200,
          alt: name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}