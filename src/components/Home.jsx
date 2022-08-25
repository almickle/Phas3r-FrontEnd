import React from 'react'
import Slideshow from './Slideshow'

import "./stylesheets/home.css"

function Home({movieData}) {
  return (
    
    <div id='home-div'>
      <Slideshow movieData={movieData} />
    </div>
  )
}

export default Home