import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();

  const [FullName, setFullName] = useState("");
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [RegisterMessage, setRegisterMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const storeUserData = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const submitForm = async () => {
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FullName,
          // UserName,
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setRegisterMessage("Registered successfully");
        storeUserData(data);
        navigate("/login");
        // console.log(data);
      } else {
        const errorResponseData = await response.json();
        console.log(errorResponseData);
        setRegisterMessage("Registration failed. Email already exist.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SignInbody">
      <br /> <br />
      <section className="register">
        {RegisterMessage && (
          <div
            className={
              RegisterMessage === "Registered successfully"
                ? "success-message"
                : "error-message"
            }
          >
            {RegisterMessage}
          </div>
        )}
        <h1>Register</h1>
        <div id="registerform">
          <div>
            <input
              type="text"
              name="FullName"
              id="yourFullName"
              placeholder="Full Name"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />

            <input
              type="email"
              name="email"
              id="yourEmailAddress"
              placeholder="orekekitchen@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="yourpassword"
              placeholder="Password"
              required
              onChange={handlePasswordChange}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            <br />

            <button onClick={submitForm} id="yoursubmitbtn">
              Register
            </button>
            <br />
            <br />
          </div>
          <br />
          <p>
            Already have an account? <Link to="/logIn">Log in</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
