import { Metadata } from 'next';
import RecipesClient from './RecipesClient';
import { generatePageMetadata } from '@/lib/metadata';

// Generate metadata for SEO
export const metadata: Metadata = generatePageMetadata({
  title: 'Ice Cream Recipes | Häagen-Dazs',
  description: 'Discover delicious ice cream recipes including cakes, sandwiches, milkshakes, sundaes, and no-bake desserts. Create extraordinary treats with Häagen-Dazs premium ice cream.',
  path: '/recipes',
});

export default function RecipesPage() {
  return <RecipesClient />;
}