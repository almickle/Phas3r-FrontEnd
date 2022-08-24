import React from 'react'
import './stylesheets/movieform.css'

function MovieForm() {

    const[newMovie, setNewMovie] = useState({title: "", thumbnail_url: "", director: "",
     description: "", budget: "", box_office: ""})

      function handleSubmit(e) {
        e.preventDefault();
        fetch ('http://localhost:9292/movies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: newMovie.title, thumbnail_url: newMovie.thumbnail_url, director: newMovie.director, 
                description: newMovie.description, budget: newMovie.budget, box_office: newMovie.box_office

            }),
        })
        setNewMovie()
      }
    
  
  return (
    <div className="form">
        <h1> Add a Movie </h1>
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
      <button onSubmit={handleSubmit}> Add + </button>
    </form>
  </div>
  )
}

export default MovieForm