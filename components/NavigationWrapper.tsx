'use client';

import { useState } from 'react';
import MobileNavigation from './MobileNavigation';
import SearchButton from './SearchButton';
import AccessibilityToggle from './AccessibilityToggle';
import NavigationDropdown from './NavigationDropdown';

export default function NavigationWrapper() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav id="main-navigation" className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 safe-area-inset-top" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 safe-area-inset">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <a href="/" className="text-responsive-xl sm:text-2xl font-bold text-haagen-burgundy hover:text-haagen-burgundy-dark transition-colors" aria-label="Häagen-Dazs home">
                Häagen-Dazs
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="/products" className="text-gray-700 hover:text-haagen-burgundy transition-colors py-2 px-3 rounded-md hover:bg-gray-50" aria-label="Browse our products">Products</a>
              <a href="/flavors" className="text-gray-700 hover:text-haagen-burgundy transition-colors py-2 px-3 rounded-md hover:bg-gray-50" aria-label="Explore our flavors">Flavors</a>
              <NavigationDropdown />
              <a href="/where-to-buy" className="text-gray-700 hover:text-haagen-burgundy transition-colors py-2 px-3 rounded-md hover:bg-gray-50" aria-label="Find stores near you">Where to Buy</a>
              <a href="/about" className="text-gray-700 hover:text-haagen-burgundy transition-colors py-2 px-3 rounded-md hover:bg-gray-50" aria-label="Learn about us">About</a>
              <SearchButton />
              <AccessibilityToggle />
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <SearchButton />
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 hover:text-haagen-burgundy p-2 min-h-touch min-w-touch-sm flex items-center justify-center" 
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}