import React from "react";
import list from "../list";
import ProductList from "./ProductList";

const Shop = ({ handleClick }) => {
  return (
    <section>
      <ProductList items={list} handleClick={handleClick} />
    </section>
  );
};

export default Shop;
