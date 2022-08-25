import React from 'react';
import ReviewCard from './ReviewCard';

function Reviews({ movieData }) {
  return(
  <div>{movieData.map((data) => {
    return (
    <ReviewCard key={data.id}
      data={data}
       />
       )
    })}
    </div>
  )
}

export default Reviews