import React from "react";
import list from "../list";
import ProductList from "./ProductList";

const Shop = () => {
  return (
    <section>
      {list.map((item) => {
        return <ProductList item={item} key={item.id} />; //prop
      })}
    </section>
  );
};

export default Shop;
