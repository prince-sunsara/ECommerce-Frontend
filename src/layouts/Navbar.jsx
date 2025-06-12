import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menus = {
    About: ["About-Us", "Team", "Contact"],
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

  return (
    <>
      <nav className="bg-[#2B2A40] text-white py-4 px-8 flex items-center justify-between shadow-md">
        {/* Logo  */}
        <Link to="/">
          <h1 className="text-4xl font-bold">ECommerce</h1>
        </Link>

        {/* Navigation Links  */}
        <div className="flex gap-8 text-[1.1rem] text-center">
          <Link to="/" className="hover:text-[#7d5fff]">
            Home
          </Link>
          {Object.keys(menus).map((menu) => (
            <div
              key={menu}
              className="relative group"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="hover:text-[#7d5fff]">{menu} ▼ </span>
              </div>

              {/* DropDown  */}
              {openMenu === menu && (
                <>
                  <div
                    className={`absolute top-full -left-0 mt-2 bg-[#3D3C50] text-sm text-white rounded-lg shadow-lg z-50 p-4 ${
                      menu === "Categories" ? "min-w-[600px]" : "min-w-[200px]"
                    }`}
                  >
                    <div
                      className={`grid ${
                        menu === "Categories" ? "grid-cols-3" : "grid-cols-1"
                      } gap-3`}
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
                </>
              )}
            </div>
          ))}
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-4">
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
    </>
  );
};

export default Navbar;
