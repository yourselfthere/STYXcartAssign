import React from "react";
import "../styles/productList.css";
const ProductList = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="products">
      <div className="imgcontainer">
        <div className="imageOnly">
          <img src={img} alt="trust me there was an image" />
        </div>
      </div>

      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price- {price} Rs</p>
        <button
          onClick={() => {
            handleClick(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
