import React, { useEffect, useState } from 'react';
import "./stylesheets/reviewcard.css";


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
    (<div id="review-div">
        <p>Score: {review.score}</p>
        <p>Comment: {review.comment}</p>
        <p>Timestamp: {review.created_at}</p>
        <p>Last updated: {review.updated_at}</p>
        <p>     ------------------------------------------    </p>
    </div>))

  return (
    <div id="movie-card">
      <div id="movie-img-div">
        <img id='movie-img' src={movie.thumbnail_url}/>
      </div>
      <div id="content-div">
        <h3 id="movie-title">{movie.title}</h3>
        <div id="reviews-div">
          {reviewsElements}
        </div>
      </div>
    </div>
  )
}

export default ReviewCard