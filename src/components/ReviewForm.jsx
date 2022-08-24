import React from 'react'

function ReviewForm({movieData}) {
 
   const movieId= window.location.href.toString().match(/\/[0-9]+/)[0].replaceAll("/", "")
   const movie = movieData[movieId -1]
console.log(movieId)
  return (
    <div className="form">
    <h1> Add a Review </h1>
    <form >
    <div className="input-container">
        <label> Title </label>
        <input type="text" name="Title" value = {movie.title} />
      </div>
      <div className="input-container">
        <label> Username </label>
        <input type="text" name="Username" placeholder = "Username" required/>
      </div>
      <div className="input-container">
        <label> Review </label>
        <input type="text" name="Review" placeholder = "Review" required/>
      </div>
      <div className="input-container">
        <label> Review </label>
        <input type="number" name="Score" placeholder = "0" required />
      </div>
      <button> Add Review + </button>
    </form>
  </div>
  )
}

export default ReviewForm