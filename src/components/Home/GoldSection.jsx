import React from "react";
import { useNavigate } from "react-router-dom";

const GoldSection = () => {
  const navigate = useNavigate();

  const overlayItems = [
    {
      id: 1,
      image: "src/assets/images/Product_img/lehengas.jpg",
      link: "/lehengas",
    },
    {
      id: 2,
      image: "src/assets/images/Product_img/menwear.jpg",
      link: "/menwear",
    },
    {
      id: 3,
      image: "src/assets/images/Product_img/sarees.jpg",
      link: "/sarees",
    },
    {
      id: 4,
      image: "src/assets/images/Product_img/jewellery.jpg",
      link: "/jewellery",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Background Banner */}
      <img
        src="src/assets/images/Product_img/GoldSectionstyled.jpg"
        alt="Gold Offer Banner"
        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
      />

      {/* Overlay 2x2 Grid */}
      <div className="absolute top-1/2 right-3 sm:right-20 transform -translate-y-1/2 grid grid-cols-2 gap-1 sm:gap-10">
        {overlayItems.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt="gold item"
            onClick={() => navigate(item.link)}
            className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[110px] h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Centered "Shop Now" Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-fit">
        <button
          onClick={() => navigate("/shop")}
          className="bg-[var(--ring-color)] text-[var(--button-text-color)] font-medium
                     text-xs sm:text-sm md:text-base lg:text-lg
                     px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3
                     rounded-md hover:bg-[var(--highlight-color)] transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default GoldSection;
