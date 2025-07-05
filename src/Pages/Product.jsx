import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../Context/Shopcontext";
import { Breadcrum } from "../Components/Breadcrum/Breadcrum";
import { Productdisplay } from "../Components/Productdisplay/Productdisplay";
import { Descriptionbox } from "../Components/Descriptionbox/Descriptionbox";
import { Relatedproducts } from "../Components/Relatedproducts/Relatedproducts";

export function Product() {
    const contextValue = useContext(Shopcontext);
    const { productId } = useParams();

    // Debugging
    console.log("Context value:", contextValue);  
    console.log("Product ID:", productId);
    const all_products = contextValue.products || contextValue.all_products || [];

    if (!all_products || !Array.isArray(all_products)) {
        return <div>Loading products or no products available</div>;
    }

    const product = all_products.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Breadcrum product={product} />
           <Productdisplay product={product}/>
           <Descriptionbox/>
           <Relatedproducts/>
        </div>
    );
}