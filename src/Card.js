import React from "react";
import  "./style.css";

const Card = ({ item ,setItem ,cart, setCart }) => {
  const addToCartHandler = (dish) => {
    if (sessionStorage.getItem("cart") == null) {
      sessionStorage.setItem("cart", JSON.stringify([dish]));
    } else {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      let exist = cart.filter((meal) =>
      { if( meal.id == dish.id) return meal}
      );
  
      if (exist.length !== 0) {
        let c = cart.map((meal) => {
          if (meal.id == dish.id) {
            meal.total =  meal.total + 1 ;
          }
        });
       sessionStorage.setItem("cart", JSON.stringify(cart));
       } else {
         cart = [...cart, dish];
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
     }
    };

  return (
    <>
      <div className="container2 ">
        <div className="menu">
          <h2 className="menu-group-heading"></h2>
          <div className="menu-group">
            {item.map((Val) => {
              return (
              
                  <div className="menu-item" key={Val.id}>
                    <img
                      className="menu-item-image"
                      src={Val.img}
                      alt="Bruschetta"
                    />

                    <div className="menu-item-text">
                      <h3 className="menu-item-heading">
                        <span className="menu-item-name"> {Val.name}</span>
                        <span className="menu-item-price">
                          <a onClick={() => addToCartHandler(Val)}>
                            {Val.price}{" "}
                            <i
                              className="fa fa-shopping-basket"
                              aria-hidden="true"
                              style={{ marginLeft: "10px" }}
                            ></i>
                          </a>{" "}
                        </span>
                      </h3>
                      <p className="menu-item-description">{Val.description}</p>
                      <hr />
                    </div>
                  </div>
            
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
