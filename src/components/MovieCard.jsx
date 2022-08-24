import "./stylesheets/moviecard.css"


function MovieCard({movie}) {


  return (
    <div id="movie-card-div">
    <div className="movie-img-div" key={movie.id}>
        <img src={movie.thumbnail_url} key={movie.id} alt={""} className="movie-img" />
    </div>
    </div>
  )
}

export default MovieCard