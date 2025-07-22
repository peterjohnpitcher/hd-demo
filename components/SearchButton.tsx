'use client';

import React from 'react';

export default function SearchButton() {
  const handleClick = () => {
    const event = new KeyboardEvent('keydown', { 
      key: 'k', 
      metaKey: true,
      ctrlKey: true,
      bubbles: true 
    });
    document.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-700 hover:text-red-600 transition-colors p-2 rounded-md hover:bg-gray-50"
      aria-label="Search"
      title={`Search (${typeof navigator !== 'undefined' && navigator.platform.toLowerCase().includes('mac') ? '⌘' : 'Ctrl'}K)`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  );
}