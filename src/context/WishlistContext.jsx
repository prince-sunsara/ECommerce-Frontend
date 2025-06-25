import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

// ✅ Static default wishlist products
const defaultWishlistItems = [
  {
    id: 101,
    name: "Noise Smartwatch",
    brand: "Noise",
    description: "AMOLED Display | 7-day battery backup.",
    price: 2999,
    image: "./src/assets/images/smartwatch.png",
    size: "Standard",
    tag: "Best Seller",
    delivery: "3-5 days",
  },
  {
    id: 102,
    name: "Boat Wireless Earbuds",
    brand: "boAt",
    description: "Powerful bass | Water resistant.",
    price: 1599,
    image: "./src/assets/images/earbuds.png",
    size: "Standard",
    tag: "Best Seller",
    delivery: "4-5 days",
  },
  {
    id: 103,
    name: "Watch",
    brand: "boAt",
    description: "Powerful bass | Water resistant.",
    price: 1599,
    image: "./src/assets/images/watch.png",
    size: "Standard",
    tag: "Best Seller",
    delivery: "1-5 days",
  },
  {
    id: 104,
    name: "Handbag",
    brand: "boAt",
    description: "Powerful bass | Water resistant.",
    price: 1599,
    image: "./src/assets/images/handbag.png",
    size: "Standard",
    tag: "Best Seller",
    delivery: "3-6 days",
  },
];

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(defaultWishlistItems); // set static initial wishlist

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev; // avoid duplicates
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
