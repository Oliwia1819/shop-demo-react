import React, { useContext } from "react";
import Screen from "./Screen";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart";


export default function ReviewOrder(){

    return <Screen className="review_order">

    </Screen>
}

function ListOrder(){
    const cart = useContext(CartContext);
   
}