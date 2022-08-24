import React, { useEffect, useState } from 'react'
import "./stylesheets/slideshow.css"

function Slideshow({movieData}) {

    const [currentMovie, setCurrentMovie] = useState([])
    const [movieTimer, setMovieTimer] = useState(0)

    useEffect(() => {
        setTimeout(() => {
        setCurrentMovie(movieData[movieTimer])
        setMovieTimer(movieCount())
    }, 5000)
}, [currentMovie])

    function movieCount() {
        if(movieTimer === movieData.length - 1) {
            return 0
        } else return movieTimer + 1
    }
    

  return (
    <div id='slideshow-div'>
        <img id="movie-img" src={currentMovie.thumbnail_url}/>
    </div>
  )
}

export default Slideshow