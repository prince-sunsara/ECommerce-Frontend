import React from "react";
import ProductSliderSection from "../ProductSliderSection";
import {
  categoryProducts,
  featuredCategories,
} from "../../data/categoryProducts";

const ProductSlidersGroup = () => {
  const sliderTitles = {
    electronics: "Best of Electronics",
    beauty: "cosmetics and personal care",
    food: "Food , Snacks and Toys",
    sports_healthcare: "Sports, Healthcare & more",
  };

  return (
    <>
      {/* Use ProductSliderSection for featured categories */}
      <ProductSliderSection
        title="Top Categories"
        products={featuredCategories}
        isCategory // pass extra prop
      />

      {Object.keys(categoryProducts).map((key) => (
        <ProductSliderSection
          key={key}
          title={sliderTitles[key] || key.toUpperCase()}
          products={categoryProducts[key]}
        />
      ))}
    </>
  );
};

export default ProductSlidersGroup;
