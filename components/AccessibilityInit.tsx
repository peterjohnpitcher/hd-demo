'use client';

import { useEffect } from 'react';
import { setupFocusVisible, loadAccessibilityPreferences, applyAccessibilityPreferences } from '@/lib/accessibility';

export default function AccessibilityInit() {
  useEffect(() => {
    // Setup focus-visible polyfill
    setupFocusVisible();
    
    // Load and apply saved accessibility preferences
    const preferences = loadAccessibilityPreferences();
    applyAccessibilityPreferences(preferences);
    
    // Listen for system preference changes
    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      const prefs = loadAccessibilityPreferences();
      if (e.matches !== prefs.reducedMotion) {
        prefs.reducedMotion = e.matches;
        applyAccessibilityPreferences(prefs);
      }
    };
    
    mediaQueryList.addEventListener('change', handleMotionChange);
    
    // High contrast media query
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      const prefs = loadAccessibilityPreferences();
      if (e.matches !== prefs.highContrast) {
        prefs.highContrast = e.matches;
        applyAccessibilityPreferences(prefs);
      }
    };
    
    highContrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      mediaQueryList.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);
  
  return null;
}