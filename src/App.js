import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Error from "./components/Error404/Error";
import {Header} from './components/Header/Header.jsx'
import {Menu} from './components/Menu.jsx'
import {Get} from './components/Get.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
<Menu/>
    </>
  );
}

export default App;
