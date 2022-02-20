import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error404/Error";
import {Header} from './components/Header/Header.jsx'
import Card from './Card.js'
import Data from "./Data";
import Buttons from "./Buttons";
import {Land} from './components/Land/land'
const App=()=> {

  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>

{/* filter  */}
      <div className="container3">
        <div className="row3">
          <h1 className="col-12 text-center my-3 fw-bold head">Our Menu</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
}

export default App;
