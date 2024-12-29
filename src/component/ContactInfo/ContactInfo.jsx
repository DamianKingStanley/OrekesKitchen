import React from "react";
import "./ContactInfo.css";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"; // Import Font Awesome icons

const ContactInfo = () => {
  return (
    <div className="ContactInfoBody">
      <section className="ContactInfo">
        <div className="info">
          <h1>CONTACT INFO</h1>
          <p>Telephone: +234 705 749 2894</p>
          <p>Email: oluwaseunarike2001@gmail.com</p>
          <p>Location: Ile Ife, Osun State, Nigeria.</p>
          <p>Owned by Olaiya Oluwaseun Mary</p>
        </div>
        <div className="social">
          <h1>SOCIALS</h1>
          <ul>
            <Link to="hhtps://www.x.com/Arikeade1053817?t=Y_AG1frYlLltCLA&s=09">
              <li>
                <FaTwitter id="svg" />
                Twitter
              </li>
            </Link>
            <Link to="https://www.instagram.com/spiciliciouskitchen?igsh=YzljYT1ODg3Zg==">
              <li>
                <FaInstagram id="svg" />
                Instagram
              </li>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100024343344454&mibextid=ZbWKwL">
              <li>
                <FaFacebook id="svg" />
                Facebook
              </li>
            </Link>
          </ul>
        </div>
        <div className="hours">
          <h1>OPENING HOURS</h1>
          <p>MONDAY-SATURDAY: 8:00AM - 6PM</p>
          <p>SUNDAYS: 11:00AM - 6PM</p>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
