import React from 'react';
import ReviewCard from './ReviewCard';

function Reviews({ movieData }) {

  const movieElements = movieData.map((movie) => {
    console.log("movie")
    console.log(movie)
    return <ReviewCard movie={movie} key={movie.id}/>
  })

  return(
  <div>
    {movieElements}
  </div>
  )
}

export default Reviews