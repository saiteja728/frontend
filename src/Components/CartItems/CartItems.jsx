import React, { useContext } from "react";
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Shopcontext } from "../../Context/Shopcontext";

export function CartItems() {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(Shopcontext);

    const handleCheckout = async () => {
        try {
            const response = await fetch('http://localhost:2002/api/cartitems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    all_products,
                    cartItems
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                alert('Cart items saved successfully!');
                // Optionally clear the cart here
            } else {
                throw new Error(data.error || 'Failed to save cart');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Failed to save cart. Please try again.');
        }
    };

    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-qty">{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img 
                                className="cartitems-remove-icon" 
                                src={remove_icon} 
                                alt="Remove" 
                                onClick={() => removeFromCart(e.id)}
                            />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}