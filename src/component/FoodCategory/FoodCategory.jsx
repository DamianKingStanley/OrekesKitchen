import React from "react";
import "./FoodCategory.css";
import jollofwithchicken from "../../assest/jollofwithchicken.jpg";
import coconutricewithchicken from "../../assest/coconutricewithchciken.jpg";
import amalawithabula from "../../assest/amalaandabula.png";
import mixedveggies from "../../assest/mixedveggies.jpg";
import chickenlap from "../../assest/chickenlap.jpg";
import turkeylap from "../../assest/turkeymeat.jpg";
import stewbowl from "../../assest/stewbowl.jpg";

const FoodCategory = () => {
  return (
    <div className="FoodCategoryBody">
      <h2>Categories:</h2>
      <section className="FoodCategory">
        <div className="FoodCategoryItem">
          <img src={jollofwithchicken} alt="" />
          <p>Jollof Rice</p>
        </div>
        <div className="FoodCategoryItem">
          <img src={coconutricewithchicken} alt="" />
          <p>Coconut Rice</p>
        </div>
        <div className="FoodCategoryItem">
          <img src={amalawithabula} alt="" />
          <p>Amala and Abula</p>
        </div>
        <div className="FoodCategoryItem">
          <img src={mixedveggies} alt="" />
          <p>Mixed Veggies</p>
        </div>
        <div className="FoodCategoryItem">
          <img src={chickenlap} alt="" />
          <p>Chicken Lap</p>
        </div>
        <div className="FoodCategoryItem">
          <img src={turkeylap} alt="" />
          <p>Grilled Turkey</p>
        </div>
        <div className="FoodCategoryItem">
          <img src={stewbowl} alt="" />
          <p>Stew/Soup Bowl</p>
        </div>
      </section>
    </div>
  );
};

export default FoodCategory;
