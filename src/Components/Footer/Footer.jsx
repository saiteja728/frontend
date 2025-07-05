import React from "react";
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
export function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={Footer_logo} alt="" />
                <p>SHOPIFY</p>
            </div>
           
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
           
            <div className="footer-social-icons">
                <div className="footer-icons">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons">
                    <img src={pintrester_icon} alt="" />
                </div>
                 <div className="footer-icons">
                     <img src={whatsapp_icon} alt="" />
                </div>
                
            </div>
            <div className="back">
                    <a href="#"><i class="bi bi-arrow-up"></i></a>
                </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2025 - All Rights Reserved.</p>
            </div>

        </div>
    )
}