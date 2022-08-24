import React, { useEffect } from 'react'
import {useState} from 'react'
import './stylesheets/movieform.css'

function MovieForm() {

  const[stateTitle, setStateTitle] = useState("")
  const[stateThumbnail, setStateThumbnail] = useState("")
  const[stateDirector, setStateDirector] = useState("")
  const[stateDescription, setStateDescription] = useState("")
  const[stateBudget, setStateBudget] = useState("")
  const[stateBoxOffice, setStateBoxOffice] = useState("")

  const newMovie = {title: stateTitle, thumbnail_url: stateThumbnail, description: stateDescription, director: stateDirector, budget: stateBudget, box_office: stateBoxOffice}

  function handleSubmit() {
      fetch('http://localhost:9292/movies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: newMovie.title,
                thumbnail_url: newMovie.thumbnail_url,
                director: newMovie.director, 
                description: newMovie.description,
                budget: newMovie.budget,
                box_office: newMovie.box_office
            })
        })
      .catch(error => console.log(error))
  }

  
  return (
    <div className="form">
      <h1> Add a Movie </h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label> Title </label>
          <input type="text" name="Title" placeholder = "Title" onChange={(event) => setStateTitle(event.target.value)}/>
        </div>
        <div className="input-container">
          <label> Movie Image </label>
          <input type="text" name="image" placeholder = "Movie Image" onChange={(event) => setStateThumbnail(event.target.value)}/>
        </div>
        <div className="input-container">
          <label> Director </label>
          <input type="text" name="Director" placeholder = "Director" onChange={(event) => setStateDirector(event.target.value)}/>
        </div>
        <div className="input-container">
          <label> Description </label>
          <input type="text" name="Description" placeholder = "Description" onChange={(event) => setStateDescription(event.target.value)}/>
        </div>
        <div className="input-container">
          <label> Budget </label>
          <input type="text" name="Budget" placeholder = "Budget" onChange={(event) => setStateBudget(event.target.value)}/>
        </div>
        <div className="input-container">
          <label> Box Office </label>
          <input type="text" name="Box Office" placeholder = "Box Office" onChange={(event) => setStateBoxOffice(event.target.value)}/>
        </div>
        <button> Add + </button>
      </form>
    </div>
  )
}

export default MovieForm