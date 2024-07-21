import React, { useState, useEffect } from "react";
import "../styles/cart.css";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const handleCheckout = () => {
    setFinalPrice(price);
    setShowSummary(true);
    setCart([]);
  };

  return (
    <div className="overlay">
      <div className="gridOf2">
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} />
            </div>
            <div className="details">
              <div>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <button
                  onClick={() => {
                    handleChange(item, +1);
                  }}
                >
                  +
                </button>
                <span> {item.amount} </span>
                <button
                  onClick={() => {
                    handleChange(item, -1);
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <span>Rs. {item.price}</span>
              </div>
              <br />
              <div>
                <button
                  onClick={() => {
                    handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showSummary && (
        <div className="total">
          <p>Total Price of your Cart : Rs - {price}</p>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
      {showSummary && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Total Price: Rs. {finalPrice}</p>
          <p>Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
