import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setMovieData(data)})
    }, [])

    const movieElements = movieData.map(movie => {
        return <img src={movie.thumbnail_url} key={movie.id} alt={""} />
    })

  return (

    <div>
        <div>
            {movieElements}
        </div>
    </div>
    
  )
}

export default App
