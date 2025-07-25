// src/context/CartContext.js
import { createContext, useReducer, useContext } from "react";

// Initial cart state
const initialState = {
  items: [],
};

// Reducer function
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
}

// Create Context
const CartContext = createContext();

// Custom hook
export function useCart() {
  return useContext(CartContext);
}

// Provider Component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });

  return (
    <CartContext.Provider value={{ cart: state.items, addItem, removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
