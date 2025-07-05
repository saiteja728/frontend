import React from "react";
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import '../Hero/Hero.css';
export function Hero(){
    return(
        <div className="hero">
            <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
        </div>
         <p>collections</p>
            <p>for everyone</p>
        <div className="hero-latest-btn">
        <button>Latest Collection &nbsp;&nbsp;
            <img src={arrow_icon} alt="" />
        </button>
        
        </div>
        
            </div>
            <div className="hero-right">
            <img src={hero_image} alt="" />
            </div>
            
        </div>
    )
}