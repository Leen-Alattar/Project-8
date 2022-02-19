import React, { useState } from 'react';
import Cart from './components/cart/Cart';
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error404/Error";
import Nav from './components/nav/Nav';

import {Header} from './components/Header/Header.jsx'
import {Menu} from './components/Menu.jsx'
import {Get} from './components/Get.jsx'
import Empty from './components/cart/Empty';

function App() {
  const [cart ,setCart]=useState([]);
  const [emptyCart,setEmptyCart] = useState(true);
 
  return (
    <>
   <Header  />
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="cart" element={<Cart cart={cart}  setCart={setCart} emptyCart={emptyCart} setEmptyCart={setEmptyCart}/>}></Route>
        <Route path="menu" element={<Menu cart={cart}  setCart={setCart}/>}></Route>
        <Route path="empty" element={<Empty />} ></Route>
      </Routes>
    </>
  );
}

export default App;
