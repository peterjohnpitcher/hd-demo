'use client';

import { useState, useEffect, useMemo } from 'react';
import { Store, StoreType, searchStores, getNearbyStores } from '@/lib/stores';
import StoreCard from './StoreCard';

interface StoreLocatorMobileProps {
  onStoreSelect?: (store: Store) => void;
}

export default function StoreLocatorMobile({ onStoreSelect }: StoreLocatorMobileProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStoreType, setSelectedStoreType] = useState<StoreType | 'all'>('all');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  // Get user's location
  const getUserLocation = () => {
    setIsLoadingLocation(true);
    setLocationError(null);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLoadingLocation(false);
        },
        (error) => {
          setLocationError('Unable to get your location. Please search by city or zip code.');
          setIsLoadingLocation(false);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
      setIsLoadingLocation(false);
    }
  };

  // Filter stores based on search and type
  const filteredStores = useMemo(() => {
    let results = searchStores(searchQuery);
    
    if (selectedStoreType !== 'all') {
      results = results.filter(store => store.type === selectedStoreType);
    }

    // If user location is available and no search query, show nearby stores
    if (userLocation && !searchQuery) {
      const nearbyStores = getNearbyStores(userLocation.lat, userLocation.lng, 50);
      results = nearbyStores.filter(store => 
        selectedStoreType === 'all' || store.type === selectedStoreType
      );
    }

    return results;
  }, [searchQuery, selectedStoreType, userLocation]);

  const handleStoreSelect = (store: Store) => {
    setSelectedStore(store);
    if (onStoreSelect) {
      onStoreSelect(store);
    }
  };

  const storeTypeCounts = useMemo(() => {
    const counts = {
      all: filteredStores.length,
      'haagen-dazs-shop': 0,
      'grocery': 0,
      'convenience': 0,
      'department': 0
    };

    filteredStores.forEach(store => {
      counts[store.type]++;
    });

    return counts;
  }, [filteredStores]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Search Header - Fixed on mobile */}
      <div className="sticky top-0 z-20 bg-white shadow-md safe-area-inset-top">
        <div className="px-4 py-3 safe-area-inset">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, state, or zip"
              className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-lg text-responsive-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white min-h-touch"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-3">
            <button
              onClick={getUserLocation}
              disabled={isLoadingLocation}
              className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-responsive-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 min-h-touch"
            >
              {isLoadingLocation ? (
                <>
                  <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Getting location...
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Use my location
                </>
              )}
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-responsive-sm font-medium hover:bg-gray-200 transition-colors flex items-center min-h-touch"
            >
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
              {selectedStoreType !== 'all' && (
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">1</span>
              )}
            </button>
          </div>

          {locationError && (
            <p className="mt-2 text-responsive-sm text-red-600">{locationError}</p>
          )}
        </div>

        {/* Filter Pills - Collapsible */}
        {showFilters && (
          <div className="px-4 pb-3 border-t">
            <div className="mt-3">
              <p className="text-responsive-xs text-gray-600 uppercase tracking-wide mb-2">Store Type</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'all', label: 'All Stores' },
                  { value: 'haagen-dazs-shop', label: 'Häagen-Dazs' },
                  { value: 'grocery', label: 'Grocery' },
                  { value: 'convenience', label: 'Convenience' },
                  { value: 'department', label: 'Department' }
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedStoreType(type.value as StoreType | 'all')}
                    className={`px-3 py-1.5 rounded-full text-responsive-sm font-medium transition-colors min-h-touch-sm ${
                      selectedStoreType === type.value
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                    <span className="ml-1 text-responsive-xs opacity-75">
                      ({storeTypeCounts[type.value as keyof typeof storeTypeCounts]})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Count Bar */}
        <div className="px-4 py-2 bg-gray-50 border-t text-responsive-sm text-gray-600">
          {filteredStores.length} {filteredStores.length === 1 ? 'store' : 'stores'} found
          {userLocation && !searchQuery && ' near you'}
        </div>
      </div>

      {/* View Toggle - Mobile Only */}
      <div className="lg:hidden sticky top-[140px] z-10 bg-white border-b px-4 py-2">
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 py-1.5 rounded-md text-responsive-sm font-medium transition-colors min-h-touch ${
              viewMode === 'list'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 py-1.5 rounded-md text-responsive-sm font-medium transition-colors min-h-touch ${
              viewMode === 'map'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Map View
          </button>
        </div>
      </div>

      {/* Results Content */}
      <div className="px-4 py-4">
        {viewMode === 'list' ? (
          /* List View */
          <div className="space-y-3">
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <StoreCard
                  key={store.id}
                  store={store}
                  onClick={() => handleStoreSelect(store)}
                  isSelected={selectedStore?.id === store.id}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-4 text-gray-600 text-responsive-base">No stores found</p>
                <p className="text-responsive-sm text-gray-500 mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        ) : (
          /* Map View Placeholder */
          <div className="bg-gray-100 rounded-lg h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="mt-4 text-gray-600 text-responsive-base">Interactive map coming soon</p>
            </div>
          </div>
        )}
      </div>

      {/* Store Details Modal - Mobile */}
      {selectedStore && viewMode === 'list' && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-white rounded-t-2xl shadow-2xl animate-slide-up safe-area-inset-bottom">
          <div className="px-4 py-3 border-b flex items-center justify-between safe-area-inset">
            <h3 className="text-responsive-lg font-semibold">{selectedStore.name}</h3>
            <button
              onClick={() => setSelectedStore(null)}
              className="text-gray-400 hover:text-gray-600 min-h-touch min-w-touch-sm flex items-center justify-center"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="px-4 py-4 max-h-[50vh] overflow-y-auto">
            {/* Store details content */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-1 text-responsive-base">Address</h4>
                <p className="text-gray-600 text-responsive-sm">
                  {selectedStore.address.street}<br />
                  {selectedStore.address.city}, {selectedStore.address.state} {selectedStore.address.zipCode}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-1 text-responsive-base">Phone</h4>
                <a href={`tel:${selectedStore.phone}`} className="text-red-600 text-responsive-sm">
                  {selectedStore.phone}
                </a>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-1 text-responsive-base">Hours</h4>
                <dl className="space-y-1 text-responsive-sm">
                  {Object.entries(selectedStore.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <dt className="text-gray-600 capitalize">{day}</dt>
                      <dd className="text-gray-900">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {selectedStore.features.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-700 mb-2 text-responsive-base">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStore.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-responsive-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${selectedStore.phone}`}
                  className="btn-responsive w-full flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Store
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${selectedStore.address.street}, ${selectedStore.address.city}, ${selectedStore.address.state} ${selectedStore.address.zipCode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-responsive w-full flex items-center justify-center bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}