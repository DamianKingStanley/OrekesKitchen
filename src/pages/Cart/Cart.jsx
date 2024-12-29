import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri"; // Import the delete icon
import html2canvas from "html2canvas"; // Import html2canvas library
import "./Cart.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [overallTotal, setOverallTotal] = useState(0);

  // Function to calculate the total price for each item
  const calculateTotalPrice = (price, quantity) => {
    return price * quantity;
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    window.location.reload(); // Refresh the page to reflect changes
  };

  // Function to generate the receipt
  const generateReceipt = () => {
    // You can format the receipt information here
    const receiptInfo = cartItems.map((item, index) => (
      <p key={index}>
        {item.name}: N{calculateTotalPrice(item.price, item.quantity)}
      </p>
    ));
    return receiptInfo;
  };

  // Function to calculate the overall total
  const calculateOverallTotal = () => {
    const total = cartItems.reduce(
      (accumulator, item) =>
        accumulator + calculateTotalPrice(item.price, item.quantity),
      0
    );
    setOverallTotal(total);
  };

  // Function to save the receipt as a JPG image
  const saveReceiptAsImage = () => {
    const receiptContent = document.getElementById("receipt");
    html2canvas(receiptContent).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "receipt.jpg";
      link.click();
    });
  };

  return (
    <div className="CartBody">
      <Navbar />
      <Navibar />

      <section className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Please go to the Home page, to pick a food.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>N{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>N{calculateTotalPrice(item.price, item.quantity)}</td>
                    <td>
                      <button onClick={() => removeFromCart(index)}>
                        <RiDeleteBinLine className="RiDeleteBinLine" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <button id="checkoutBtn" onClick={calculateOverallTotal}>
              Checkout
            </button>
            <div className="bankdetails">
              <p>Please send your money to the provided bank details:</p>
              <p>
                KUDA,2025283383, OLAIYA OLUWASUEN MARY. Attach your proof of
                payment to the receipt, and forward it to our
                <Link to="https://wa.link/zdnt4j"> Kitchen</Link>. THANKS FOR
                YOUR PATRONAGE!
              </p>
            </div>
            <div className="receipt" id="receipt">
              <h2>Receipt</h2>
              <p>
                Hello, Oreke's Kitchen, I want to order the following Food items
              </p>
              {generateReceipt()}
              <p>Total Amount: N{overallTotal}</p>
              <button id="receiptBtn" onClick={saveReceiptAsImage}>
                Save Receipt
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
