import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ChickenTurkey.css";
import chickenlap from "../../../assest/chickenlap.jpg";

const Chickens = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = {
    name: "Chicken Lap",
    price: 2000,
    image: chickenlap,
  };

  const addToCart = () => {
    const productToAdd = { ...product, quantity };
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...cartItems, productToAdd])
    );
    setIsAddedToCart(true);
  };

  return (
    <div>
      <section className="AllFoodSingle">
        <section className="AllFood">
          <div>
            <img id="foodImage" src={chickenlap} alt="Chicken" />
          </div>{" "}
          <div>
            {" "}
            {isAddedToCart && (
              <div className="AddedCartMsg">
                <p>
                  Food added to cart!
                  <Link to="/cart"> View Cart </Link>{" "}
                </p>{" "}
              </div>
            )}{" "}
            <h1> {product.name} </h1> <h3> N {product.price} </h3>{" "}
            <p> (A bowl of Soup) </p> <br />
            <label id="qty" htmlFor="quantity">
              Quantity:
            </label>{" "}
            <br />
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />{" "}
            <br />
            <br />
            <button id="addCartbtn" onClick={addToCart}>
              Add to Cart{" "}
            </button>{" "}
          </div>{" "}
        </section>{" "}
      </section>{" "}
    </div>
  );
};

export default Chickens;
