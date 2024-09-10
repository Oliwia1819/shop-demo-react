import React, { useContext } from "react";
import Screen from "./Screen";
import { Link } from "react-router-dom";
import { CartContext, CartItemsContext } from "../Cart";
import { items } from "./Items";
import Rating from "./Rating";
import { ColorSelect } from "./ProductScreen";
import { TotalPrice, TotalItems } from "./CartScreen";
import { CheckoutContext, CheckoutUpdateContext } from "./Checkout";


export default function ReviewOrder(){
    const cartItems = useContext(CartItemsContext);
    
   

    return <Screen className="review_order">
            <h1>Checkout</h1>
            <h2>Review your order</h2>
                {cartItems.map(
                        (item,index)=> <ListOrder key={index} index={index} item={item} />
                    )}

            <h2>Delivery Address</h2>
            <DeliveryAddress />

            <h2 className="payment_method">Payment Method</h2>
            <div className="total">
                <TotalItems />
                <TotalPrice />
            </div>

            <Link className="button" to={'/'}>Continue Shopping</Link>

    </Screen>
}

function ListOrder({item}){ 
        const cart = useContext(CartContext);
        const cartItems = useContext(CartItemsContext);
        const product = items.find(i => i.id === item.id);
        const count = cartItems.find(c => c.id === item.id).count*product.price;
       
        return <div className='cart_item'>
                    <div className='photocard'><img alt={product.name} src={product.photo}/></div> 

                    <div className='item_description'>
                        <h1>{product.name}</h1>
                        <Rating  value={product.opinion} />
                        <div className='color_in_cart'>Color: <ColorSelect color={item.color}/></div>
                        <p className='price'> ${product.price.toFixed(2)} </p>  

                        <div className='count_wrap'>
                               {'Count: ' + cartItems.find(c => c.id === item.id).count}
                               <b>${count.toFixed(2)}</b>
                        </div>              
                    </div>
                </div>  
    }

    function DeliveryAddress(){
        const data = useContext(CheckoutContext);
        
        return  <div>
                    <p>{data.name}</p>
                    <p>{data.line1 + ', ' + data.line2}</p>
                    <p>{data.city + ', ' + data.region}</p>
                    <p>{data.country + ', ' + data.zipcode}</p>
                </div>    
    }