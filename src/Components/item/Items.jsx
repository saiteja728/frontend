import React from "react";
import './Items.css';
import { Link } from "react-router-dom";
export function Items(props){
    return(
        <div className="items">
           <Link to={`/products/${props.id}`}><img 
           onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link> 
            <p>{props.name}</p>
            <div className="item-price">
                <div className="item-new-price">
                    ${props.new_price}
                </div>
                <div className="item-old-price">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}