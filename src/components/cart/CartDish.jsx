import React, { useEffect, useState } from "react";

const CartDish = ({ cart, setCart, dish }) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState();

  let incrementCount = () => {
    

    // console.log(sesscart);
    setCount(count + 1);
    setTotal(count===1?dish.price:count * dish.price);
    // const newCart = sesscart.map((d) =>
    //   d.id === dish.id ? { ...d, total: total } : d
    // );
    //    setCart(newCart);
  };

  let decrementCount = () => {
    if (count >= 2) setCount(count - 1);
    setTotal(count * dish.price);
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
  //   useEffect(() => {
  //     sessionStorage.setItem("cart", JSON.stringify(cart));
  //   }, [cart]);
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
