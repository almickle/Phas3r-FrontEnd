import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import "./stylesheets/login.css";
import {Switch} from 'antd'

function App() {
 
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const[toggle,setToggle] = useState(false)

  let history = useHistory()

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(data => {
      setUsers(data)})
}, [])

  const database = users;

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };
  console.log(users)

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    function handleSignClick (){
      history.push('/user/sign_up')
    }

    function toggler (){
      toggle ? setToggle(false): setToggle(true)
    }


  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="toggle-container"> 
        Critic
        <Switch type = "toggle" onClick = {toggler}/>
        Audience
        {renderErrorMessage("toggle")}
        </div>
        <div className="button-container">
          <input type="submit"></input>
        </div>

      </form>
      <span onClick = {handleSignClick}> Sign Up </span>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">

        {isSubmitted ? <div> {history.push('/')}</div> : renderForm}
      </div>
    </div>
  );
}

export default App;