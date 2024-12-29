import React from "react";
import "./AllFoodSingle.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import Chickens from "../../component/AllFoodComponent/Chicken/Chickens";
import Turkeys from "../../component/AllFoodComponent/Chicken/Turkeys";

const ChickenAndTurkey = () => {
  return (
    <div className="ChickenAndTurkeyBody">
      <Navbar />
      <Navibar />
      <section>
        <Chickens />
        <Turkeys />
      </section>
    </div>
  );
};

export default ChickenAndTurkey;
