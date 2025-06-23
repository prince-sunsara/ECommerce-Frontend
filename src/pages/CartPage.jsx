import { FaPlus, FaMinus, FaTrash, FaTags } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faRotateLeft,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  // De-structre
  const { cartItems, updateQuantity, removeItem, toggleSelection } = useCart();

  const getTotal = () =>
    cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const selected = cartItems.filter((item) => item.selected);
    if (selected.length === 0) {
      alert("Please select at least one product to proceed.");
    } else {
      alert("Proceeding to checkout with selected items!");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--primary-bg)] text-[var(--text-light)] px-3 py-6 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center font-serif text-[var(--highlight-color)] drop-shadow-sm tracking-wide">
          Shopping Cart
        </h1>

        {/* CART SECTION */}
        <div className="bg-[var(--input-bg)] rounded-xl p-4 sm:p-6 shadow-md border border-[var(--border-color)]">
          {/* HEADER */}
          <div className="hidden sm:grid grid-cols-6 font-semibold border-b pb-3 text-[var(--text-dark-light)] uppercase text-xs">
            <span className="col-span-2">Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Delivery</span>
            <span className="text-right">Subtotal</span>
          </div>

          {/* CART ITEMS */}
          {cartItems.length === 0 ? (
            <p className="text-center py-10 text-[var(--text-dark-light)]">
              🛒 Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid sm:grid-cols-6 gap-y-4 gap-x-4 items-center py-6 border-b border-[var(--border-color)]"
              >
                {/* Product + Checkbox */}
                <div className="flex gap-4 sm:col-span-2 col-span-full items-start">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelection(item.id)}
                    className="mt-2 accent-[var(--highlight-color)]"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-md shadow"
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

                {/* Price */}
                <div className="sm:flex hidden justify-center font-medium text-base sm:text-lg">
                  ${item.price}
                </div>
                <div className="sm:hidden col-span-full text-sm">
                  <strong>Price:</strong> ${item.price}
                </div>

                {/* Quantity */}
                <div className="flex justify-center items-center gap-2 text-sm">
                  {/* 👇 Minus OR Delete */}
                  {item.quantity === 1 ? (
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                      title="Remove"
                    >
                      <FaTrash />
                    </button>
                  ) : (
                    <button
                      onClick={() => updateQuantity(item.id, "dec")}
                      className="p-1 sm:p-2 bg-[var(--primary-hover)] hover:bg-[var(--highlight-color)] text-[var(--button-text-color)] rounded-full"
                    >
                      <FaMinus />
                    </button>
                  )}

                  {/* Quantity */}
                  <span className="font-semibold text-sm sm:text-base">
                    {item.quantity}
                  </span>

                  {/* Always show + button */}
                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="p-1 sm:p-2 bg-[var(--primary-hover)] hover:bg-[var(--highlight-color)] text-[var(--button-text-color)] rounded-full"
                  >
                    <FaPlus />
                  </button>
                </div>

                {/* Delivery */}
                <div className="sm:flex hidden justify-center text-sm text-[var(--text-dark-light)]">
                  {item.delivery}
                </div>
                <div className="sm:hidden col-span-full text-sm">
                  <strong>Delivery:</strong> {item.delivery}
                </div>

                {/* Subtotal */}
                <div className="text-right font-semibold text-[var(--highlight-color)] text-base sm:text-lg">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))
          )}

          {/* Total & Checkout */}
          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-6 text-lg sm:text-xl font-bold text-[var(--highlight-color)]">
                <span>Total Amount</span>
                <span>${getTotal()}</span>
              </div>

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

        {/* Features */}
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
