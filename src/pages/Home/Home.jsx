import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import HeroSection from "../../component/HeroSection/HeroSection";
import Footer from "../../component/Footer/Footer";
import FoodMenu from "../../component/FoodMenu/FoodMenu";
import FoodCategory from "../../component/FoodCategory/FoodCategory";
import HowItWorks from "../../component/HowItWorks/HowItWorks";
import PopUpMessage from "../../component/PopUpMessage/PopUpMessage";
import ContactInfo from "../../component/ContactInfo/ContactInfo";
// import axios from "axios";

const Home = () => {
  return (
    <div className="HomepageBody">
      <PopUpMessage />
      <Navbar />
      <Navibar />
      <HeroSection />
      <FoodCategory />
      <FoodMenu />
      <HowItWorks />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Home;
