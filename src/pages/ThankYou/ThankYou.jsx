import React from "react";
import "./ThankYou.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import Navibar from "../../component/Navibar/Navibar";
import confirmicon from "../../assest/confirmIcon.png";
import kuda from "../../assest/kudalogo.png";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="ThankYouBody">
      <Navbar />
      <Navibar />
      <section className="ThankYou">
        <div className="confirmMessage">
          <img id="confirmIcon" src={confirmicon} alt="" />
          <h1>
            Thank you so much for your Patronage. <br /> We have received your
            order, and our wonderful chef is preparing what you ordered. <br />
            Please, kindly make your payment to the bank details provided below,
            and show your receipt to the chef for confirmation! <br />
            Thank you
          </h1>
          <Link to="https://wa.me/message/53GHI6FYWZYLD1">
            <button id="chefbtn">Show Receipt</button>
          </Link>
        </div>
        <br /> <br />
        <div className="PaymentMethod">
          <img id="kuda" src={kuda} alt="kudabank" />
          <h1>
            Account Name: Olaiya Oluwaseun Mary <br />
            Account Number: 2025283383
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ThankYou;
