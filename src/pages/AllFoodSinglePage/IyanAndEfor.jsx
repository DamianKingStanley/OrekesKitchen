import React from "react";
import "./AllFoodSingle.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import Iyan from "../../component/AllFoodComponent/IyanAndEfor/Iyan";
import Egusi from "../../component/AllFoodComponent/IyanAndEfor/Egusi";

const IyanAndEfor = () => {
  return (
    <div className="IyanAndEforBody">
      <Navbar />
      <Navibar />
      <section>
        <Iyan />
        <Egusi />
      </section>
    </div>
  );
};

export default IyanAndEfor;
