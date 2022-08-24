import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"

import Home from "./components/Home"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import Reviews from "./components/Reviews"
import Login from "./components/Login"

import "./components/stylesheets/application.css";


function App() {

  const [movieData, setMovieData] = useState([{
    id: 1,
    title: "Inception",
    thumbnail_url: "https://th.bing.com/th/id/R.35072388899348650e7f6d7b322cff5d?rik=LOcfHdW%2bnTU7RA&riu=http%3a%2f%2fwww.imfdb.org%2fimages%2fthumb%2f9%2f91%2fInception_poster.jpg%2f405px-Inception_poster.jpg&ehk=yToRDzLt42OVbE%2f%2f4LvOsqlAMrrJ3VCbAuRMNngcvRA%3d&risl=&pid=ImgRaw&r=0",
    director: "Christopher Nolan",
    description: null,
    budget: 160,
    box_office: 836.8
    }])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then(resp => resp.json())
        .then(data => {
          console.log("Data:")
          console.log(data)
          setMovieData(data)})
    }, [])

    const [reviews, setReviews] = useState([])

    useEffect(() => {
      fetch("http://localhost:9292/reviews")
      .then(resp => resp.json())
      .then (data => {setReviews(data)})
    }, [])



  return (

    <div id="container">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home movieData={movieData} />
        </Route>
        <Route exact path="/movies">
          <Movies movieData={movieData}/>
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
  </div>
  
  )}
  

export default App
