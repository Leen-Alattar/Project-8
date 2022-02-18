import React, { useEffect, useState } from "react";

const CartDish = ({ cart, setCart, dish }) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(dish.price);

  let incrementCount = () => {
    setCount(count + 1);
   
 
    
  };

  let decrementCount = () => {
    if (count >= 2) setCount(count - 1);
  };

  //delete dish from the cart
  const deleteHandle = () => {
    let sessionCart = JSON.parse(sessionStorage.getItem("cart"));
    let remainder = sessionCart.filter((d) => {
      if (d.id !== dish.id) return d;
    });
    sessionStorage.setItem("cart", JSON.stringify(remainder));
    setCart(remainder);
  };
  
  useEffect(() => {
    setTotal(count * dish.price);
  }, [count,dish.price]);
  
  
  return (
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td> {dish.price} JD</td>
      <td className="quantity-td">
        <button className="btn-minus" type="button" onClick={decrementCount}>
          &#9866;
        </button>

        <input
          type="text"
          className="quantity-input"
          value={count}
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          readOnly
        />

        <button className="btn-plus" type="button" onClick={incrementCount}>
          &#10011;
        </button>
      </td>
      <td>{total} JD</td>
      <td>
        <button className="delete-btn" onClick={deleteHandle}>
          &#10008;
        </button>
      </td>
    </tr>
  );
};

export default CartDish;
