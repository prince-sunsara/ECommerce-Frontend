import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCartShopping,
  faSearch,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-[#2B2A40] text-white py-4 px-6 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-3xl md:text-4xl font-bold">ECommerce</h1>
      </Link>

      {/* Hamburger for Mobile */}
      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } absolute md:static top-full left-0 w-full md:w-auto bg-[#2B2A40] md:bg-transparent flex-col md:flex-row md:flex items-center md:gap-8 gap-4 px-4 py-4 md:py-0 z-50`}
      >
        <Link to="/" className="hover:text-[#7d5fff]">
          Home
        </Link>

        {Object.keys(menus).map((menu) => (
          <div
            key={menu}
            className="relative group"
            onClick={() => toggleMenu(menu)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="hover:text-[#7d5fff] flex items-center">
                {menu}
                <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </span>
            </div>

            {openMenu === menu && (
              <div
                className={`absolute md:absolute md:top-full left-0 md:mt-2 mt-1 bg-[#3D3C50] text-sm text-white rounded-lg shadow-lg z-50 p-4 ${
                  menu === "Categories" ? "min-w-[600px]" : "min-w-[200px]"
                }`}
              >
                <div
                  className={`grid ${
                    menu === "Categories"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-1"
                  } gap-2`}
                >
                  {menus[menu].map((item, index) => (
                    <Link
                      to={item === "Contact" ? "/contact-us" : `/${item}`}
                      key={index}
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

        <Link to="/about-us" className="hover:text-[#7d5fff]">
          About
        </Link>
      </div>

      {/* Search + Icons */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center bg-[#3D3C50] rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search item here"
            className="bg-transparent text-white placeholder:text-gray-300 focus:outline-none w-40"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="ml-2 text-gray-300 hover:text-white cursor-pointer"
          />
        </div>
        <Link to="/user-profile">
          <FontAwesomeIcon
            icon={faUser}
            className="text-xl hover:text-[#7D5FFF]"
          />
        </Link>
        <Link to="/user-cart">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl hover:text-[#7D5FFF]"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
