import React from 'react'
import "/home/mickle/Development/code/phase3/Phas3r-FrontEnd/phas3r/src/stylesheets/movies.css"


function Movies({movieData}) {

  const movieElements = movieData.map(movie => {
    return (
      <div className="movie-div" key={movie.id}>
          <img src={movie.thumbnail_url} key={movie.id} alt={""} className="movie-img" />
      </div>
    )
})

  return (
    <div id='content-div'>{movieElements}</div>
  )
}

export default Movies