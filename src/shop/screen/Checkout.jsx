import React, {createContext, useContext, useState} from 'react';
import Screen from './Screen';
import { Link } from 'react-router-dom';


export default function Checkout1(){
    const data = useContext(CheckoutContext);
    const setData = useContext(CheckoutUpdateContext);

    const handleChange = (key) => e => setData(data => ({...data, [key]: e.target.value}))

    // const handleFuncChenge = function(key){
    //     return function(e){
    //         return setData(data => ({...data, [key]: e.target.value}));
    //     }
    // }

    return <Screen className='checkout1'>
        <h1>Checkout</h1>
        <h2>Enter a shipping address</h2>
        <LabelInput 
            placeholder={'Rebecca Winter'}
            text={'Full Name * '}
            value={data.name || ''}
            onChange={handleChange('name')}
        />

        <LabelInput 
            placeholder={'Mandatory 112'}
            text={'Address Line 1 * '}
            value={data.line1 || ''}
            onChange={handleChange('line1')}
        />

        <LabelInput 
            placeholder={'Entrance 1'}
            text={'Address Line 2 '}
            value={data.line2 || ''}
            onChange={handleChange('line2')}
        />

        <div className='data_wrap'>
            <div className='data'>
                <LabelInput 
                    placeholder={'Truro'}
                    text={'City * '}
                    value={data.city || ''}
                    onChange={handleChange('city')}
                /> 
            </div>
            <div>
                <LabelInput 
                    placeholder={'Cornwall'}
                    text={'State / Region'}
                    value={data.region || ''}
                    onChange={handleChange('region')}
                /> 
            </div>
        </div>

        <div className='data_wrap'>
            <div className='data'>
                <LabelInput 
                    placeholder={'89750'}
                    text={'Zip Code *'}
                    value={data.zipcode || ''}
                    onChange={handleChange('zipcode')}
                /> 
            </div>
            <div>
                <LabelInput 
                    placeholder={'United Kingdom'}
                    text={'Country *'}
                    value={data.country || ''}
                    onChange={handleChange('country')}
                />
            </div>
        </div>
        <div>
            <Link to={'/checkcard/'} className="button">Next</Link>
        </div>
    </Screen>
}

export function LabelInput({text, value, onChange, placeholder}){
    return <label>
        <h3>{text}</h3>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange}/>
    </label>
}


export const CheckoutContext = createContext();
export const CheckoutUpdateContext = createContext();

export function CheckoutProvider({children}){
    const [data, setData] = useState({});

    return <CheckoutContext.Provider value={data}>
        <CheckoutUpdateContext.Provider value={setData}>
                {children}
        </CheckoutUpdateContext.Provider>
    </CheckoutContext.Provider>
}