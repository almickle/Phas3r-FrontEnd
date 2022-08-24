import "./stylesheets/moviecard.css"
import {Switch, Route, useHistory} from "react-router-dom"


function MovieCard({movie}) {
    

  let history = useHistory()

  function handleClick(){
    history.push(`/movies/${movie.id}/reviews`)
  }

  return (
    <div id="movie-card-div">
        <div className="movie-img-div" onClick = {handleClick}>
            <img className="movie-img" src={movie.thumbnail_url} alt={""} />
        </div>
        <div id="movie-info-div">
            <h1 id="movie-title">{movie.title}</h1>
            <li className="movie-info">Director: {movie.director}</li>
            <li className="movie-info">Budget: ${movie.budget} million</li>
            <li className="movie-info">Box Office: ${movie.box_office} million</li>
            <div id="movie-desc-div">
                <p id="movie-desc">{movie.description}</p>
            </div>
            <button onClick = {handleClick}> Reviews </button>
        </div>
    </div>
  )
}



export default MovieCard