import React, { useState } from "react";
import "./CSS/LoginSignup.css";
//import { motion } from "framer-motion";

const Signuplogin = () => {
  const [state, setState] = useState("Login");
  const [formData, SetFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const login = async () => {
    console.log("login", formData);
    let response;
    await fetch("http://localhost:4000/Login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (response = data));
    if (response.success) {
      localStorage.setItem("auth-token", response.token);
      window.location.replace("/");
    } else {
      alert(response.errors);
    }
  };
  const signup = async () => {
    console.log("signup", formData);

    let response;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (response = data));
    if (response.success) {
      localStorage.setItem("auth-token", response.token);
      window.location.replace("/");
    } else {
      alert(response.errors);
    }
  };
  const onChangeHandler = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-field">
            {state === "SignUp" ? (
              <input
                name="username"
                value={formData.username}
                onChange={onChangeHandler}
                type="text"
                placeholder="Your Name"
              />
            ) : (
              <></>
            )}
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Continue
          </button>
          {state === "SignUp" ? (
            <p
              className="loginsignup-login"
              onClick={() => {
                setState("Login");
              }}
            >
              Already have an account? <span>Login here</span>
            </p>
          ) : (
            <p
              className="loginsignup-login"
              onClick={() => {
                setState("SignUp");
              }}
            >
              Didn&apos;t have an account? <span>Sign up here</span>
            </p>
          )}

          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" required />
            <p>By Continuing, I agree the terms of privacy and policy. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signuplogin;
