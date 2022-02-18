import React, { useState } from "react";
import "./cart.css";
import CartDish from "./CartDish";
import CardItem from "./CartDish";
const Cart = ({ cart, setCart }) => {
  return (
    <React.Fragment>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>dish</th>
              <th>Dish Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((dish) => (
              <CartDish
                cart={cart}
                key={dish.id}
                setCart={setCart}
                dish={dish}
              />
            ))}
          </tbody>
        </table>
        <div className="check-out">
          <h3 > Order Summary</h3>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
