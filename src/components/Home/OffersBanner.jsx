import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OffersBanner = ({
  title,
  navigateTo,
  products = [],
  countdownInSeconds = 3600,
}) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(countdownInSeconds);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format seconds to HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 bg-[var(--bg-color)]">
      {/* 🔥 Title & Countdown Timer */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--primary-color)]">
          {title}
        </h2>
        <span className="text-xs sm:text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
          Ends in: {formatTime(timeLeft)}
        </span>
      </div>

      {/* 🛍️ Horizontal Scrollable Products */}
      <div
        className="flex overflow-x-auto scroll-smooth pb-2
        gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[60px]
        [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => {
          const offerPrice = Math.round(
            product.mrp - (product.mrp * product.discount) / 100
          );

          return (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="min-w-[150px] sm:min-w-[170px] md:min-w-[200px] lg:min-w-[220px] max-w-[250px]
                rounded-xl border border-gray-200 hover:border-blue-500 shadow-sm
                hover:shadow-lg transition-all p-3 bg-[var(--bg-color)] text-center group cursor-pointer"
            >
              {/* 🖼️ Product Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* 📝 Product Name */}
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-1">
                {product.name}
              </h4>

              {/* ⭐ Ratings (Mock) */}
              {/* <div className="flex justify-center items-center gap-1 mt-1 text-yellow-500 text-xs">
                <FaStar /> <span>4.{Math.floor(Math.random() * 5)} </span>
                <span className="text-gray-500 text-[11px]">
                  ({Math.floor(Math.random() * 900 + 100)} reviews)
                </span>
              </div> */}

              {/* 💰 Pricing */}
              <p className="text-sm text-red-600 font-bold mt-1">
                ₹{offerPrice}
              </p>
              <p className="text-[11px] text-gray-500 line-through">
                ₹{product.mrp}
              </p>
              <p className="text-[11px] text-green-600 font-medium">
                {product.discount}% OFF
              </p>
            </div>
          );
        })}
      </div>

      {/* 🔗 See More Button */}
      <div className="mt-4 text-right">
        <button
          onClick={() => navigate(navigateTo)}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          See more items
        </button>
      </div>
    </section>
  );
};

export default OffersBanner;
