import ResponsiveImage from '@/components/ResponsiveImage';

export default function ExampleResponsivePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto responsive-padding-x py-8">
        <h1 className="text-responsive-3xl font-bold mb-8">Responsive Design Examples</h1>
        
        {/* Responsive Typography */}
        <section className="mb-12">
          <h2 className="text-responsive-2xl font-semibold mb-4">Responsive Typography</h2>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
            <p className="text-responsive-xs">Extra Small Text (text-responsive-xs)</p>
            <p className="text-responsive-sm">Small Text (text-responsive-sm)</p>
            <p className="text-responsive-base">Base Text (text-responsive-base)</p>
            <p className="text-responsive-lg">Large Text (text-responsive-lg)</p>
            <p className="text-responsive-xl">Extra Large Text (text-responsive-xl)</p>
            <p className="text-responsive-2xl">2XL Text (text-responsive-2xl)</p>
            <p className="text-responsive-3xl">3XL Text (text-responsive-3xl)</p>
          </div>
        </section>

        {/* Responsive Grid */}
        <section className="mb-12">
          <h2 className="text-responsive-2xl font-semibold mb-4">Responsive Grid</h2>
          <div className="grid-responsive">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card-responsive">
                <h3 className="text-responsive-lg font-semibold mb-2">Card {item}</h3>
                <p className="text-responsive-base text-gray-600">
                  This is a responsive card that adjusts its padding and styling based on screen size.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsive Images */}
        <section className="mb-12">
          <h2 className="text-responsive-2xl font-semibold mb-4">Responsive Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-responsive-lg font-semibold mb-2">Aspect Ratio 16:9</h3>
              <ResponsiveImage
                src="/api/placeholder/800/450"
                alt="16:9 aspect ratio example"
                aspectRatio="16:9"
                className="rounded-lg overflow-hidden"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-responsive-lg font-semibold mb-2">Aspect Ratio 1:1</h3>
              <ResponsiveImage
                src="/api/placeholder/600/600"
                alt="Square aspect ratio example"
                aspectRatio="1:1"
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </section>

        {/* Touch Targets */}
        <section className="mb-12">
          <h2 className="text-responsive-2xl font-semibold mb-4">Touch-Friendly Elements</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <button className="btn-responsive bg-red-600 text-white rounded-lg hover:bg-red-700">
              Responsive Button
            </button>
            <div className="flex flex-wrap gap-4">
              <button className="touch-target-sm px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                Small Touch Target
              </button>
              <button className="min-h-touch px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                Regular Touch Target
              </button>
            </div>
          </div>
        </section>

        {/* Responsive Utilities */}
        <section className="mb-12">
          <h2 className="text-responsive-2xl font-semibold mb-4">Responsive Utilities</h2>
          <div className="space-y-4">
            <div className="bg-red-100 p-4 rounded-lg mobile-only">
              <p className="text-responsive-base">This is only visible on mobile devices</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg desktop-only">
              <p className="text-responsive-base">This is only visible on desktop devices</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-responsive-base truncate-responsive">
                This text will be truncated on mobile devices but shown in full on larger screens. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>

        {/* Container Queries Example */}
        <section className="mb-12">
          <h2 className="text-responsive-2xl font-semibold mb-4">Container Queries</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="container-responsive bg-white p-6 rounded-lg shadow-sm">
              <div className="sm:container:block md:container:hidden">
                <p className="text-responsive-base">Visible when container is small to medium</p>
              </div>
              <div className="hidden md:container:block">
                <p className="text-responsive-base">Visible when container is medium or larger</p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Optimizations */}
        <section className="mb-12">
          <h2 className="text-responsive-2xl font-semibold mb-4">Mobile Performance</h2>
          <div className="bg-white p-6 rounded-lg shadow-mobile-optimize transform-mobile-optimize">
            <p className="text-responsive-base mb-4">
              This card uses mobile-optimized shadows and transforms for better performance on low-end devices.
            </p>
            <div className="animate-fade-in">
              <p className="text-responsive-sm text-gray-600">
                Animations are automatically reduced for users who prefer reduced motion.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}