import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import Veggies from "../../component/AllFoodComponent/Veggies/Veggies";

const MixedVeggies = () => {
  return (
    <div className="MixedVeggiesBody">
      <Navbar />
      <Navibar />
      <section>
        <Veggies />
      </section>
    </div>
  );
};

export default MixedVeggies;
