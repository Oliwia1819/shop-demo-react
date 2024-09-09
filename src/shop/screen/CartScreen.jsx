import React, { useContext } from 'react'
import {
    Link,
  } from "react-router-dom";
import Screen from './Screen.jsx';
import { CartItemsContext, CartContext} from '../Cart.jsx';
import { items } from './Items.jsx';
import Rating from "./Rating.jsx";
import { ColorSelect, CountBlock } from './ProductScreen.jsx';
import { disable } from 'workbox-navigation-preload';



  
export default function ScreenCart(){
    const cartItems = useContext(CartItemsContext);
   
     return <Screen className="cart">
       {cartItems.length === 0 ?<EmptyCart />:<div className='cart_full'>
            <div className='cart_full_wrap'>
                <h1>My Cart</h1>
                {cartItems.map(
                    (item,index)=> <CartItem key={index} index={index} item={item} />
                )}
            </div>
            <div className='total_button_wrap'>
                <div className='total'>
                <TotalItems/>
                <TotalPrice/>
                </div>
                 <Link to={'/checkout/'} className="button">To Checkout</Link>                 
            </div>
        </div>}
    </Screen>
    
}
    
export function EmptyCart(){    
    return  <div className='cart_empty text-center'>
        <div>
            <img src="/img/cart-vector.svg" alt="cart" />
            <div className='cart_empty_text'>
                <h1>No items</h1> 
                <h6>Oh no! Your cart is empty. Fill it up with <br/>
                    swag to complete your purchase.</h6>
                <Link className='button' to='/'>
                    Go Shopping      
                </Link>
            </div>
        </div>
    </div>   
}

function CartItem({index, item}){
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

function TotalItems(){
    const cartLength = useContext(CartItemsContext);
    
    return <div className='total_item'>
        <b> Total: </b>
        {cartLength.length} items 
    </div>
    
}

function TotalPrice(){
    const cartItems = useContext(CartItemsContext);
    const sum = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.count * items.find(el => currentValue.id === el.id).price, 0);
  
    return <div className='total_price'>
        <h1>${sum.toFixed(2)}</h1>
    </div>

}










