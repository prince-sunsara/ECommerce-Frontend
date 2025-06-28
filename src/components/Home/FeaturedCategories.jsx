import { Watch } from "lucide-react";
import React from "react";

const categories = [
  { name: "Electronics", image: "src/assets/images/watch.png" },
  { name: "Watch", image: "src/assets/images/watch.png" },
  { name: "Fashion", image: "src/assets/images/watch.png" },
  { name: "Home", image: "src/assets/images/watch.png" },
  { name: "Beauty", image: "src/assets/images/watch.png" },
];

const FeaturedCategories = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Top Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="text-center group cursor-pointer">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover rounded-xl mb-2 group-hover:scale-105 transition-transform"
            />
            <p className="font-medium text-gray-700 group-hover:text-indigo-600">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
