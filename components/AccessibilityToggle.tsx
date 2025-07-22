'use client';

import React, { useEffect, useState } from 'react';
import { 
  AccessibilityPreferences, 
  loadAccessibilityPreferences, 
  applyAccessibilityPreferences,
  announceToScreenReader 
} from '@/lib/accessibility';

export default function AccessibilityToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
  });

  useEffect(() => {
    // Load saved preferences on mount
    const savedPrefs = loadAccessibilityPreferences();
    setPreferences(savedPrefs);
    applyAccessibilityPreferences(savedPrefs);
  }, []);

  const updatePreference = (key: keyof AccessibilityPreferences, value: boolean) => {
    const newPrefs = { ...preferences, [key]: value };
    setPreferences(newPrefs);
    applyAccessibilityPreferences(newPrefs);
    
    // Announce change to screen readers
    const prefName = key === 'reducedMotion' ? 'Reduced motion' : 
                    key === 'highContrast' ? 'High contrast' :
                    'Large text';
    announceToScreenReader(`${prefName} ${value ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        <svg 
          className="h-5 w-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 10V3L4 14h7v7l9-11h-7z" 
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="accessibility-menu"
            role="menu"
            aria-labelledby="accessibility-button"
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
              
              {/* Reduced Motion */}
              <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.reducedMotion}
                    onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
                    className="sr-only"
                    role="switch"
                    aria-checked={preferences.reducedMotion}
                    aria-label="Reduced motion"
                  />
                  <div className={`relative w-10 h-6 rounded-full transition-colors ${
                    preferences.reducedMotion ? 'bg-red-600' : 'bg-gray-300'
                  }`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.reducedMotion ? 'translate-x-4' : ''
                    }`} />
                  </div>
                  <span className="ml-3 text-sm font-medium">Reduced Motion</span>
                </label>
                <p className="mt-1 text-xs text-gray-600 ml-13">
                  Minimize animations and transitions
                </p>
              </div>

              {/* High Contrast */}
              <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.highContrast}
                    onChange={(e) => updatePreference('highContrast', e.target.checked)}
                    className="sr-only"
                    role="switch"
                    aria-checked={preferences.highContrast}
                    aria-label="High contrast"
                  />
                  <div className={`relative w-10 h-6 rounded-full transition-colors ${
                    preferences.highContrast ? 'bg-red-600' : 'bg-gray-300'
                  }`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.highContrast ? 'translate-x-4' : ''
                    }`} />
                  </div>
                  <span className="ml-3 text-sm font-medium">High Contrast</span>
                </label>
                <p className="mt-1 text-xs text-gray-600 ml-13">
                  Increase color contrast for better visibility
                </p>
              </div>

              {/* Large Text */}
              <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.largeText}
                    onChange={(e) => updatePreference('largeText', e.target.checked)}
                    className="sr-only"
                    role="switch"
                    aria-checked={preferences.largeText}
                    aria-label="Large text"
                  />
                  <div className={`relative w-10 h-6 rounded-full transition-colors ${
                    preferences.largeText ? 'bg-red-600' : 'bg-gray-300'
                  }`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.largeText ? 'translate-x-4' : ''
                    }`} />
                  </div>
                  <span className="ml-3 text-sm font-medium">Large Text</span>
                </label>
                <p className="mt-1 text-xs text-gray-600 ml-13">
                  Increase text size for better readability
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="/accessibility"
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  View Accessibility Statement
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}