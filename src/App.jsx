import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"

import Home from "./components/Home"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import Reviews from "./components/Reviews"
import Login from "./components/Login"
import MovieReview from './components/MovieReview'
import MovieForm from './components/MovieForm'

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
    }, 
    {
      id: 2,
      title: "Avatar",
      thumbnail_url: "https://th.bing.com/th/id/R.2bc65b280e714cdda50cae397ba574f9?rik=cbM0VAz9tHQTKw&riu=http%3a%2f%2f1.bp.blogspot.com%2f_KIU4QaKZDps%2fTOwDHqDLRnI%2fAAAAAAAAAFU%2fGafWBNV-3RY%2fs1600%2fAvatar_DVD.jpg&ehk=0uT2hMrAaKrFce070UTPBzuiSeZMq6jV2IVFV6IqYSs%3d&risl=&pid=ImgRaw&r=0",
      director: "James Cameron",
      description: null,
      budget: 237,
      box_office: 2847
      }])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then(resp => resp.json())
        .then(data => {
          // console.log("Data:")
          // console.log(data)
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
        <Route exact path="/movies/:id/reviews">
          <MovieReview movieData={movieData}/>
        </Route>
        <Route exact path="/movie_form">
          <MovieForm/>
        </Route>
        <Route exact path="/review_form">
          <ReviewForm/>
        </Route>
      </Switch>
  </div>
  
  )}
  

export default App
