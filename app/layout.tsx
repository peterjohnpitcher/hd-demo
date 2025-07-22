import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from '@/lib/metadata';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import SkipNavigation from '@/components/SkipNavigation';
import GlobalSearch from '@/components/GlobalSearch';
import AccessibilityInit from '@/components/AccessibilityInit';
import NavigationWrapper from '@/components/NavigationWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <AccessibilityInit />
        <GlobalSearch />
        <SkipNavigation />
        <NavigationWrapper />
        
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        
        <footer id="footer" className="bg-gray-900 text-white py-8 sm:py-12 mt-auto" role="contentinfo" aria-label="Site footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 safe-area-inset">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              <div>
                <h3 className="text-responsive-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2 text-gray-300" role="list">
                  <li><a href="/products/ice-cream" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Ice cream products">Ice Cream</a></li>
                  <li><a href="/products/bars" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Bars and sticks products">Bars & Sticks</a></li>
                  <li><a href="/products/mini-cups" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Mini cups products">Mini Cups</a></li>
                  <li><a href="/products/non-dairy" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Non-dairy products">Non-Dairy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-lg font-semibold mb-4">Discover</h3>
                <ul className="space-y-2 text-gray-300" role="list">
                  <li><a href="/guides" className="hover:text-white focus:text-white transition-colors inline-block py-1">Guides & Tips</a></li>
                  <li><a href="/recipes" className="hover:text-white focus:text-white transition-colors inline-block py-1">Recipes</a></li>
                  <li><a href="/pairings" className="hover:text-white focus:text-white transition-colors inline-block py-1">Pairings</a></li>
                  <li><a href="/flavors" className="hover:text-white focus:text-white transition-colors inline-block py-1">All Flavors</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-300" role="list">
                  <li><a href="/about" className="hover:text-white focus:text-white transition-colors inline-block py-1">About Us</a></li>
                  <li><a href="/sustainability" className="hover:text-white focus:text-white transition-colors inline-block py-1">Sustainability</a></li>
                  <li><a href="/careers" className="hover:text-white focus:text-white transition-colors inline-block py-1">Careers</a></li>
                  <li><a href="/press" className="hover:text-white focus:text-white transition-colors inline-block py-1">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-300" role="list">
                  <li><a href="/contact" className="hover:text-white focus:text-white transition-colors inline-block py-1">Contact Us</a></li>
                  <li><a href="/faq" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Frequently asked questions">FAQ</a></li>
                  <li><a href="/where-to-buy" className="hover:text-white focus:text-white transition-colors inline-block py-1">Store Locator</a></li>
                  <li><a href="/nutrition" className="hover:text-white focus:text-white transition-colors inline-block py-1">Nutrition Info</a></li>
                  <li><a href="/accessibility" className="hover:text-white focus:text-white transition-colors inline-block py-1">Accessibility</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-300" role="list">
                  <li><a href="https://www.facebook.com/haagendazs" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Visit us on Facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://www.instagram.com/haagendazs" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Visit us on Instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://twitter.com/haagendazs" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Visit us on Twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="https://www.youtube.com/haagendazs" className="hover:text-white focus:text-white transition-colors inline-block py-1" aria-label="Visit us on YouTube" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-responsive-sm">
              <p className="safe-area-inset-bottom">&copy; 2024 Häagen-Dazs. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}