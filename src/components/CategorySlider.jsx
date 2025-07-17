// src/components/CategorySlider.jsx
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategorySlider = ({ items = [], renderItem }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const updateVisibleCount = () => {
    const width = window.innerWidth;

    if (width < 640) setVisibleCount(2);
    else if (width < 768) setVisibleCount(3);
    else if (width < 1024) setVisibleCount(4);
    else setVisibleCount(5);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, items.length - visibleCount)
    );
  };

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="flex items-center gap-2">
      {/* Prev Arrow */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm shadow"
      >
        <FaChevronLeft />
      </button>

      {/* CategorySlider Grid */}
      <div
        className="grid gap-4 flex-1"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${visibleItems.length}, minmax(0, 1fr))`,
        }}
      >
        {visibleItems.map((item, index) => (
          <div key={index}>{renderItem(item)}</div>
        ))}
      </div>

      {/* Next Arrow */}
      <button
        onClick={handleNext}
        disabled={startIndex + visibleCount >= items.length}
        className="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm shadow"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CategorySlider;
