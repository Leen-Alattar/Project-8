import React, { useEffect, useState } from "react";

const CartDish = ({ cart, setCart, dish }) => {
  const [count, setCount] = useState(dish.total);
  const [total, setTotal] = useState(dish.price * dish.total);

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
    updateTotal();
    //
  }, [count]);

  const updateTotal = () => {
    let updateCart = JSON.parse(sessionStorage.getItem("cart"));
    updateCart = updateCart.map((el) => el.id == dish.id ?  {...el,total:count}: el
    );
    sessionStorage.setItem("cart", JSON.stringify(updateCart));
  };
  return (
    <tr>
      <td  data-label="Dish">
        <img width="100px" src={dish.img} alt="" />
      </td>
      <td data-label="Dish Name" >{dish.name}</td>
      <td data-label="Price" > {dish.price} JD</td>
      <td data-label="Quantity" className="quantity-td">
        <div>
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
        </button></div>
      </td>
      <td data-label="Price">{total} JD</td>
      <td data-label="Delete Dish">
        <button className="delete-btn" onClick={deleteHandle}>
          &#10008;
        </button>
      </td>
      
    </tr>
  );
};

export default CartDish;
