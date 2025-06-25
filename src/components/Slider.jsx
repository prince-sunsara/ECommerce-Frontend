import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Slider = ({
  slides = [],
  autoSlide = true,
  slideInterval = 3000,
  showText = true,
  buttonText = " ",
  showButton = true,
  hideArrows = false,
  hideDots = false,
  height = "md:h-[320px]",
}) => {
  const [current, setCurrent] = useState(0); // current slide index
  const [isHovered, setIsHovered] = useState(false); // hover state to pause auto-slide
  const intervalRef = useRef(null); // to store interval ID
  const length = slides.length;

  // Auto Slide Handler
  useEffect(() => {
    if (autoSlide && !isHovered && length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % length);
      }, slideInterval);
    }
    return () => clearInterval(intervalRef.current);
  }, [current, isHovered, autoSlide, slideInterval, length]);

  // Navigation handlers
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <div
      className={`relative overflow-hidden bg-[var(--hero-bg)] w-full h-[200px] sm:h-[250px] ${height}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Render Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 absolute"
          }`}
        >
          {/*  Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Slide Title & Button  */}
          {showText && (
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-black/60 px-3 sm:px-5 py-2 sm:py-3 rounded-md text-[var(--highlight-color)] font-semibold shadow-md max-w-[85%] sm:max-w-[75%] md:max-w-[60%] break-words">
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-tight">
                {slide.title}
              </div>
              {showButton && slide.link && (
                <Link
                  to={slide.link}
                  className="inline-block mt-2 px-3 py-1 bg-[var(--highlight-color)] text-[var(--button-text-color)] text-[10px] sm:text-xs md:text-sm rounded shadow hover:scale-105 transition"
                >
                  {slide.buttonText || buttonText}{" "}
                </Link>
              )}
            </div>
          )}
        </div>
      ))}

      {/*  Navigation Arrows  */}
      {!hideArrows && length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[var(--highlight-color)] text-[var(--button-text-color)] p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition duration-300 z-20"
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[var(--highlight-color)] text-[var(--button-text-color)] p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition duration-300 z-20"
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {!hideDots && length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === current
                  ? "bg-[var(--highlight-color)] scale-125"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
