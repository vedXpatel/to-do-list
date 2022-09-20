import React, { useEffect, useState } from 'react';
import '../styles/task.scss';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  const [show,setShow] = useState(false);
  const [showError,setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


  return (
    <>
        <div class="card card--accent">
          <h2>Email</h2>
          <label class="input">
            <input class="input__field" value={email} type="text" placeholder=" " onChange={handleEmailChange}/>
          </label>
          <h2>Password</h2>
          <label class="input">
            <input class="input__field" value={password} type="password" placeholder=" " onChange={handlePasswordChange}/>
          </label>
          <div class="button-group">
            <button className="sendButton" >Add Task</button>
          </div>
        </div>
    </>
  )
}

export default Login;