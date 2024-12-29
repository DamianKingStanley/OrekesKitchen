import React from "react";
import "./AllFoodSingle.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import Soup from "../../component/AllFoodComponent/stewAndsoup/Soup";
import Stew from "../../component/AllFoodComponent/stewAndsoup/Stew";

const SoupAndStew = () => {
  return (
    <div className="SoupAndStewBody">
      <Navbar />
      <Navibar />
      <section>
        <Stew />
        <Soup />
      </section>
    </div>
  );
};

export default SoupAndStew;
