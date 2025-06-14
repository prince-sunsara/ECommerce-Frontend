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
    <>
      <nav className="bg-[#2B2A40] text-white px-4 py-4 shadow-md">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            ECommerce
          </Link>

          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faXmark : faBars}
              className="text-2xl cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-[1.1rem]">
            <Link
              to="/"
              className="hover:text-[#7d5fff] transition-all duration-300"
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
                  className="flex items-center gap-1 cursor-pointer hover:text-[#7d5fff] transition-all duration-300"
                  onClick={() => handleMenuToggle(menu)}
                >
                  {menu} <FontAwesomeIcon icon={faCaretDown} />
                </div>

                {/* Dropdown */}
                {openMenu === menu && (
                  <div
                    className={`absolute top-5 left-0 mt-2 bg-[#3D3C50] text-sm text-white rounded-lg shadow-lg z-50 p-4 ${
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
                          className="hover:bg-[#4e4c66] px-3 py-2 rounded-md whitespace-nowrap"
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

          {/* Search + Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-[#3D3C50] rounded-full px-3 py-1 max-w-[160px]">
              <input
                type="text"
                placeholder="Search item here"
                className="bg-transparent text-white placeholder:text-gray-300 focus:outline-none w-full"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="ml-2 text-gray-300 hover:text-white cursor-pointer"
              />
            </div>
            <Link to="/user-profile">
              <FontAwesomeIcon
                icon={faUser}
                className="text-xl hover:text-[#7D5FFF] transition-all duration-300"
              />
            </Link>
            <Link to="/user-cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-xl hover:text-[#7D5FFF] transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#3D3C50] p-4 rounded-lg space-y-2">
            <Link to="/" className="block hover:text-[#7d5fff]">
              Home
            </Link>
            {Object.keys(menus).map((menu, idx) => (
              <div key={idx}>
                <div
                  className="flex justify-between items-center cursor-pointer text-white py-2"
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
                        className="block text-sm hover:text-[#7D5FFF]"
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
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </Link>
              <Link to="/user-cart">
                <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
