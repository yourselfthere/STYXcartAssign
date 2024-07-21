import React from "react";
import list from "../list";
import ProductList from "./ProductList";
const Shop = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => {
        return (
          <ProductList item={item} key={item.id} handleClick={handleClick} />
        ); //prop
      })}
    </section>
  );
};

export default Shop;
