import React from "react";
import { useNavigate } from "react-router-dom";
import CategorySlider from "./CategorySlider";

const ProductSliderSection = ({ title, products, isCategory = false }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (isCategory) {
      navigate(`/category/${item.name.toLowerCase()}`);
    } else {
      navigate(`/product/${item.id}`, { state: item });
    }
  };

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[var(--primary-color)]">
        {title}
      </h2>

      <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
        <CategorySlider
          items={products}
          renderItem={(item) => (
            <div
              onClick={() => handleClick(item)}
              className="bg-white rounded-xl border border-gray-200 hover:border-indigo-400 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer text-center p-3 group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {isCategory && item.tag && (
                  <span
                    className={`absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full text-white font-semibold ${
                      item.tag === "New"
                        ? "bg-green-500"
                        : item.tag === "Popular"
                        ? "bg-yellow-500"
                        : item.tag === "Hot"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600">
                {item.name}
              </h4>
              {isCategory ? (
                <p className="text-xs text-gray-500">{item.count}+ items</p>
              ) : (
                <p className="text-xs text-gray-500">₹{item.price}</p>
              )}
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default ProductSliderSection;
