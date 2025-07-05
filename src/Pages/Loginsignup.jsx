import React from "react";
import './CSS/Loginsignup.css';
import { Link } from "react-router-dom";
export function Loginsignup(){
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                  <input type="text" placeholder="Your name"/><br></br>
                <input type="email" placeholder="Email address"/><br></br>
                <input type="Password" placeholder="Password"/><br></br>
                </div>
                <button>Continue</button>
                <p className="loginsignup-agree">or</p>
                <p className="loginsignup-agree"><Link to='/login'>Login here</Link></p>
               
            </div>
        </div>
    )
}