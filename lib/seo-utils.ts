// SEO-friendly URL generation
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.haagen-dazs.co.uk';
  // Remove trailing slash and ensure path starts with /
  const cleanPath = path.replace(/\/$/, '');
  const fullPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  return `${baseUrl}${fullPath}`;
}

// Generate hreflang links for international versions
export function generateHreflangLinks(currentPath: string) {
  const languages = {
    'en-GB': 'https://www.haagen-dazs.co.uk',
    'en-US': 'https://www.haagen-dazs.com',
    'fr-FR': 'https://www.haagen-dazs.fr',
    'de-DE': 'https://www.haagen-dazs.de',
    'es-ES': 'https://www.haagen-dazs.es',
    'it-IT': 'https://www.haagen-dazs.it',
  };

  return Object.entries(languages).map(([lang, domain]) => ({
    lang,
    url: `${domain}${currentPath}`,
  }));
}

// Generate meta description with length validation
export function generateMetaDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  
  // Truncate at the last complete word before maxLength
  const truncated = text.substr(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substr(0, lastSpace) + '...';
}

// SEO-friendly image alt text generator
export function generateImageAlt(productName: string, imageType: string = 'product'): string {
  const templates = {
    product: `${productName} - Häagen-Dazs premium ice cream`,
    hero: `${productName} hero image - Häagen-Dazs`,
    thumbnail: `${productName} thumbnail - Häagen-Dazs`,
    store: `Häagen-Dazs store - ${productName}`,
  };

  return templates[imageType as keyof typeof templates] || `${productName} - Häagen-Dazs`;
}

// Generate FAQ page schema
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate social media meta tags
export function generateSocialMetaTags({
  title,
  description,
  image,
  url,
  type = 'website',
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
}) {
  return {
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Häagen-Dazs',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@haagendazs_uk',
      site: '@haagendazs_uk',
    },
  };
}

// Generate breadcrumb trail for SEO
export function generateBreadcrumbTrail(path: string): Array<{ name: string; url: string }> {
  const parts = path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  let currentPath = '';
  for (const part of parts) {
    currentPath += `/${part}`;
    const name = part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({ name, url: currentPath });
  }
  
  return breadcrumbs;
}

// Check if URL should be indexed
export function shouldIndexPage(path: string): boolean {
  const noIndexPatterns = [
    /^\/api\//,
    /^\/admin\//,
    /^\/private\//,
    /\?.*$/,
    /^\/search$/,
    /^\/cart$/,
    /^\/checkout$/,
  ];

  return !noIndexPatterns.some(pattern => pattern.test(path));
}

// Generate pagination meta tags
export function generatePaginationMeta({
  currentPage,
  totalPages,
  baseUrl,
}: {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}) {
  const meta: any = {};

  if (currentPage > 1) {
    meta.prev = `${baseUrl}?page=${currentPage - 1}`;
  }

  if (currentPage < totalPages) {
    meta.next = `${baseUrl}?page=${currentPage + 1}`;
  }

  return meta;
}