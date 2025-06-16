import { Link } from "react-router";
import ProductCard from "./ProductCard";

const ProductCategorySection = ({ title, products, categoryLink }) => {
  return (
    <div className="bg-[#1b1a29] p-6 shadow-sm mt-2 md:mt-10">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        {categoryLink && (
          <Link
            to={categoryLink}
            className="flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium"
            rel="noopener noreferrer"
          >
            <span className="hidden sm:inline">View All</span>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap -m-2 justify-center sm:justify-start gap-2">
        {products.map((product, index) => (
          <ProductCard
            key={product.id || index}
            image={product.image}
            name={product.name}
            discount={product.discount}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategorySection;
