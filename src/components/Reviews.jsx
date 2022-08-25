import React from 'react';
import ReviewCard from './ReviewCard';

function Reviews({ movieData }) {

  const movieElements = movieData.map((movie) => {
    return <ReviewCard movie={movie} key={movie.id}/>
  })

  return(
  <div>
    {movieElements}
  </div>
  )
}

export default Reviews