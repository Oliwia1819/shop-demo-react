import React from 'react';


export const SCREEN = {
  MAIN: "main", 
  CART: "cart", 
  CHECKOUT: "checkout"
};

export function App(props) {
  const [screen, setScreen] = React.useState(SCREEN.MAIN);
 
  return (
    <div className='App'>
      {(screen === SCREEN.MAIN ? <div>main</div>:"")}
      {(screen === SCREEN.CART ? <h1>cart1</h1>:"" )}
      <div onClick={()=>setScreen(SCREEN.CART)}>open cart</div>
    </div>
  );
}
