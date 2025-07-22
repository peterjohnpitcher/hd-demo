import { Store, StoreType } from '@/lib/stores';

interface StoreCardProps {
  store: Store & { distance?: number };
  onClick: () => void;
  isSelected?: boolean;
}

export default function StoreCard({ store, onClick, isSelected = false }: StoreCardProps) {
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
        return 'bg-red-100 text-red-800 border-red-200';
      case 'grocery':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'convenience':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'department':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTodayHours = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    const todayKey = days[today] as keyof typeof store.hours;
    return store.hours[todayKey];
  };

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={`card-responsive border-2 cursor-pointer transition-all duration-200 hover:shadow-md transform-mobile-optimize ${
        isSelected ? 'border-red-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
      }`}
      aria-label={`${store.name} - ${store.type === 'haagen-dazs-shop' ? 'Häagen-Dazs Shop' : getStoreTypeLabel(store.type)} - ${store.distance ? `${store.distance.toFixed(1)} miles away` : ''}`}
      aria-selected={isSelected}
    >
      {/* Store Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-responsive-lg font-semibold text-gray-900 line-clamp-1">
            {store.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-responsive-xs font-medium border ${getStoreTypeColor(store.type)}`}>
              {getStoreTypeLabel(store.type)}
            </span>
            {store.distance !== undefined && (
              <span className="text-responsive-xs text-gray-500">
                {store.distance.toFixed(1)} mi
              </span>
            )}
          </div>
        </div>
        {store.type === 'haagen-dazs-shop' && (
          <svg className="h-6 w-6 text-red-500 flex-shrink-0 ml-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </div>

      {/* Address */}
      <div className="mb-3">
        <p className="text-responsive-sm text-gray-600 line-clamp-2">
          {store.address.street}<br />
          {store.address.city}, {store.address.state} {store.address.zipCode}
        </p>
      </div>

      {/* Today's Hours */}
      <div className="flex items-center justify-between text-responsive-sm" role="status">
        <span className="text-gray-500">Today:</span>
        <span className="font-medium text-gray-900" aria-label={`Open ${getTodayHours()}`}>{getTodayHours()}</span>
      </div>

      {/* Quick Actions */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
        <a
          href={`tel:${store.phone}`}
          onClick={(e) => e.stopPropagation()}
          className="text-responsive-sm text-red-600 hover:text-red-700 font-medium flex items-center touch-target-sm"
          aria-label={`Call ${store.name} at ${store.phone}`}
        >
          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            `${store.address.street}, ${store.address.city}, ${store.address.state} ${store.address.zipCode}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-responsive-sm text-red-600 hover:text-red-700 font-medium flex items-center touch-target-sm"
          aria-label={`Get directions to ${store.name}`}
        >
          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Directions
        </a>
      </div>

      {/* Special Features for Häagen-Dazs Shops */}
      {store.type === 'haagen-dazs-shop' && store.features.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100" role="list" aria-label="Store features">
          <div className="flex flex-wrap gap-1">
            {store.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded text-responsive-xs font-medium bg-gray-100 text-gray-700"
                role="listitem"
              >
                {feature}
              </span>
            ))}
            {store.features.length > 3 && (
              <span className="text-responsive-xs text-gray-500">
                +{store.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}