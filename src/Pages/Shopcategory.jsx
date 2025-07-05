import React, { useContext } from "react";
import './CSS/Shopcategory.css';
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Items } from "../Components/item/Items";

export function Shopcategory(props) {
    const { banner, category } = props;
    const contextData = useContext(Shopcontext);
    
    // Safely get products array from context (adjust based on actual context structure)
    const all_products = contextData.products || contextData.all_products || [];
    
    // Filter products
    const categoryProducts = all_products.filter(item => category === item.category);
    
    return (
        <div className="shop-category">
            <img src={banner} alt={`${category} banner`} className="shopcategory-banner" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-{categoryProducts.length}</span> out of {categoryProducts.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="dropdown icon"/>
                </div>
            </div>
            <div className="shopcategory-products">
                {categoryProducts.length > 0 ? (
                    categoryProducts.map((item) => (
                        <Items 
                            key={item.id}
                            id={item.id}
                            name={item.name} 
                            image={item.image}
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
            <div className="load-more">
                Explore more
            </div>
        </div>
    )
}