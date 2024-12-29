import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Iyan.css";

import iyanefor from "../../../assest/iyanandefor.png";

const IyanAndEfor = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = {
    name: "Iyan and Efor",
    price: 3000,
    image: iyanefor,
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
            <img id="foodImage" src={iyanefor} alt="Iyanand Efor" />
          </div>{" "}
          <div>
            {" "}
            {isAddedToCart && (
              <div className="AddedCartMsg">
                <p>
                  Product added to cart!
                  <Link to="/cart"> View Cart </Link>{" "}
                </p>{" "}
              </div>
            )}{" "}
            <h1> {product.name} </h1> <h3> N {product.price} </h3>{" "}
            <p> (A plate of Jollof rice with a piece of fish) </p> <br />
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

export default IyanAndEfor;
