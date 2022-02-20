import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import './login.css';


const Login = ({ LoggedIn, setLoggedIn }) => {
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const setValue = (e) => {
    setErrors([]);
    const name = e.target.name;
    setUser({
      ...user,
      [name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    //sessionStorage.clear();
    e.preventDefault();
    let isValid = true;
    let errors = {};
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (user.password === "") {
      errors["password"] = "This field is required!";
      isValid = false;
    }

    //Email Validation
    if (user.email === "") {
      errors["email"] = "This field is required!";
      isValid = false;
    } else if (!emailRegex.test(user.email)) {
      errors["email"] = "It is not valid email";
      isValid = false;
    } else if (JSON.parse(localStorage.getItem("users")) !== null) {
      var users = JSON.parse(localStorage.getItem("users"));
      var u = users.filter((u) => {
        if (u.email === user.email) return true;
      });
      if (u.length === 0) {
        errors["email"] = "You have to register first :) ";
        isValid = false;
      } else if (u[0].password !== user.password) {
        console.log(u[0].password);
        console.log(user.password);
        errors["password"] = "Wrong password  :( ";
        isValid = false;
      } else {
        setErrors([]);
        sessionStorage.setItem("currentUser", JSON.stringify(u));

        console.log(JSON.parse(sessionStorage.getItem("currentUser")));
        setLoggedIn(true);
        setUser({
          name: "",
          email: "",
          password: "",
        });
      }
    }
    setErrors(errors);
  };

  return (
    <React.Fragment>
      {LoggedIn ? <Navigate to="/post" replace={true} /> : ""}
    
      
      <h1 id="heading1">Login Here</h1>
      <img src="https://cdn-icons.flaticon.com/png/512/3711/premium/3711310.png?token=exp=1645363063~hmac=9df8eea5c84c37bca7b54cbaadb2d8f0" alt="Login Logo" class ="imgLogin" />
      <div>&#160;</div>
      <div>&#160;</div>
      <div class= "loginContainer">
      <form className="myForm" onSubmit={submitHandler}>
        <div className="input-container">
        <i class="fa fa-envelope icon"></i>
          <input
          class="input-field"
            type="email"
            name="email"
            value={user.email}
            onChange={setValue}
          />
          <div className={errors.email === undefined ? "" : "ui red message"}>
            {errors.email}
          </div>
        </div>
        <div className="input-container">
        <i class="fa fa-key icon"></i>
          <input
          class="input-field"  
            type="password"
            name="password"
            value={user.password}
            onChange={setValue}
            autoComplete="on"
          />
          <div
            className={errors.password === undefined ? "" : "ui red message"}
          >
            {errors.password}
          </div>
        </div>
        <button className="bttn" type="submit">
          Login
        </button>
      </form>
      </div>
    </React.Fragment>
  );
};
export default Login;





