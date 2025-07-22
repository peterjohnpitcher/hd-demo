import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Is Ice Cream Made? Complete Guide to Ice Cream Production | Häagen-Dazs',
  description: 'Discover the fascinating process of how ice cream is made, from selecting ingredients to churning and freezing. Learn about traditional and modern ice cream making methods.',
  keywords: 'how is ice cream made, ice cream production, ice cream manufacturing, making ice cream, ice cream process',
  openGraph: {
    title: 'How Is Ice Cream Made? Complete Guide to Ice Cream Production',
    description: 'Learn the art and science behind ice cream making, from ingredient selection to the final frozen treat.',
    type: 'article',
    images: ['/images/guides/ice-cream-making-process.jpg'],
  },
  alternates: {
    canonical: 'https://haagen-dazs.co.uk/guides/how-ice-cream-is-made',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Is Ice Cream Made? Complete Guide to Ice Cream Production',
  description: 'Comprehensive guide explaining the ice cream making process, from ingredients to production methods.',
  author: {
    '@type': 'Organization',
    name: 'Häagen-Dazs',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Häagen-Dazs UK',
    logo: {
      '@type': 'ImageObject',
      url: 'https://haagen-dazs.co.uk/logo.png',
    },
  },
  datePublished: '2024-01-15',
  dateModified: '2024-01-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://haagen-dazs.co.uk/guides/how-ice-cream-is-made',
  },
};

