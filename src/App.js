import React, { useState } from 'react';
import Cart from './components/cart/Cart';
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error404/Error";
import "./style/style.css";
import Nav from './components/nav/Nav';

function App() {
  const [cart ,setCart]=useState([{
    price:10,
    id:1,
    total:10,
  },{
    price:5,
    id:2,
    total:5
  }]);
  sessionStorage.setItem("cart", JSON.stringify(cart));
 
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<div>hi</div>}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="cart" element={<Cart cart={cart}  setCart={setCart}/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
