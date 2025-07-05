import React from "react";
import arrow_icon from '../Assets/arrow.png';
import './Breadcrum.css';

export function Breadcrum(props) {
    return (
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> 
            {props.product?.category} <img src={arrow_icon} alt="" /> {props.product?.name}
        </div>
    );
}