export default function HowIceCreamIsMadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/images/guides/ice-cream-making-hero.jpg"
            alt="Ice cream production process showing churning and mixing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">How Is Ice Cream Made?</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Discover the art and science behind creating the world's most beloved frozen dessert
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Ice cream is more than just a frozen treat – it's a carefully crafted combination of science, art, and tradition. 
              Understanding how ice cream is made reveals why premium brands like Häagen-Dazs stand apart from the rest. 
              From selecting the finest ingredients to mastering the perfect texture, every step in the ice cream making process 
              contributes to the final product's quality and taste.
            </p>
            <p className="text-lg leading-relaxed">
              In this comprehensive guide, we'll explore the complete ice cream production process, from the basic principles 
              that govern ice cream making to the sophisticated techniques used by premium manufacturers. Whether you're curious 
              about commercial production or interested in making ice cream at home, this guide will provide you with a deep 
              understanding of how your favorite frozen dessert comes to life.
            </p>
          </section>

          {/* Table of Contents */}
          <nav className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><a href="#ingredients" className="text-blue-600 hover:underline">Essential Ingredients in Ice Cream</a></li>
              <li><a href="#science" className="text-blue-600 hover:underline">The Science Behind Ice Cream</a></li>
              <li><a href="#commercial-process" className="text-blue-600 hover:underline">Commercial Ice Cream Production</a></li>
              <li><a href="#home-making" className="text-blue-600 hover:underline">Making Ice Cream at Home</a></li>
              <li><a href="#quality-factors" className="text-blue-600 hover:underline">What Makes Premium Ice Cream Different</a></li>
              <li><a href="#haagen-dazs-process" className="text-blue-600 hover:underline">The Häagen-Dazs Difference</a></li>
              <li><a href="#flavoring" className="text-blue-600 hover:underline">Creating Different Flavors</a></li>
              <li><a href="#texture-secrets" className="text-blue-600 hover:underline">Achieving the Perfect Texture</a></li>
            </ol>
          </nav>

          {/* Essential Ingredients */}
          <section id="ingredients" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Essential Ingredients in Ice Cream</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              The foundation of any great ice cream lies in its ingredients. While recipes may vary, most ice creams contain 
              a combination of the following essential components:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Dairy Products</h3>
                <p className="mb-4">
                  The heart of traditional ice cream is dairy. This typically includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cream:</strong> Provides richness and smooth texture. Heavy cream contains 36-40% fat, which is crucial for creating that luxurious mouthfeel.</li>
                  <li><strong>Milk:</strong> Adds liquid volume and some protein while reducing the overall fat content compared to using cream alone.</li>
                  <li><strong>Milk Solids:</strong> Sometimes added in powder form to increase the protein content without adding more liquid.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Sweeteners</h3>
                <p className="mb-4">
                  Sugar does more than just sweeten ice cream – it affects texture and freezing properties:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Granulated Sugar:</strong> The most common sweetener, providing sweetness and helping to lower the freezing point.</li>
                  <li><strong>Corn Syrup:</strong> Sometimes used to improve texture and prevent crystallization.</li>
                  <li><strong>Honey or Maple Syrup:</strong> Natural alternatives that add unique flavors.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Egg Yolks (for Custard-Based Ice Creams)</h3>
                <p className="mb-4">
                  Many premium ice creams, including several <Link href="/products" className="text-blue-600 hover:underline">Häagen-Dazs varieties</Link>, 
                  use egg yolks to create a custard base. Egg yolks contribute:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Natural emulsification properties</li>
                  <li>Rich, creamy texture</li>
                  <li>Golden color</li>
                  <li>Enhanced flavor depth</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Stabilizers and Emulsifiers</h3>
                <p className="mb-4">
                  While not always necessary in homemade ice cream, commercial producers often use:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Natural Stabilizers:</strong> Such as guar gum or carrageenan, which help prevent ice crystal formation.</li>
                  <li><strong>Emulsifiers:</strong> Help blend fat and water components smoothly.</li>
                </ul>
                <p className="mt-4 text-sm italic">
                  Note: Premium brands like Häagen-Dazs pride themselves on using minimal additives, relying instead on 
                  high-quality ingredients and proper technique to achieve superior texture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Flavorings</h3>
                <p className="mb-4">
                  The possibilities are endless when it comes to flavoring ice cream:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Vanilla:</strong> The classic base flavor, using real vanilla beans or extract</li>
                  <li><strong>Chocolate:</strong> Cocoa powder or melted chocolate</li>
                  <li><strong>Fruits:</strong> Fresh, frozen, or in puree form</li>
                  <li><strong>Nuts and Mix-ins:</strong> Added for texture and flavor variety</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-lg">
                <strong>Quality Tip:</strong> The quality of ingredients directly impacts the final product. Premium ice creams like 
                <Link href="/products/vanilla" className="text-blue-600 hover:underline mx-1">Häagen-Dazs Vanilla</Link>
                use only the finest Madagascar vanilla and fresh cream, resulting in a noticeably superior taste and texture.
              </p>
            </div>
          </section>

          {/* The Science Behind Ice Cream */}
          <section id="science" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Science Behind Ice Cream</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Ice cream is essentially a complex mixture of ice crystals, air bubbles, and a concentrated unfrozen solution. 
              Understanding the science helps explain why certain techniques and ingredients are crucial for creating the perfect scoop.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Ice Crystal Formation</h3>
                <p className="mb-4">
                  The size of ice crystals is crucial to ice cream's texture. Smaller crystals create a smoother texture, 
                  while larger crystals result in a grainy, icy texture. Several factors influence crystal size:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Freezing Speed:</strong> Faster freezing creates smaller crystals</li>
                  <li><strong>Churning:</strong> Constant movement prevents large crystal formation</li>
                  <li><strong>Sugar Content:</strong> Sugar lowers the freezing point, keeping some water unfrozen</li>
                  <li><strong>Fat Content:</strong> Fat interferes with ice crystal formation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Air Incorporation (Overrun)</h3>
                <p className="mb-4">
                  "Overrun" refers to the amount of air whipped into ice cream during churning. It's expressed as a percentage:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg my-4">
                  <p className="font-mono">Overrun % = (Volume of Ice Cream - Volume of Mix) / Volume of Mix × 100</p>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Low Overrun (20-30%):</strong> Dense, premium ice cream with intense flavor</li>
                  <li><strong>Medium Overrun (50-60%):</strong> Standard homemade ice cream</li>
                  <li><strong>High Overrun (100%+):</strong> Light, airy texture common in budget brands</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Emulsification</h3>
                <p className="mb-4">
                  Ice cream is an emulsion – a mixture of two liquids that don't normally mix (water and fat). 
                  Proper emulsification ensures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Smooth, creamy texture</li>
                  <li>Even distribution of fat globules</li>
                  <li>Stability during storage</li>
                  <li>Proper melting characteristics</li>
                </ul>
              </div>
            </div>

            <div className="my-8">
              <Image
                src="/images/guides/ice-cream-science-diagram.jpg"
                alt="Microscopic view of ice cream structure showing ice crystals, air bubbles, and fat globules"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Microscopic structure of ice cream showing the distribution of ice crystals, air bubbles, and fat globules
              </p>
            </div>
          </section>

          {/* Commercial Ice Cream Production */}
          <section id="commercial-process" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Commercial Ice Cream Production Process</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Commercial ice cream production follows a carefully controlled process to ensure consistency, safety, and quality. 
              Here's how ice cream is made on a large scale:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 1: Blending</h3>
                <p className="mb-4">
                  All liquid ingredients are combined in large stainless steel tanks. The mixture includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Milk and cream in precise ratios</li>
                  <li>Sugar and other sweeteners</li>
                  <li>Stabilizers and emulsifiers (if used)</li>
                  <li>Dry ingredients like cocoa powder for chocolate varieties</li>
                </ul>
                <p className="mt-4">
                  The ingredients are heated to about 40°C (104°F) to ensure complete dissolution of sugars and other solids.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 2: Pasteurization</h3>
                <p className="mb-4">
                  The mixture is pasteurized to eliminate harmful bacteria and dissolve ingredients completely:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>HTST (High Temperature Short Time):</strong> 79°C (175°F) for 25 seconds</li>
                  <li><strong>LTLT (Low Temperature Long Time):</strong> 65°C (149°F) for 30 minutes</li>
                </ul>
                <p className="mt-4">
                  Pasteurization also helps hydrate proteins and stabilizers, improving the final texture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 3: Homogenization</h3>
                <p className="mb-4">
                  The hot mixture is forced through a homogenizer at high pressure (2000-2500 psi). This process:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Breaks down fat globules into uniform, microscopic sizes</li>
                  <li>Creates a smooth, stable emulsion</li>
                  <li>Prevents separation during storage</li>
                  <li>Improves whipping properties</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 4: Cooling and Aging</h3>
                <p className="mb-4">
                  The mixture is rapidly cooled to 4°C (39°F) and held for 4-24 hours. This aging process:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Allows fat globules to solidify</li>
                  <li>Permits proteins to hydrate fully</li>
                  <li>Lets stabilizers develop their full functionality</li>
                  <li>Improves whipping properties and texture</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 5: Flavoring and Coloring</h3>
                <p className="mb-4">
                  Flavors, colors, and fruit purees are added to the aged mix. For example:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vanilla extract for <Link href="/products/vanilla" className="text-blue-600 hover:underline">classic vanilla ice cream</Link></li>
                  <li>Strawberry puree for <Link href="/products/strawberry" className="text-blue-600 hover:underline">strawberry varieties</Link></li>
                  <li>Melted chocolate for chocolate-based flavors</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 6: Churning and Freezing</h3>
                <p className="mb-4">
                  This is where the magic happens. The mixture enters a continuous freezer where:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Temperature drops from 4°C to -5°C (39°F to 23°F) in seconds</li>
                  <li>Rotating blades (dashers) scrape frozen mixture from cylinder walls</li>
                  <li>Air is incorporated to achieve desired overrun</li>
                  <li>Ice crystals form and are kept small by constant agitation</li>
                </ul>
                <p className="mt-4">
                  The semi-solid ice cream exits at about -5°C to -6°C (23°F to 21°F).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 7: Mix-in Addition</h3>
                <p className="mb-4">
                  Ingredients like chocolate chips, cookie pieces, or nuts are folded in using specialized feeders that ensure even distribution 
                  without damaging the additions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 8: Packaging</h3>
                <p className="mb-4">
                  The soft ice cream is dispensed into containers:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pints, quarts, or bulk containers</li>
                  <li>Novelty molds for ice cream bars</li>
                  <li>Special packaging for food service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 9: Hardening</h3>
                <p className="mb-4">
                  Packaged ice cream moves to a hardening room at -25°C to -30°C (-13°F to -22°F) where it solidifies completely 
                  over 24-48 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Step 10: Storage and Distribution</h3>
                <p className="mb-4">
                  Finished ice cream is stored at -20°C (-4°F) or colder until distribution to retailers.
                </p>
              </div>
            </div>

            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Quality Control Throughout Production</h4>
              <p>
                Premium manufacturers like Häagen-Dazs implement rigorous quality control at every stage:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>Ingredient testing and verification</li>
                <li>Temperature monitoring at all stages</li>
                <li>Texture and overrun measurements</li>
                <li>Microbiological testing</li>
                <li>Sensory evaluation by trained tasters</li>
              </ul>
            </div>
          </section>

          {/* Making Ice Cream at Home */}
          <section id="home-making" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Making Ice Cream at Home</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              While commercial production uses sophisticated equipment, you can make delicious ice cream at home using simpler methods. 
              Understanding the basic process helps you appreciate what goes into every scoop of premium ice cream.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Home Ice Cream Making Methods</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">1. Ice Cream Maker Method</h4>
                    <p className="mb-3">The most common home method uses an electric ice cream maker:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Prepare your ice cream base (cooked custard or simple mixture)</li>
                      <li>Chill the mixture thoroughly (at least 4 hours)</li>
                      <li>Pour into pre-frozen ice cream maker bowl</li>
                      <li>Churn for 20-40 minutes until thick</li>
                      <li>Transfer to container and freeze until firm</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">2. No-Churn Method</h4>
                    <p className="mb-3">A simple method requiring no special equipment:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Whip heavy cream to stiff peaks</li>
                      <li>Fold in sweetened condensed milk and flavorings</li>
                      <li>Pour into container and freeze</li>
                      <li>No stirring required during freezing</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">3. Hand-Churned Method</h4>
                    <p className="mb-3">The traditional method, more labor-intensive but educational:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Place mixture in a metal bowl inside a larger bowl of ice and salt</li>
                      <li>Stir constantly as mixture freezes (30-45 minutes)</li>
                      <li>Scrape sides frequently to prevent large ice crystals</li>
                      <li>Continue until desired consistency is reached</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Basic Vanilla Ice Cream Recipe</h3>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Ingredients:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>2 cups heavy cream</li>
                    <li>1 cup whole milk</li>
                    <li>3/4 cup sugar</li>
                    <li>4 egg yolks</li>
                    <li>2 teaspoons vanilla extract</li>
                    <li>Pinch of salt</li>
                  </ul>
                  
                  <h4 className="font-semibold mt-4 mb-3">Instructions:</h4>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Heat milk, 1 cup cream, and half the sugar in a saucepan</li>
                    <li>Whisk egg yolks with remaining sugar until pale</li>
                    <li>Temper eggs with hot milk mixture</li>
                    <li>Return to heat and cook to 170°F (77°C), stirring constantly</li>
                    <li>Strain and add remaining cream and vanilla</li>
                    <li>Chill completely before churning</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tips for Better Homemade Ice Cream</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Use high-fat dairy:</strong> More fat means creamier texture</li>
                  <li><strong>Don't over-churn:</strong> Stop when mixture looks like soft-serve</li>
                  <li><strong>Add alcohol sparingly:</strong> It lowers freezing point and affects texture</li>
                  <li><strong>Mix-ins go in last:</strong> Add during final minutes of churning</li>
                  <li><strong>Store properly:</strong> Press plastic wrap directly on surface to prevent ice crystals</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-lg">
                <strong>Pro Tip:</strong> While homemade ice cream is rewarding, achieving the consistently smooth texture of 
                <Link href="/products" className="text-blue-600 hover:underline mx-1">premium store-bought ice cream</Link>
                requires commercial equipment and expertise. That's why many ice cream lovers appreciate the convenience and 
                quality of professionally made options.
              </p>
            </div>
          </section>

          {/* What Makes Premium Ice Cream Different */}
          <section id="quality-factors" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Makes Premium Ice Cream Different</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Not all ice creams are created equal. Premium ice creams distinguish themselves through several key factors 
              that affect both quality and price:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Ingredient Quality</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Real ingredients:</strong> Fresh cream, real vanilla beans, actual fruit pieces</li>
                  <li><strong>No artificial flavors:</strong> Natural extracts and essences only</li>
                  <li><strong>Premium mix-ins:</strong> High-quality chocolate, fresh-roasted nuts, real cookie pieces</li>
                  <li><strong>Minimal additives:</strong> Few or no artificial stabilizers or preservatives</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Higher Fat Content</h3>
                <p className="mb-4">
                  Premium ice creams typically contain 14-18% butterfat, compared to 10% in standard ice cream:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Creates richer, creamier texture</li>
                  <li>Carries flavors more effectively</li>
                  <li>Melts more slowly and evenly</li>
                  <li>Provides luxurious mouthfeel</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Lower Overrun</h3>
                <p className="mb-4">
                  Premium brands incorporate less air:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li><strong>Premium ice cream:</strong> 20-30% overrun (denser)</li>
                    <li><strong>Standard ice cream:</strong> 50-60% overrun</li>
                    <li><strong>Economy ice cream:</strong> 90-100% overrun (lighter)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Specialized Production Techniques</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Slower churning:</strong> Creates smaller ice crystals</li>
                  <li><strong>Lower temperatures:</strong> Rapid freezing for better texture</li>
                  <li><strong>Longer aging:</strong> Develops flavors and improves texture</li>
                  <li><strong>Small batch production:</strong> Better quality control</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Attention to Detail</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hand-selected ingredients</li>
                  <li>Custom flavor development</li>
                  <li>Rigorous taste testing</li>
                  <li>Consistent quality standards</li>
                </ul>
              </div>
            </div>

            <div className="my-8">
              <Image
                src="/images/guides/premium-vs-regular-comparison.jpg"
                alt="Visual comparison between premium and regular ice cream showing density and texture differences"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Side-by-side comparison showing the density difference between premium and regular ice cream
              </p>
            </div>
          </section>

          {/* The Häagen-Dazs Difference */}
          <section id="haagen-dazs-process" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Häagen-Dazs Difference</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Since 1961, Häagen-Dazs has set the standard for premium ice cream through an unwavering commitment to quality 
              and craftsmanship. Here's what makes the Häagen-Dazs ice cream making process unique:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Carefully Selected Ingredients</h3>
                <p className="mb-4">
                  Every Häagen-Dazs flavor starts with the finest ingredients from around the world:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Madagascar Vanilla:</strong> Hand-picked vanilla beans for our <Link href="/products/vanilla" className="text-blue-600 hover:underline">signature vanilla</Link></li>
                  <li><strong>Belgian Chocolate:</strong> Premium cocoa for rich chocolate flavors</li>
                  <li><strong>Fresh Cream:</strong> Only the highest quality dairy with no rBST</li>
                  <li><strong>Real Fruit:</strong> Carefully selected strawberries, raspberries, and more</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Artisan Production Methods</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Small Batch Processing:</strong> Ensures consistency and quality</li>
                  <li><strong>Extended Aging:</strong> Allows flavors to fully develop</li>
                  <li><strong>Precise Temperature Control:</strong> Maintains optimal conditions throughout</li>
                  <li><strong>Minimal Air:</strong> Creates our signature dense, creamy texture</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Innovation in Flavors</h3>
                <p className="mb-4">
                  Our flavor development process involves:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Extensive recipe testing and refinement</li>
                  <li>Collaboration with culinary experts</li>
                  <li>Consumer taste panels</li>
                  <li>Seasonal and limited edition creations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Popular Häagen-Dazs Collections</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">Classic Flavors</h5>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• <Link href="/products/vanilla" className="text-blue-600 hover:underline">Vanilla</Link></li>
                      <li>• <Link href="/products/strawberry" className="text-blue-600 hover:underline">Strawberries & Cream</Link></li>
                      <li>• <Link href="/products/belgian-chocolate" className="text-blue-600 hover:underline">Belgian Chocolate</Link></li>
                      <li>• <Link href="/products/cookies-cream" className="text-blue-600 hover:underline">Cookies & Cream</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Specialty Collections</h5>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• <Link href="/products/pralines-cream" className="text-blue-600 hover:underline">Pralines & Cream</Link></li>
                      <li>• <Link href="/products/salted-caramel" className="text-blue-600 hover:underline">Salted Caramel</Link></li>
                      <li>• <Link href="/products/mango-raspberry" className="text-blue-600 hover:underline">Mango & Raspberry</Link></li>
                      <li>• <Link href="/products/macadamia-nut" className="text-blue-600 hover:underline">Macadamia Nut Brittle</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Creating Different Flavors */}
          <section id="flavoring" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Creating Different Ice Cream Flavors</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              The art of flavor creation in ice cream involves understanding how different ingredients interact with the base 
              and how processing methods affect the final taste and texture.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Flavor Categories and Techniques</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Extract-Based Flavors</h4>
                    <p className="mb-2">Simple to incorporate, these are added directly to the base:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Vanilla extract or vanilla bean paste</li>
                      <li>Almond extract</li>
                      <li>Mint extract</li>
                      <li>Coffee extract</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Infusion Flavors</h4>
                    <p className="mb-2">Ingredients are steeped in the warm dairy base:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Tea leaves for matcha or Earl Grey ice cream</li>
                      <li>Coffee beans for espresso flavor</li>
                      <li>Herbs like lavender or basil</li>
                      <li>Spices such as cinnamon or cardamom</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Mix-In Flavors</h4>
                    <p className="mb-2">Solid ingredients added during or after churning:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Chocolate chips or chunks</li>
                      <li>Cookie pieces</li>
                      <li>Caramel swirls</li>
                      <li>Fruit pieces or ribbons</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Fruit-Based Flavors</h4>
                    <p className="mb-2">Special techniques for incorporating fruit:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li><strong>Purees:</strong> Blended and strained for smooth integration</li>
                      <li><strong>Compotes:</strong> Cooked with sugar to concentrate flavor</li>
                      <li><strong>Fresh pieces:</strong> Added as mix-ins to prevent freezing solid</li>
                      <li><strong>Freeze-dried:</strong> Intense flavor without added moisture</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">5. Chocolate Variations</h4>
                    <p className="mb-2">Different methods for chocolate flavors:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li><strong>Cocoa powder:</strong> Mixed with base for uniform flavor</li>
                      <li><strong>Melted chocolate:</strong> Creates richer, more intense taste</li>
                      <li><strong>Chocolate liquor:</strong> Professional method for deepest flavor</li>
                      <li><strong>White chocolate:</strong> Added carefully to prevent seizing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Balancing Flavors</h3>
                <p className="mb-4">
                  Creating a well-balanced ice cream flavor requires considering:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Sweetness level:</strong> Adjusted based on added ingredients' natural sugars</li>
                  <li><strong>Fat content:</strong> May need adjustment for ingredients like chocolate or nuts</li>
                  <li><strong>Acidity:</strong> Fruit flavors may require pH balancing</li>
                  <li><strong>Texture impact:</strong> How additions affect the final consistency</li>
                  <li><strong>Flavor intensity:</strong> Concentrated in cold temperatures</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Professional Flavor Development Process</h4>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Concept development and market research</li>
                  <li>Initial recipe formulation</li>
                  <li>Small batch testing and refinement</li>
                  <li>Sensory panel evaluation</li>
                  <li>Stability and shelf-life testing</li>
                  <li>Scale-up to production quantities</li>
                  <li>Final quality assurance</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Achieving the Perfect Texture */}
          <section id="texture-secrets" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Achieving the Perfect Ice Cream Texture</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Texture is arguably as important as flavor in creating exceptional ice cream. The perfect texture is smooth, 
              creamy, and free from ice crystals, with a consistency that's firm yet scoopable.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Factors Affecting Texture</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Ice Crystal Control</h4>
                    <p className="mb-2">Smaller ice crystals create smoother texture:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Rapid freezing during churning</li>
                      <li>Continuous agitation to break up crystals</li>
                      <li>Proper sugar content to control freezing point</li>
                      <li>Stabilizers to inhibit crystal growth</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Fat Distribution</h4>
                    <p className="mb-2">Even fat distribution creates creaminess:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Proper homogenization pressure</li>
                      <li>Optimal aging time</li>
                      <li>Correct churning speed</li>
                      <li>Temperature control throughout process</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Air Incorporation</h4>
                    <p className="mb-2">The right amount of air affects mouthfeel:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Controlled overrun percentage</li>
                      <li>Proper dasher design in freezers</li>
                      <li>Consistent churning speed</li>
                      <li>Base viscosity optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Serving Temperature</h4>
                    <p className="mb-2">Temperature dramatically affects perceived texture:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Too cold (-18°C/-0°F):</strong> Hard, difficult to scoop</li>
                      <li><strong>Optimal (-12°C to -14°C/10°F to 7°F):</strong> Perfect scooping consistency</li>
                      <li><strong>Too warm (above -10°C/14°F):</strong> Soft, may become grainy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Common Texture Problems and Solutions</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="font-semibold">Icy or Grainy Texture</h4>
                    <p className="text-sm mt-1"><strong>Causes:</strong> Large ice crystals, temperature fluctuations, low fat content</p>
                    <p className="text-sm"><strong>Solutions:</strong> Increase fat content, add stabilizers, maintain consistent temperature</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Too Hard</h4>
                    <p className="text-sm mt-1"><strong>Causes:</strong> Low sugar content, low overrun, too cold storage</p>
                    <p className="text-sm"><strong>Solutions:</strong> Adjust sugar levels, increase air incorporation, serve at proper temperature</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Too Soft or Melts Quickly</h4>
                    <p className="text-sm mt-1"><strong>Causes:</strong> High sugar content, low fat, improper stabilization</p>
                    <p className="text-sm"><strong>Solutions:</strong> Reduce sugar, increase fat content, improve formulation</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Gummy or Chewy</h4>
                    <p className="text-sm mt-1"><strong>Causes:</strong> Excess stabilizers, over-churning, protein issues</p>
                    <p className="text-sm"><strong>Solutions:</strong> Reduce stabilizers, optimize churning time, balance proteins</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-8">
              <Image
                src="/images/guides/texture-comparison.jpg"
                alt="Microscopic comparison of ice cream textures showing crystal size differences"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Microscopic view comparing smooth premium texture (left) with icy standard texture (right)
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Art and Science of Ice Cream</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Understanding how ice cream is made reveals the complexity behind this seemingly simple treat. From the careful 
              selection of ingredients to the precise control of temperature and texture, every step in the ice cream making 
              process contributes to the final product's quality.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Whether produced in a state-of-the-art facility or churned by hand in your kitchen, the fundamental principles 
              remain the same: quality ingredients, proper technique, and attention to detail create the best ice cream. 
              Premium brands like Häagen-Dazs have perfected these principles over decades, delivering consistently exceptional 
              ice cream that showcases the best of what this frozen dessert can be.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Experience Premium Ice Cream</h3>
              <p className="text-lg mb-6">
                Now that you understand the craftsmanship behind every scoop, explore our collection of meticulously crafted flavors. 
                From classic vanilla to innovative creations, each Häagen-Dazs ice cream represents the pinnacle of ice cream making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Explore All Flavors
                </Link>
                <Link href="/store-locator" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                  Find a Store
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/guides/ice-cream-storage" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">How to Store Ice Cream</h3>
                  <p className="text-sm text-gray-600">Learn the best practices for storing ice cream to maintain quality and prevent freezer burn.</p>
                </div>
              </Link>
              <Link href="/guides/ice-cream-serving" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">How to Serve Ice Cream</h3>
                  <p className="text-sm text-gray-600">Master the art of serving ice cream with tips on temperature, presentation, and pairings.</p>
                </div>
              </Link>
              <Link href="/blog/history-of-ice-cream" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">The History of Ice Cream</h3>
                  <p className="text-sm text-gray-600">Explore the fascinating journey of ice cream through the centuries.</p>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}