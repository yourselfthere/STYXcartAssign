import React, { useState } from "react";
import "../styles/cart.css";
import { useCart } from "../CartContext";
import Modal from "./Modal";
const Cart = () => {
  const { cart, setCart, handleChange, totalPrice, setShow } = useCart();

  const [showSummary, setShowSummary] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    localStorage.setItem("cart", JSON.stringify(arr));
  };

  const handleCheckout = () => {
    console.log("Checkout clicked");

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
                <img src={item.img} alt="trust me it was there" />
              </div>
              <div className="details">
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p className="priceOfBook">Rs. {item.price}</p>
                <p>[{item.category}]</p>

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
              </div>
            </div>
          ))}
        </div>

        <div className="total-container">
          {!showSummary && (
            <div className="total">
              <p>Total Price of your Cart : Rs. {totalPrice}</p>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          )}
        </div>

        <Modal
          show={showSummary}
          onClose={() => {
            setShowSummary(false);
            setShow(true);
          }}
        >
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Total Price: Rs. {finalPrice}</p>
            <p>Thank you for your purchase!</p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
