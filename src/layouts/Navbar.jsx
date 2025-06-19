import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
  faXmark,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
// 👈 Import context
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // simulate login

  // 👈 Access cart from context
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // Close user drawer on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        userDrawerOpen &&
        !e.target.closest(".user-drawer") &&
        !e.target.closest(".fa-user")
      ) {
        setUserDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userDrawerOpen]);

  return (
    <nav className="bg-[var(--primary-bg)] text-[var(--primary-color)] px-4 py-4 shadow-md">
      <div className="mx-auto w-full max-w-screen-xl flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[var(--primary-color)] whitespace-nowrap"
        >
          ECommerce
        </Link>

        {/* Search bar (for medium and above) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center border border-[var(--primary-color)] rounded-full px-4 py-2 w-full max-w-lg">
            <input
              type="text"
              placeholder="Search items"
              className="bg-transparent w-full text-[var(--text-light)] placeholder:text-[var(--text-dark-light)] focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="ml-2 text-[var(--primary-color)] hover:text-[var(--highlight-color)] cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          {/*<Link to="/user-cart" className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-xl text-[var(--primary-color)] hover:text-[var(--link-hover)] transition"
            />
            <span className="absolute -top-2 -right-2 bg-[var(--highlight-color)] text-[var(--button-text-color)] text-xs px-1.5 rounded-full">
              0
            </span>
          </Link> */}
          <Link to="/user-cart" className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-xl text-[var(--primary-color)] hover:text-[var(--link-hover)] transition"
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--highlight-color)] text-[var(--button-text-color)] text-xs px-1.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            to="/become-seller"
            className="text-sm md:text-base font-medium hover:text-[var(--link-hover)] text-center"
          >
            <FontAwesomeIcon
              icon={faStore}
              className="text-xl text-[var(--primary-color)] hover:text-[var(--link-hover)] transition mr-2"
            />
            Become a Seller
          </Link>

          <FontAwesomeIcon
            icon={faUser}
            className="text-xl cursor-pointer hover:text-[var(--link-hover)] fa-user"
            onClick={() => setUserDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Search bar (visible only below md) */}
      <div className="md:hidden">
        <div className="flex items-center border border-[var(--primary-color)] rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search items"
            className="bg-transparent w-full text-[var(--text-light)] placeholder:text-[var(--text-dark-light)] focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="ml-2 text-[var(--primary-color)] hover:text-[var(--highlight-color)] cursor-pointer"
          />
        </div>
      </div>

      {/* Side Drawer for User Options */}
      {userDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-72 bg-[var(--input-bg)] shadow-lg z-50 p-6 transition-all duration-300 ease-in-out user-drawer">
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={() => setUserDrawerOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <h3 className="text-lg font-semibold mb-4 text-[var(--highlight-color)]">
            User Panel
          </h3>

          {!isLoggedIn ? (
            <div className="space-y-4">
              <Link
                to="/signup"
                className="block hover:text-[var(--highlight-color)]"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block hover:text-[var(--highlight-color)]"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <Link
                to="/profile"
                className="block hover:text-[var(--highlight-color)]"
              >
                My Profile
              </Link>
              <Link
                to="/wishlist"
                className="block hover:text-[var(--highlight-color)]"
              >
                Wishlist
              </Link>
              <Link
                to="/orders"
                className="block hover:text-[var(--highlight-color)]"
              >
                Orders
              </Link>
              <Link
                to="/categories"
                className="block hover:text-[var(--highlight-color)]"
              >
                Categories
              </Link>
              <Link
                to="/settings"
                className="block hover:text-[var(--highlight-color)]"
              >
                Settings
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
