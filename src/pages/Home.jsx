import React from "react";
import CategoryBar from "../components/Home/CategoryBar";
import FeaturedCategories from "../components/Home/FeaturedCategories";
import ProductSlider from "../components/Home/ProductSlider";
import OffersBanner from "../components/Home/OffersBanner";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Newsletter from "../components/Home/Newsletter";
import HeroBanner from "../components/Home/HeroBanner";

const Home = () => {
  return (
    <main className="bg-[var(--primary-bg)] text-[var(--text-light)]">
      <CategoryBar />
      <HeroBanner />
      <FeaturedCategories />
      <ProductSlider title="Best of Electronics" />
      <ProductSlider title="Beauty, Toys & More" />
      <OffersBanner />
      <WhyChooseUs />
      <Newsletter />
    </main>
  );
};

export default Home;
