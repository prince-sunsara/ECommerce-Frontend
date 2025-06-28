import React from "react";

const products = [
  { name: "Headphones", price: 2999, image: "/images/headphone.jpg" },
  { name: "Shoes", price: 1899, image: "/images/shoes.jpg" },
  { name: "Smart Watch", price: 4499, image: "/images/watch.jpg" },
  { name: "Laptop", price: 54999, image: "/images/laptop.jpg" },
];

const ProductSlider = ({ title }) => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain p-4"
            />
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-700 truncate">
                {product.name}
              </h3>
              <p className="text-indigo-600 font-semibold mt-1">
                ₹{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
