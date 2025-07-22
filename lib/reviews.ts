// Review interface
export interface Review {
  id: string
  rating: number
  title: string
  text: string
  reviewerName: string
  reviewDate: Date
  verifiedPurchase: boolean
  helpfulVotes: number
  totalVotes: number
  productName: string
}

// Helper function to generate a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9)

// Helper function to create a date in the past
const daysAgo = (days: number) => {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return date
}

// Mock review data for different products
export const mockReviews: Record<string, Review[]> = {
  'vanilla': [
    {
      id: generateId(),
      rating: 5,
      title: 'The Perfect Vanilla',
      text: 'This is hands down the best vanilla ice cream I\'ve ever had. The Madagascar vanilla beans give it such a rich, authentic flavor. It\'s creamy, smooth, and absolutely delicious. Worth every penny!',
      reviewerName: 'Sarah M.',
      reviewDate: daysAgo(5),
      verifiedPurchase: true,
      helpfulVotes: 45,
      totalVotes: 48,
      productName: 'Vanilla'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Classic and Delicious',
      text: 'Häagen-Dazs vanilla is my go-to ice cream. It\'s consistently good and pairs well with everything. The only reason I\'m not giving it 5 stars is because it\'s quite expensive, but the quality is definitely there.',
      reviewerName: 'Michael R.',
      reviewDate: daysAgo(12),
      verifiedPurchase: true,
      helpfulVotes: 22,
      totalVotes: 25,
      productName: 'Vanilla'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Premium Quality',
      text: 'You can really taste the difference with Häagen-Dazs. The vanilla flavor is pure and intense, not artificial at all. It melts beautifully and has the perfect texture.',
      reviewerName: 'Emma L.',
      reviewDate: daysAgo(20),
      verifiedPurchase: false,
      helpfulVotes: 18,
      totalVotes: 20,
      productName: 'Vanilla'
    },
    {
      id: generateId(),
      rating: 3,
      title: 'Good but pricey',
      text: 'The ice cream itself is excellent, but I find it hard to justify the price point. There are other premium brands that offer similar quality for less.',
      reviewerName: 'David K.',
      reviewDate: daysAgo(30),
      verifiedPurchase: true,
      helpfulVotes: 8,
      totalVotes: 15,
      productName: 'Vanilla'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Simply the Best',
      text: 'I\'ve tried many vanilla ice creams, and this one stands above them all. The texture is incredibly smooth and creamy, and the vanilla flavor is sophisticated and complex.',
      reviewerName: 'Lisa T.',
      reviewDate: daysAgo(45),
      verifiedPurchase: true,
      helpfulVotes: 30,
      totalVotes: 32,
      productName: 'Vanilla'
    }
  ],
  'strawberry': [
    {
      id: generateId(),
      rating: 5,
      title: 'Real Strawberry Flavor!',
      text: 'You can taste the real strawberries in every bite. It\'s not overly sweet or artificial like other brands. The chunks of strawberry throughout are a delightful surprise.',
      reviewerName: 'Jennifer P.',
      reviewDate: daysAgo(3),
      verifiedPurchase: true,
      helpfulVotes: 38,
      totalVotes: 40,
      productName: 'Strawberry'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Summer in a Pint',
      text: 'This strawberry ice cream reminds me of summer. The flavor is fresh and fruity, though I wish there were more strawberry pieces. Still, it\'s one of the best strawberry ice creams available.',
      reviewerName: 'Robert H.',
      reviewDate: daysAgo(8),
      verifiedPurchase: false,
      helpfulVotes: 15,
      totalVotes: 18,
      productName: 'Strawberry'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Absolutely Divine',
      text: 'The balance between the cream and strawberry is perfect. It\'s rich without being heavy, and the strawberry flavor is bright and natural. My new favorite!',
      reviewerName: 'Amanda C.',
      reviewDate: daysAgo(15),
      verifiedPurchase: true,
      helpfulVotes: 25,
      totalVotes: 26,
      productName: 'Strawberry'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Great Quality',
      text: 'Häagen-Dazs never disappoints with quality. The strawberry flavor is authentic and the texture is perfectly creamy. A bit expensive but worth it for a treat.',
      reviewerName: 'Thomas W.',
      reviewDate: daysAgo(25),
      verifiedPurchase: true,
      helpfulVotes: 12,
      totalVotes: 14,
      productName: 'Strawberry'
    }
  ],
  'chocolate': [
    {
      id: generateId(),
      rating: 5,
      title: 'Chocolate Heaven',
      text: 'This is what chocolate ice cream should taste like. Rich, decadent, and intensely chocolatey without being bitter. The Belgian chocolate really makes a difference.',
      reviewerName: 'Carlos M.',
      reviewDate: daysAgo(2),
      verifiedPurchase: true,
      helpfulVotes: 55,
      totalVotes: 58,
      productName: 'Belgian Chocolate'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Best Chocolate Ice Cream Ever',
      text: 'I\'m a chocolate connoisseur and this exceeds all expectations. The depth of flavor is incredible - you can taste the quality of the chocolate they use. Smooth, creamy, and absolutely indulgent.',
      reviewerName: 'Patricia G.',
      reviewDate: daysAgo(7),
      verifiedPurchase: true,
      helpfulVotes: 42,
      totalVotes: 44,
      productName: 'Belgian Chocolate'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Rich and Satisfying',
      text: 'Very rich chocolate flavor - a little goes a long way. Perfect for when you want to treat yourself. The texture is incredibly smooth and it melts beautifully.',
      reviewerName: 'Kevin J.',
      reviewDate: daysAgo(14),
      verifiedPurchase: false,
      helpfulVotes: 20,
      totalVotes: 22,
      productName: 'Belgian Chocolate'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Perfection',
      text: 'This is my go-to when I need a chocolate fix. Unlike other chocolate ice creams, this doesn\'t taste artificial or overly sweet. Just pure, rich chocolate goodness.',
      reviewerName: 'Maria S.',
      reviewDate: daysAgo(22),
      verifiedPurchase: true,
      helpfulVotes: 35,
      totalVotes: 36,
      productName: 'Belgian Chocolate'
    },
    {
      id: generateId(),
      rating: 3,
      title: 'Too Rich for Me',
      text: 'While I appreciate the quality, I found this a bit too rich and intense for my taste. If you love dark chocolate, you\'ll probably love this. I prefer something a bit lighter.',
      reviewerName: 'Nancy D.',
      reviewDate: daysAgo(35),
      verifiedPurchase: true,
      helpfulVotes: 5,
      totalVotes: 12,
      productName: 'Belgian Chocolate'
    }
  ],
  'coffee': [
    {
      id: generateId(),
      rating: 5,
      title: 'Coffee Lover\'s Dream',
      text: 'As a coffee addict, this ice cream is everything I could want. The coffee flavor is bold and authentic - tastes like frozen espresso with cream. Absolutely perfect!',
      reviewerName: 'James L.',
      reviewDate: daysAgo(4),
      verifiedPurchase: true,
      helpfulVotes: 48,
      totalVotes: 50,
      productName: 'Coffee'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Great Coffee Flavor',
      text: 'Really nice coffee ice cream with a strong, authentic coffee taste. Not too sweet, which I appreciate. The only downside is the price, but the quality is undeniable.',
      reviewerName: 'Rachel B.',
      reviewDate: daysAgo(10),
      verifiedPurchase: true,
      helpfulVotes: 28,
      totalVotes: 30,
      productName: 'Coffee'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Better Than My Morning Coffee',
      text: 'This ice cream has converted me from a chocolate person to a coffee ice cream person. The flavor is sophisticated and the texture is like silk. Worth every calorie!',
      reviewerName: 'Daniel F.',
      reviewDate: daysAgo(18),
      verifiedPurchase: false,
      helpfulVotes: 22,
      totalVotes: 24,
      productName: 'Coffee'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Incredible',
      text: 'The coffee flavor is perfectly balanced - not too bitter, not too sweet. It\'s like eating the best coffee you\'ve ever had in ice cream form. Highly recommend!',
      reviewerName: 'Susan K.',
      reviewDate: daysAgo(28),
      verifiedPurchase: true,
      helpfulVotes: 33,
      totalVotes: 34,
      productName: 'Coffee'
    }
  ],
  'dulce-de-leche': [
    {
      id: generateId(),
      rating: 5,
      title: 'Caramel Perfection',
      text: 'The ribbons of dulce de leche throughout this ice cream are heavenly. It\'s sweet but not cloying, with a perfect balance of caramel and cream. Absolutely addictive!',
      reviewerName: 'Isabella R.',
      reviewDate: daysAgo(6),
      verifiedPurchase: true,
      helpfulVotes: 60,
      totalVotes: 62,
      productName: 'Dulce de Leche'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Deliciously Sweet',
      text: 'If you love caramel, this is the ice cream for you. The dulce de leche swirls are generous and delicious. It\'s quite sweet, so a little goes a long way.',
      reviewerName: 'Mark T.',
      reviewDate: daysAgo(11),
      verifiedPurchase: true,
      helpfulVotes: 25,
      totalVotes: 28,
      productName: 'Dulce de Leche'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'My Favorite Flavor',
      text: 'I\'ve tried every Häagen-Dazs flavor and this is hands down my favorite. The caramel is authentic and rich, and the base ice cream is the perfect complement. Can\'t get enough!',
      reviewerName: 'Christina Y.',
      reviewDate: daysAgo(19),
      verifiedPurchase: true,
      helpfulVotes: 40,
      totalVotes: 41,
      productName: 'Dulce de Leche'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Indulgent and Smooth',
      text: 'The texture is incredibly smooth and the dulce de leche ribbons add the perfect touch of gooey caramel goodness. It\'s like eating liquid gold!',
      reviewerName: 'Paul N.',
      reviewDate: daysAgo(32),
      verifiedPurchase: false,
      helpfulVotes: 18,
      totalVotes: 20,
      productName: 'Dulce de Leche'
    }
  ],
  'cookies-and-cream': [
    {
      id: generateId(),
      rating: 5,
      title: 'Cookie Paradise',
      text: 'The cookie pieces are generous and stay crunchy even in the ice cream. The cream base is perfect - not too sweet, letting the cookies shine. My kids and I are obsessed!',
      reviewerName: 'Jessica H.',
      reviewDate: daysAgo(1),
      verifiedPurchase: true,
      helpfulVotes: 52,
      totalVotes: 54,
      productName: 'Cookies & Cream'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Classic Done Right',
      text: 'Häagen-Dazs takes a classic flavor and elevates it. The cookie pieces are plentiful and the cream is rich. Only complaint is I wish the pint was bigger!',
      reviewerName: 'Brandon K.',
      reviewDate: daysAgo(9),
      verifiedPurchase: true,
      helpfulVotes: 30,
      totalVotes: 32,
      productName: 'Cookies & Cream'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Best Cookies & Cream',
      text: 'I\'ve tried cookies and cream from every brand, and this is by far the best. The quality of both the cookies and the cream is outstanding. Perfect texture and flavor balance.',
      reviewerName: 'Nicole W.',
      reviewDate: daysAgo(16),
      verifiedPurchase: false,
      helpfulVotes: 28,
      totalVotes: 29,
      productName: 'Cookies & Cream'
    },
    {
      id: generateId(),
      rating: 4,
      title: 'Delicious Treat',
      text: 'Love the generous chunks of chocolate cookies throughout. The vanilla cream base is high quality as expected from Häagen-Dazs. Great for satisfying that cookies and cream craving!',
      reviewerName: 'Ryan S.',
      reviewDate: daysAgo(24),
      verifiedPurchase: true,
      helpfulVotes: 15,
      totalVotes: 16,
      productName: 'Cookies & Cream'
    },
    {
      id: generateId(),
      rating: 5,
      title: 'Childhood Favorite Grown Up',
      text: 'This tastes like the cookies and cream of my childhood dreams, but better. The premium ingredients really make a difference. Smooth, creamy, with perfect cookie distribution.',
      reviewerName: 'Ashley M.',
      reviewDate: daysAgo(38),
      verifiedPurchase: true,
      helpfulVotes: 35,
      totalVotes: 36,
      productName: 'Cookies & Cream'
    }
  ]
}

