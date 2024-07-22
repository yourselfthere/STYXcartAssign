import React, { useState, useEffect, useRef } from "react";
import "../styles/productList.css";
import { useCart } from "../CartContext";
const ProductList = ({ items }) => {
  const { cart, handleClick } = useCart();

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const inputRef = useRef(null);

  const handleAddToCart = (item) => {
    handleClick(item);
    // setIsAdded(true);
  };
  //Handle category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };
  //searching products
  useEffect(() => {
    setFilteredProducts(
      items.filter(
        (product) =>
          (selectedCategories.length === 0 ||
            selectedCategories.some((category) =>
              product.category.includes(category)
            )) &&
          (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.author.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
  }, [searchQuery, selectedCategories, items]);

  const categories = ["fiction", "self-help", "Year 2023"];

  return (
    <div className="product-container">
      <div className="search-container">
        <div className="search-icon">
          <i
            className="fa-solid fa-magnifying-glass "
            onClick={() => {
              inputRef.current.focus();
            }}
          ></i>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          ref={inputRef}
        />
        <div className="category-filters">
          FILTERS
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      <div className="gridOf3">
        {filteredProducts.map((item) => {
          const isAdded = cart.some((product) => product.id === item.id);
          //return 2
          return (
            <div className="products" key={item.id}>
              <div className="imgcontainer">
                <div className="imageOnly">
                  <img src={item.img} alt="trust me it was there" />
                </div>
              </div>

              <div className="details">
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>Price- {item.price} Rs</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={isAdded}
                  style={{
                    backgroundColor: isAdded ? "grey" : "",
                    color: isAdded ? "black" : "",
                  }}
                >
                  {isAdded ? "Item Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
