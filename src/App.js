import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error404/Error";
import "./style/style.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>hi</div>}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
