import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import the Close icon
import "./PopUpMessage.css"; // Create this CSS file to style your popup message component

const PopUpMessage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`popup-container ${showPopup ? "show" : ""}`}>
      <div className="popup-message">
        <span>
          Important Message: <br />
          Oreke's Kitchen is here to serve you the best. Please note that, you
          can place your orders via our Business WhatsApp (Click Message
          Kitchen) or from here (click Order Now). When you make your payment
          please, hurry to our WhatsApp, our wonderful Chef is there to respond
          to you.
        </span>
        <button className="close-button" onClick={handleClosePopup}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default PopUpMessage;
