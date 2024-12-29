import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const storeUserData = (userData) => {
    sessionStorage.setItem("userData", JSON.stringify(userData));
    return true;
  };

  const [token, setToken] = useState(" ");
  const storeUserToken = (userData) => {
    sessionStorage.setItem("token", JSON.stringify(userData?.token));
    setToken(userData?.token);
  };

  const submitForm = async () => {
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        storeUserData(data);
        // storeUserToken(data);
        navigate("/");
        // console.log(data);
      } else {
        const errorResponseData = await response.json();
        console.log(errorResponseData);
        setLoginMessage(
          "Either email or password is incorrect. Check and try again."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LogInbody">
      <section className="Login">
        <br />
        <br />
        {loginMessage && (
          <div
            id="loginmessage"
            className={
              loginMessage === "Welcome Back" ? "login-success" : "login-error"
            }
          >
            {loginMessage}
          </div>
        )}
        <h1>Login </h1>
        <br />
        <p>Type your email and password to log in </p>
        <div id="Loginform">
          <div>
            <input
              type="email"
              name="email"
              id="emailLogin"
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="password"
              id="passwordLogin"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={submitForm} id="yoursubmitbtn">
              Login
            </button>
          </div>
          <br />
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
