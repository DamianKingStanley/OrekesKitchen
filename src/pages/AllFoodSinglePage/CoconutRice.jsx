import React from "react";
import "./AllFoodSingle.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import CoconutWithChicken from "../../component/AllFoodComponent/CoconutRice/CoconutWithChicken";
import CoconutWitFish from "../../component/AllFoodComponent/CoconutRice/CoconutWithFish";
import CoconutWithBeef from "../../component/AllFoodComponent/CoconutRice/CoconutWithBeef";

const CoconutRice = () => {
  return (
    <div className="CoconutRiceBody">
      <Navbar />
      <Navibar />
      <section>
        <CoconutWithChicken />
        <CoconutWitFish />
        <CoconutWithBeef />
      </section>
    </div>
  );
};

export default CoconutRice;
