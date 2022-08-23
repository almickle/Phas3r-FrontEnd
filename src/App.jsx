import './stylesheets/application.css'
import { useState, useEffect } from 'react'

function App() {

  const [movieData, setMovieData] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setMovieData(data)})
    }, [])

    const movieElements = movieData.map(movie => {
        return (
          <div className="movie-div" key={movie.id} >
              <img src={movie.thumbnail_url} key={movie.id} alt={""} className="movie-img" />
          </div>
        )
    })

  return (

    <div id="content-div">
        {movieElements}
    </div>
    
  )
}

export default App
