import React from "react";
import HeroBanner from "../../components/HeroBanner";
import CategoryBar from "../../components/CategoryBar";
import FeaturedCategories from "../../components/FeaturedCategories";
import ProductSlider from "../../components/ProductSlider";
import OffersBanner from "../../components/OffersBanner";
import WhyChooseUs from "../../components/WhyChooseUs";
import Newsletter from "../../components/Newsletter";

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
