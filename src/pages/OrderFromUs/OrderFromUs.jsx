import React, { useState, useEffect } from "react";
import "./OrderFromUs.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import Navibar from "../../component/Navibar/Navibar";

const OrderFromUs = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [price, setPrice] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Price calculation logic based on selected option
    const prices = {
      "Jollof rice with chicken": 2500,
      "Jollof rice with beef": 2000,
      "Jollof rice with fish": 2000,
      "Coconut rice with chicken": 2500,
      "Coconut rice with beef": 2000,
      "Coconut rice with fish": 2000,
      "Amala and Abula only": 1000,
      "Amala and Abula with Ogunfe": 2500,
      "Amala and Abula with Assorted": 1200,
      "Amala and Abula with fish": 1600,
      "Amala and Abula with Ponmo": 1200,
      "Soup bowl": 0,
      "Stew bowl": 0,
      "Iyan and Efor": 3000,
      "Iyan and Egusi": 3000,
      "Mixed Veggies with chicken": 2500,
      "Mixed Veggies with meat": 2000,
      "Mixed Veggies with fish": 2000,
      "Chicken lap": 2000,
      Turkey: 3000,
    };

    setPrice(prices[selectedValue]);
  };

  return (
    <div className="contactUsBody">
      <Navbar />
      <Navibar />
      <div className="TakeOrder">
        <h1>Let's Take your Order</h1>
      </div>
      <form
        action="https://formsubmit.co/oluwaseunarike2001@gmail.com"
        method="POST"
      >
        <section className="contact_us">
          <input
            type="hidden"
            name="_next"
            value="https://oreke-kitchen.netlify.app/thank-you"
          ></input>
          <input type="hidden" name="_subject" value="New Order!"></input>
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your Patronage! Your order has been taken! Please reach out on our Business WhatsApp for your order!"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <div>
            <label htmlFor="fullName">Full Name</label> <br />
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Email">Email Address</label> <br />
            <input
              type="email"
              name="email"
              id="youremailAddress"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="phoneNumber">Phone Number</label> <br />
            <input
              type="tel"
              name="phoneNumber"
              id="yourphoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>{" "}
          <br />
          <div>
            <label htmlFor="location">Location</label> <br />
            <input
              type="text"
              name="location"
              id="yourlocation"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>{" "}
          <br />
          <div>
            <label htmlFor="option">Make your Choice</label> <br />
            <select
              name="option"
              id="option"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Select an option</option>
              <option value="Jollof rice with chicken">
                Jollof rice with chicken
              </option>
              <option value="Jollof rice with beef">
                Jollof rice with beef
              </option>
              <option value="Jollof rice with fish">
                Jollof rice with fish
              </option>
              <option value="Coconut rice with chicken">
                Coconut rice with chicken
              </option>
              <option value="Coconut rice with beef">
                Coconut rice with beef
              </option>
              <option value="Coconut rice with fish">
                Coconut rice with fish
              </option>
              <option value="Amala and Abula only">Amala and Abula only</option>
              <option value="Amala and Abula with Ogunfe">
                Amala and Abula with Ogunfe
              </option>
              <option value="Amala and Abula with Assorted">
                Amala and Abula with Assorted
              </option>
              <option value="Amala and Abula with fish">
                Amala and Abula with fish
              </option>
              <option value="Amala and Abula with Ponmo">
                Amala and Abula with Ponmo
              </option>
              <option value="Soup bowl">Soup bowl</option>
              <option value="Stew bowl">Stew bowl</option>
              <option value="Iyan and Efor">Iyan and Efor</option>
              <option value="Iyan and Egusi">Iyan and Egusi</option>
              <option value="Mixed Veggies with chicken">
                Mixed Veggies with chicken
              </option>
              <option value="Mixed Veggies with meat">
                Mixed Veggies with meat
              </option>
              <option value="Mixed Veggies with fish">
                Mixed Veggies with fish
              </option>
              <option value="Chicken lap">Chicken lap</option>
              <option value="Turkey">Turkey</option>
            </select>
          </div>{" "}
          <br />
          <div>
            <label htmlFor="price">Price</label> <br />
            <input
              type="text"
              name="price"
              id="price"
              value={price ? `NGN ${price}` : ""}
              readOnly
            />
          </div>{" "}
          <br />
          <button id="sendMesagebtn" type="submit">
            Send Order
          </button>
        </section>
      </form>
      <Footer />
    </div>
  );
};

export default OrderFromUs;
