import React from "react";
import Screen from "./Screen";
import { Link } from "react-router-dom";

export default function CheckComplete(){


    return <Screen className="check_complete">
        <div className="check_complete_wrap text-center">
            <div>
                <img src="/img/Shape.svg" alt="complete" />
                <h1>Checkout complete</h1> 
                <h6>Thank you for your order. Your order has <br/> 
                    been dispatched and will arrive as fast as <br/>
                    the pony gallops!</h6>

                <Link className='button' to='/review/'>
                Review Order    
                </Link>
    
            </div>
        </div>                  
    </Screen> 
}