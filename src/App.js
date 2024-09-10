import React from 'react';
import logo from './logo.svg';
import './style.css';
import { TrafficLights } from './TraficLight/TrafficLights';
import { Game } from './Game';
import Catalog from './shop/screen/Catalog';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ScreenCart, { Cart } from './shop/screen/CartScreen';
import ProductScreen from './shop/screen/ProductScreen';
import { CartProvider } from './shop/Cart';
import Checkout1, { CheckoutProvider } from './shop/screen/Checkout';
import Checkout2 from './shop/screen/CheckCard';
import CheckComplete from './shop/screen/CheckComplete';
import ReviewOrder from './shop/screen/ReviewOrder';
import LogIn from './shop/screen/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog />
    },
  {
    path: "/cart",
    element:  <ScreenCart />
  },
  {
    path: "/product/:id",
    element:  <ProductScreen />
  },
  {
    path: "/checkout",
    element: <Checkout1 />
  },
  {
    path: "/checkcard",
    element: <Checkout2 />
  },
  {
    path: "/checkout_complete",
    element: <CheckComplete />
  },
  {
    path: "/review",
    element: <ReviewOrder />
  },
  {
    path: "/login",
    element: <LogIn />
  },
]);



function App() {
  return (
    <div className="shop">
      <CartProvider>
        <CheckoutProvider>
          <RouterProvider router={router} />
        </CheckoutProvider>
      </CartProvider>
    </div>
  );
}
 

export default App;
