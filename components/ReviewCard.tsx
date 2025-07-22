'use client';

import { Review } from '@/lib/reviews';
import ReviewStars from './ReviewStars';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-UK', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <ReviewStars rating={review.rating} size="sm" />
            <h3 className="font-semibold text-gray-900">{review.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">{review.reviewerName}</span>
            {review.reviewDate && (
              <>
                <span>•</span>
                <span>{formatDate(review.reviewDate.toString())}</span>
              </>
            )}
          </div>
        </div>
        {review.verifiedPurchase && (
          <div className="flex items-center gap-1 text-sm text-green-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Verified Purchase</span>
          </div>
        )}
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
      
      <div className="flex items-center gap-4 text-sm">
        <button className="flex items-center gap-1 text-gray-500 hover:text-haagen-burgundy transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span>Helpful ({review.helpfulVotes})</span>
        </button>
        <button className="text-gray-500 hover:text-haagen-burgundy transition-colors">
          Report
        </button>
      </div>
    </div>
  );
}