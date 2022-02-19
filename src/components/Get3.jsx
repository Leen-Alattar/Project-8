import React, { Component } from "react";
import start from "../start.json";
import style from "./style.css";

export const Get3 = ({cart,setCart}) => {
  const addToCartHandler = (dish) => {
    if (sessionStorage.getItem("cart") == null) {
      sessionStorage.setItem("cart", JSON.stringify([dish]));
    } else {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      let exist = cart.filter((meal) =>
      { if( meal.id == dish.id) return meal}
      );
      console.log(cart);
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
      <div className="menu">
        <h2 className="menu-group-heading">Starters</h2>
        <div className="menu-group">
          {start.map((post) => {
            return (
              <>
                <div className="menu-item" key={post.id}>
                  <img
                    className="menu-item-image"
                    src={post.img}
                    alt="Bruschetta"
                  />

                  <div className="menu-item-text">
                    <h3 className="menu-item-heading">
                      <span className="menu-item-name"> {post.name}</span>
                      <span className="menu-item-price">
                        <a onClick={() => addToCartHandler(post)}>
                          {post.price}
                          <i
                            className="fa fa-shopping-basket"
                            aria-hidden="true"
                            style={{ marginLeft: "10px" }}
                          ></i>
                        </a>
                      </span>
                    </h3>
                    <p className="menu-item-description">{post.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
