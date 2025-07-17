import React from "react";
import CategoryBar from "../components/Home/CategoryBar";
import HeroBanner from "../components/Home/HeroBanner";
import ProductSlidersGroup from "../components/Home/ProductSlidersGroup";
import GoldSection from "../components/Home/GoldSection";
import LogoBrandSlider from "../components/Home/LogoBrandSlider";
import OffersBanner from "../components/Home/OffersBanner";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Newsletter from "../components/Home/Newsletter";

// Mock Data
import {
  primeDayProducts,
  fashionSaleProducts,
} from "../data/categoryProducts";

const Home = () => {
  return (
    <main className="bg-[var(--primary-bg)] text-[var(--text-light)]">
      {/* Top Categories Navigation */}
      <CategoryBar />
      <HeroBanner />
      <ProductSlidersGroup />
      <GoldSection />
      <LogoBrandSlider />

      {/* Timed Offers Banners (e.g., Prime Day, Fashion Sale) */}
      <OffersBanner
        title="Prime Day Deals | Up to 60% Off"
        products={primeDayProducts}
        countdownInSeconds={7200} // 2 hours
        navigateTo="/offers/prime"
      />
      <OffersBanner
        title="Fashion Sale | Up to 70% Off"
        products={fashionSaleProducts}
        countdownInSeconds={10800} // 3 hours
        navigateTo="/offers/fashion"
      />
      <WhyChooseUs />
      <Newsletter />
    </main>
  );
};

export default Home;
