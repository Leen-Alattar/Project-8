import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error404/Error";
import {Header} from './components/Header/Header.jsx'
import {Menu} from './components/Menu/Menu'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>hi</div>}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
<Header/>
<Menu/>

    </>
  );
}

export default App;
