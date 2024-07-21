import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar.css";
import { useCart } from "../CartContext";
const Navbar = ({ size }) => {
  const { setShow } = useCart();
  return (
    <nav>
      <div className="nav_in">
        <span className="styx_Text" onClick={() => setShow(true)}>
          STYX Shopping Cart
        </span>
        <div className="styx_Cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-arrow-down"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
