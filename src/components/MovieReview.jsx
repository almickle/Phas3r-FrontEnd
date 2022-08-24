import { useEffect, useState } from "react"
import "./stylesheets/moviereview.css"

function MovieReview() {

    const [movieID, setMovieID] = useState()

    useEffect(() => {
        setMovieID(window.location.href.toString().match(/\/[0-9]+\//)[0].replaceAll("/", ""))
    }, [])

    console.log(window.location.href.toString().match(/\/[0-9]+\//)[0].replaceAll("/", ""))


  return (
    <div id="movie-review-div">
       {movieID}
    </div>
  )
}



export default MovieReview