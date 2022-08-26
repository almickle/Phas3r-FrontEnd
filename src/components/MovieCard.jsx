import "./stylesheets/moviecard.css";
import { useHistory } from "react-router-dom";
import Lightbulb from "./Lightbulb";
import { useState } from "react";

function MovieCard({ movie, movies, setMovieData }) {

  console.log(movie)



  let history = useHistory();

  function handleClick() {
    history.push("/reviews");
  }

  function handleAddReviewClick() {
    history.push(`/review_form/${movie.id}`);
  }

  function handleDeleteMovie(deletedMovie) {
    fetch(`http://localhost:9292/movies/${deletedMovie.id}`, {
      method: "DELETE",
    });
    setMovieData(movies.filter(movie=> movie.id !== deletedMovie.id));
  }

  return (
    <div id="movie-card-div">
      <div className="movie-img-div" onClick={handleClick}>
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
        <button onClick={handleClick}> Reviews </button>
        <button onClick={handleAddReviewClick}> Add a Review </button>
        <button onClick={()=>handleDeleteMovie(movie)}>Delete Movie </button>
        <Lightbulb movie={movie} />
      </div>
    </div>
  );
}

export default MovieCard;
