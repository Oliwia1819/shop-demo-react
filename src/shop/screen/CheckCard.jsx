import React, { useContext } from "react";
import Screen from "./Screen";
import { CheckoutContext, CheckoutUpdateContext, LabelInput } from "./Checkout";
import { Link } from "react-router-dom";




export default function Checkout2(){
    const data = useContext(CheckoutContext);
    const setData = useContext(CheckoutUpdateContext);

    const handleChange = (key) => e => setData(data => ({...data, [key]: e.target.value}))
    
    return <Screen back={'/checkout'} className="checkout2">
        <h1>Checkout</h1>
        <h2>Enter a payment method</h2>
        <h6>You will not be charged until you review your <br /> 
            purchase on the next screen.</h6>
        <div className="card_wrap">
            <h4>Card</h4>
            <img src="/img/card.svg" alt="icon card" />
        </div>
        <LabelInput
            placeholder={'Rebecca Winter'}
            text={'Full Name On Card * '}
            value={data.name || ''}
            onChange={handleChange('name')}
        />

        <LabelInput
            placeholder={'5555 5555 5555 4444'}
            text={'Card Number * '}
            value={data.number || ''}
            onChange={handleChange('number')}
        />

        <LabelInput
            placeholder={'Rebecca Winter'}
            text={'Full Name On Card * '}
            value={data.name || ''}
            onChange={handleChange('name')}
        />
        <div className="data_wrap">
            <div className="data">
                <LabelInput
                    placeholder={'03/26'}
                    text={'Expiration DATE * '}
                    value={data.date || ''}
                    onChange={handleChange('date')}
                />
            </div>
            <div>
                <LabelInput
                    placeholder={'123'}
                    text={'Security Code * ' }
                    value={data.code || ''}
                    onChange={handleChange('code')}
                />
            </div>
        </div>

        <div>
            <Link to={'/checkout_complete/'} className="button">Buy</Link>
        </div>


    </Screen>
}