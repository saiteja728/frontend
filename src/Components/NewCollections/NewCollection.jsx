import React from "react";
import './NewCollection.css';
import new_collecitons from '../Assets/new_collections';
import { Items } from "../item/Items";
export function NewCollection(){
    return(
        <div className="new-collection">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="new-collection-item">
         {
                new_collecitons.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image}
                        new_price={item.new_price} old_price={item.old_price} />
                })
            }
            </div>
           
        </div>
    )
}