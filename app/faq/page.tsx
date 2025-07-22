import { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions - Häagen-Dazs UK',
  description: 'Find answers to common questions about Häagen-Dazs ice cream, ingredients, allergens, store locations, and more.',
  path: '/faq',
});

const faqs = [
  {
    question: 'What makes Häagen-Dazs ice cream premium?',
    answer: 'Häagen-Dazs uses only the finest ingredients from around the world, including Belgian chocolate, vanilla from Madagascar, and strawberries from Poland. We use fresh cream, no artificial flavours or colours, and our ice cream has less air than regular ice cream, creating a denser, richer texture.',
    category: 'quality',
  },
  {
    question: 'Where can I buy Häagen-Dazs in the UK?',
    answer: 'Häagen-Dazs is available at major supermarkets including Tesco, Sainsbury\'s, ASDA, Morrisons, and Waitrose. You can also find us at selected convenience stores and our Häagen-Dazs shops. Use our store locator to find the nearest location.',
    category: 'shopping',
  },
  {
    question: 'Does Häagen-Dazs contain gluten?',
    answer: 'Many of our ice cream flavours are gluten-free, but some varieties containing cookies, brownies, or other bakery inclusions do contain gluten. Always check the ingredient list on the packaging for specific allergen information.',
    category: 'health',
  },
  {
    question: 'Are there dairy-free options available?',
    answer: 'Yes! We offer a range of non-dairy ice creams made with oat milk and coconut cream. These plant-based options deliver the same creamy texture and indulgent taste you expect from Häagen-Dazs.',
    category: 'health',
  },
  {
    question: 'How should I store Häagen-Dazs ice cream?',
    answer: 'Store Häagen-Dazs at -18°C or below in your freezer. For the best texture and taste, let it soften for 5-10 minutes at room temperature before serving. Once opened, consume within 2 weeks for optimal quality.',
    category: 'storage',
  },
  {
    question: 'What is the shelf life of Häagen-Dazs?',
    answer: 'When stored properly at -18°C or below, unopened Häagen-Dazs ice cream can be kept until the best before date printed on the packaging. Once opened, we recommend consuming within 2 weeks.',
    category: 'storage',
  },
  {
    question: 'Does Häagen-Dazs use real vanilla?',
    answer: 'Yes, we use real vanilla extract made from vanilla beans sourced from Madagascar. We never use artificial vanilla flavouring in our vanilla ice cream.',
    category: 'quality',
  },
  {
    question: 'Can I order Häagen-Dazs ice cream cakes?',
    answer: 'Yes, Häagen-Dazs ice cream cakes are available at selected stores. Contact your local Häagen-Dazs shop or check with major supermarkets for availability and ordering options.',
    category: 'shopping',
  },
  {
    question: 'Is Häagen-Dazs suitable for vegetarians?',
    answer: 'Most Häagen-Dazs ice creams are suitable for vegetarians. However, always check the packaging as some limited edition or special flavours may contain ingredients like gelatine.',
    category: 'health',
  },
  {
    question: 'What sizes are Häagen-Dazs products available in?',
    answer: 'Häagen-Dazs is available in various sizes including 460ml tubs, 500ml tubs, 95ml mini cups, ice cream bars, and ice cream sticks. Availability may vary by retailer.',
    category: 'shopping',
  },
];

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.haagen-dazs.co.uk' },
    { name: 'FAQ', url: 'https://www.haagen-dazs.co.uk/faq' },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'quality':
        return (
          <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'shopping':
        return (
          <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'health':
        return (
          <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'storage':
        return (
          <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="relative bg-white border-b">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1920&h=400&fit=crop"
              alt="Customer support and help concept with laptop and coffee"
              fill
              className="object-cover opacity-10"
              priority
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              {/* Question Mark Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-haagen-cream rounded-full mb-6">
                <svg className="w-10 h-10 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about Häagen-Dazs
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filters Image */}
            <div className="mb-8 text-center">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=200&fit=crop"
                alt="Ice cream and food ingredients representing various FAQ categories"
                width={800}
                height={200}
                className="rounded-lg mx-auto shadow-sm"
              />
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {getCategoryIcon(faq.category)}
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative py-16 bg-haagen-vanilla overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1920&h=400&fit=crop"
              alt="Customer service representative ready to help with questions"
              fill
              className="object-cover opacity-10"
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-6">
              <svg className="w-8 h-8 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our customer service team is here to help
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-haagen-burgundy text-white font-semibold rounded-lg hover:bg-haagen-burgundy-dark transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}