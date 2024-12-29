import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Feature.css";

const Feature = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products);

  return (
    <div className="featured_body">
      <div className="Feature_container">
        {products.length === 0 && (
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}

        {products?.map((product) => {
          return (
            <div key={product.id} className="Developer_inner">
              <img src={product.thumbnail} alt="featured" />

              <Link
                className="product_title"
                to={`/singleproduct/${product.id}`}
              >
                {product.title}
              </Link>

              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.discountPercentage}</p>
              <p>{product.rating}</p>
              <p>{product.stock}</p>
              <p>{product.brand}</p>
              <p>{product.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
