import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sustainability | Häagen-Dazs',
  description: 'Discover our commitment to environmental sustainability, responsible sourcing, and eco-friendly practices at Häagen-Dazs.',
  openGraph: {
    title: 'Sustainability | Häagen-Dazs',
    description: 'Our commitment to creating extraordinary ice cream while protecting our planet for future generations.',
    images: ['/images/sustainability-hero.jpg'],
  },
}

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=2000&auto=format&fit=crop"
          alt="Sustainable farming landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Crafting a Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Our commitment to creating extraordinary ice cream while protecting our planet for future generations
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Environmental Promise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Häagen-Dazs, we believe that extraordinary ingredients deserve extraordinary care. 
              That's why we're committed to sustainable practices at every step of our journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Carbon Neutral by 2025</h3>
              <p className="text-gray-600">
                We're working towards carbon neutrality across all our operations, from production to delivery.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Packaging</h3>
              <p className="text-gray-600">
                100% recyclable packaging materials and ongoing efforts to reduce plastic usage across our product range.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Renewable Energy</h3>
              <p className="text-gray-600">
                Transitioning to 100% renewable energy sources in all our manufacturing facilities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Sourcing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Responsible Sourcing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every ingredient in our ice cream is carefully selected not just for its exceptional quality, 
                but also for its sustainable origins. We partner with farmers and suppliers who share our 
                commitment to environmental stewardship.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fair Trade certified cocoa from sustainable farms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Vanilla beans from Rainforest Alliance certified farms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cage-free eggs from humane farms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dairy from farms practicing regenerative agriculture</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&auto=format&fit=crop"
                alt="Sustainable vanilla farming"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Practices */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Eco-Friendly Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From production to packaging, we're constantly innovating to reduce our environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
                  alt="Water conservation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Water Conservation</h3>
                <p className="text-gray-600 mb-4">
                  We've reduced water usage by 40% in our production facilities through advanced 
                  recycling systems and efficient cleaning processes.
                </p>
                <a href="#" className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark">
                  Learn more →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop"
                  alt="Waste reduction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Zero Waste Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Our goal is to achieve zero waste to landfill by 2025. Currently, 95% of our 
                  production waste is recycled or composted.
                </p>
                <a href="#" className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-haagen-burgundy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Our Journey</h2>
          <p className="text-xl mb-8">
            Together, we can create a more sustainable future while enjoying the extraordinary 
            ice cream experiences you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-haagen-burgundy px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Shop Sustainably
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-haagen-burgundy transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}