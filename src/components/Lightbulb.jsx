
import { useEffect } from "react"
import "./stylesheets/lightbulb.css"


function Lightbulb({movie}) {

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${movie.id}`)
  }, [])


  const lbScore = movie.reviews

  useEffect(() => {
    console.log("data:")
    console.log(lbScore)
  }, [])


  return (

  <span>

  </span>

  )
}

export default Lightbulb

// https://th.bing.com/th/id/R.62464490bffe279897fb9742408400e6?rik=mo1QQF3kQ9Ubeg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2facq%2feGK%2facqeGK8xi.jpeg&ehk=dIMEkEf%2f%2bLi%2fLj2dHIFLLmdGkNCIbrzMWUhhdnJxEwM%3d&risl=&pid=ImgRaw&r=0