import React, { useEffect, useState } from 'react'
import "./stylesheets/slideshow.css"

function Slideshow({movieData}) {

    const [currentMovie, setCurrentMovie] = useState(movieData[0])
    const [movieTimer, setMovieTimer] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log("input");
        setCurrentMovie(movieData[movieTimer])
        setMovieTimer(() => {
            if(movieTimer === movieData.length - 1) {
                return 0
            } else return movieTimer + 1
        })
    }, 2000)
}, [movieTimer, movieData], [])
    

  return (
    <div id='slideshow-div'>
        <img id="movie-img" src={currentMovie.thumbnail_url} alt=""/>
    </div>
  )
}

export default Slideshow