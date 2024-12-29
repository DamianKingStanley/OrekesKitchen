import React from "react";
import "./AllFoodSingle.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import AmalaAndAbula from "../../component/AllFoodComponent/Amala/AmalaAndAbula";

const AmalaAbula = () => {
  return (
    <div className="AmalaAbulaBody">
      <Navbar />
      <Navibar />
      <section>
        <AmalaAndAbula />
      </section>
    </div>
  );
};

export default AmalaAbula;
