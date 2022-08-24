import MovieCard from "./MovieCard"
import { useHistory } from "react-router-dom"
import "./stylesheets/movies.css"


function Movies({movieData}) {

  let history = useHistory()

function handleAddMovieClick(){
history.push('/movie_form')
}

function handleAddReviewClick(){
  console.log('test 2')
}

  const movieElements = movieData.map(movie => {
    return (
      <MovieCard movie={movie} key={movie.id}/>
    )
})

  return (
    <div id='content-div'>
      <span id="button-banner">
        <button onClick = {handleAddMovieClick}> Add a Movie </button>
        <button onClick = {handleAddReviewClick}> Add a Review </button>
      </span>
      {movieElements}
    </div>
  )
}

export default Movies