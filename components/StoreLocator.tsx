'use client';

import { useState, useEffect, useMemo } from 'react';
import { Store, StoreType, searchStores, getNearbyStores, getStoreById } from '@/lib/stores';
import StoreLocatorMobile from './StoreLocatorMobile';
import { announceToScreenReader } from '@/lib/accessibility';

interface StoreLocatorProps {
  onStoreSelect?: (store: Store) => void;
}

export default function StoreLocator({ onStoreSelect }: StoreLocatorProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Show mobile version for smaller screens
  if (isMobile) {
    return <StoreLocatorMobile onStoreSelect={onStoreSelect} />;
  }
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStoreType, setSelectedStoreType] = useState<StoreType | 'all'>('all');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

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

  const getStoreTypeLabel = (type: StoreType) => {
    switch (type) {
      case 'haagen-dazs-shop':
        return 'Häagen-Dazs Shop';
      case 'grocery':
        return 'Grocery Store';
      case 'convenience':
        return 'Convenience Store';
      case 'department':
        return 'Department Store';
      default:
        return type;
    }
  };

  const getStoreTypeColor = (type: StoreType) => {
    switch (type) {
      case 'haagen-dazs-shop':
        return 'bg-red-100 text-red-800';
      case 'grocery':
        return 'bg-green-100 text-green-800';
      case 'convenience':
        return 'bg-blue-100 text-blue-800';
      case 'department':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto responsive-padding-x">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column - Search and Results */}
        <div className="space-y-4 sm:space-y-6">
          {/* Search Section */}
          <div className="card-responsive" role="search" aria-label="Store search">
            <h2 className="text-responsive-2xl font-bold mb-4">Find a Store</h2>
            
            {/* Search Input */}
            <div className="mb-4">
              <label htmlFor="search" className="block text-responsive-sm font-medium text-gray-700 mb-2">
                Search by city, state, or zip code
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter location..."
                  className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-responsive-base"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Use My Location Button */}
            <div className="mb-4">
              <button
                onClick={getUserLocation}
                disabled={isLoadingLocation}
                className="btn-responsive w-full sm:w-auto bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingLocation ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Getting location...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Use my location
                  </span>
                )}
              </button>
              {locationError && (
                <p className="mt-2 text-sm text-red-600" role="alert">{locationError}</p>
              )}
            </div>

            {/* Store Type Filter */}
            <div>
              <label htmlFor="store-type-filter" className="block text-responsive-sm font-medium text-gray-700 mb-2">
                Filter by store type
              </label>
              <select
                id="store-type-filter"
                value={selectedStoreType}
                onChange={(e) => {
                  setSelectedStoreType(e.target.value as StoreType | 'all');
                  announceToScreenReader(`Filtering by ${e.target.value === 'all' ? 'all stores' : e.target.value}`);
                }}
                className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-responsive-base"
                aria-label="Filter stores by type"
              >
                <option value="all">All Stores</option>
                <option value="haagen-dazs-shop">Häagen-Dazs Shops</option>
                <option value="grocery">Grocery Stores</option>
                <option value="convenience">Convenience Stores</option>
                <option value="department">Department Stores</option>
              </select>
            </div>
          </div>

          {/* Results List */}
          <div className="card-responsive p-0">
            <div className="p-4 border-b">
              <h3 className="text-responsive-lg font-semibold">
                {filteredStores.length} {filteredStores.length === 1 ? 'Store' : 'Stores'} Found
              </h3>
            </div>
            <div className="max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto custom-scrollbar">
              {filteredStores.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {filteredStores.map((store) => (
                    <li key={store.id}>
                      <button
                        onClick={() => handleStoreSelect(store)}
                        className="w-full px-4 py-4 hover:bg-gray-50 transition-colors duration-200 text-left min-h-touch-sm sm:min-h-0"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-responsive-lg font-semibold text-gray-900">
                              {store.name}
                            </h4>
                            <p className="text-responsive-sm text-gray-600 mt-1 line-clamp-2 sm:line-clamp-none">
                              {store.address.street}, {store.address.city}, {store.address.state} {store.address.zipCode}
                            </p>
                            <div className="flex items-center mt-2 space-x-2">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-responsive-xs font-medium ${getStoreTypeColor(store.type)}`}>
                                {getStoreTypeLabel(store.type)}
                              </span>
                              {'distance' in store && typeof (store as any).distance === 'number' && (
                                <span className="text-responsive-sm text-gray-500">
                                  {(store as any).distance.toFixed(1)} miles away
                                </span>
                              )}
                            </div>
                          </div>
                          <svg
                            className="h-5 w-5 text-gray-400 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-center text-gray-500">
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
                  <p className="mt-2">No stores found. Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Map Placeholder and Store Details */}
        <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-lg shadow-md h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center map-pattern">
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
              <p className="mt-4 text-gray-600">Interactive map coming soon</p>
            </div>
          </div>

          {/* Store Details */}
          {selectedStore && (
            <div className="card-responsive">
              <h3 className="text-responsive-xl font-bold mb-4">{selectedStore.name}</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Store Type */}
                <div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-responsive-sm font-medium ${getStoreTypeColor(selectedStore.type)}`}>
                    {getStoreTypeLabel(selectedStore.type)}
                  </span>
                </div>

                {/* Address */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1 text-responsive-base">Address</h4>
                  <p className="text-gray-600 text-responsive-sm">
                    {selectedStore.address.street}<br />
                    {selectedStore.address.city}, {selectedStore.address.state} {selectedStore.address.zipCode}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1 text-responsive-base">Phone</h4>
                  <a
                    href={`tel:${selectedStore.phone}`}
                    className="text-red-600 hover:text-red-700 text-responsive-sm"
                  >
                    {selectedStore.phone}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-responsive-base">Store Hours</h4>
                  <dl className="space-y-1 text-responsive-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Monday</dt>
                      <dd className="text-gray-900">{selectedStore.hours.monday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Tuesday</dt>
                      <dd className="text-gray-900">{selectedStore.hours.tuesday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Wednesday</dt>
                      <dd className="text-gray-900">{selectedStore.hours.wednesday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Thursday</dt>
                      <dd className="text-gray-900">{selectedStore.hours.thursday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Friday</dt>
                      <dd className="text-gray-900">{selectedStore.hours.friday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Saturday</dt>
                      <dd className="text-gray-900">{selectedStore.hours.saturday}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Sunday</dt>
                      <dd className="text-gray-900">{selectedStore.hours.sunday}</dd>
                    </div>
                  </dl>
                </div>

                {/* Features */}
                {selectedStore.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-responsive-base">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStore.features.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-responsive-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available Products */}
                {selectedStore.availableProducts.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-responsive-base">Available Products</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStore.availableProducts.map((product, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-md text-responsive-xs font-medium bg-red-100 text-red-800"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Directions Button */}
                <div className="pt-4">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${selectedStore.address.street}, ${selectedStore.address.city}, ${selectedStore.address.state} ${selectedStore.address.zipCode}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-responsive w-full inline-flex items-center justify-center bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
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
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}