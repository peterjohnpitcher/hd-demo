'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { SearchResult, getSearchSuggestions, trackSearch, getRecentSearches } from '@/lib/search';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onClose?: () => void;
}

export default function SearchBar({ 
  className = '', 
  placeholder = 'Search for flavors, stores, or information...', 
  autoFocus = false,
  onClose 
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Load recent searches
  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, []);

  // Handle search input changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        const results = getSearchSuggestions(query);
        setSuggestions(results);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(query.length === 0 && recentSearches.length > 0);
      }
    }, 200); // Debounce

    return () => clearTimeout(timer);
  }, [query, recentSearches]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search submission
  const handleSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim()) {
      // Track search
      trackSearch({
        query: searchQuery,
        resultsCount: suggestions.length,
        timestamp: Date.now()
      });

      // Navigate to search results page
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      
      // Clear and close
      setQuery('');
      setShowSuggestions(false);
      if (onClose) onClose();
    }
  }, [router, suggestions.length, onClose]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  // Handle suggestion click
  const handleSuggestionClick = (result: SearchResult) => {
    // Track search with clicked result
    trackSearch({
      query: query,
      resultsCount: suggestions.length,
      clickedResult: result,
      timestamp: Date.now()
    });

    // Navigate directly to the result
    router.push(result.url);
    
    // Clear and close
    setQuery('');
    setShowSuggestions(false);
    if (onClose) onClose();
  };

  // Handle recent search click
  const handleRecentSearchClick = (search: string) => {
    setQuery(search);
    handleSearch(search);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    const total = query.length >= 2 ? suggestions.length : recentSearches.length;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < total - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : total - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          if (query.length >= 2 && suggestions[selectedIndex]) {
            handleSuggestionClick(suggestions[selectedIndex]);
          } else if (query.length < 2 && recentSearches[selectedIndex]) {
            handleRecentSearchClick(recentSearches[selectedIndex]);
          }
        } else {
          handleSearch(query);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        if (onClose) onClose();
        break;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full px-4 py-3 pr-12 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
          aria-label="Search"
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-expanded={showSuggestions}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600 transition-colors"
          aria-label="Submit search"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && (query.length >= 2 ? suggestions.length > 0 : recentSearches.length > 0) && (
        <div
          ref={suggestionsRef}
          id="search-suggestions"
          className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto"
          role="listbox"
        >
          {/* Recent searches (when no query) */}
          {query.length < 2 && recentSearches.length > 0 && (
            <div>
              <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-100">
                Recent Searches
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={search}
                  onClick={() => handleRecentSearchClick(search)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${
                    selectedIndex === index ? 'bg-gray-50' : ''
                  }`}
                  role="option"
                  aria-selected={selectedIndex === index}
                >
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-900">{search}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Search suggestions */}
          {query.length >= 2 && suggestions.map((result, index) => (
            <button
              key={`${result.type}-${result.id}`}
              onClick={() => handleSuggestionClick(result)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0 ${
                selectedIndex === index ? 'bg-gray-50' : ''
              }`}
              role="option"
              aria-selected={selectedIndex === index}
            >
              <div className="flex items-start">
                {result.image && result.type === 'product' && (
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-12 h-12 rounded object-cover mr-3 flex-shrink-0"
                  />
                )}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{result.title}</h4>
                    <span className="ml-2 text-xs text-gray-500 capitalize flex-shrink-0">
                      {result.type === 'product' ? result.category : result.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">{result.description}</p>
                </div>
              </div>
            </button>
          ))}

          {/* View all results */}
          {query.length >= 2 && suggestions.length > 0 && (
            <button
              onClick={() => handleSearch(query)}
              className="w-full px-4 py-3 text-center text-sm font-medium text-red-600 hover:bg-gray-50 transition-colors border-t border-gray-100"
            >
              View all results for "{query}"
            </button>
          )}
        </div>
      )}
    </div>
  );
}