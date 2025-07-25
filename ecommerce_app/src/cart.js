// src/components/Cart.js
import React from "react";
import { useCart } from "./cartcontext";

export function Cart() {
  const { cart, removeItem, updateQuantity } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <span>
              {item.name} - ₹{item.price} x {item.quantity}
            </span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

