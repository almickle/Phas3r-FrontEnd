import './stylesheets/application.css'
import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import Reviews from "./components/Reviews"
import Login from "./components/Login"


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
          <div className="movie-div" key={movie.id}>
              <img src={movie.thumbnail_url} key={movie.id} alt={""} className="movie-img" />
          </div>
        )
    })

  return (
    <div id="container">
    <NavBar/>
    <div id="nav">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/movies">
          <Movies movies = {movieElements}/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
        <Route exact path="login">
            <Login/>
        </Route>
      </Switch>
    </div>
  </div>)}
  

export default App
