import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // const handleButtonClick = () => {
  //   const isLoggedIn = sessionStorage.getItem("userData");

  //   if (isLoggedIn) {
  //     window.location.href = "/order";
  //   } else {
  //     window.location.href = "/login";
  //   }
  // };

  return (
    <div className="HeroSectionBody">
      <section className="HeroWriteUp">
        <h1>Satisfying your Taste bud </h1>
        <h2>Hasty & Tasty</h2>
        <h3>
          You are few clicks away from getting the best food from Oreke's
          kitchen.
        </h3>
      </section>
      <div className="HeroActionBtn">
        <Link to="/cart">
          <button id="SWBtn">Order Now</button>
        </Link>

        <Link to="https://wa.link/zdnt4j">
          <button id="SWBtn">Message Kitchen</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
