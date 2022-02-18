

import React, { useState } from 'react';
import Cart from './components/cart/Cart';
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
    <React.Fragment>

    <Cart cart={cart}  setCart={setCart}/>
    </React.Fragment>
  );
}

export default App;
