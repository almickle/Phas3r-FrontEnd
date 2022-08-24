import React from 'react';
import ReviewCard from './ReviewCard';

function Reviews({ reviews }) {
  return(
  <div>{reviews.map((review) => {
    return (
    <ReviewCard key={review.id}
      review={review}
       />
       )
    })}
    </div>
  )
}

export default Reviews