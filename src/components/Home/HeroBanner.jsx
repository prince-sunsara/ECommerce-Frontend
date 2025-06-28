import React from "react";
import Slider from "../Slider";
// ✅ Hero Banner Slider Data
const heroSlides = [
  {
    title: "Grab the Best Smartphones Under ₹6499",
    buttonText: "Shop Now",
    image: "src/assets/images/HeroBanner/hero_banner1.jpg",
    link: "/category/smartphones",
  },
  {
    title: "Mega Fashion Sale – Up to 70% Off!",
    buttonText: "Shop Now",

    image: "src/assets/images/HeroBanner/hero_banner2.jpg",
    link: "/category/fashion",
  },
  {
    title: "Unmissable Deals on Electronics",
    buttonText: "Shop Now",

    image: "src/assets/images/HeroBanner/hero_banner3.jpg",
    link: "/category/electronics",
  },
  {
    title: "New Launches – Mobile Devices You’ll Love",
    buttonText: "Shop Now",

    image: "src/assets/images/HeroBanner/hero_banner4.jpg",
    link: "/category/mobiles",
  },
  {
    title: "Explore Trending Styles & Fashion Picks",
    buttonText: "Shop Now",

    image: "src/assets/images/HeroBanner/hero_banner5.jpg",
    link: "/category/fashion",
  },
  {
    title: "Shop Electronics Festival – Huge Discounts!",
    buttonText: "Shop Now",

    image: "src/assets/images/HeroBanner/hero_banner6.jpg",
    link: "/category/electronics",
  },
];

const HeroBanner = () => {
  return (
    <section className="w-full">
      <Slider
        slides={heroSlides}
        autoSlide={true}
        slideInterval={2000}
        showText={true}
        showButton={true}
        hideArrows={false}
        hideDots={false}
        height="md:h-[320px]"
      />
    </section>
  );
};

export default HeroBanner;
