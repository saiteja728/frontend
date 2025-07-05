import React from "react";
import './CSS/Login.css';
import { Link } from "react-router-dom";

export function Login(){
    return(
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-fields">
                  <input type="text" placeholder="Username" required/><br></br>
                <input type="password" placeholder="Password" required/><br></br>
                </div>
                <button>submit</button>
                <div className="login-login">
                 <p className="login-agree">Already have an account? <Link to='/login/signup'>SignUp here</Link></p>
                <input type="checkbox"/><span>By continuing, i agree to the terms of use & privacy policy.</span>
                </div>
            </div>
        </div>
    )
}