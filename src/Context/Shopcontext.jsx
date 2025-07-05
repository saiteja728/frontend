import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product';
export const Shopcontext = createContext(null);

const getDefaultCart=()=>{
    const cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

export function Shopcontextprovider(props){
    const [cartItems, SetcartItems] =useState(getDefaultCart());
    
    const addToCart =(itemId)=>{
        SetcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart =(itemId)=>{
        SetcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
   
   const getTotalCartAmount=()=>{
    let totalAmount =0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo =all_products.find((e)=>e.id===Number(item));
            totalAmount+=itemInfo.new_price*cartItems[item]
        }
        
    }
    return totalAmount;
}
const getTotalCartItems=()=>{
    let totalItems =0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            
            totalItems+=cartItems[item]
        }
        
    }
    return totalItems;
}
 const contextvalue = {getTotalCartItems,all_products, cartItems, addToCart, removeFromCart,getTotalCartAmount};
    return(
        <div>
            <Shopcontext.Provider value={contextvalue}>
            {props.children}
            </Shopcontext.Provider>
        </div>
    )
}