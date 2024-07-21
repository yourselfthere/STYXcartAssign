import React, { useState, useEffect } from "react";
import "../styles/productList.css";
import { useCart } from "../CartContext";
const ProductList = ({ item }) => {
  const { cart, handleClick } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const { title, author, price, img } = item;

  useEffect(() => {
    // Check if the item is already in the cart on initial render
    const isPresent = cart.some((product) => product.id === item.id);
    setIsAdded(isPresent);
  }, [cart, item.id]);

  const handleAddToCart = () => {
    handleClick(item);
    setIsAdded(true);
  };

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
          onClick={handleAddToCart}
          disabled={isAdded}
          style={{
            backgroundColor: isAdded ? "grey" : "",
            color: isAdded ? "black" : "",
          }}
        >
          {isAdded ? "Item Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
