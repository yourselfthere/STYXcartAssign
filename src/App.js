import React from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import { useCart } from "./CartContext";

const App = () => {
  const {
    cart,
    handleClick,

    warning,

    setShow,
    show,
  } = useCart();

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? <Shop handleClick={handleClick} /> : <Cart />}

      {warning && <div className="warning">Item already in the cart</div>}
    </div>
  );
};

export default App;
