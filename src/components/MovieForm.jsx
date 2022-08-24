import React from 'react'
import './stylesheets/movieform.css'

function MovieForm() {
  return (
    <div className="form">
    <form>
      <div className="input-container">
        <label> Title </label>
        <input type="text" name="Title" placeholder = "Title" />
      </div>
      <div className="input-container">
        <label> Movie Image </label>
        <input type="text" name="image" placeholder = "Movie Image" />
      </div>
      <div className="input-container">
        <label> Director </label>
        <input type="text" name="Director" placeholder = "Director" />
      </div><div className="input-container">
        <label> Description </label>
        <input type="text" name="Description" placeholder = "Description" />
      </div><div className="input-container">
        <label> Budget </label>
        <input type="text" name="Budget" placeholder = "Budget" />
      </div><div className="input-container">
        <label> Box Office </label>
        <input type="text" name="Box Office" placeholder = "Box Office" />
      </div>
    </form>
  </div>
  )
}

export default MovieForm