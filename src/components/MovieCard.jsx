import "./stylesheets/moviecard.css"


function MovieCard({movie}) {


  return (
    <div id="movie-card-div">
        <div className="movie-img-div">
            <img className="movie-img" src={movie.thumbnail_url} alt={""} />
        </div>
    </div>
  )
}

export default MovieCard