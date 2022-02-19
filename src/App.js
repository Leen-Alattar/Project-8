import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error404/Error";

import Card from "./Card.js";
import Data from "./Data";
import Buttons from "./Buttons";
import { Header } from "./components/Header/Header.jsx";
import Empty from "./components/cart/Empty";
import Filter from "./components/filter/Filter";

const App = () => {
  const [cart, setCart] = useState([]);
  const [emptyCart, setEmptyCart] = useState(true);
  const [item, setItem] = useState(Data);

  return (
    <>
      <Header />
      <Routes>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              emptyCart={emptyCart}
              setEmptyCart={setEmptyCart}
            />
          }
        ></Route>
        <Route
          path="menu"
          element={
            <Filter
              cart={cart}
              setCart={setCart}
              item={item}
              setItem={setItem}
            />
          }
        ></Route>
        <Route path="empty" element={<Empty />}></Route>
      </Routes>
    </>
  );
};

export default App;