// Function to get reviews for a specific product
export function getProductReviews(productSlug: string): Review[] {
  return mockReviews[productSlug] || []
}

// Function to get all reviews
export function getAllReviews(): Review[] {
  return Object.values(mockReviews).flat()
}

// Function to get recent reviews
export function getRecentReviews(limit: number = 10): Review[] {
  const allReviews = getAllReviews()
  return allReviews
    .sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime())
    .slice(0, limit)
}

// Function to get top-rated reviews
export function getTopRatedReviews(limit: number = 10): Review[] {
  const allReviews = getAllReviews()
  return allReviews
    .filter(review => review.rating >= 4)
    .sort((a, b) => {
      // Sort by rating first, then by helpful votes
      if (b.rating !== a.rating) {
        return b.rating - a.rating
      }
      const aHelpfulness = a.totalVotes > 0 ? a.helpfulVotes / a.totalVotes : 0
      const bHelpfulness = b.totalVotes > 0 ? b.helpfulVotes / b.totalVotes : 0
      return bHelpfulness - aHelpfulness
    })
    .slice(0, limit)
}

// Function to calculate product rating
export function calculateProductRating(productSlug: string): {
  averageRating: number
  totalReviews: number
  ratingDistribution: Record<number, number>
} {
  const reviews = getProductReviews(productSlug)
  
  if (reviews.length === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    }
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  
  reviews.forEach(review => {
    ratingDistribution[review.rating as keyof typeof ratingDistribution]++
  })

  return {
    averageRating: totalRating / reviews.length,
    totalReviews: reviews.length,
    ratingDistribution
  }
}

// Function to get rating percentage for a specific rating value
export function getRatingPercentage(reviews: Review[], rating: number): number {
  if (reviews.length === 0) return 0
  
  const count = reviews.filter(review => review.rating === rating).length
  return (count / reviews.length) * 100
}

// Function to get average rating from an array of reviews
export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0
  
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  return totalRating / reviews.length
}

// Function to get total number of reviews
export function getTotalReviews(reviews: Review[]): number {
  return reviews.length
}