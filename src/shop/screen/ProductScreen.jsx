import React, { useContext, useState } from "react";
import { items } from './Items.jsx';
import Screen from "./Screen.jsx";
import { useParams } from "react-router-dom";
import Rating from "./Rating.jsx";
import { CartContext } from "../Cart.jsx";



export const COLOR = {
  'black': '#000',
  'grey': '#6C6C6C',
  'red': '#ED3540',
}

export default function ProductScreen(){
    const params = useParams();
    const product = items.find(i=>i.id == params.id);
    const [color, setColor] = useState('black');
    const [count, setCount] = useState(1);
    const cart = useContext(CartContext);
    return <Screen back={'/'} className='product_screen'>
      <h1>{product.name}</h1>
      <Rating  value={product.opinion} />      
      <div className='photocard'><img alt={product.name} src={product.photo}/></div> 
      <div className="color">Color: 
      {Object.keys(COLOR).map(e => 
        <ColorSelect active={e === color} color={e} key={e}  onClick={function(){setColor(e)}}/>
      )}
      </div>
      <p className='price'> ${product.price.toFixed(2)} </p>
      <div className="count_button_wrap">
        <CountBlock count={count} setCount={setCount}/>
        <div className="button" onClick={()=>cart.add({id:product.id, color, count})}>Add To Cart</div>
      </div>
      
      </Screen>
  }

  export function ColorSelect({active=false, onClick, color}){
    return <div 
    className={"color_select"+(active?' active':'')}
    style={{backgroundColor: COLOR[color]}}
    onClick={onClick}>
  </div>
  }

  export function CountBlock({count, setCount}){
    return <div className="count_button">
    <div 
      onClick={function(){setCount(Math.max(count - 1, 1))}}
      className="round_button"><img src="/img/minus.svg" alt="minus" /></div>
    <div className="count">{count}</div>
    <div  
      onClick={function(){setCount(count + 1)}}
      className="round_button"><img src="/img/plus.svg" alt="plus" /></div>
</div>
  }



