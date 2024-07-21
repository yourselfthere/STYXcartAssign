import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useCart } from "../CartContext";
const Cart = () => {
  const { cart, setCart, handleChange, totalPrice } = useCart();

  const [showSummary, setShowSummary] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    localStorage.setItem("cart", JSON.stringify(arr));
  };

  const handleCheckout = () => {
    setFinalPrice(totalPrice);
    setShowSummary(true);
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <div className="overlay">
        <div className="gridOf2">
          {cart?.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} />
              </div>
              <div className="details">
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p className="priceOfBook">Rs. {item.price}</p>

                <div className="btnsAndPrice">
                  <div>
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
                  <button
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>

                {/* <div>
                  <span>Rs. {item.price}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* {!showSummary && (
          <div className="total">
            <p>Total Price of your Cart : Rs. {totalPrice}</p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )} */}

        {!showSummary && (
          <div className="total">
            <p>Total Price of your Cart : Rs. {totalPrice}</p>
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
    </>
  );
};

export default Cart;
