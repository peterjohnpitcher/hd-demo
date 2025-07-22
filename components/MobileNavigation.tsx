'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  if (!isOpen && !isAnimating) return null;

  const menuItems = [
    { href: '/products', label: 'Products' },
    { href: '/flavors', label: 'Flavors' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/where-to-buy', label: 'Where to Buy' },
    { href: '/about', label: 'About' },
  ];

  const productItems = [
    { href: '/products/ice-cream', label: 'Ice Cream' },
    { href: '/products/bars', label: 'Bars & Sticks' },
    { href: '/products/mini-cups', label: 'Mini Cups' },
    { href: '/products/non-dairy', label: 'Non-Dairy' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen && isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 safe-area-inset ${
          isOpen && isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 safe-area-inset-top">
          <h2 className="text-responsive-xl font-bold text-gray-900">Menu</h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-h-touch min-w-touch-sm flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="overflow-y-auto h-full pb-20">
          <div className="p-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-responsive-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-haagen-cream text-haagen-burgundy'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Product Submenu */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <h3 className="px-8 text-responsive-sm font-medium text-gray-500 uppercase tracking-wider">
              Products
            </h3>
            <div className="mt-2 px-4 space-y-1">
              {productItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg text-responsive-sm transition-colors ${
                    pathname === item.href
                      ? 'bg-haagen-cream text-haagen-burgundy'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Discover Section */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <h3 className="px-8 text-responsive-sm font-medium text-gray-500 uppercase tracking-wider">
              Discover
            </h3>
            <div className="mt-2 px-4 space-y-1">
              <a
                href="/guides"
                className="block px-4 py-2 rounded-lg text-responsive-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Guides & Tips
              </a>
              <a
                href="/recipes"
                className="block px-4 py-2 rounded-lg text-responsive-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Recipes
              </a>
              <a
                href="/pairings"
                className="block px-4 py-2 rounded-lg text-responsive-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Pairings
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="px-4 space-y-1">
              <a
                href="/contact"
                className="block px-4 py-2 rounded-lg text-responsive-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/faq"
                className="block px-4 py-2 rounded-lg text-responsive-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                FAQ
              </a>
              <a
                href="/nutrition"
                className="block px-4 py-2 rounded-lg text-responsive-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Nutrition Info
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-200 mt-4 pt-4 px-8 pb-8 safe-area-inset-bottom">
            <h3 className="text-responsive-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}