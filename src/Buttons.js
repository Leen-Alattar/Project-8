import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-5  mx-5 btn fw-bold b3"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-5 px-3 mx-5 fw-bold btn b3"
          onClick={() => setItem(Data)}
        >
          All
        </button>

      </div>
    </>
  );
};

export default Buttons;