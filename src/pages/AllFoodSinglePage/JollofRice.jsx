import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import JollofWithChicken from "../../component/AllFoodComponent/JollofRice/JollofWithChicken";
import JollofWithFish from "../../component/AllFoodComponent/JollofRice/JollofWithFish";
import JollofWithBeef from "../../component/AllFoodComponent/JollofRice/jollofWithBeef";

const JollofRice = () => {
  return (
    <div className="JollofRciceBody">
      <Navbar />
      <Navibar />
      <section>
        <JollofWithChicken />
        <JollofWithFish />
        <JollofWithBeef />
      </section>
    </div>
  );
};

export default JollofRice;
