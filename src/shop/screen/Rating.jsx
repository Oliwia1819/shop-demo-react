import React from "react";

export default function({value}){
    return <div className='stars'>
            <div className='stars-inner' style={{width: (value / 0.05).toFixed(2)+'%'}}>
            </div>
        </div>
}