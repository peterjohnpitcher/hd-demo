'use client';

import ReviewStars from './ReviewStars';

interface TestimonialProps {
  author: string;
  rating: number;
  comment: string;
  flavor: string;
  location?: string;
}

export default function TestimonialCard({ author, rating, comment, flavor, location }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <ReviewStars rating={rating} size="md" />
      </div>
      
      <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
        "{comment}"
      </blockquote>
      
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-600">
          {location && <span>{location} • </span>}
          <span className="text-haagen-burgundy">{flavor}</span>
        </div>
      </div>
    </div>
  );
}