import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
  faXmark,
  faStore,
  faHeart,
  faThLarge,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Logout } from "../components";
import { useAuth } from "../context/AuthContext";
// 👈 Import context
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);
  const { isLoggedIn } = useAuth();

  // Animate drawer
  useEffect(() => {
    if (userDrawerOpen) {
      setTimeout(() => setAnimateDrawer(true), 10);
    } else {
      setAnimateDrawer(false);
    }
  }, [userDrawerOpen]);

  // Close drawer on outside click
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
        handleDrawerClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userDrawerOpen]);

  const handleDrawerClose = () => {
    setAnimateDrawer(false);
    setTimeout(() => setUserDrawerOpen(false), 300); // shorter animation delay
  };

  return (
    <nav className="bg-[var(--primary-bg)] text-[var(--primary-color)] px-4 py-4 shadow-md">
      <div className="mx-auto w-full max-w-screen-xl flex items-center justify-between gap-4">
        <Link
          to="/"
          className="text-2xl font-bold text-[var(--primary-color)] whitespace-nowrap"
        >
          ECommerce
        </Link>

        {/* Search Bar (Desktop) */}
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

        {/* Icons Section */}
        <div className="flex items-center gap-5">
          {/*<Link to="/user-cart" className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-xl hover:text-[var(--link-ho)]"
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
            className="text-sm md:text-base font-medium hover:text-[var(--link-ho)]"
          >
            <FontAwesomeIcon
              icon={faStore}
              className="text-xl transition mr-2"
            />
            Become a Seller
          </Link>

          <FontAwesomeIcon
            icon={faUser}
            className="text-xl cursor-pointer hover:text-[var(--link-ho)] fa-user"
            onClick={() => setUserDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mt-4 px-2">
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

      {/* Side Drawer */}
      {userDrawerOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-[var(--input-bg)] text-[var(--primary-color)] z-50 p-6 user-drawer border-l border-[var(--highlight-color)] shadow-xl transition-transform duration-300 ${
            animateDrawer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="relative mb-6">
            <h3 className="text-3xl font-semibold border border-[var(--highlight-color)] rounded-md py-3 text-center">
              User Panel
            </h3>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-3 text-[var(--highlight-color)] text-xl"
              onClick={handleDrawerClose}
              aria-label="Close Menu"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Drawer Content */}
          {isLoggedIn ? (
            <>
              <div className="flex flex-col gap-4 border border-[var(--highlight-color)] rounded-lg p-4">
                <Link
                  to="/settings"
                  className="flex items-center gap-3 hover:text-[var(--highlight-color)]"
                  onClick={() => setUserDrawerOpen(!userDrawerOpen)}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span>Account</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 hover:text-[var(--highlight-color)]"
                  onClick={() => setUserDrawerOpen(!userDrawerOpen)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  <span>Wishlist</span>
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center gap-3 hover:text-[var(--highlight-color)]"
                  onClick={() => setUserDrawerOpen(!userDrawerOpen)}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                  <span>Orders</span>
                </Link>
                <Link
                  to="/categories"
                  className="flex items-center gap-3 hover:text-[var(--highlight-color)]"
                  onClick={() => setUserDrawerOpen(!userDrawerOpen)}
                >
                  <FontAwesomeIcon icon={faCog} />
                  <span>Categories</span>
                </Link>
              </div>

              {/* Reusable Logout */}
              <div
                className="mt-6"
                onClick={() => setUserDrawerOpen(!userDrawerOpen)}
              >
                <Logout />
              </div>
            </>
          ) : (
            <div className="border border-[var(--highlight-color)] rounded-lg p-4 flex flex-col gap-4">
              <Link
                to="/user-login"
                className="text-center border border-[var(--highlight-color)] text-[var(--highlight-color)] rounded-md px-4 py-2 transition-all duration-300 hover:bg-[var(--highlight-color)] hover:text-black"
                onClick={() => setUserDrawerOpen(!userDrawerOpen)}
              >
                Sign Up
              </Link>
              <Link
                to="/user-sign-up"
                className="text-center border border-[var(--highlight-color)] text-[var(--highlight-color)] rounded-md px-4 py-2 transition-all duration-300 hover:bg-[var(--highlight-color)] hover:text-black"
                onClick={() => setUserDrawerOpen(!userDrawerOpen)}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
