import React from "react";
import './Descriptionbox.css';
export function Descriptionbox(){
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-navbox">Description</div>
                <div className="descriptionbox-navbox-fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Welcome to SHOPIFY-your premier destination for stylish, high-quality products at unbeatable prices! Browse our carefully curated collections of [men's/women's/kids'] fashion, electronics, home goods, and more.</p>
            <p>🌟 Why Shop With Us?
✅ Trending Products-Stay ahead with the latest styles
✅ Affordable Prices-Great value with regular discounts
✅ Fast Shipping-Quick delivery to your doorstep
✅ Secure Checkout-Safe and easy payments
✅ 24/7 Support-We're always here to help</p>
            </div>
        </div>
    )
}