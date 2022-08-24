import { useEffect, useState } from "react"
import "./stylesheets/moviereview.css"

function MovieReview({movieData}) {

    const [movieID, setMovieID] = useState()

    useEffect(() => {
        setMovieID(window.location.href.toString().match(/\/[0-9]\//)[0].split("")[1])
    }, [])

    useEffect(() => {
        console.log("MovieID:")
        console.log(movieID)
    }, [movieID])


  return (
    <div id="movie-review-div">
       {movieID}
    </div>
  )
}



export default MovieReview