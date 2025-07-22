'use client'

import React, { useState, useMemo } from 'react'
import ReviewCard from './ReviewCard'
import { Review } from '@/lib/reviews'
import ReviewStars from './ReviewStars'

interface ReviewSectionProps {
  reviews: Review[]
  productName?: string
  showFilters?: boolean
  showSummary?: boolean
  reviewsPerPage?: number
  onAddReview?: () => void
  className?: string
}

type SortOption = 'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'
type FilterOption = 'all' | '5' | '4' | '3' | '2' | '1' | 'verified'

export default function ReviewSection({
  reviews,
  productName,
  showFilters = true,
  showSummary = true,
  reviewsPerPage = 10,
  onAddReview,
  className = ''
}: ReviewSectionProps) {
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [filterBy, setFilterBy] = useState<FilterOption>('all')
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate review statistics
  const reviewStats = useMemo(() => {
    const totalReviews = reviews.length
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
    const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0

    const ratingCounts = {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length,
    }

    const verifiedCount = reviews.filter(r => r.verifiedPurchase).length

    return {
      totalReviews,
      averageRating,
      ratingCounts,
      verifiedCount
    }
  }, [reviews])

  // Filter reviews
  const filteredReviews = useMemo(() => {
    let filtered = [...reviews]

    switch (filterBy) {
      case 'verified':
        filtered = filtered.filter(r => r.verifiedPurchase)
        break
      case '5':
      case '4':
      case '3':
      case '2':
      case '1':
        filtered = filtered.filter(r => r.rating === parseInt(filterBy))
        break
    }

    return filtered
  }, [reviews, filterBy])

  // Sort reviews
  const sortedReviews = useMemo(() => {
    const sorted = [...filteredReviews]

    switch (sortBy) {
      case 'newest':
        sorted.sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime())
        break
      case 'oldest':
        sorted.sort((a, b) => a.reviewDate.getTime() - b.reviewDate.getTime())
        break
      case 'highest':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'lowest':
        sorted.sort((a, b) => a.rating - b.rating)
        break
      case 'helpful':
        sorted.sort((a, b) => {
          const aHelpfulness = a.totalVotes > 0 ? a.helpfulVotes / a.totalVotes : 0
          const bHelpfulness = b.totalVotes > 0 ? b.helpfulVotes / b.totalVotes : 0
          return bHelpfulness - aHelpfulness
        })
        break
    }

    return sorted
  }, [filteredReviews, sortBy])

  // Paginate reviews
  const paginatedReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * reviewsPerPage
    return sortedReviews.slice(startIndex, startIndex + reviewsPerPage)
  }, [sortedReviews, currentPage, reviewsPerPage])

  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of reviews section
    const element = document.getElementById('reviews-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="reviews-section" className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Customer Reviews {productName && `for ${productName}`}
          </h2>
          
          {onAddReview && (
            <button
              onClick={onAddReview}
              className="inline-flex items-center px-4 py-2 bg-haagen-burgundy text-white font-medium rounded-md hover:bg-haagen-burgundy-dark transition-colors duration-200"
            >
              Write a Review
            </button>
          )}
        </div>

        {/* Summary Section */}
        {showSummary && reviewStats.totalReviews > 0 && (
          <div className="bg-haagen-cream rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Average Rating */}
              <div className="text-center md:text-left">
                <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {reviewStats.averageRating.toFixed(1)}
                  </span>
                  <div>
                    <ReviewStars rating={reviewStats.averageRating} size="lg" />
                    <p className="text-sm text-gray-600 mt-1">
                      Based on {reviewStats.totalReviews} reviews
                    </p>
                  </div>
                </div>
                
                {reviewStats.verifiedCount > 0 && (
                  <p className="text-sm text-gray-600">
                    {reviewStats.verifiedCount} verified purchases
                  </p>
                )}
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => {
                  const count = reviewStats.ratingCounts[rating as keyof typeof reviewStats.ratingCounts]
                  const percentage = reviewStats.totalReviews > 0 
                    ? (count / reviewStats.totalReviews) * 100 
                    : 0

                  return (
                    <button
                      key={rating}
                      onClick={() => setFilterBy(rating.toString() as FilterOption)}
                      className="flex items-center gap-3 w-full group"
                      aria-label={`Filter by ${rating} star reviews`}
                    >
                      <span className="text-sm font-medium text-gray-700 w-12">
                        {rating} star
                      </span>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-haagen-gold transition-all duration-300 group-hover:bg-haagen-gold-dark"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Filters and Sort */}
        {showFilters && sortedReviews.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Filter Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="filter-reviews" className="text-sm font-medium text-gray-700">
                Filter:
              </label>
              <select
                id="filter-reviews"
                value={filterBy}
                onChange={(e) => {
                  setFilterBy(e.target.value as FilterOption)
                  setCurrentPage(1)
                }}
                className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:border-haagen-burgundy"
              >
                <option value="all">All Reviews</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
                <option value="verified">Verified Purchases</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-reviews" className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <select
                id="sort-reviews"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-haagen-burgundy focus:border-haagen-burgundy"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>
        )}

        {/* Reviews List */}
        {paginatedReviews.length > 0 ? (
          <div className="space-y-6">
            {paginatedReviews.map(review => (
              <ReviewCard 
                key={review.id} 
                review={review}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No reviews found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex justify-center mt-8" aria-label="Pagination">
            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
                aria-label="Previous page"
              >
                Previous
              </button>

              {/* Page numbers */}
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1
                  const isCurrentPage = page === currentPage

                  // Show first page, last page, current page, and adjacent pages
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          isCurrentPage
                            ? 'bg-haagen-burgundy text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                        }`}
                        aria-label={`Go to page ${page}`}
                        aria-current={isCurrentPage ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    )
                  }

                  // Show ellipsis
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 py-2 text-gray-500">
                        ...
                      </span>
                    )
                  }

                  return null
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  )
}