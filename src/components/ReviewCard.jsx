import React, { useEffect, useState } from 'react';
import "./stylesheets/movies.css";


function ReviewCard({movie}) {

  const [movieState, setMovie] = useState({
    title: "default",
    reviews: []})

  useEffect(() => {
    setMovie(movie)
  }, [])

  useEffect(() => {
    console.log(movieState)
  }, [movieState])

  const reviewsElements = movieState.reviews.map(review => 
    (<p>{review.comment}</p>))

  return (
    <div>
      <h3>Movie {movie.title}</h3>
      <img src={movie.thumbnail_url}/>
      <ul>Score {movie.score}/10</ul>
      {reviewsElements}
      </div>
  )
}

export default ReviewCard