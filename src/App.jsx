import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"

import Home from "./components/Home"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import Reviews from "./components/Reviews"
import Login from "./components/Login"

import "./components/stylesheets/application.css";


function App() {

  const [movieData, setMovieData] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setMovieData(data)})
    }, [])


  return (

    <div id="container">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/movies">
          <Movies movieData = {movieData}/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
        <Route exact path="/login">
            <Login/>
        </Route>
      </Switch>
  </div>
  
  )}
  

export default App
