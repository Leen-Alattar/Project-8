import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = ({ LoggedIn, setLoggedIn }) => {
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const setValue = (e) => {
    setErrors([]);
    const name = e.target.name;
    setUser({
      ...user,
      [name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let isValid = true;
    let errors = {};
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    //User Name Validation
    if (user.name === "") {
      isValid = false;
      errors["name"] = "This field is required!";
    }

    //Email Validation
    if (user.email === "") {
      errors["email"] = "This field is required!";
      isValid = false;
    } else if (!emailRegex.test(user.email)) {
      errors["email"] = "It is not valid email";
      isValid = false;
    }

    if (JSON.parse(localStorage.getItem("users")) !== null) {
      var users = JSON.parse(localStorage.getItem("users"));
      let u = users.filter((u) => {
        if (u.email === user.email) return true;
      });
      if (u.length === 1) {
        errors["email"] = "This email is already token!";
        isValid = false;
      }
    }

    //password Validation
    if (user.password === "") {
      errors["password"] = "This field is required!";
      isValid = false;
    } else if (!passRegex.test(user.password)) {
      errors["password"] = "It should be more than 8 character";
      isValid = false;
    }
    setErrors(errors);

    if (isValid) {
      if (JSON.parse(localStorage.getItem("users")) === null) {
        localStorage.setItem("users", JSON.stringify([user]));
      } else {
        let users = JSON.parse(localStorage.getItem("users"));
        let newUsers = [...users, user];
        localStorage.setItem("users", JSON.stringify(newUsers));
      }
      sessionStorage.setItem("currentUser", JSON.stringify(user));

      setUser({
        name: "",
        email: "",
        password: "",
      });
      setLoggedIn(true);
      navigate(-1);
    }
  };

  return (
    <React.Fragment>
      <div className="containerr">
      <h1 id="heading1">Register</h1>
      <img className="login-image" src="https://cdn-icons.flaticon.com/png/512/3711/premium/3711310.png?token=exp=1645363063~hmac=9df8eea5c84c37bca7b54cbaadb2d8f0" alt="Login Logo" class ="imgLogin" />

        <div class="formcontainer">
      <form className="myForm" onSubmit={submitHandler}>
        <div className="input-container">
        <i class="fa-regular fa-user  icon "></i>
          <input
           class="input-field"
           placeholder="User Name"
            type="text"
            name="name"
            value={user.name}
            onChange={setValue}
          />
          <small> {errors.name} </small>
        </div>
        <div className="input-container">
        <i class="fa fa-envelope icon"></i>
          <input
           class="input-field"
           placeholder="User Email"
            type="email"
            name="email"
            value={user.email}
            onChange={setValue}
          />

          <small>{errors.email}</small>
        </div>
        <div className="input-container">
        <i class="fa fa-key icon"></i>
          <input
            class="input-field"
            placeholder="User Password"
            type="password"
            name="password"
            value={user.password}
            onChange={setValue}
            autoComplete="on"
          />
          <small>{errors.password}</small>
        </div>
        <button className="bttn" type="submit">
          Register
        </button>
      </form>
      </div>
      </div>
    </React.Fragment>
  );
};
export default Register;
