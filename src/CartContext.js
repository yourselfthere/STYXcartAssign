// src/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const CartContext = createContext();

// Create provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to add item to cart
  const handleClick = (item) => {
    let isPresent = cart.some((product) => item.id === product.id);
    if (isPresent) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    setCart([...cart, item]);
  };

  // Function to handle item quantity change
  const handleChange = (item, d) => {
    const updatedCart = cart.map((data) =>
      data.id === item.id
        ? { ...data, amount: Math.max(1, data.amount + d) }
        : data
    );
    setCart(updatedCart);
  };

  // Calculate total price
  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleClick,
        handleChange,
        totalPrice,
        setTotalPrice,
        warning,
        setWarning,
        setShow,
        show,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using context
export const useCart = () => useContext(CartContext);
