import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import CartDish from "./CartDish";

const Cart = ({ cart, setCart, setEmptyCart, emptyCart }) => {
  const [totalCart,setTotalCart] =useState(0);
 
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("cart") !== null) {
      var sessionCart = JSON.parse(sessionStorage.getItem("cart"));
      setCart(sessionCart);
     
    } else {
      navigate("/empty");
    }
  }, [setCart, navigate]);

  return (
    <React.Fragment>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Dish Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((dish) => (
              <CartDish
                cart={cart}
                key={dish.id}
                setCart={setCart}
                dish={dish}
                dishId={dish.id}
              />
            ))}
          </tbody>
        </table>
        <div className="check-out">
          <h3> Order Summary</h3>
          <h2>Total Cart <span>{totalCart} JD</span></h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
