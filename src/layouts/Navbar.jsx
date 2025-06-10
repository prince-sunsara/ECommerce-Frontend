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
    Home: ["Home-1", "Home-2", "Home-3"],
    About: ["About Us", "Team", "Contact"],
    Categories: ["Shoes", "Cloths", "Electronics"],
    Shop: ["Men", "Women", "Kids"],
    Pages: ["FAQ", "404", "Terms"],
  };

  return (
    <>
      <nav className="bg-[#2B2A40] text-white py-4 px-8 flex items-center justify-between">
        {/* Logo  */}
        <Link to="/">
          <h1 className="text-4xl font-bold">ECommerce</h1>
        </Link>

        {/* Main Links  */}
        <div className="flex gap-6 text-[1.2rem]">
          {Object.keys(menus).map((menu) => (
            <div
              to="/"
              key={menu}
              className="cursor-pointer flex items-center gap-1 relative group"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <p className="text-[1.2rem]">{menu}</p>
              <span className="text-xs">▼</span>

              {/* DropDown menu  */}
              {openMenu === menu && (
                <>
                  <ul className="absolute top-8 left-0 w-30 bg-white text-[1rem] text-black rounded-2xl shadow-lg py-4 z-50">
                    {menus[menu].map((item, index) => (
                      <Link
                        to={menu + "/" + item}
                        key={index}
                        className="cursor-pointer px-4 py-2 flex text-center justify-center"
                      >
                        {item}
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Account and search  */}
        <div className="flex items-center gap-4">
          <div className="py-1 px-4 rounded-2xl">
            <input
              type="text"
              placeholder="Search item here"
              className="border-none focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="hover:text-[#7D5FFF] cursor-pointer hover:scale-110"
            />
            <div className="h-0.5 rounded-xl mt-1 bg-white"></div>
          </div>
          <Link to="/user-profile">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </Link>
          <Link to="/user-cart">
            <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
