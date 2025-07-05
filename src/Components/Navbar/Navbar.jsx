import {React, useContext, useState} from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { Shopcontext } from "../../Context/Shopcontext";
export function Navbar(){
    const {getTotalCartItems} = useContext(Shopcontext);
    const [menu , setMenu] =useState('shop')
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPIFY</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link to='/' style={{textDecoration:'none'}}>SHOP</Link> {menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('men')}}><Link to='/mens' style={{textDecoration:'none'}}>MEN</Link>{menu==='men'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('women')}}><Link to='/womens' style={{textDecoration:'none'}}>WOMEN</Link>{menu==='women'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('kids')}}><Link to='/kids' style={{textDecoration:'none'}}>KIDS</Link>{menu==='kids'?<hr/>:<></>}</li>
            </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div> 
        </div>
        </div>
    )
}