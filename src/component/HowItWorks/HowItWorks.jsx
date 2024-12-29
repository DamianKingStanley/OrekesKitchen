import React from "react";
import "./HowItWorks.css";
import foodmenu from "../../assest/foodmenu.png";
import kitchen from "../../assest/kitchen.png";
import chatting from "../../assest/chatting.png";
import deliverybike from "../../assest/deliverybike.png";

const HowItWorks = () => {
  return (
    <div className="HowItWorksBody">
      <section className="HowItWorks">
        <div>
          <h1>How to order food from Oreke's Kitchen</h1>
        </div>
        <section className="StepsToTake">
          <div className="steps">
            <img src={foodmenu} alt="" />
            <h2>
              Go through our food menu and decide what you are eating today.
            </h2>
          </div>
          <div className="steps">
            <img src={kitchen} alt="" />
            <h2>
              when you have decided, please click on the Food and proceed to add
              it to your cart.
            </h2>
          </div>
          <div className="steps">
            <img src={chatting} alt="" />
            <h2>
              Checkout, make your payment, and forward your food receipt with
              your proof of payment to our kitchen, for confirmation
            </h2>
          </div>
          <div className="steps">
            <img src={deliverybike} alt="" />
            <h2>
              After confirmation, be expecting your food delivered to you-
              either via pick up or bike delivery.
            </h2>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HowItWorks;
