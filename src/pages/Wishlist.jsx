import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, isInWishlist, addToWishlist } =
    useWishlist();
  const { addToCart } = useCart();
  // hook for navigation
  const navigate = useNavigate();
  // Handle Add to Cart and redirect
  const handleAddToCart = (item) => {
    addToCart(item);
    navigate("/user-cart"); // redirect to cart page
  };
  return (
    <div className="min-h-screen bg-[var(--primary-bg)] text-[var(--text-light)] px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center font-serif text-[var(--highlight-color)] mb-10">
          ❤️ My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-10 text-[var(--text-dark-light)]">
            <p className="text-lg">Your wishlist is currently empty.</p>
            <Link
              to="/products"
              className="inline-block mt-4 px-6 py-2 rounded-full bg-[var(--highlight-color)] text-[var(--button-text-color)] hover:bg-[var(--link-hover)] transition"
            >
              Start Browsing
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="relative bg-[var(--input-bg)] border border-[var(--border-color)] rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 group"
              >
                {/* Toggle Wishlist Heart */}
                <button
                  onClick={() =>
                    isInWishlist(item.id)
                      ? removeFromWishlist(item.id)
                      : addToWishlist(item)
                  }
                  className="absolute top-4 right-4 text-xl z-10"
                  title={
                    isInWishlist(item.id)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"
                  }
                >
                  {isInWishlist(item.id) ? (
                    <FaHeart className="text-[var(--highlight-color)] hover:scale-110 transition" />
                  ) : (
                    <FaRegHeart className="text-gray-400 hover:text-[var(--highlight-color)] hover:scale-110 transition" />
                  )}
                </button>

                {/* Product Image */}
                <div className="overflow-hidden rounded-t-2xl bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--highlight-color)] truncate">
                      {item.name}
                    </h2>

                    <p className="text-sm text-[var(--text-dark-light)] mt-1 line-clamp-2">
                      {item.description}
                    </p>

                    <p className="text-sm mt-1">
                      <strong>Brand:</strong> {item.brand}
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Size:</strong> {item.size || "Standard"}
                    </p>

                    {/* Tag & Delivery */}
                    <div className="mt-2 text-sm text-[var(--text-dark-light)] space-y-1">
                      {item.tag && (
                        <p>
                          <strong>Tag:</strong> {item.tag}
                        </p>
                      )}
                      {item.delivery && (
                        <p>
                          <strong>Delivery:</strong> {item.delivery}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold text-[var(--highlight-color)] mt-4">
                      ₹{item.price}
                    </p>

                    {/* Static Ratings (optional) */}
                    <div className="text-xs mt-1 text-yellow-400">
                      ⭐⭐⭐⭐☆ (4.0)
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex justify-between gap-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-sm px-4 py-2 rounded-full bg-[var(--highlight-color)] text-[var(--button-text-color)] hover:bg-[var(--link-hover)] transition"
                    >
                      View Product
                    </Link>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="text-sm px-4 py-2 rounded-full border border-[var(--highlight-color)] text-[var(--highlight-color)] hover:bg-[var(--highlight-color)] hover:text-[var(--button-text-color)] transition"
                    >
                      <FaShoppingCart className="inline-block mr-1" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
