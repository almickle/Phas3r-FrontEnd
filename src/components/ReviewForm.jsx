import {useState} from 'react'

function ReviewForm({movieData}) {
 
   const movieId= window.location.href.toString().match(/\/[0-9]+/)[0].replaceAll("/", "")
   const movie = movieData[movieId -1]

   const[stateScore, setStateScore] = useState('')
   const[stateComment, setStateComment] = useState('')

   

   const newReview = {score: stateScore, comment: stateComment}

   function handleSubmit() {
    fetch('http://localhost:9292/reviews', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: '',
              score: stateScore,
              comment: stateComment,
              user_id: '',
              movie_id: '',
          })
      })
}

  return (
    <div className="form">
    <h1> Add a Review </h1>
    <form onSubmit={handleSubmit}>
    <div className="input-container">
        <label> Title </label>
        <input type="text" name="Title" value = {movie.title} />
      </div>
      <div className="input-container">
        <label> Username </label>
        <input type="text" name="Username" placeholder = "Username" required/>
      </div>
      <div className="input-container">
        <label> comment </label>
        <input type="text" name="comment" placeholder = "comment" required onChange={(event) => setStateComment(event.target.value)}/>
      </div>
      <div className="input-container">
        <label> Score </label>
        <input type="number" name="Score" placeholder = "0" required onChange={(event) => setStateScore(event.target.value)}/>
      </div>
      <button> Add Review + </button>
    </form>
  </div>
  )
}

export default ReviewForm