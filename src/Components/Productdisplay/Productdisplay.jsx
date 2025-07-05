import React, { useContext } from "react";
import './Productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { Shopcontext } from "../../Context/Shopcontext";
export function Productdisplay(props){
    const {product} = props
    const {addToCart} =useContext(Shopcontext);
    return(
        <div className="productdiplay">
            <div className="productdisplay-left">
                <div className="productdisplayimg-list">
                    <img src={product.image} alt="" />
                     <img src={product.image} alt="" />
                      <img src={product.image} alt="" />
                       <img src={product.image} alt="" />
                </div>
                <div className="productdisplayimg-main">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="productdiplay-right">
                <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-prices-new">
                        ${product.new_price}
                    </div>
                    </div>
                    <div className="productdisplay-right-desc">
                        A light weight pullover shirt
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>X</div>
                            <div>L</div>
                            <div>S</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <div className="productdisplay-category">
                        <button onClick={() => addToCart(product.id)}>Add To Cart</button>
                        <p className="productdisplay-category"><span>Category:</span>Women, T-shirt, Crop Top</p>
                    <p className="productdisplay-category"><span>Tags:</span>Modern, Latest</p>
                    </div>
                
          
            </div>
        </div>
    )
}