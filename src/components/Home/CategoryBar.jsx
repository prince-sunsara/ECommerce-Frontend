import React, { useState, useEffect, useRef } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

// Sample Category Menu Items
const menuItems = [
  {
    name: "Kilos",
    image: "src/assets/images/fashion.png",
  },
  {
    name: "Mobiles",
    image: "src/assets/images/fashion.png",
  },
  {
    name: "Fashion",
    image: "src/assets/images/fashion.png",
    subMenu: [
      {
        title: "Men's Top Wear",
        items: ["All", "T-Shirts", "Shirts", "Kurtas", "Blazers"],
      },
      {
        title: "Women's Ethnic",
        items: ["Sarees", "Kurtis", "Gowns", "Lehenga"],
      },
    ],
  },
  {
    name: "Electronics",
    image: "src/assets/images/fashion.png",
    subMenu: [
      {
        title: "Mobiles",
        items: ["Smartphones", "Feature Phones", "Accessories"],
      },
      {
        title: "Laptops",
        items: ["Gaming", "Business", "Student"],
      },
    ],
  },
  {
    name: "Home & Furniture",
    image: "src/assets/images/fashion.png",
    subMenu: [
      {
        title: "Furniture",
        items: ["Beds", "Sofas", "Tables", "Chairs"],
      },
    ],
  },
  {
    name: "Beauty & More",
    image: "src/assets/images/fashion.png",
    subMenu: [
      {
        title: "Beauty",
        items: ["Skincare", "Haircare", "Makeup"],
      },
    ],
  },
  {
    name: "Flight Bookings",
    image: "src/assets/images/fashion.png",
  },
  {
    name: "Two Wheelers",
    image: "src/assets/images/fashion.png",
    subMenu: [
      {
        title: "Vehicles",
        items: ["Scooters", "Bikes", "EV Bikes"],
      },
    ],
  },
];

const CategoryBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Index of hovered menu item
  const wrapperRef = useRef(null); // Ref for outside click detection

  const hoveredItem = hoveredIndex !== null ? menuItems[hoveredIndex] : null;

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setHoveredIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full bg-white shadow z-50" ref={wrapperRef}>
      {/* Scrollable Horizontal Category Bar */}
      <div className="w-full flex justify-center">
        <div className="flex overflow-x-auto gap-4 sm:gap-6 px-2 sm:px-4 py-3 sm:py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-w-screen-xl">
          {menuItems.map((cat, index) => {
            const isHovered = hoveredIndex === index;
            const hasSub = cat.subMenu && cat.subMenu.length > 0;

            return (
              <div
                key={index}
                className="flex-shrink-0 group text-center cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div className="w-20 sm:w-24 md:w-28 relative transition-transform duration-300 hover:scale-105">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-12 h-12 mx-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs sm:text-sm mt-2 font-bold text-[var(--button-text-color)] whitespace-nowrap flex items-center justify-center gap-1">
                    {cat.name}
                    {hasSub && (
                      <span className="text-[10px] sm:text-[12px] font-bold text-[var(--button-text-color)]">
                        {isHovered ? <FaAngleDown /> : <FaAngleUp />}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mega Menu Dropdown (on hover) */}
      {hoveredItem && hoveredItem.subMenu && (
        <div
          className="absolute top-full mt-2 sm:mt-4 bg-[var(--primary-bg)] border border-[var(--border-color)] shadow-2xl py-4 sm:py-6 px-4 sm:px-8 rounded-xl z-50 max-w-[95vw] sm:max-w-fit overflow-x-auto animate-fadeIn"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onMouseEnter={() => setHoveredIndex(hoveredIndex)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-10">
            {hoveredItem.subMenu.map((section, idx) => (
              <div
                key={idx}
                className="min-w-[150px] sm:min-w-[180px] max-w-[220px] flex flex-col"
              >
                <h4 className="text-sm font-semibold text-[var(--highlight-color)] mb-2 sm:mb-3 uppercase tracking-wide border-b border-[var(--border-color)] pb-1">
                  {section.title}
                </h4>
                <ul className="space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--text-light)] px-3 py-1 rounded-md hover:bg-[var(--highlight-color)] hover:text-[var(--button-text-color)] transition duration-200 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
