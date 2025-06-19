// src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

const defaultCartItems = [
  {
    id: 1,
    name: "Leather Handbag",
    brand: "Fossil",
    description: "Premium leather handbag with modern design.",
    size: "Medium",
    tag: "New Arrival",
    delivery: "2-4 days",
    price: 129,
    quantity: 1,
    image: "./src/assets/images/handbag.png",
  },
  {
    id: 2,
    name: "Classic Watch",
    brand: "Titan",
    description: "Water resistant analog watch with metal strap.",
    size: "Standard",
    tag: "Best Seller",
    delivery: "3-5 days",
    price: 120,
    quantity: 1,
    image: "./src/assets/images/watch.png",
  },
];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCartItems);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
