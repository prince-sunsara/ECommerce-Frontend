import { FaPlus, FaMinus, FaTrash, FaTags } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faRotateLeft,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <div className="min-h-screen bg-[var(--primary-bg)] text-[var(--text-light)] px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center font-serif text-[var(--highlight-color)] drop-shadow-sm tracking-wide">
          Shopping Cart
        </h1>

        {/* Cart Section */}
        <div className="bg-[var(--input-bg)] rounded-xl p-4 sm:p-6 shadow-md border border-[var(--border-color)]">
          {/* Header Row for Desktop */}
          <div className="hidden sm:grid grid-cols-6 font-semibold border-b pb-3 text-[var(--text-dark-light)] uppercase text-xs">
            <span className="col-span-2">Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Delivery</span>
            <span className="text-right">Subtotal</span>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-center py-10 text-[var(--text-dark-light)]">
              🛒 Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-center py-6 border-b border-[var(--border-color)]"
              >
                {/* Product Details */}
                <div className="flex gap-4 sm:col-span-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-md shadow"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--highlight-color)]">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-dark-light)]">
                      {item.description}
                    </p>
                    <p className="text-xs sm:text-sm">
                      <strong>Brand:</strong> {item.brand}
                    </p>
                    <p className="text-xs sm:text-sm">
                      <strong>Size:</strong> {item.size}
                    </p>
                    <p className="flex items-center gap-1 text-xs sm:text-sm text-[var(--highlight-color)] mt-1">
                      <FaTags className="text-xs" /> {item.tag}
                    </p>
                  </div>
                </div>

                {/* Price (Desktop only) */}
                <div className="hidden sm:flex justify-center font-medium text-base sm:text-lg">
                  ${item.price}
                </div>

                {/* Quantity Controls */}
                <div className="flex justify-center items-center gap-2 text-sm">
                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="p-1 sm:p-2 bg-[var(--primary-hover)] hover:bg-[var(--highlight-color)] text-[var(--button-text-color)] rounded-full"
                    title="Decrease"
                  >
                    <FaMinus />
                  </button>
                  <span className="font-semibold text-sm sm:text-base">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="p-1 sm:p-2 bg-[var(--primary-hover)] hover:bg-[var(--highlight-color)] text-[var(--button-text-color)] rounded-full"
                    title="Increase"
                  >
                    <FaPlus />
                  </button>

                  {/* Show delete only when quantity === 1 */}
                  {item.quantity === 1 && (
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-1 sm:ml-2 text-red-500 hover:text-red-700"
                      title="Remove Item"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>

                {/* Delivery Info (Desktop only) */}
                <div className="hidden sm:flex justify-center text-sm text-[var(--text-dark-light)]">
                  {item.delivery}
                </div>

                {/* Subtotal */}
                <div className="text-right font-semibold text-[var(--highlight-color)] text-base sm:text-lg">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))
          )}

          {/* Total Summary */}
          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-6 text-lg sm:text-xl font-bold text-[var(--highlight-color)]">
                <span>Total Amount</span>
                <span>${getTotal()}</span>
              </div>

              {/* Checkout Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleCheckout}
                  className="bg-[var(--highlight-color)] hover:bg-[var(--link-hover)] text-[var(--button-text-color)] px-8 py-3 rounded-full shadow-md hover:shadow-[0_0_20px_var(--highlight-color)] transition-all duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>

        {/* Promo Banner */}
        <div className="bg-[var(--input-bg)] border border-[var(--highlight-color)] rounded-xl p-5 sm:p-6 text-center shadow-md hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--highlight-color)]">
            🎉 Limited Time Deal!
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-[var(--link-hover)] my-1 sm:my-2">
            10% OFF
          </p>
          <p className="text-sm text-[var(--text-dark-light)]">
            Sign up to unlock member-only discounts and early access to new
            arrivals.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-around gap-6 sm:gap-10 pt-6 border-t border-[var(--border-color)]">
          {[
            { icon: faTruck, label: "Free Shipping" },
            { icon: faRotateLeft, label: "Hassle-Free Returns" },
            { icon: faShield, label: "100% Secure Checkout" },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-2xl sm:text-3xl mb-2 text-[var(--highlight-color)]"
              />
              <p className="text-sm text-[var(--text-dark-light)]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
