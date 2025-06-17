import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCartShopping,
  faSearch,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menus = {
    Categories: [
      "Shoes",
      "Clothing",
      "Electronics",
      "Home & Kitchen",
      "Beauty & Personal Care",
      "Books",
      "Mobile Phones",
      "Laptops & Computers",
      "Watches",
      "Jewellery",
      "Toys & Games",
      "Sports & Fitness",
      "Automotive",
      "Health & Wellness",
      "Grocery & Essentials",
      "Baby Products",
      "Furniture",
      "Stationery & Office Supplies",
      "Cameras & Accessories",
      "Musical Instruments",
    ],
    Shop: ["Men", "Women", "Kids"],
    Pages: ["FAQ", "404", "Terms"],
  };

  const handleMenuToggle = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-[var(--primary-bg)] text-[var(--primary-color)] px-4 py-4 shadow-md">
      <div className="mx-auto flex items-center justify-between w-full max-w-screen-xl">
        <Link to="/" className="text-2xl font-bold text-[var(--primary-color)]">
          ECommerce
        </Link>

        <div className="md:hidden">
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faXmark : faBars}
            className="text-2xl text-[var(--primary-color)] cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        <div className="hidden md:flex items-center gap-10 text-[1.1rem]">
          <Link
            to="/"
            className="font-medium hover:text-[var(--link-hover)] transition-all duration-300"
          >
            Home
          </Link>

          {Object.keys(menus).map((menu) => (
            <div
              key={menu}
              className="relative group"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-[var(--link-hover)] transition-all duration-300"
                onClick={() => handleMenuToggle(menu)}
              >
                {menu} <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {openMenu === menu && (
                <div
                  className={`absolute top-5 left-0 mt-2 bg-[var(--input-bg)] text-sm text-white rounded-lg shadow-lg z-50 p-4 ${
                    menu === "Categories"
                      ? "min-w-[90vw] sm:min-w-[600px]"
                      : "min-w-[200px]"
                  }`}
                >
                  <div
                    className={`grid gap-3 ${
                      menu === "Categories"
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        : "grid-cols-1"
                    }`}
                  >
                    {menus[menu].map((item, index) => (
                      <Link
                        key={index}
                        to={`/${item
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/ /g, "-")}`}
                        className="hover:bg-[var(--border-color)] px-3 py-2 rounded-md whitespace-nowrap"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center border border-[var(--primary-color)] rounded-full px-4 py-1">
            <input
              type="text"
              placeholder="Search items"
              className="bg-transparent text-[var(--text-light)] placeholder:text-[var(--text-dark-light)] focus:outline-none w-full"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="ml-2 text-[var(--primary-color)] hover:text-[var(--highlight-color)] cursor-pointer"
            />
          </div>

          <Link to="/user-cart" className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-xl text-[var(--primary-color)] hover:text-[var(--link-hover)] transition"
            />
            <span className="absolute -top-2 -right-2 bg-[var(--highlight-color)] text-[var(--button-text-color)] text-xs px-1.5 rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[var(--input-bg)] p-4 rounded-lg space-y-2">
          <Link to="/" className="block hover:text-[var(--link-hover)]">
            Home
          </Link>
          {Object.keys(menus).map((menu, idx) => (
            <div key={idx}>
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => handleMenuToggle(menu)}
              >
                {menu}
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {openMenu === menu && (
                <div className="pl-4 space-y-1">
                  {menus[menu].map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-")}`}
                      className="block text-sm hover:text-[var(--highlight-color)]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <Link to="/user-profile">
              <FontAwesomeIcon icon={faUser} className="text-xl text-[var(--primary-color)]" />
            </Link>
            <Link to="/user-cart">
              <FontAwesomeIcon icon={faCartShopping} className="text-xl text-[var(--primary-color)]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;