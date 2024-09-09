import React, { useEffect, useState } from "react";
import "./trafic.css"

export function TrafficLights(){
    const GREEN = 0;
    const YELLOW =1;    
    const RED = 2;
    const RED_YELLOW=3;
    const [stan, setStan] = useState(0);
    const [robe, setRobe] = useState(false);
    useEffect(function(){
        let timer = setInterval(function(){
            setStan((stan+1)%4);
        }, 2000);
        return function(){
            clearTimeout(timer);
        }
    })
    return <div>
        <div className="trafficLight">
            <LightBulb color="red" active={robe && (stan === RED || stan === RED_YELLOW)} />
            <LightBulb color="yellow"  active={robe && (stan === YELLOW || stan === RED_YELLOW)} />
            <LightBulb color="green" active={robe && stan === GREEN} />
        </div>
        <div className="knopka" onClick={function(){
            setRobe(!robe);
        }}>{robe ? "OFF": "ON"}</div>
    </div>
}

export function LightBulb({color,active=false}){
    return <div className={"light-bulb "+color+(active?' active':'')}></div>
}