'use client';

import { Review, getRatingPercentage } from '@/lib/reviews';
import ReviewStars from './ReviewStars';

interface ReviewSummaryProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function ReviewSummary({ reviews, averageRating, totalReviews }: ReviewSummaryProps) {

  return (
    <div className="bg-haagen-cream rounded-lg p-6 border border-haagen-gold-light">
      <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Overall Rating */}
        <div className="text-center lg:text-left">
          <div className="text-5xl font-bold text-haagen-burgundy mb-2">
            {averageRating.toFixed(1)}
          </div>
          <ReviewStars rating={averageRating} size="lg" />
          <p className="text-sm text-gray-600 mt-2">
            Based on {totalReviews.toLocaleString()} reviews
          </p>
        </div>
        
        {/* Rating Distribution */}
        <div className="flex-1">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const percentage = getRatingPercentage(reviews, stars);
              const count = reviews.filter(r => r.rating === stars).length;
              
              return (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-sm font-medium w-8">{stars}</span>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-yellow-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{percentage}%</span>
                  <span className="text-sm text-gray-500 w-16 text-right">({count})</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Write a Review Button */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <button className="w-full lg:w-auto px-6 py-3 bg-haagen-burgundy text-white font-semibold rounded-lg hover:bg-haagen-burgundy-dark transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  );
}