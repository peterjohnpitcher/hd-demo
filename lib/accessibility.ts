import { useEffect, useRef } from 'react';

// Screen reader only class utility
export const srOnly = 'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';

// Focus trap hook for modal dialogs and other trapped contexts
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first element when trap is activated
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return containerRef;
}

// Announce changes to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = srOnly;
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Keyboard navigation hook for list components
export function useArrowKeyNavigation(
  items: any[],
  onSelect: (index: number) => void,
  isActive = true
) {
  const selectedIndexRef = useRef(-1);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      let newIndex = selectedIndexRef.current;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          newIndex = Math.min(selectedIndexRef.current + 1, items.length - 1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          newIndex = Math.max(selectedIndexRef.current - 1, 0);
          break;
        case 'Home':
          e.preventDefault();
          newIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          newIndex = items.length - 1;
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (selectedIndexRef.current >= 0) {
            onSelect(selectedIndexRef.current);
          }
          return;
        default:
          return;
      }

      if (newIndex !== selectedIndexRef.current) {
        selectedIndexRef.current = newIndex;
        const itemElements = containerRef.current?.querySelectorAll('[role="option"]');
        (itemElements?.[newIndex] as HTMLElement)?.focus();
      }
    };

    containerRef.current.addEventListener('keydown', handleKeyDown);
    return () => containerRef.current?.removeEventListener('keydown', handleKeyDown);
  }, [items, onSelect, isActive]);

  return containerRef;
}

// Accessibility preferences
export interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
}

// Get system accessibility preferences
export function getSystemAccessibilityPreferences(): AccessibilityPreferences {
  return {
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    highContrast: window.matchMedia('(prefers-contrast: high)').matches,
    largeText: false, // No standard media query for this
  };
}

// Apply accessibility preferences to document
export function applyAccessibilityPreferences(prefs: AccessibilityPreferences) {
  const root = document.documentElement;
  
  // Reduced motion
  if (prefs.reducedMotion) {
    root.classList.add('reduce-motion');
  } else {
    root.classList.remove('reduce-motion');
  }
  
  // High contrast
  if (prefs.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }
  
  // Large text
  if (prefs.largeText) {
    root.classList.add('large-text');
  } else {
    root.classList.remove('large-text');
  }
  
  // Save preferences
  localStorage.setItem('a11y-preferences', JSON.stringify(prefs));
}

// Load saved accessibility preferences
export function loadAccessibilityPreferences(): AccessibilityPreferences {
  const saved = localStorage.getItem('a11y-preferences');
  if (saved) {
    return JSON.parse(saved);
  }
  return getSystemAccessibilityPreferences();
}

// Skip navigation component props
export interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

// Focus visible polyfill for older browsers
export async function setupFocusVisible() {
  try {
    document.querySelector(':focus-visible');
  } catch {
    // Polyfill :focus-visible
    await import('focus-visible');
  }
}

// ARIA live region for dynamic content updates
export function createLiveRegion(id: string, mode: 'polite' | 'assertive' = 'polite') {
  const region = document.createElement('div');
  region.id = id;
  region.setAttribute('aria-live', mode);
  region.setAttribute('aria-atomic', 'true');
  region.className = srOnly;
  document.body.appendChild(region);
  
  return {
    announce: (message: string) => {
      region.textContent = message;
    },
    remove: () => {
      document.body.removeChild(region);
    }
  };
}