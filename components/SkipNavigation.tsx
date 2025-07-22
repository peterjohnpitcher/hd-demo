'use client';

import React from 'react';

export default function SkipNavigation() {
  return (
    <div className="skip-links">
      <a 
        href="#main-content" 
        className="skip-link"
        onFocus={(e) => e.currentTarget.classList.add('skip-link-focused')}
        onBlur={(e) => e.currentTarget.classList.remove('skip-link-focused')}
      >
        Skip to main content
      </a>
      <a 
        href="#main-navigation" 
        className="skip-link"
        onFocus={(e) => e.currentTarget.classList.add('skip-link-focused')}
        onBlur={(e) => e.currentTarget.classList.remove('skip-link-focused')}
      >
        Skip to navigation
      </a>
      <a 
        href="#footer" 
        className="skip-link"
        onFocus={(e) => e.currentTarget.classList.add('skip-link-focused')}
        onBlur={(e) => e.currentTarget.classList.remove('skip-link-focused')}
      >
        Skip to footer
      </a>
    </div>
  );
}