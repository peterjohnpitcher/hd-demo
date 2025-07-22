import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import IceCreamPairingsClient from './client';

// Generate metadata for SEO
export const metadata: Metadata = generatePageMetadata({
  title: 'Ice Cream and Wine Pairing Guide | Dessert Pairings | Häagen-Dazs',
  description: 'Discover perfect ice cream pairings with wine, coffee, cocktails, and desserts. Expert tips and recipes for creating extraordinary dessert experiences with Häagen-Dazs.',
  path: '/guides/ice-cream-pairings',
  image: 'https://www.haagen-dazs.co.uk/images/ice-cream-pairing-guide.jpg',
});

export default function IceCreamPairingsPage() {
  return <IceCreamPairingsClient />;
}