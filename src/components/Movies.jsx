import MovieCard from "./MovieCard"
import "./stylesheets/movies.css"


function Movies({movieData}) {

  console.log(movieData)

  const movieElements = movieData.map(movie => {
    return (
      <MovieCard movie={movie} key={movie.id}/>
    )
})

  return (
    <div id='content-div'>
      <span id="button-banner"></span>
      {movieElements}
    </div>
  )
}

export default Movies