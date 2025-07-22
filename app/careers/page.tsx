import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Careers | Häagen-Dazs',
  description: 'Join the Häagen-Dazs team. Explore career opportunities, discover our company culture, and find your next role in creating extraordinary ice cream experiences.',
  openGraph: {
    title: 'Careers at Häagen-Dazs',
    description: 'Be part of a team dedicated to crafting extraordinary ice cream experiences. Explore career opportunities at Häagen-Dazs.',
    images: ['/images/careers-hero.jpg'],
  },
}

export default function CareersPage() {
  const jobListings = [
    {
      title: 'Senior Food Scientist',
      department: 'Research & Development',
      location: 'London, UK',
      type: 'Full-time',
    },
    {
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Manchester, UK',
      type: 'Full-time',
    },
    {
      title: 'Supply Chain Coordinator',
      department: 'Operations',
      location: 'Birmingham, UK',
      type: 'Full-time',
    },
    {
      title: 'Brand Ambassador',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Part-time',
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Quality Control',
      location: 'Edinburgh, UK',
      type: 'Full-time',
    },
    {
      title: 'Sustainability Manager',
      department: 'Corporate',
      location: 'London, UK',
      type: 'Full-time',
    },
  ]

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs',
      icon: '🏥',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote options, and generous holiday allowance',
      icon: '⚖️',
    },
    {
      title: 'Professional Growth',
      description: 'Career development programs, training opportunities, and mentorship',
      icon: '📈',
    },
    {
      title: 'Ice Cream Perks',
      description: 'Free ice cream, product discounts, and exclusive tasting sessions',
      icon: '🍦',
    },
    {
      title: 'Retirement Benefits',
      description: 'Competitive pension scheme with company contributions',
      icon: '💰',
    },
    {
      title: 'Team Culture',
      description: 'Regular team events, celebrations, and a collaborative environment',
      icon: '🎉',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&auto=format&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Create Extraordinary Together
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join our passionate team in crafting the world's most luxurious ice cream experiences
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Häagen-Dazs, we believe that extraordinary ice cream starts with extraordinary people. 
                Our culture is built on passion, creativity, and a commitment to excellence in everything we do.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We foster an environment where innovation thrives, ideas are celebrated, and every team 
                member contributes to our legacy of crafting unforgettable experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-haagen-cream rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Innovation First</h3>
                    <p className="text-gray-600">We encourage creative thinking and bold ideas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-haagen-cream rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Collaborative Spirit</h3>
                    <p className="text-gray-600">Success is achieved through teamwork and mutual respect</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-haagen-cream rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Passion for Excellence</h3>
                    <p className="text-gray-600">We strive for perfection in every scoop</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job – we offer a career filled with opportunities, 
              growth, and of course, delicious perks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Current Opportunities</h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Explore our open positions below.
            </p>
          </div>

          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-haagen-burgundy text-white px-6 py-3 rounded-full font-semibold hover:bg-haagen-burgundy-dark transition inline-block text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="text-haagen-burgundy font-semibold hover:text-haagen-burgundy-dark text-lg"
            >
              View all positions →
            </a>
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <svg className="w-12 h-12 text-haagen-burgundy mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl text-gray-700 mb-6">
              "Working at Häagen-Dazs has been an incredible journey. The passion for quality and 
              innovation is evident in everything we do. I've had the opportunity to grow professionally 
              while being part of a team that truly cares about creating extraordinary experiences."
            </blockquote>
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop"
                  alt="Employee testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-gray-600">Product Development Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-haagen-burgundy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8">
            Take the first step towards an extraordinary career with Häagen-Dazs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-haagen-burgundy px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-haagen-burgundy transition"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}