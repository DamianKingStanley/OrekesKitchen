import React from "react";
import "./AboutUs.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import ContactInfo from "../../component/ContactInfo/ContactInfo";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Navibar />
      <section>
        <div className="AboutUs">
          <h2>Welcome to Oreke's Kitchen!</h2>
          <p>
            At Oreke's Kitchen, we're passionate about bringing the authentic
            flavors of Nigerian cuisine to your table. Located in the heart of
            Ile Ife, Osun State, we specialize in cooking up a delightful array
            of local dishes that capture the essence of Nigerian culture and
            tradition.
          </p>
          <p>
            Our mission is simple: to provide delicious, homemade meals that not
            only satisfy your taste buds but also nourish your soul. Whether
            you're craving the comforting warmth of a bowl of jollof rice or the
            spicy kick of grilled chicken, we've got you covered.
          </p>
          <p>
            But our offerings don't stop there. In addition to our mouthwatering
            menu, we also offer catering services for parties, weddings, and
            other special occasions. From intimate gatherings to large
            celebrations, we'll work with you to create a custom menu that's
            sure to impress your guests.
          </p>
          <p>
            What sets Oreke's Kitchen apart is our commitment to quality and
            affordability. We source the freshest ingredients and cook each dish
            with care and attention to detail, ensuring that every bite is
            bursting with flavor. And with our competitive prices, you can enjoy
            a delicious meal without breaking the bank.
          </p>
          <p>
            Whether you're in Ile Ife, Osun State, or beyond, we're here to
            serve you. With delivery available to cities within the state and
            neighboring states, you can enjoy the taste of Oreke's Kitchen
            wherever you are.
          </p>
          <p>
            So why wait? Experience the joy of Nigerian cuisine with Oreke's
            Kitchen today. We can't wait to share our love for food with you!
          </p>
        </div>
        <ContactInfo />
      </section>
    </div>
  );
};

export default AboutUs;
