import {useState} from 'react'

function SignUp() {

    const [stateUsername, setStateUsername] = useState('')
    const [statePassword, setStatePassword] = useState('')
    const [stateCritic,setStateCritic] = useState('')


    const [newUser, setNewUser]= useState({ is_critic: stateCritic,username: stateUsername, password: statePassword})

function handleSubmit(){
    fetch('http://localhost:9292/users', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_critic: stateCritic,
            username: stateUsername,
            password: statePassword,
          })
      })
}

  return (
    <div>
    <form onSubmit = {handleSubmit}>
    <div className="input-container">
        <label> Username </label>
        <input type="text" name="Username" placeholder = "Username" required onChange= {(e)=>setStateUsername(e.target.value)}/>
      </div>
      <div className="input-container">
        <label> Password </label>
        <input type="text" name="Password" placeholder = "Password" required onChange= {(e)=>setStatePassword(e.target.value)}/>
      </div>
      <div className="input-container">
        <label> Critic </label>
        <input type="text" name="Critic?" placeholder = "Critic?" required onChange= {(e)=>setStateCritic(e.target.value)}/>
      </div>
      <button> Sign Up </button>
      </form>
      </div>
  )
}

export default SignUp