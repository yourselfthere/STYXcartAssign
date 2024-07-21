import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CartProvider } from "./CartContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
