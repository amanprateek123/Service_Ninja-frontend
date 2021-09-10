import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
            <div class="container">
<div class="page-left">
  <div class="header">
<div class="header1">Welcome Back</div>
  <div class="header2">Log in to your account using Phone Number and password</div>
  </div>
  <div class="form-page">
    <input class="email-add" type= "tel" placeholder="Phone Number" required/>
    <input class="pswd" type="password" placeholder="Password" required/>
 <p>
    <a href='#'> Forgot Password ?</a>
    </p>  
    <button class="login"> LOGIN </button>
  </div>
</div>
  <div class="page-right"></div>
</div>
        </>
    )
}

export default Login
