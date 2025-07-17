import React from "react";

const brands = [
  { id: 1, src: "/src/assets/images/Product_img/brands1.png" },
  { id: 2, src: "/src/assets/images/Product_img/brands2.png" },
  { id: 3, src: "/src/assets/images/Product_img/brands1.png" },
  { id: 4, src: "/src/assets/images/Product_img/brands2.png" },
  { id: 5, src: "/src/assets/images/Product_img/brands1.png" },
  { id: 6, src: "/src/assets/images/Product_img/brands2.png" },
  { id: 7, src: "/src/assets/images/Product_img/brands1.png" },
  { id: 8, src: "/src/assets/images/Product_img/brands2.png" },
  { id: 9, src: "/src/assets/images/Product_img/brands1.png" },
];

const LogoBrandSlider = () => {
  return (
    <>
      <div className="overflow-hidden bg-[var(--bg-color)] py-6">
        <div className="flex w-max gap-8 animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="min-w-[150px] h-[100px] flex items-center justify-center
                      bg-[var(--bg-color)] rounded-lg shadow-md p-6"
            >
              <img
                src={brand.src}
                alt={`Brand ${index + 1}`}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Marquee keyframes for infinite scroll (custom) */}
        <style>
          {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
        </style>
      </div>
    </>
  );
};

export default LogoBrandSlider;
