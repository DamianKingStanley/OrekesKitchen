import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import PostCardMenu from "../../component/PostCardEach/PostCardMenu";
import FoodMenu from "../../component/FoodMenu/FoodMenu";
import "./MenuFood.css";

const MenuFood = () => {
  return (
    <div>
      <Navbar />
      <Navibar />

      <section>
        <div className="content-header">
          <h1>Welcome to Oreke's Kitchen</h1>
        </div>
        <div>
          <PostCardMenu />
        </div>
        <div>
          <FoodMenu />
        </div>
      </section>
    </div>
  );
};

export default MenuFood;
