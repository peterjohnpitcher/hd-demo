'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { 
  SearchResult, 
  SearchFilters, 
  searchAll, 
  applySearchFilters, 
  trackSearch,
  getPopularSearches,
  clearRecentSearches
} from '@/lib/search';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [loading, setLoading] = useState(true);

  // Perform search
  useEffect(() => {
    if (query) {
      setLoading(true);
      const searchResults = searchAll(query);
      setResults(searchResults);
      setFilteredResults(searchResults);
      
      // Track search
      trackSearch({
        query,
        resultsCount: searchResults.length,
        timestamp: Date.now()
      });
      
      setLoading(false);
    } else {
      setResults([]);
      setFilteredResults([]);
      setLoading(false);
    }
  }, [query]);

  // Apply filters
  useEffect(() => {
    setFilteredResults(applySearchFilters(results, filters));
  }, [results, filters]);

  // Handle filter change
  const handleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'types') {
        const types = newFilters.types || [];
        if (types.includes(value as any)) {
          newFilters.types = types.filter(t => t !== value);
        } else {
          newFilters.types = [...types, value as any];
        }
      } else if (filterType === 'categories') {
        const categories = newFilters.categories || [];
        if (categories.includes(value)) {
          newFilters.categories = categories.filter(c => c !== value);
        } else {
          newFilters.categories = [...categories, value];
        }
      }
      
      return newFilters;
    });
  };

  // Get unique categories from results
  const categories = Array.from(new Set(
    results
      .filter(r => r.category)
      .map(r => r.category!)
  ));

  const popularSearches = getPopularSearches();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Results</h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <SearchBar 
              className="w-full"
              placeholder="Search again..."
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : query ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
                
                {/* Type Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.types?.includes('product') || false}
                        onChange={() => handleFilterChange('types', 'product')}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Products</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.types?.includes('store') || false}
                        onChange={() => handleFilterChange('types', 'store')}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Stores</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.types?.includes('page') || false}
                        onChange={() => handleFilterChange('types', 'page')}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Pages</span>
                    </label>
                  </div>
                </div>
                
                {/* Category Filter */}
                {categories.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.categories?.includes(category) || false}
                            onChange={() => handleFilterChange('categories', category)}
                            className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                          />
                          <span className="ml-2 text-sm text-gray-600 capitalize">
                            {category.replace('-', ' ')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clear Filters */}
                {(filters.types?.length || filters.categories?.length) ? (
                  <button
                    onClick={() => setFilters({})}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear all filters
                  </button>
                ) : null}
              </div>

              {/* Recent Searches Actions */}
              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <button
                  onClick={() => {
                    clearRecentSearches();
                    window.location.reload();
                  }}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Clear recent searches
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              {filteredResults.length > 0 ? (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    Found {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} for "{query}"
                  </p>
                  
                  <div className="space-y-4">
                    {filteredResults.map((result) => (
                      <Link
                        key={`${result.type}-${result.id}`}
                        href={result.url}
                        className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
                        onClick={() => {
                          // Track clicked result
                          trackSearch({
                            query,
                            resultsCount: filteredResults.length,
                            clickedResult: result,
                            timestamp: Date.now()
                          });
                        }}
                      >
                        <div className="flex items-start">
                          {result.image && result.type === 'product' && (
                            <img
                              src={result.image}
                              alt={result.title}
                              className="w-24 h-24 rounded-lg object-cover mr-6 flex-shrink-0"
                            />
                          )}
                          <div className="flex-grow">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-red-600">
                                {result.title}
                              </h3>
                              <span className="ml-4 px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full capitalize">
                                {result.type === 'product' ? result.category : result.type}
                              </span>
                            </div>
                            <p className="text-gray-600">{result.description}</p>
                            {result.type === 'store' && (
                              <p className="text-sm text-gray-500 mt-2">
                                <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                View location details
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : results.length > 0 ? (
                // No results after filtering
                <div className="bg-white rounded-lg shadow p-12 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results match your filters</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                  <button
                    onClick={() => setFilters({})}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                // No results at all
                <div className="bg-white rounded-lg shadow p-12 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found for "{query}"</h3>
                  <p className="text-gray-600 mb-6">Try searching with different keywords or browse our popular searches.</p>
                  
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-gray-700 mb-4">Popular searches:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {popularSearches.map((search) => (
                        <button
                          key={search}
                          onClick={() => router.push(`/search?q=${encodeURIComponent(search)}`)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // No search query
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Start your search</h3>
              <p className="text-gray-600 mb-6">Enter a search term above to find products, stores, and information.</p>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Try searching for:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => router.push(`/search?q=${encodeURIComponent(search)}`)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}