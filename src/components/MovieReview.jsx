import "./stylesheets/moviereview.css"

function MovieReview({movie}) {


  return (
    <div id="movie-review-div">
        <div className="movie-img-div" onClick = {handleClick}>
            <img className="movie-img" src={movie.thumbnail_url} alt={""} />
        </div>
        {/* <div id="movie-info-div">
            <h1 id="movie-title">{movie.title}</h1>
            <li className="movie-info">Director: {movie.director}</li>
            <li className="movie-info">Budget: ${movie.budget} million</li>
            <li className="movie-info">Box Office: ${movie.box_office} million</li>
            <div id="movie-desc-div">
                <p id="movie-desc">{movie.description}</p>
            </div>
        </div> */}
    </div>
  )
}



export default MovieReview