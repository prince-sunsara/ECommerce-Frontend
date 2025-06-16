import HorizontalProductSlider from "../../components/products/HorizontalProductSlider";
import HeroCarousel from "./HeroCarousel ";

import {
  electronicsProducts,
  beautyFoodToysProducts,
  sportsHealthProducts,
  seasonsTopPicks,
  hotDealsOnFashion,
} from "../../utils/constants";
import ProductCategorySection from "../../components/products/ProductCategorySection";

function Home() {
  return (
    <div className="bg-[#2B2A40]">
      {/* Hero Carousel  */}
      <HeroCarousel />

      {/* Product slidebar  */}
      <HorizontalProductSlider
        title="Best of Electronics"
        products={electronicsProducts}
      />
      <HorizontalProductSlider
        title="Beauty, Food, Toys and More"
        products={beautyFoodToysProducts}
      />
      <HorizontalProductSlider
        title="Sports, Healthcare and More"
        products={sportsHealthProducts}
      />

      {/* offer product caragory secion  */}
      <div className="md:flex gap-2">
        <ProductCategorySection
          title="Season's Top Picks"
          products={seasonsTopPicks}
          categoryLink="/category/seasons-top-picks"
        />

        <ProductCategorySection
          title="Hot Deals on Fashion"
          products={hotDealsOnFashion}
          categoryLink="/category/hot-deals-fashion"
        />
      </div>
    </div>
  );
}

export default Home;
