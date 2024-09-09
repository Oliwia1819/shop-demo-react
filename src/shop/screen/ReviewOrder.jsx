import React, { useContext } from "react";
import Screen from "./Screen";
import { Link } from "react-router-dom";
import { CartContext, CartItemsContext } from "../Cart";
import { items } from "./Items";
import Rating from "./Rating";
import { CountBlock } from "./ProductScreen";


export default function ReviewOrder(){
    const cartItems = useContext(CartItemsContext);

    return <Screen className="review_order">
        {cartItems.map(
                    (item,index)=> <ListOrder key={index} index={index} item={item} />
                )}
    </Screen>
}

function ListOrder({index, item}){
    
    
        const product = items.find(i => i.id === item.id);
        const cart = useContext(CartContext);
        
        return <div className='cart_item'>
            <div className='photocard'><img alt={product.name} src={product.photo}/></div> 
            <div className='item_description'>
                <h1>{product.name}</h1>
                <Rating  value={product.opinion} />
                <div className='color_in_cart'>Color: <ColorSelect color={item.color}/></div>
                <p className='price'> ${product.price.toFixed(2)} </p>  
                <div className='button_remove_wrap'>
                    <CountBlock count={item.count} setCount={count => cart.setCount(index, count)}/>
                    <div className='button_remove' onClick={() => cart.remove(index)}>
                        Remove</div>   
                </div>              
            </div>
        </div>  
    }
