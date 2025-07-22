import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'How to Store Ice Cream - Complete Storage Guide | Häagen-Dazs',
  description: 'Learn the best practices for storing ice cream, including optimal temperatures, freezer placement, preventing freezer burn, and maintaining perfect texture.',
  path: '/guides/ice-cream-storage',
  image: '/images/guides/ice-cream-storage-guide.jpg'
})

export default function IceCreamStoragePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-haagen-dazs-burgundy to-haagen-dazs-burgundy/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Complete Guide to Storing Ice Cream
            </h1>
            <p className="text-xl md:text-2xl text-gold-light">
              Preserve the perfect texture and flavor of your favorite treats
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Proper storage is essential for maintaining the luxurious texture and rich flavors of premium ice cream. 
                Whether you're savoring Häagen-Dazs or any other frozen treat, following these guidelines will ensure 
                every spoonful is as delightful as the first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimal Storage Temperature */}
      <section className="py-12 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              1. Optimal Storage Temperature
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-xl font-semibold mb-3">The Golden Rule: -5°F to 0°F (-20°C to -18°C)</h3>
                  <p className="text-gray-700">
                    Maintain your freezer at this temperature range for optimal ice cream storage. This prevents 
                    ice crystals from forming while keeping the ice cream firm enough to scoop.
                  </p>
                </div>
                <div className="bg-haagen-dazs-burgundy/5 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Pro Tip:</strong> Use a freezer thermometer to monitor temperature accurately. 
                    Home freezers can fluctuate, especially when frequently opened.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freezer Placement Tips */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              2. Freezer Placement Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-haagen-dazs-burgundy">Best Locations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span className="text-gray-700">Back of the freezer - most stable temperature</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span className="text-gray-700">Bottom shelf - cold air sinks, maintaining consistency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span className="text-gray-700">Away from the freezer light - prevents slight warming</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-haagen-dazs-burgundy">Avoid These Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">Freezer door - temperature fluctuates with opening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">Near vents - can cause uneven freezing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">Front of freezer - exposed to warm air</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventing Freezer Burn */}
      <section className="py-12 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              3. How to Prevent Freezer Burn
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-3">The Air-Tight Solution</h3>
                  <p className="text-gray-700 mb-4">
                    Freezer burn occurs when ice cream is exposed to air, causing moisture to evaporate and 
                    ice crystals to form on the surface.
                  </p>
                  <div className="bg-gold-light/10 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Häagen-Dazs Advantage:</strong> Our containers are designed with tight-fitting lids 
                      that minimize air exposure, helping preserve quality longer.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Prevention Methods:</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold font-semibold mr-3">1.</span>
                      <span className="text-gray-700">Press plastic wrap directly onto the ice cream surface before replacing the lid</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold font-semibold mr-3">2.</span>
                      <span className="text-gray-700">Store containers upside down to create an air-tight seal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold font-semibold mr-3">3.</span>
                      <span className="text-gray-700">Use the ice cream within 2-3 months for best quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold font-semibold mr-3">4.</span>
                      <span className="text-gray-700">Avoid storing partially empty containers - transfer to smaller containers</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proper Container Sealing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              4. Proper Container Sealing
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Step-by-Step Sealing</h3>
                  <ol className="space-y-3">
                    <li className="text-gray-700">
                      <span className="font-semibold">1.</span> Level the ice cream surface with a clean spoon
                    </li>
                    <li className="text-gray-700">
                      <span className="font-semibold">2.</span> Place plastic wrap directly on the ice cream
                    </li>
                    <li className="text-gray-700">
                      <span className="font-semibold">3.</span> Press out any air bubbles
                    </li>
                    <li className="text-gray-700">
                      <span className="font-semibold">4.</span> Replace the original lid tightly
                    </li>
                    <li className="text-gray-700">
                      <span className="font-semibold">5.</span> Consider double-bagging in a freezer bag for long-term storage
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Container Types</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gold pl-4">
                      <h4 className="font-semibold">Original Containers</h4>
                      <p className="text-gray-700 text-sm">
                        Häagen-Dazs containers are engineered for optimal storage with secure lids
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-semibold">Airtight Containers</h4>
                      <p className="text-gray-700 text-sm">
                        If transferring, use containers with locking lids
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-semibold">Freezer-Safe Glass</h4>
                      <p className="text-gray-700 text-sm">
                        Leave headspace for expansion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thawing and Re-freezing Guidelines */}
      <section className="py-12 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              5. Thawing and Re-freezing Guidelines
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-haagen-dazs-burgundy">Proper Thawing Technique</h3>
                  <div className="bg-gold-light/10 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      For the perfect scooping consistency, let ice cream soften at room temperature for 
                      <strong> 5-10 minutes</strong> before serving. Premium ice creams like Häagen-Dazs may 
                      need slightly less time due to their dense texture.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Tip:</strong> Run your ice cream scoop under hot water for easier serving.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Re-freezing Warning</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      <strong>Never refreeze completely melted ice cream.</strong> Once ice cream melts, 
                      the emulsion breaks down, and refreezing will result in:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">Icy, grainy texture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">Separation of ingredients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">Loss of creamy consistency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">Potential food safety issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Quality Deterioration */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              6. Signs of Quality Deterioration
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700 mb-6">
                Even with proper storage, ice cream quality can decline over time. Watch for these signs:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-haagen-dazs-burgundy">Visual Signs</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Ice crystals on surface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Discoloration or fading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Shrinkage from container sides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Visible separation of ingredients</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-haagen-dazs-burgundy">Texture & Taste Signs</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Gummy or sticky texture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Icy or grainy consistency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Off-flavors or freezer taste</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">▸</span>
                      <span className="text-gray-700">Loss of original flavor intensity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Duration Recommendations */}
      <section className="py-12 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              7. Storage Duration Recommendations
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-haagen-dazs-burgundy">
                      <th className="text-left py-3 px-4">Storage Condition</th>
                      <th className="text-left py-3 px-4">Maximum Duration</th>
                      <th className="text-left py-3 px-4">Quality Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Unopened, properly stored</td>
                      <td className="py-3 px-4">2-3 months</td>
                      <td className="py-3 px-4 text-green-600">Excellent</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Opened, well-sealed</td>
                      <td className="py-3 px-4">1-2 months</td>
                      <td className="py-3 px-4 text-green-600">Very Good</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Opened, basic sealing</td>
                      <td className="py-3 px-4">2-3 weeks</td>
                      <td className="py-3 px-4 text-yellow-600">Good</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Frequently opened</td>
                      <td className="py-3 px-4">1-2 weeks</td>
                      <td className="py-3 px-4 text-orange-600">Fair</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Poor storage conditions</td>
                      <td className="py-3 px-4">Less than 1 week</td>
                      <td className="py-3 px-4 text-red-600">Poor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-haagen-dazs-burgundy/5 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> While ice cream remains safe to eat indefinitely when frozen, 
                  quality begins to decline after these periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Maintaining Texture */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              8. Tips for Maintaining Perfect Texture
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">🌡️</div>
                <h3 className="text-lg font-semibold mb-3">Temperature Stability</h3>
                <p className="text-gray-700 text-sm">
                  Avoid temperature fluctuations. Each freeze-thaw cycle damages texture. 
                  Keep your freezer door closed as much as possible.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">🥄</div>
                <h3 className="text-lg font-semibold mb-3">Serving Technique</h3>
                <p className="text-gray-700 text-sm">
                  Scoop from different areas rather than creating a well in the center. 
                  This prevents tunneling and maintains even consistency.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-lg font-semibold mb-3">Container Care</h3>
                <p className="text-gray-700 text-sm">
                  Keep containers clean and dry. Moisture on the outside can freeze and 
                  make containers difficult to open, potentially damaging the seal.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-gold-light/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">The Häagen-Dazs Difference</h3>
              <p className="text-gray-700">
                Our ice cream's dense texture and minimal air content means it maintains quality longer 
                than regular ice cream. The rich, creamy consistency is more resistant to texture changes 
                when stored properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Storage Mistakes */}
      <section className="py-12 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              9. Common Storage Mistakes to Avoid
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">❌ Storing in the freezer door</h3>
                  <p className="text-gray-700">
                    The door is the warmest part of your freezer and experiences the most temperature fluctuation.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">❌ Leaving containers unsealed</h3>
                  <p className="text-gray-700">
                    Even a slightly loose lid allows air in, leading to freezer burn and off-flavors.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">❌ Refreezing melted ice cream</h3>
                  <p className="text-gray-700">
                    Once melted, the structure is permanently damaged and cannot be restored by refreezing.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">❌ Using a wet scoop</h3>
                  <p className="text-gray-700">
                    Introducing moisture creates ice crystals. Always use a dry scoop or run it under hot water and dry thoroughly.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">❌ Storing near strong odors</h3>
                  <p className="text-gray-700">
                    Ice cream can absorb flavors from nearby foods. Keep it away from items with strong odors.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold mb-2">❌ Ignoring expiration dates</h3>
                  <p className="text-gray-700">
                    While frozen foods are safe indefinitely, quality declines over time. Check dates for optimal enjoyment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Guide */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-8 text-center">
              Quick Reference Storage Guide
            </h2>
            <div className="bg-gradient-to-br from-haagen-dazs-burgundy to-haagen-dazs-burgundy/90 text-white rounded-lg shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold-light">DO's</h3>
                  <ul className="space-y-2">
                    <li>✓ Store at -5°F to 0°F</li>
                    <li>✓ Keep in back of freezer</li>
                    <li>✓ Use plastic wrap under lid</li>
                    <li>✓ Consume within 2-3 months</li>
                    <li>✓ Let soften 5-10 minutes before serving</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold-light">DON'Ts</h3>
                  <ul className="space-y-2">
                    <li>✗ Store in freezer door</li>
                    <li>✗ Refreeze melted ice cream</li>
                    <li>✗ Leave containers unsealed</li>
                    <li>✗ Use wet utensils</li>
                    <li>✗ Store near odorous foods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-b from-white to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-haagen-dazs-burgundy mb-6">
              Enjoy Every Spoonful
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              With proper storage, every serving of Häagen-Dazs can deliver the same extraordinary 
              experience as your first taste. Our carefully crafted containers and premium ingredients 
              are designed to maintain quality, but following these storage guidelines ensures you 
              enjoy the perfect texture and flavor every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-haagen-dazs-burgundy text-white px-8 py-3 rounded-full hover:bg-haagen-dazs-burgundy/90 transition-colors duration-300"
              >
                Explore Our Products
              </Link>
              <Link
                href="/guides"
                className="inline-block bg-white text-haagen-dazs-burgundy border-2 border-haagen-dazs-burgundy px-8 py-3 rounded-full hover:bg-haagen-dazs-burgundy hover:text-white transition-colors duration-300"
              >
                More Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}