import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track if item is in cart
  const [isInCart, setIsInCart] = useState(false);

  // Event handler to toggle cart status
  const handleCartToggle = () => {
    setIsInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;