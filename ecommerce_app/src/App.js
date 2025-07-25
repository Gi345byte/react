// src/App.js

import { CartProvider } from "./cartcontext";
import {ProductList} from "./productlist";
import {Cart} from "./cart";

export function App() {
  return (
    <CartProvider>
      <h1>🛒 Shopping Cart App</h1>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}


