import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Press & Media | Häagen-Dazs',
  description: 'Access Häagen-Dazs press releases, media resources, brand assets, and company news. Find the latest updates and download high-resolution images.',
  openGraph: {
    title: 'Press & Media | Häagen-Dazs',
    description: 'Your source for Häagen-Dazs news, press releases, and brand resources.',
    images: ['/images/press-hero.jpg'],
  },
}

export default function PressPage() {
  const pressReleases = [
    {
      date: '15 January 2025',
      title: 'Häagen-Dazs Launches New Plant-Based Collection',
      excerpt: 'Introducing four new dairy-free flavours crafted with the same dedication to quality and luxury.',
      category: 'Product Launch',
    },
    {
      date: '8 December 2024',
      title: 'Häagen-Dazs Achieves Carbon Neutral Production',
      excerpt: 'All UK facilities now operate with 100% renewable energy, marking a milestone in our sustainability journey.',
      category: 'Sustainability',
    },
    {
      date: '20 November 2024',
      title: 'Holiday Collection Features Limited Edition Flavours',
      excerpt: 'Celebrate the season with our exclusive Gingerbread Cookie and Peppermint Bark ice creams.',
      category: 'Seasonal',
    },
    {
      date: '5 October 2024',
      title: 'Partnership with Michelin-Starred Chefs',
      excerpt: 'Collaborating with renowned chefs to create extraordinary dessert experiences.',
      category: 'Partnership',
    },
  ]

  const brandAssets = [
    {
      title: 'Logo Pack',
      description: 'High-resolution logos in various formats',
      fileType: 'ZIP',
      size: '12.5 MB',
    },
    {
      title: 'Product Images',
      description: 'Professional photography of our ice cream range',
      fileType: 'ZIP',
      size: '48.3 MB',
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      fileType: 'PDF',
      size: '8.7 MB',
    },
    {
      title: 'Fact Sheet',
      description: 'Company history, facts, and key information',
      fileType: 'PDF',
      size: '2.1 MB',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=2000&auto=format&fit=crop"
          alt="Press conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Press & Media
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your source for Häagen-Dazs news, press releases, and brand resources
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Latest Press Releases</h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest announcements and company news
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{release.date}</span>
                    <span className="bg-haagen-cream text-haagen-burgundy px-3 py-1 rounded-full text-sm font-medium">
                      {release.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{release.title}</h3>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <a href="#" className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark">
                    Read full release →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="bg-haagen-burgundy text-white px-8 py-3 rounded-full font-semibold hover:bg-haagen-burgundy-dark transition inline-block"
            >
              View All Press Releases
            </a>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Media Resources</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access our comprehensive media kit including high-resolution images, 
                brand guidelines, and company information. All resources are available 
                for editorial use.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                For specific requests or additional materials, please contact our 
                media relations team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-haagen-burgundy mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>press@haagen-dazs.co.uk</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-haagen-burgundy mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+44 (0)20 7946 0000</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop"
                alt="Media resources"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Brand Assets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download official Häagen-Dazs logos, product images, and brand guidelines for your editorial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {brandAssets.map((asset, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-haagen-cream rounded-lg flex items-center justify-center mr-4">
                    {asset.fileType === 'ZIP' ? (
                      <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{asset.title}</h3>
                    <p className="text-gray-600 text-sm">{asset.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{asset.fileType} • {asset.size}</p>
                  </div>
                </div>
                <button className="bg-haagen-burgundy text-white p-3 rounded-lg hover:bg-haagen-burgundy-dark transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Media Gallery</h2>
            <p className="text-xl text-gray-600">
              Browse our collection of high-resolution images for editorial use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&auto=format&fit=crop"
                alt="Ice cream products"
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=600&auto=format&fit=crop"
                alt="Production facility"
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop"
                alt="Store experience"
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark"
            >
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-haagen-burgundy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-xl mb-8">
            For press inquiries, interview requests, or additional information, 
            please contact our media relations team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:press@haagen-dazs.co.uk"
              className="bg-white text-haagen-burgundy px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Contact Press Team
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-haagen-burgundy transition"
            >
              Media Request Form
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}