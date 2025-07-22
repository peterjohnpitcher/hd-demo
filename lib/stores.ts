export type StoreType = 'grocery' | 'haagen-dazs-shop' | 'convenience' | 'department';

export interface Store {
  id: string;
  name: string;
  type: StoreType;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  features: string[];
  availableProducts: string[];
}

export const stores: Store[] = [
  {
    id: 'hd-001',
    name: 'Häagen-Dazs Shop Times Square',
    type: 'haagen-dazs-shop',
    address: {
      street: '1500 Broadway',
      city: 'New York',
      state: 'NY',
      zipCode: '10036',
      country: 'USA'
    },
    coordinates: {
      lat: 40.7580,
      lng: -73.9855
    },
    phone: '(212) 555-0123',
    hours: {
      monday: '10:00 AM - 11:00 PM',
      tuesday: '10:00 AM - 11:00 PM',
      wednesday: '10:00 AM - 11:00 PM',
      thursday: '10:00 AM - 11:00 PM',
      friday: '10:00 AM - 12:00 AM',
      saturday: '10:00 AM - 12:00 AM',
      sunday: '11:00 AM - 10:00 PM'
    },
    features: ['Dine-in Seating', 'Custom Cakes', 'Gift Cards', 'WiFi'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'Limited Editions']
  },
  {
    id: 'hd-002',
    name: 'Whole Foods Market - Upper West Side',
    type: 'grocery',
    address: {
      street: '10 Columbus Circle',
      city: 'New York',
      state: 'NY',
      zipCode: '10019',
      country: 'USA'
    },
    coordinates: {
      lat: 40.7685,
      lng: -73.9832
    },
    phone: '(212) 555-0456',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM'
    },
    features: ['Organic Options', 'Pharmacy', 'Parking'],
    availableProducts: ['Ice Cream', 'Bars', 'Mini Cups']
  },
  {
    id: 'hd-003',
    name: 'Häagen-Dazs Beverly Hills',
    type: 'haagen-dazs-shop',
    address: {
      street: '321 N Beverly Dr',
      city: 'Beverly Hills',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    coordinates: {
      lat: 34.0736,
      lng: -118.3994
    },
    phone: '(310) 555-0789',
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '11:00 AM - 11:00 PM',
      sunday: '11:00 AM - 9:00 PM'
    },
    features: ['Outdoor Seating', 'Custom Cakes', 'Valet Parking', 'Gift Cards'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'Non-Dairy Options']
  },
  {
    id: 'hd-004',
    name: 'Target - Chicago State Street',
    type: 'department',
    address: {
      street: '1 S State St',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60603',
      country: 'USA'
    },
    coordinates: {
      lat: 41.8819,
      lng: -87.6278
    },
    phone: '(312) 555-0234',
    hours: {
      monday: '8:00 AM - 10:00 PM',
      tuesday: '8:00 AM - 10:00 PM',
      wednesday: '8:00 AM - 10:00 PM',
      thursday: '8:00 AM - 10:00 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 9:00 PM'
    },
    features: ['Pharmacy', 'Starbucks', 'Parking Garage'],
    availableProducts: ['Ice Cream', 'Bars', 'Mini Cups']
  },
  {
    id: 'hd-005',
    name: 'Häagen-Dazs Shop Miami Beach',
    type: 'haagen-dazs-shop',
    address: {
      street: '728 Ocean Drive',
      city: 'Miami Beach',
      state: 'FL',
      zipCode: '33139',
      country: 'USA'
    },
    coordinates: {
      lat: 25.7751,
      lng: -80.1314
    },
    phone: '(305) 555-0567',
    hours: {
      monday: '11:00 AM - 11:00 PM',
      tuesday: '11:00 AM - 11:00 PM',
      wednesday: '11:00 AM - 11:00 PM',
      thursday: '11:00 AM - 11:00 PM',
      friday: '11:00 AM - 12:00 AM',
      saturday: '11:00 AM - 12:00 AM',
      sunday: '11:00 AM - 11:00 PM'
    },
    features: ['Ocean View', 'Late Night', 'Custom Cakes', 'WiFi'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'Seasonal Specials']
  },
  {
    id: 'hd-006',
    name: '7-Eleven Downtown Seattle',
    type: 'convenience',
    address: {
      street: '400 Pine St',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA'
    },
    coordinates: {
      lat: 47.6101,
      lng: -122.3371
    },
    phone: '(206) 555-0890',
    hours: {
      monday: '24 Hours',
      tuesday: '24 Hours',
      wednesday: '24 Hours',
      thursday: '24 Hours',
      friday: '24 Hours',
      saturday: '24 Hours',
      sunday: '24 Hours'
    },
    features: ['24/7 Service', 'ATM', 'Coffee Bar'],
    availableProducts: ['Ice Cream', 'Bars']
  },
  {
    id: 'hd-007',
    name: 'Kroger - Houston Heights',
    type: 'grocery',
    address: {
      street: '1035 N Shepherd Dr',
      city: 'Houston',
      state: 'TX',
      zipCode: '77008',
      country: 'USA'
    },
    coordinates: {
      lat: 29.7705,
      lng: -95.4096
    },
    phone: '(713) 555-0123',
    hours: {
      monday: '6:00 AM - 11:00 PM',
      tuesday: '6:00 AM - 11:00 PM',
      wednesday: '6:00 AM - 11:00 PM',
      thursday: '6:00 AM - 11:00 PM',
      friday: '6:00 AM - 11:00 PM',
      saturday: '6:00 AM - 11:00 PM',
      sunday: '6:00 AM - 11:00 PM'
    },
    features: ['Pharmacy', 'Fuel Station', 'Pickup Service'],
    availableProducts: ['Ice Cream', 'Bars', 'Mini Cups', 'Non-Dairy Options']
  },
  {
    id: 'hd-008',
    name: 'Häagen-Dazs Shop Boston Faneuil Hall',
    type: 'haagen-dazs-shop',
    address: {
      street: '4 South Market Building',
      city: 'Boston',
      state: 'MA',
      zipCode: '02109',
      country: 'USA'
    },
    coordinates: {
      lat: 42.3601,
      lng: -71.0547
    },
    phone: '(617) 555-0456',
    hours: {
      monday: '10:00 AM - 9:00 PM',
      tuesday: '10:00 AM - 9:00 PM',
      wednesday: '10:00 AM - 9:00 PM',
      thursday: '10:00 AM - 9:00 PM',
      friday: '10:00 AM - 10:00 PM',
      saturday: '10:00 AM - 10:00 PM',
      sunday: '11:00 AM - 8:00 PM'
    },
    features: ['Historic Location', 'Tourist Area', 'Gift Cards', 'Custom Cakes'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'Souvenirs']
  },
  {
    id: 'hd-009',
    name: 'Safeway - San Francisco Castro',
    type: 'grocery',
    address: {
      street: '2020 Market St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94114',
      country: 'USA'
    },
    coordinates: {
      lat: 37.7670,
      lng: -122.4294
    },
    phone: '(415) 555-0789',
    hours: {
      monday: '6:00 AM - 12:00 AM',
      tuesday: '6:00 AM - 12:00 AM',
      wednesday: '6:00 AM - 12:00 AM',
      thursday: '6:00 AM - 12:00 AM',
      friday: '6:00 AM - 12:00 AM',
      saturday: '6:00 AM - 12:00 AM',
      sunday: '6:00 AM - 12:00 AM'
    },
    features: ['Pharmacy', 'Starbucks', 'Parking'],
    availableProducts: ['Ice Cream', 'Bars', 'Mini Cups']
  },
  {
    id: 'hd-010',
    name: 'Häagen-Dazs Shop Las Vegas Strip',
    type: 'haagen-dazs-shop',
    address: {
      street: '3500 Las Vegas Blvd S',
      city: 'Las Vegas',
      state: 'NV',
      zipCode: '89109',
      country: 'USA'
    },
    coordinates: {
      lat: 36.1215,
      lng: -115.1739
    },
    phone: '(702) 555-0234',
    hours: {
      monday: '10:00 AM - 12:00 AM',
      tuesday: '10:00 AM - 12:00 AM',
      wednesday: '10:00 AM - 12:00 AM',
      thursday: '10:00 AM - 12:00 AM',
      friday: '10:00 AM - 1:00 AM',
      saturday: '10:00 AM - 1:00 AM',
      sunday: '10:00 AM - 12:00 AM'
    },
    features: ['Late Night', 'Casino Access', 'Custom Cakes', 'Air Conditioning'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'Special Vegas Flavors']
  },
  {
    id: 'hd-011',
    name: 'Walmart Supercenter - Phoenix',
    type: 'department',
    address: {
      street: '6150 N 35th Ave',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85017',
      country: 'USA'
    },
    coordinates: {
      lat: 33.5261,
      lng: -112.1326
    },
    phone: '(602) 555-0567',
    hours: {
      monday: '6:00 AM - 11:00 PM',
      tuesday: '6:00 AM - 11:00 PM',
      wednesday: '6:00 AM - 11:00 PM',
      thursday: '6:00 AM - 11:00 PM',
      friday: '6:00 AM - 11:00 PM',
      saturday: '6:00 AM - 11:00 PM',
      sunday: '6:00 AM - 11:00 PM'
    },
    features: ['Pharmacy', 'Auto Center', 'Garden Center', 'Pickup'],
    availableProducts: ['Ice Cream', 'Bars', 'Mini Cups']
  },
  {
    id: 'hd-012',
    name: 'Häagen-Dazs Shop Philadelphia',
    type: 'haagen-dazs-shop',
    address: {
      street: '117 S 16th St',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19102',
      country: 'USA'
    },
    coordinates: {
      lat: 39.9511,
      lng: -75.1668
    },
    phone: '(215) 555-0890',
    hours: {
      monday: '11:00 AM - 9:00 PM',
      tuesday: '11:00 AM - 9:00 PM',
      wednesday: '11:00 AM - 9:00 PM',
      thursday: '11:00 AM - 9:00 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '12:00 PM - 8:00 PM'
    },
    features: ['Downtown Location', 'Custom Cakes', 'Gift Cards', 'WiFi'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'Limited Editions']
  },
  {
    id: 'hd-013',
    name: 'Publix - Atlanta Midtown',
    type: 'grocery',
    address: {
      street: '1001 Peachtree St NE',
      city: 'Atlanta',
      state: 'GA',
      zipCode: '30309',
      country: 'USA'
    },
    coordinates: {
      lat: 33.7817,
      lng: -84.3857
    },
    phone: '(404) 555-0123',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM'
    },
    features: ['Pharmacy', 'Deli', 'Bakery', 'Parking'],
    availableProducts: ['Ice Cream', 'Bars', 'Mini Cups', 'Non-Dairy Options']
  },
  {
    id: 'hd-014',
    name: 'CVS Pharmacy - Denver Downtown',
    type: 'convenience',
    address: {
      street: '1575 California St',
      city: 'Denver',
      state: 'CO',
      zipCode: '80202',
      country: 'USA'
    },
    coordinates: {
      lat: 39.7469,
      lng: -104.9892
    },
    phone: '(303) 555-0456',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 9:00 PM'
    },
    features: ['Pharmacy', 'Photo Center', 'ATM'],
    availableProducts: ['Ice Cream', 'Bars']
  },
  {
    id: 'hd-015',
    name: 'Häagen-Dazs Shop Washington DC',
    type: 'haagen-dazs-shop',
    address: {
      street: '3222 M St NW',
      city: 'Washington',
      state: 'DC',
      zipCode: '20007',
      country: 'USA'
    },
    coordinates: {
      lat: 38.9051,
      lng: -77.0641
    },
    phone: '(202) 555-0789',
    hours: {
      monday: '11:00 AM - 9:00 PM',
      tuesday: '11:00 AM - 9:00 PM',
      wednesday: '11:00 AM - 9:00 PM',
      thursday: '11:00 AM - 9:00 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '12:00 PM - 8:00 PM'
    },
    features: ['Georgetown Location', 'Custom Cakes', 'Outdoor Seating', 'Gift Cards'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'DC Exclusives']
  },
  {
    id: 'hd-016',
    name: 'HEB - Austin Mueller',
    type: 'grocery',
    address: {
      street: '1801 E 51st St',
      city: 'Austin',
      state: 'TX',
      zipCode: '78723',
      country: 'USA'
    },
    coordinates: {
      lat: 30.3012,
      lng: -97.7088
    },
    phone: '(512) 555-0234',
    hours: {
      monday: '6:00 AM - 11:00 PM',
      tuesday: '6:00 AM - 11:00 PM',
      wednesday: '6:00 AM - 11:00 PM',
      thursday: '6:00 AM - 11:00 PM',
      friday: '6:00 AM - 11:00 PM',
      saturday: '6:00 AM - 11:00 PM',
      sunday: '6:00 AM - 11:00 PM'
    },
    features: ['Curbside Pickup', 'Pharmacy', 'Wine & Beer', 'BBQ'],
    availableProducts: ['Ice Cream', 'Bars', 'Mini Cups', 'Texas Favorites']
  },
  {
    id: 'hd-017',
    name: 'Häagen-Dazs Shop Portland Pearl',
    type: 'haagen-dazs-shop',
    address: {
      street: '1210 NW 10th Ave',
      city: 'Portland',
      state: 'OR',
      zipCode: '97209',
      country: 'USA'
    },
    coordinates: {
      lat: 45.5313,
      lng: -122.6814
    },
    phone: '(503) 555-0567',
    hours: {
      monday: '11:00 AM - 9:00 PM',
      tuesday: '11:00 AM - 9:00 PM',
      wednesday: '11:00 AM - 9:00 PM',
      thursday: '11:00 AM - 9:00 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '12:00 PM - 8:00 PM'
    },
    features: ['Pearl District', 'Custom Cakes', 'Local Art', 'WiFi'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'Vegan Options']
  },
  {
    id: 'hd-018',
    name: 'Walgreens - Minneapolis Downtown',
    type: 'convenience',
    address: {
      street: '15 S 7th St',
      city: 'Minneapolis',
      state: 'MN',
      zipCode: '55402',
      country: 'USA'
    },
    coordinates: {
      lat: 44.9778,
      lng: -93.2719
    },
    phone: '(612) 555-0890',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 9:00 PM'
    },
    features: ['Pharmacy', 'Photo Services', 'Skyway Access'],
    availableProducts: ['Ice Cream', 'Bars']
  },
  {
    id: 'hd-019',
    name: 'Trader Joe\'s - Nashville',
    type: 'grocery',
    address: {
      street: '3909 Hillsboro Pike',
      city: 'Nashville',
      state: 'TN',
      zipCode: '37215',
      country: 'USA'
    },
    coordinates: {
      lat: 36.1026,
      lng: -86.8170
    },
    phone: '(615) 555-0123',
    hours: {
      monday: '8:00 AM - 9:00 PM',
      tuesday: '8:00 AM - 9:00 PM',
      wednesday: '8:00 AM - 9:00 PM',
      thursday: '8:00 AM - 9:00 PM',
      friday: '8:00 AM - 9:00 PM',
      saturday: '8:00 AM - 9:00 PM',
      sunday: '8:00 AM - 9:00 PM'
    },
    features: ['Unique Products', 'Free Samples', 'Parking'],
    availableProducts: ['Ice Cream', 'Mini Cups', 'Seasonal Flavors']
  },
  {
    id: 'hd-020',
    name: 'Häagen-Dazs Shop San Diego Gaslamp',
    type: 'haagen-dazs-shop',
    address: {
      street: '435 Fifth Ave',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
      country: 'USA'
    },
    coordinates: {
      lat: 32.7110,
      lng: -117.1598
    },
    phone: '(619) 555-0456',
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '11:00 AM - 11:00 PM',
      sunday: '11:00 AM - 9:00 PM'
    },
    features: ['Gaslamp Quarter', 'Late Night', 'Custom Cakes', 'Pet Friendly Patio'],
    availableProducts: ['Ice Cream', 'Bars', 'Cakes', 'Beverages', 'California Exclusives']
  }
];

// Helper function to calculate distance between two coordinates (in miles)
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Helper function to get stores by type
export function getStoresByType(type: StoreType): Store[] {
  return stores.filter(store => store.type === type);
}

// Helper function to search stores by city or zip code
export function searchStores(query: string): Store[] {
  const lowerQuery = query.toLowerCase().trim();
  return stores.filter(store => 
    store.address.city.toLowerCase().includes(lowerQuery) ||
    store.address.zipCode.includes(lowerQuery) ||
    store.address.state.toLowerCase().includes(lowerQuery) ||
    store.name.toLowerCase().includes(lowerQuery)
  );
}

// Helper function to get nearby stores
export function getNearbyStores(lat: number, lng: number, maxDistance: number = 10): Store[] {
  return stores
    .map(store => ({
      ...store,
      distance: calculateDistance(lat, lng, store.coordinates.lat, store.coordinates.lng)
    }))
    .filter(store => store.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);
}

// Helper function to get store by ID
export function getStoreById(id: string): Store | undefined {
  return stores.find(store => store.id === id);
}