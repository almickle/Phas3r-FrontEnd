
import { useEffect, useState } from "react"
import "./stylesheets/lightbulb.css"


function Lightbulb({movie}) {

  const [avgScore, setScores] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${movie.id}/reviews/scores`)
    .then(resp => resp.json())
    .then(data => setScores(Math.round(data.reduce((a,b) => a + b, 0) / data.length)))
  }, [])

  useEffect(() => {
    // console.log("data:")
    // console.log(avgScore)
  }, [avgScore])

  const lightBulbs = []
  for(let i = 0; i < avgScore; i++) {
    lightBulbs.push(<div id="lightbulb-div"><img id="lightbulb-img" src="https://th.bing.com/th/id/R.62464490bffe279897fb9742408400e6?rik=mo1QQF3kQ9Ubeg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2facq%2feGK%2facqeGK8xi.jpeg&ehk=dIMEkEf%2f%2bLi%2fLj2dHIFLLmdGkNCIbrzMWUhhdnJxEwM%3d&risl=&pid=ImgRaw&r=0"/></div>)
  }


  return (

  <span id="lightbulb-span">
    {lightBulbs}
  </span>

  )
}

export default Lightbulb

// https://th.bing.com/th/id/R.62464490bffe279897fb9742408400e6?rik=mo1QQF3kQ9Ubeg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2facq%2feGK%2facqeGK8xi.jpeg&ehk=dIMEkEf%2f%2bLi%2fLj2dHIFLLmdGkNCIbrzMWUhhdnJxEwM%3d&risl=&pid=ImgRaw&r=0