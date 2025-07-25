// src/components/ProductList.js
import React from "react";
import { useCart } from "./cartcontext";

const products = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Banana", price: 5 },
];

export function ProductList() {
  const { addItem } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}


